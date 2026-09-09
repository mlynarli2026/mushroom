/* ==========================================================
   留学选校助手 - 公共逻辑（首页 / 学校页 / 课程页共用）
   数据说明：数据全部放在 data/ 下的 .js 文件里（纯文本），
   这样用浏览器直接双击打开 index.html 也能正常运行，
   不需要启动任何服务器。
   ========================================================== */

/* ---------- 小工具 ---------- */
function qs(key) {
  try { return new URLSearchParams(location.search).get(key); }
  catch (e) { return null; }
}

function esc(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* 动态加载一个数据文件（data/courses/xxx.js），
   加载成功后会定义全局变量 SCHOOL_COURSES */
function loadJs(src) {
  return new Promise(function (resolve, reject) {
    var s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = function () { reject(new Error("加载失败: " + src)); };
    document.head.appendChild(s);
  });
}

/* 搜索匹配规则：
   1. 关键字不区分大小写；
   2. 支持"全部搜索"——例如课程名是 "Digital Humanities"，
      输入 digital 或 digital humanities 都能命中；
   3. 多个词用空格分开时，所有词都要在课程名里出现。 */
function courseMatches(course, query) {
  if (!query) return true;
  var hay = (course.title || "").toLowerCase() + " " + (course.keywords || "").toLowerCase();
  var tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return tokens.every(function (t) { return hay.indexOf(t) !== -1; });
}

function bySchool(id) {
  if (typeof SCHOOLS === "undefined") return null;
  return SCHOOLS.find(function (s) { return s.id === id; }) || null;
}

/* 课程按首字母分组（A-Z，# = 数字/其他开头） */
function groupAlpha(courses) {
  var groups = {};
  courses.forEach(function (c) {
    var ch = (c.title || "").trim().charAt(0).toUpperCase();
    var letter = /[A-Z]/.test(ch) ? ch : "#";
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(c);
  });
  var keys = Object.keys(groups).sort(function (a, b) {
    if (a === "#") return 1;
    if (b === "#") return -1;
    return a < b ? -1 : 1;
  });
  return { groups: groups, keys: keys };
}

/* ---------- 页面分发：根据 <body data-page="..."> 初始化 ---------- */
(function () {
  var page = document.body.getAttribute("data-page");
  if (page === "index") { initIndex(); initGlobalSearch(); }
  else if (page === "school") initSchool();
  else if (page === "course") initCourse();
})();

/* ==========================================================
   首页：QS 2027 前 100 名单
   ========================================================== */
function initIndex() {
  var tbody = document.getElementById("school-list");
  var input = document.getElementById("filter");
  var total = document.getElementById("total");

  function render() {
    var q = (input && input.value) || "";
    var rows = SCHOOLS.filter(function (s) {
      if (!q) return true;
      var hay = (s.nameCn + " " + s.nameEn + " " + s.country).toLowerCase();
      return hay.indexOf(q.toLowerCase()) !== -1;
    });
    if (total) total.textContent = rows.length + " 所";
    var dc = document.getElementById("data-count");
    if (dc && typeof SCHOOLS_WITH_DATA !== "undefined") {
      dc.textContent = SCHOOLS_WITH_DATA.length;
    }
    tbody.innerHTML = rows.map(function (s) {
      var hasData = (typeof SCHOOLS_WITH_DATA !== "undefined") &&
        SCHOOLS_WITH_DATA.indexOf(s.id) !== -1;
      var isTarget = (typeof TARGET_SCHOOLS !== "undefined") &&
        TARGET_SCHOOLS.indexOf(s.id) !== -1;
      var badgeText = isTarget ? (hasData ? '有课程数据' : '整理中') : '待整理';
      var badgeCls = (isTarget && hasData) ? 'ok' : 'wait';
      return '<tr class="rowlink" data-id="' + esc(s.id) + '">' +
        '<td class="rankno">' + esc(s.rank) + '</td>' +
        '<td><span class="school-cn">' + esc(s.nameCn) + '</span><br/>' +
        '<span class="school-en">' + esc(s.nameEn) + '</span></td>' +
        '<td class="country">' + esc(s.country) +
        '<br/><span class="badge badge-' + badgeCls + '">' + badgeText + '</span></td>' +
        '</tr>';
    }).join("");
    tbody.querySelectorAll("tr.rowlink").forEach(function (tr) {
      tr.addEventListener("click", function () {
        location.href = "school.html?id=" + encodeURIComponent(tr.getAttribute("data-id"));
      });
    });
  }

  if (input) input.addEventListener("input", render);
  render();
}

/* ==========================================================
   学校页：某校硕士课程 A-Z 列表 + 搜索
   ========================================================== */
function initSchool() {
  var id = qs("id");
  var school = bySchool(id);

  var head = document.getElementById("school-head");
  var listWrap = document.getElementById("course-wrap");

  if (!school) {
    head.innerHTML = '<h1>未找到该学校</h1><p class="emptytip">请返回首页重新选择学校。</p>';
    return;
  }

  head.innerHTML =
    '<h1>' + esc(school.nameCn) + '</h1>' +
    '<div class="eng">' + esc(school.nameEn) + '</div>' +
    '<div class="meta">' +
    '<span>QS 2027 排名：第 ' + esc(school.rank) + ' 名</span>' +
    '<span>国家/地区：' + esc(school.country) + '</span>' +
    '<span><a href="' + esc(school.site) + '" target="_blank" rel="noopener">学校官网 ↗</a></span>' +
    '</div>';

  var searchBox = document.getElementById("search-box");
  var input = document.getElementById("course-search");
  var count = document.getElementById("course-count");

  // 非目标学校：只显示"待整理 + 我想了解"按钮
  var isTarget = (typeof TARGET_SCHOOLS !== "undefined") && TARGET_SCHOOLS.indexOf(id) !== -1;
  if (!isTarget) {
    searchBox.style.display = "none";
    var wrap = document.getElementById("course-wrap");
    wrap.innerHTML = '<div class="interest-zone">' +
      '<p class="notice-inline">这所学校的课程数据正在整理中（当前优先整理德国 4 校、法国 4 校和圣三一）。</p>' +
      '<button id="interest-btn" class="btn">🔔 我想了解这所学校</button>' +
      '<p id="interest-msg" class="interest-msg"></p></div>';
    var mySchool = school;
    function refreshBtn() {
      var btn = document.getElementById("interest-btn");
      var on = isInterested(id);
      btn.textContent = on ? "✓ 已标记：我想了解这所学校（点一下取消）" : "🔔 我想了解这所学校";
      document.getElementById("interest-msg").textContent = on
        ? "已交给负责人记录 ✓ 会在下一批整理这所学校"
        : "点击后，我会把你这所学校标记为优先补充（先帮朋友做前面的 9 所）。";
    }
    document.getElementById("interest-btn").addEventListener("click", function () {
      toggleInterest({ id: mySchool.id, nameCn: mySchool.nameCn, country: mySchool.country });
      refreshBtn(); renderInterestBar();
    });
    refreshBtn(); renderInterestBar();
    return;
  }

  loadJs("data/courses/" + encodeURIComponent(id) + ".js").then(function () {
    var data = (typeof SCHOOL_COURSES !== "undefined") ? SCHOOL_COURSES : { courses: [] };
    var courses = (data.courses || []).slice().sort(function (a, b) {
      return (a.title || "").toLowerCase() < (b.title || "").toLowerCase() ? -1 : 1;
    });
    if (data.searchUrl) {
      var extra = document.createElement("p");
      extra.className = "meta";
      extra.innerHTML = '<span>官方课程检索：<a href="' + esc(data.searchUrl) +
        '" target="_blank" rel="noopener">点击这里 ↗</a></span>';
      head.appendChild(extra);
    }

    var alpha = groupAlpha(courses);

    function renderList(q) {
      var shown = [];
      searchBox.style.display = "block";
      alpha.keys.forEach(function (k) {
        var hit = alpha.groups[k].filter(function (c) { return courseMatches(c, q); });
        if (hit.length) shown.push({ letter: k, items: hit });
      });
      count.textContent = shown.reduce(function (n, g) { return n + g.items.length; }, 0) + " 门";
      if (!shown.length) {
        listWrap.innerHTML = '<p class="emptytip">没有匹配的课程，换个关键字试试。</p>';
        return;
      }
      listWrap.innerHTML = shown.map(function (g) {
        return '<div class="group-title">' + esc(g.letter) + '</div>' +
          '<ul class="course-list">' +
          g.items.map(function (c) {
            return '<li><a href="course.html?id=' + encodeURIComponent(id) +
              '&c=' + encodeURIComponent(c.id) + '">' + esc(c.title) +
              (c.tuition ? '<span class="tag">' + esc(String(c.tuition).split('（')[0].trim()) + '</span>' : "") +
              '</a></li>';
          }).join("") +
          '</ul>';
      }).join("");
    }

    if (input) input.addEventListener("input", function () { renderList(input.value); });
    renderList("");
  }).catch(function () {
    searchBox.style.display = "none";
    listWrap.innerHTML =
      '<div class="notice">这所学校的课程数据正在整理中（我们在一所一所地“爬”官网数据）。' +
      '你可以先点击上面【学校官网】直接浏览该校课程。</div>';
  });
}

/* ==========================================================
   课程页：官网链接 + 中文学费/语言/绩点/要求/时间
   ========================================================== */
function initCourse() {
  var id = qs("id");
  var cid = qs("c");
  var school = bySchool(id);

  var wrap = document.getElementById("course-detail");
  if (!school || !cid) {
    wrap.innerHTML = '<div class="notice">课程参数缺失，请从学校页重新点击课程。</div>';
    return;
  }

  loadJs("data/courses/" + encodeURIComponent(id) + ".js").then(function () {
    var data = (typeof SCHOOL_COURSES !== "undefined") ? SCHOOL_COURSES : { courses: [] };
    var course = (data.courses || []).find(function (c) { return c.id === cid; }) || null;

    if (!course) {
      wrap.innerHTML = '<div class="notice">未找到这门课程的数据，可能正在整理中。' +
        '<br/>你可以直接访问该校官网查找：<a href="' + esc(school.site) +
        '" target="_blank" rel="noopener">' + esc(school.nameEn) + ' 官网 ↗</a></div>';
      return;
    }

    var info = [
      { label: "⏳ 学制（读几年）", value: course.duration },
      { label: "💰 学费（国际生）", value: course.tuition },
      { label: "🌐 授课语言", value: course.teachingLanguage },
      { label: "🗣 语言成绩要求", value: course.language },
      { label: "🎓 绩点 / 成绩要求", value: course.gpa },
      { label: "📚 适合背景（能否跨专业）", value: course.background },
      { label: "📄 申请要求（材料）", value: course.requirements },
      { label: "⏰ 申请时间", value: composeApplyTime(course) }
    ].filter(function (it) { return it.value || it.label.indexOf("背景") !== -1; });

    wrap.innerHTML =
      '<p class="crumb"><a href="index.html">← 返回全部学校</a> ｜ ' +
      '<a href="school.html?id=' + encodeURIComponent(id) + '">← 返回 ' + esc(school.nameCn) + '</a></p>' +
      '<h1 class="course-title">' + esc(course.title) + '</h1>' +
      '<p class="meta" style="color:#555;font-size:14px;margin-bottom:18px;">' +
      esc(school.nameCn) + ' · ' + esc(school.nameEn) + ' · QS 2027 第 ' + esc(school.rank) + ' 名 · ' +
      (course.award ? esc(course.award) : "硕士课程") + '</p>' +
      '<a class="btn big" href="' + esc(course.url) + '" target="_blank" rel="noopener">' +
      '📖 前往官网查看课程介绍 ↗</a>' +
      (course.summary
        ? '<div class="summary-block">' +
          '<div class="summary-label">📖 课程内容简介</div>' +
          '<div class="summary-text">' + esc(course.summary) + '</div>' +
          '</div>'
        : '<div class="summary-block summary-pending"><div class="summary-label">📖 课程内容简介</div>' +
          '<div class="summary-text">内容简介整理中（可以先点上面官网链接阅读官方介绍）</div></div>') +
      '<div class="info-cards">' +
      info.map(function (it) {
        var warn = (it.value && it.value.indexOf("⚠️") !== -1) ? " info-card-warn" : "";
        return '<div class="info-card' + warn + '">' +
          '<div class="label">' + it.label + '</div>' +
          '<div class="value">' + esc(it.value || "暂无数据（请以官网为准）") + '</div>' +
          '</div>';
      }).join("") +
      '</div>' +
      '<p class="note">数据整理自学校官网（' + esc(course.url) + '）· 更新日期：' +
      esc(course.updated || "2026-09") + ' · 申请前请务必以官网最新信息为准。</p>';
  }).catch(function () {
    wrap.innerHTML = '<div class="notice">课程数据加载失败，可能正在整理中。' +
      '<br/>你可以直接访问该校官网查找：<a href="' + esc(school.site) +
      '" target="_blank" rel="noopener">' + esc(school.nameEn) + ' 官网 ↗</a></div>';
  });
}


/* ==========================================================
   首页：跨校课程搜索（一次性按需加载所有已有数据）
   ========================================================== */
function initGlobalSearch() {
  var input = document.getElementById("course-global");
  var results = document.getElementById("course-global-results");
  var count = document.getElementById("course-global-count");
  if (!input) return;

  var all = null; // {schoolId: {school: obj, courses: [...]}}

  function buildIndex(cb) {
    if (all) { cb(); return; }
    var ids = (typeof SCHOOLS_WITH_DATA !== "undefined") ? SCHOOLS_WITH_DATA.slice() : [];
    var idx = {};
    var i = 0;
    function next() {
      if (i >= ids.length) { all = idx; cb(); return; }
      (function (id) {
        loadJs("data/courses/" + encodeURIComponent(id) + ".js").then(function () {
          idx[id] = { school: bySchool(id), courses: (typeof SCHOOL_COURSES !== "undefined") ? (SCHOOL_COURSES.courses || []) : [] };
          i++; next();
        }).catch(function () { i++; next(); });
      })(ids[i]);
    }
    next();
  }

  function render(q) {
    var tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!tokens.length) { results.innerHTML = ""; count.textContent = ""; return; }
    var hits = [];
    Object.keys(all).forEach(function (id) {
      var entry = all[id];
      entry.courses.forEach(function (c) {
        var hay = (c.title || "").toLowerCase();
        var ok = tokens.every(function (t) { return hay.indexOf(t) !== -1; });
        if (ok) hits.push({ school: entry.school, course: c });
      });
    });
    hits.sort(function (a, b) { return a.school.rank - b.school.rank; });
    count.textContent = hits.length + " 门（" +
      [...new Set(hits.map(function (h) { return h.school ? h.school.nameCn : ""; }))].join("、") + "）";
    results.innerHTML = hits.slice(0, 60).map(function (h) {
      var s = h.school || {};
      return '<div class="hit-row"><a href="course.html?id=' + encodeURIComponent(s.id) +
        '&c=' + encodeURIComponent(h.course.id) + '">' + esc(h.course.title) +
        '<span class="tag">' + esc(s.nameCn) + '（QS ' + esc(s.rank) + '）</span></a></div>';
    }).join("");
  }

  input.addEventListener("input", function () {
    buildIndex(function () { render(input.value); });
  });
}


/* 申请时间：开放 + 截止 两行显示 */
function composeApplyTime(course) {
  var lines = [];
  if (course.applicationOpen) lines.push("申请开放：" + course.applicationOpen);
  if (course.deadline) lines.push("申请截止：" + course.deadline);
  if (!lines.length) return null;
  if (course.deadlineNote) lines.push("备注：" + course.deadlineNote);
  if (!course.applicationOpen) lines.push("注：官网未单独标注开放时间，一般为入学前一年开放，请以官网为准");
  return lines.join("\n");
}


/* ==========================================================
   兴趣标记（"我想了解这所学校"）
   ========================================================== */
function getInterest() {
  try { return JSON.parse(localStorage.getItem("uni_interest") || "[]"); }
  catch (e) { return []; }
}
function setInterest(list) {
  try { localStorage.setItem("uni_interest", JSON.stringify(list)); } catch (e) {}
}
function isInterested(id) {
  return getInterest().some(function (x) { return x.id === id; });
}
function toggleInterest(item) {
  var list = getInterest();
  var i = list.findIndex(function (x) { return x.id === item.id; });
  if (i >= 0) list.splice(i, 1);
  else list.push(item);
  setInterest(list);
}
function interestText() {
  var list = getInterest();
  if (!list.length) return "";
  var lines = ["我想了解这些学校，请优先整理：【"];
  list.forEach(function (x, i) {
    lines.push((i + 1) + ". " + x.nameCn + "（" + x.nameEn + "，" + x.country + "）");
  });
  lines.push("】");
  return lines.join("\n");
}
function renderInterestBar() {
  var bar = document.getElementById("interest-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "interest-bar";
    document.body.appendChild(bar);
  }
  var list = getInterest();
  if (!list.length) { bar.style.display = "none"; bar.innerHTML = ""; return; }
  bar.style.display = "block";
  bar.innerHTML =
    '<div class="interest-bar-inner">' +
    '<span>📌 我感兴趣（' + list.length + ' 所）：' +
    list.map(function (x) { return esc(x.nameCn); }).join("、") + '</span>' +
    '<button class="btn btn-sm" id="interest-copy">复制清单</button>' +
    '<button class="btn btn-sm btn-ghost" id="interest-clear">清空</button>' +
    '</div>';
  document.getElementById("interest-copy").addEventListener("click", function () {
    var t = interestText();
    var done = function () { alert("已复制！把这段文字发给负责整理的顾问即可。\n\n" + t); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).then(done, function () { fallbackCopy(t); done(); });
    } else { fallbackCopy(t); done(); }
  });
  document.getElementById("interest-clear").addEventListener("click", function () {
    setInterest([]); renderInterestBar();
  });
}
function fallbackCopy(text) {
  var ta = document.createElement("textarea");
  ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}
