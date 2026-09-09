# 🚀 免费上线教程（GitHub Pages · 小白版）

> 💡 **如果只想"马上发给朋友看 1 天"**：见文末【方案 0：临时公网地址】，2 分钟搞定，
> 但需要你的电脑开着。**想永久拥有网址**（电脑关机也能访问），直接看下面的 GitHub Pages 方案。

> 目标：把本地的 `uni-guide` 文件夹放到网上，得到一个公网网址
> （形如 `https://你的用户名.github.io/uni-guide/`），
> **任何人联网都能打开**。全程免费，大约需要 15 分钟。

---

## 名词解释（先看这个）

| 名词 | 大白话 |
|---|---|
| **GitHub** | 程序员界的"网盘"，免费注册，用来存放和展示网站 |
| **仓库 (Repository)** | GitHub 上的一个文件夹，放网站的所有文件 |
| **GitHub Pages** | GitHub 自带的网站托管服务，只要把文件放进仓库并打开开关，就自动变成网站 |
| **用户名 (username)** | 注册 GitHub 时自己起的英文名字，会出现在网址里，以后**改不了**，想好再起 |

---

## 第 0 步：确认本地网站能跑（2 分钟）

双击打开 `/Users/leah.li/Documents/uni-guide/index.html`，能看到学校榜单即正常。

## 第 1 步：注册 GitHub 账号（3 分钟）

1. 浏览器打开 **https://github.com**
2. 点右上角 **Sign up**（注册）
3. 填写：邮箱 → 密码 → **用户名（重要：这是未来网址的一部分）**
4. 邮箱里会收到 6 位验证码，输入即完成注册
5. 建议浏览器保持登录状态

## 第 2 步：创建仓库（2 分钟）

1. 登录后点右上角 **+** 号 → 选 **New repository**
2. **Repository name** 填：`uni-guide`（全小写，中间短横线）
3. **Public**（公开）保持选中（这样任何人都能看）
4. 其他不用动，点 **Create repository** 创建

## 第 3 步：把网站文件上传（3 分钟）

1. 进入刚建好的仓库页面
2. 找到 **"uploading an existing file"** 链接（或点 **Add file → Upload files**）
3. 打开电脑上的 `/Users/leah.li/Documents/uni-guide/` 文件夹
4. 把里面的 **`index.html`、`school.html`、`course.html`**，以及 **`css`、`js`、`data` 三个文件夹**，
   全部拖进浏览器上传框
   （里面如果有其他文件如 `scrape_tcd.js`、`merge_tcd.py`、`tcd_raw.json` 等内部工具文件，不用上传，
   只传网站要用的那几个即可）
5. 点 **Commit changes**（提交）

## 第 4 步：打开网站开关（2 分钟）

1. 进入仓库页面 → 点 **Settings**（设置）
2. 左侧菜单点 **Pages**
3. **Build and deployment** 区域：
   - Source 选 **Deploy from a branch**
   - Branch 选 **main**，目录选 **/ (root)**
   - 点 **Save**
4. 等 1~2 分钟，刷新页面，顶部会出现绿色提示条，里面的网址就是：
   **`https://你的用户名.github.io/uni-guide/`**

> ⚠️ 第一次可能要多等几分钟，或出现"正在打包"提示，刷新几次即可。

## 第 5 步：检查上线效果（1 分钟）

用手机（关掉 WiFi 用流量）打开上面那个网址——能正常显示就是成功！

---

## 以后怎么更新数据？

方式一（网页上传，最简单）：
1. 进入 GitHub 仓库
2. 点进对应的文件（如 `data/courses/oxford.js`）
3. 点右上角铅笔图标 ✏️ 编辑 → 粘贴新内容 → **Commit changes**

方式二（拖拽覆盖）：
- 在仓库里点 **Add file → Upload files**，把本地修改过的文件直接拖进去，
  GitHub 会自动覆盖同名文件（约 1 分钟后网站自动更新）。

---

## 备选方案：Netlify Drop（不用注册，但网址有效期短）

1. 打开 **https://app.netlify.com/drop**
2. 把整个 `uni-guide` 文件夹拖进网页
3. 立刻得到一个临时网址（如 `https://xxx.netlify.app`）
4. 适合快速分享演示；长期使用建议还是用 GitHub Pages（永久、稳定、免费）

---

## 方案 0：临时公网地址（2 分钟，电脑开着才有效）

> 适合：马上把链接发给朋友预览；不适合长期。网址形如 `https://xxx.trycloudflare.com`。

1. 打开终端（"聚焦搜索"里搜"终端"），依次执行：
   ```bash
   cd /Users/leah.li/Documents/uni-guide
   python3 -m http.server 8765
   ```
   （这会启动本地网站服务器，窗口不要关）
2. 新开一个终端窗口，执行：
   ```bash
   /Users/leah.li/Documents/uni-guide/tools/cloudflared tunnel --url http://127.0.0.1:8765
   ```
3. 大概 10 秒后，屏幕上会出现一行：
   `Your quick Tunnel has been created! Visit it at https://xxxx.trycloudflare.com`
   把这个网址发给朋友即可。
4. 注意事项：① 两个终端窗口**都不能关**，电脑不能睡眠，否则网址失效；
   ② 网址是临时生成的，重启后要重新执行第 2 步（网址会变）；
   ③ 电脑本地数据更新后，朋友刷新页面就是新数据（隧道直连你电脑）。

---

## 常见问题

**Q: 网址打不开 / 404？**
A: ① 检查 Settings → Pages 是否已选 main + /(root) 并 Save；
② 检查文件名是否完全一致（`index.html` 必须是全小写）；
③ 等 1-2 分钟再刷新。

**Q: 中文显示正常吗？**
A: 正常。所有页面都声明了 UTF-8 编码，浏览器会自动识别。

**Q: 学校课程数据会更新吗？**
A: 会。我这边会持续采集，每批采集完成后你只需在 GitHub 上
拖入/覆盖 `data/courses/` 目录里对应的 `.js` 文件即可。
之后我会把"一键更新"做成更简单的方案（如提供更新脚本）。
