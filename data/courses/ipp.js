/* 巴黎理工学院 Institut Polytechnique de Paris (IP Paris) · 硕士课程全量目录（所有专业，含法语授课项目）
 * 整理自 ip-paris.fr 官网 2026-27 学年信息：
 * - 课程目录：https://www.ip-paris.fr/en/education/graduate-programs/masters-science（19 个专业方向，共 75 门硕士项目）
 * - 申请日程：https://www.ip-paris.fr/en/education/admissions
 * - 学费表（官方 PDF，2026-27）：https://www.ip-paris.fr/sites/default/files/pages/documents/Masters/master-phd-track-registration-fees-EN-26-27%20(3).pdf
 * 说明：IP Paris 的硕士为法国国家硕士文凭（2 年 120 ECTS，M1+M2 分段招生，均可单独申请入读）；
 * 部分专业以 full 2 年 Major（120 ECTS）形式招生（如计算机科学 DataAI、QMI 等）。
 * 学费按官方 2026-27 表：列入『国际项目表』的轨道（经济学 MiE、数据科学 DS、统计金融精算 SFA、应用数学统计 APPMS、
 * 数据与人工智能 DAIIG、网络安全 CCSN、能源 ES/OFFWIND/TET、土木工程 GCC、健康转型 DS4Health、交通 TMR/TRADD、
 * 城市规划 UA/AMUR 等）为 €4,870/年（欧盟/欧洲经济区/瑞士）与 €7,166/年（其他国籍）；未列入表内的项目
 * （如创新、产业与社会、EEET、化学、力学、物理、数学与应用、EEET、IREN、COSI 等）按『国家轨』执行
 * €255/年（欧盟）与 €4,327/年（其他国籍）。
 * 注意：EEET（环境、能源与交通经济学）、PIC、M2 概率与金融（Probability and Finance）、设计研究、社会学定量方向、
 * 数学及应用数学（法语 M1 等）、交通、城市规划等为法语（或英法双语）授课项目，已一并收录。
 */
var SCHOOL_COURSES = {
  "searchUrl": "https://www.ip-paris.fr/en/education/graduate-programs",
  "courses": [

 {
  "id": "m1-economics",
  "title": "Master Year 1 in Economics（经济学硕士第一年，与HEC联合培养）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/economics-program/master-year-1-economics",
  "summary": "IP Paris 与 HEC Paris 联合开办的两年制研究导向经济学硕士（法国国家文凭）第一年，全英文授课，位于帕莱索校区。第一年修读微观、宏观、计量经济学的高阶核心课程，并在导师指导下参与研究项目；第二年可在计量经济理论、金融、产业组织与数字经济、劳动经济学、宏观与公共经济学等子领域专精。毕业生多进入政府机构、央行、国际组织、咨询与金融行业，或继续攻读CREST经济学博士。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英语（全英文授课）",
  "tuition": "€4,870/年（欧盟/欧洲经济区/瑞士）；€7,166/年（其他国籍）——2026-27官方学费表（国际项目轨），每学年计费；休学年另收€2,478（欧盟）/€4,303（其他国籍）",
  "language": "英语B2（官方要求：TOEFL/IELTS/TOEIC/Cambridge ESOL B2级证书；英语授课背景院校毕业可豁免）",
  "gpa": "无官方GPA线；官网要求来自高排名院校且成绩突出（择优录取），申请时需将成绩换算为20分制",
  "background": "接受经济、数学、社会科学及相关专业本科（官网：Bachelor in economics, mathematics or social sciences or the equivalent）；⚠️ 需要很强的量化/数学背景，GRE证书强烈推荐（用于证明量化能力）；纯文科背景转申难度高。例外情况：已完成等价研究型M1且成绩优秀者可直入M2",
  "requirements": "申请表、本科成绩单（自大学第一年起）、学位证书/在读证明、简历、动机信、两封学术推荐信（推荐人在线提交）、英语B2证书、GRE（强烈推荐）；非英/法语材料须公证翻译",
  "applicationOpen": "2026-27学年（2026年9月入学）：第1轮自2025-10-29、第2轮自2026-01-09、第3轮自2026-03-27在IP Paris申请系统开放；法国MonMaster通道2026-02-17开放",
  "deadline": "第1轮：2026-01-08；第2轮：2026-03-26；第3轮：2026-05-28（⚠️ 官网注明经济学MiE项目不开放第3轮）",
  "deadlineNote": "以上为2026年9月入学轮次，结果于轮次截止后约2个月内邮件通知；录取后注册2026-06-02开放、截止2026-07-31（成员校工程生2026-07-08），学费须于2026-07-31前缴清；每轮申请均可提交，最多同时申请5个项目；不可重复申请同一项目",
  "updated": "2026-09"
 },


 {
  "id": "m2-economics",
  "title": "Master Year 2 in Economics（经济学硕士第二年）",
  "url": "https://www.ip-paris.fr/en/education/masters/economics-program/master-year-2-economics",
  "summary": "经济学硕士第二年（60 ECTS，全英文，位于帕莱索/ENSAE，金融类课程周一在HEC的Jouy-en-Josas校区上课），与HEC联合培养、研究导向。学生自由选课40-42 ECTS（可覆盖计量经济理论、金融经济学、博弈与决策理论、产业组织与数字市场、劳动经济学、国际贸易、宏观与公共经济学等），并完成20 ECTS硕士论文（研究项目由CREST、i3-SES、GREGHEC等中心导师指导）。完成两年课程后可在政府、国际组织、咨询、金融部门担任专业经济学家，或继续攻读博士。",
  "duration": "1年（M2，60 ECTS，全日制12个月）",
  "teachingLanguage": "英语（全英文授课）",
  "tuition": "€4,870/年（欧盟/欧洲经济区/瑞士）；€7,166/年（其他国籍）——2026-27官方学费表（国际项目轨），每学年计费",
  "language": "英语B2（官网要求）",
  "gpa": "无官方GPA线；官网要求来自高排名院校且成绩优异，申请时成绩换算为20分制",
  "background": "主要在IP Paris或他处完成经济学（或等价研究型）M1的学生申请（官网：Completion of the first year of the Master in Economics at IP Paris or equivalent）；成绩优秀者可从等价M1直入M2；⚠️ 需扎实的量化/经济学基础，不适合零基础转行",
  "requirements": "申请表、成绩单、学位证明、简历、动机信（需说明已完成或即将完成等价研究型硕士第一年）、两封学术推荐信（在线提交）；非英/法语材料须公证翻译",
  "applicationOpen": "2026-27学年（2026年9月入学）：第1轮自2025-10-29、第2轮自2026-01-09、第3轮自2026-03-27在IP Paris申请系统开放",
  "deadline": "第1轮：2026-01-08；第2轮：2026-03-26；第3轮：2026-05-28（⚠️ 官网注明经济学MiE项目不开放第3轮）",
  "deadlineNote": "以上为2026年9月入学轮次，结果于轮次截止后约2个月内邮件通知；录取后注册2026-06-02开放、截止2026-07-31，学费须于2026-07-31前缴清；最多同时申请5个项目",
  "updated": "2026-09"
 },


 {
  "id": "m2-data-science",
  "title": "Master Year 2 in Data Science（数据科学硕士第二年）",
  "url": "https://www.ip-paris.fr/en/education/masters/applied-mathematics-and-statistics-program/master-year-2-data-science",
  "summary": "数据科学硕士第二年（60 ECTS，全英文，帕莱索校区），培养数据科学专家：掌握统计学习、深度学习、强化学习、优化与大数据基础设施等技能，并通过实践项目与数据科学竞赛训练；由Qube Research & Technologies赞助、与École polytechnique基金会合作。毕业可从事数据分析师/数据科学家或在学术界继续深造，官方强调全球数据人才缺口极大。",
  "duration": "1年（M2，60 ECTS，全日制12个月）",
  "teachingLanguage": "英语（全英文授课）",
  "tuition": "€4,870/年（欧盟/欧洲经济区/瑞士）；€7,166/年（其他国籍）——2026-27官方学费表（国际项目轨），每学年计费",
  "language": "英语；官网另列法语（未注明级别，授课为英语）",
  "gpa": "无官方GPA线；官网要求高排名院校且成绩突出，申请时成绩换算为20分制",
  "background": "需已完成数学类硕士第一年（官网：Completion of the first year of a Master in mathematics at IP Paris or equivalent），即应用数学与统计M1或等价；⚠️ 数学/统计门槛很高，纯文科背景无法直接申请",
  "requirements": "申请表、成绩单、学位证明、简历、动机信、两封学术推荐信（在线提交）；建议突出数学/统计课程背景",
  "applicationOpen": "2026-27学年（2026年9月入学）：第1轮自2025-10-29、第2轮自2026-01-09、第3轮自2026-03-27在IP Paris申请系统开放",
  "deadline": "第1轮：2026-01-08；第2轮：2026-03-26；第3轮：2026-05-28",
  "deadlineNote": "结果于轮次截止后约2个月内邮件通知；录取后注册2026-06-02开放、截止2026-07-31，学费须于2026-07-31前缴清；最多同时申请5个项目",
  "updated": "2026-09"
 },


 {
  "id": "m2-statistics-finance-actuarial-science",
  "title": "Master Year 2 in Statistics, Finance and Actuarial Science（统计、金融与精算科学硕士第二年）",
  "url": "https://www.ip-paris.fr/en/education/masters/applied-mathematics-and-statistics-program/master-year-2-statistics-finance-and-actuarial-science",
  "summary": "统计、金融与精算科学硕士第二年（60 ECTS，全英文，帕莱索校区），结合数学与统计现代方法应对金融与保险业的风险建模需求（银行、保险公司、精算师）。完成指定课程组合可获得法国精算师学会（Institut des Actuaires）的精算师资格认证；可跨选M2概率与金融、M2数据科学课程。毕业生面向金融机构、保险、咨询或继续读博。",
  "duration": "1年（M2，60 ECTS，全日制12个月）",
  "teachingLanguage": "英语（全英文授课）",
  "tuition": "€4,870/年（欧盟/欧洲经济区/瑞士）；€7,166/年（其他国籍）——2026-27官方学费表（国际项目轨），每学年计费",
  "language": "英语",
  "gpa": "无官方GPA线；官网要求高排名院校且成绩优异，申请时成绩换算为20分制",
  "background": "需已完成数学类硕士第一年（官网：Completion of the first year of a Master in mathematics at IP Paris or equivalent）；⚠️ 要求扎实的概率统计基础，纯文科背景无法直接申请",
  "requirements": "申请表、成绩单、学位证明、简历、动机信、两封学术推荐信（在线提交）",
  "applicationOpen": "2026-27学年（2026年9月入学）：第1轮自2025-10-29、第2轮自2026-01-09、第3轮自2026-03-27在IP Paris申请系统开放",
  "deadline": "第1轮：2026-01-08；第2轮：2026-03-26；第3轮：2026-05-28",
  "deadlineNote": "结果于轮次截止后约2个月内邮件通知；录取后注册2026-06-02开放、截止2026-07-31，学费须于2026-07-31前缴清；最多同时申请5个项目",
  "updated": "2026-09"
 },


 {
  "id": "m1-applied-mathematics-statistics",
  "title": "Master Year 1 in Applied Mathematics and Statistics（应用数学与统计硕士第一年）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/applied-mathematics-and-statistics-program/master-year-1-applied-mathematics-and-statistics",
  "summary": "应用数学与统计硕士第一年（60 ECTS，全英文，帕莱索校区），官网明确说明其数学水平高于同类项目、只招收本科数学能力卓越的学生。核心课程包括概率与随机过程、数理统计、优化、Python数据科学、马尔可夫过程、机器学习导论、数据库等（含ENSAE时间序列等选修）。第二年分流为数据科学、统计/金融/精算科学、概率与金融、数学建模等方向，也可衔接数学金融及数据科学与AI的PhD Track。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英语（全英文授课）",
  "tuition": "€4,870/年（欧盟/欧洲经济区/瑞士）；€7,166/年（其他国籍）——2026-27官方学费表（国际项目轨），每学年计费",
  "language": "英语（官网语言要求：English）",
  "gpa": "无官方GPA线；但官网要求本科阶段具备卓越数学能力（概率论与数理统计需达到Ross/Hogg教材水平并修完数学分析），申请时成绩换算为20分制",
  "background": "数学、数学科学或相关专业本科（官网：Bachelor's degree in mathematics, mathematical sciences or related field）；⚠️ 官网附有入学水平测试链接，要求极高；纯文科背景无法申请",
  "requirements": "申请表、成绩单、学位证明、简历、动机信、两封学术推荐信（在线提交）、官网数学入门水平自测",
  "applicationOpen": "2026-27学年（2026年9月入学）：第1轮自2025-10-29、第2轮自2026-01-09、第3轮自2026-03-27在IP Paris申请系统开放",
  "deadline": "第1轮：2026-01-08；第2轮：2026-03-26；第3轮：2026-05-28",
  "deadlineNote": "结果于轮次截止后约2个月内邮件通知；录取后注册2026-06-02开放、截止2026-07-31，学费须于2026-07-31前缴清；最多同时申请5个项目",
  "updated": "2026-09"
 },


 {
  "id": "major-data-and-artificial-intelligence",
  "title": "Data and Artificial Intelligence (DataAI) 专业方向（计算机科学硕士，数据与人工智能）",
  "url": "https://www.ip-paris.fr/en/education/masters/computer-science-program/major-data-and-artificial-intelligence-dataai",
  "summary": "计算机科学硕士（法国国家文凭）下的『数据与人工智能（DataAI）』两年制major（120 ECTS），全英文授课，位于帕莱索校区。课程覆盖机器学习、逻辑学、大数据系统与数据库基础，进阶到高级机器学习、符号AI、群体智能、NLP、视觉计算与机器人等，研究导向并为读博做准备。毕业生适合AI/数据研发岗、数据驱动的决策支持系统或继续攻读博士。",
  "duration": "2年（120 ECTS，全日制；含M1与M2实习）",
  "teachingLanguage": "英语（全英文授课）",
  "tuition": "€4,870/年（欧盟/欧洲经济区/瑞士）；€7,166/年（其他国籍）——2026-27官方学费表（国际项目轨），每学年计费（两年均为该标准）",
  "language": "英语（官网语言要求：English）",
  "gpa": "无官方GPA线；官网要求高排名院校且成绩优异，申请时成绩换算为20分制",
  "background": "计算机科学学士（官网：Bachelor of Science in Computer Science）；研究型major，动机信需突出研究兴趣与动机；⚠️ 需要扎实的编程与数学基础，文商科背景无法直接申请",
  "requirements": "申请表、成绩单、学位证明、简历、动机信（需说明研究兴趣与科研动机）、两封学术推荐信（在线提交）",
  "applicationOpen": "2026-27学年（2026年9月入学）：第1轮自2025-10-29、第2轮自2026-01-09、第3轮自2026-03-27在IP Paris申请系统开放",
  "deadline": "第1轮：2026-01-08；第2轮：2026-03-26；第3轮：2026-05-28（⚠️ 官网注明DataAI项目不开放第3轮）",
  "deadlineNote": "结果于轮次截止后约2个月内邮件通知；录取后注册2026-06-02开放、截止2026-07-31，学费须于2026-07-31前缴清；最多同时申请5个项目",
  "updated": "2026-09"
 },


 {
  "id": "m1-innovation-industry-society",
  "title": "Master Year 1 Innovation, Industry and Society（创新、产业与社会硕士第一年）",
  "url": "https://www.ip-paris.fr/en/education/masters/innovation-industry-and-society-program/master-year-1-innovation-industry-and-society",
  "summary": "创新、产业与社会硕士第一年（60 ECTS，英法双语，帕莱索校区），由Télécom Paris牵头的i3-SES团队讲授，融合经济学、组织社会学与战略管理，聚焦创新驱动的企业、制度与区域转型。课程涵盖创新战略、商业模式、平台经济、数据营销与客户体验、创业融资、大数据与信息系统等（部分课程法语授课），并含至少16周必修研究实习（20 ECTS）。毕业后可进入咨询公司、大型研发企业、银行与风险投资、公共机构或攻读博士。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英语授课；⚠️ 英法双语（官网原文：Languages English and/or French；English and French），部分课程为法语，非法语背景学生官方要求法语B2（DELF）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "language": "英语（TOEFL/TOEIC/IELTS/Cambridge证书）+ 法语B2（非法语学生需DELF B2，官网原文）",
  "gpa": "无官方GPA线；官网要求理工科成绩优秀且在管理学科表现良好，申请时成绩换算为20分制",
  "background": "接受本科为理科或工科（数学、物理、计算机、工程等）或社科（经济学、管理学、社会学等背景）；官网强调『硬科学（尤其数学/物理）优秀＋管理学良好』（Excellent level in hard sciences ... and a good level in management sciences），鼓励学科交叉背景；⚠️ 纯文科背景需证明数学与量化能力",
  "requirements": "申请表、成绩单、学位证明、简历、动机信、两封学术推荐信（在线提交）、英语与法语语言证明",
  "applicationOpen": "2026-27学年（2026年9月入学）：第1轮自2025-10-29、第2轮自2026-01-09、第3轮自2026-03-27在IP Paris申请系统开放；法国MonMaster通道2026-02-17开放",
  "deadline": "第1轮：2026-01-08；第2轮：2026-03-26；第3轮：2026-05-28",
  "deadlineNote": "结果于轮次截止后约2个月内邮件通知；录取后注册2026-06-02开放、截止2026-07-31，学费须于2026-07-31前缴清；最多同时申请5个项目；M2可选IREN（网络产业与数字经济）、COSI（咨询）、PIC（项目创新设计，法语）",
  "updated": "2026-09"
 },


 {
  "id": "m2-consulting-organization-strategy-information-systems",
  "title": "Master Year 2 in Consulting in Organization, Strategy and Information Systems（COSI，组织、战略与信息系统咨询硕士第二年）",
  "url": "https://www.ip-paris.fr/en/education/masters/innovation-industry-and-society-program/master-year-2-consulting-organization-strategy-and-information-systems",
  "summary": "创新、产业与社会硕士的COSI方向第二年（60 ECTS），与巴黎一大、ENSTA Paris等合作，培养咨询顾问：90%以上的毕业生进入『Top 10』国际咨询公司，其余进入大企业与国际机构。课程含企业战略、经济决策模拟、咨询方法论、国际经济学（国际贸易、出口合规）、信息系统与数字化转型、计量实践、数据关系分析等，并配有咨询公司实习与硕士论文。",
  "duration": "1年（M2，60 ECTS，全日制12个月）",
  "teachingLanguage": "英语授课；⚠️ 官网原文：English and French - possible to follow the program entirely in English with some restrictions on the courses available（英法双语，多数课程法语，可全英文完成但可选课程受限）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "language": "英语 + 法语（官网语言要求：English、French；多数授课语言为法语，建议法语B2+）",
  "gpa": "无官方GPA线；官网要求高排名院校且成绩优异，申请时成绩换算为20分制",
  "background": "需完成M1（官网：Master in Innovation, Industry and Society Economics, Management, Political Science or Engineering/Science with a background in economics at IP Paris or equivalent）；面向工程、商科、经济学背景的M1毕业生，接受多元背景（含经济学本科+管理训练者）；⚠️ 要求有经济学基础",
  "requirements": "申请表、成绩单、学位证明、简历、动机信、两封学术推荐信（在线提交）；官网强调咨询工作强度大，需在材料中体现投入度与动机",
  "applicationOpen": "2026-27学年（2026年9月入学）：第1轮自2025-10-29、第2轮自2026-01-09、第3轮自2026-03-27在IP Paris申请系统开放",
  "deadline": "第1轮：2026-01-08；第2轮：2026-03-26；第3轮：2026-05-28",
  "deadlineNote": "结果于轮次截止后约2个月内邮件通知；录取后注册2026-06-02开放、截止2026-07-31，学费须于2026-07-31前缴清；最多同时申请5个项目",
  "updated": "2026-09"
 },


 {
  "id": "m2-network-industries-digital-economics",
  "title": "Master Year 2 – Network Industries and Digital Economics（IREN，网络产业与数字经济硕士第二年）",
  "url": "https://www.ip-paris.fr/en/education/masters/innovation-industry-and-society-program/master-2-industries-de-reseaux-et-economie-numerique",
  "summary": "创新、产业与社会硕士的IREN方向第二年（60 ECTS，以英语授课为主），由École polytechnique、Télécom Paris与巴黎-多芬大学、CentraleSupélec等联合培养，在巴黎Dauphine校区上课。设数字经济平台、竞争与监管、创新、市场设计四个专业方向，含创业预孵化（Agoranov）选项，就业率接近100%、中位年薪约40,500欧元（官网数据）。毕业生可担任监管/行业经济学家、数据分析师、战略与组织分析负责人，或继续读博。",
  "duration": "1年（M2，60 ECTS，全日制12个月）",
  "teachingLanguage": "英语授课；⚠️ 官网原文（法文页）：Anglais (majoritaire) ; français，即英语为主、部分法语课程，申请要求英语+法语",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "language": "英语 + 法语（官网：Prérequis linguistiques：Anglais、Français）",
  "gpa": "无官方GPA线；官网要求高排名院校且成绩优异，申请时成绩换算为20分制",
  "background": "需完成M1（官网：Master 1 in Innovation, Entreprise, Société at IP Paris or equivalent）；适合经济学、管理学、工科+经济背景学生；⚠️ 项目以法语为主，强烈建议法语B2",
  "requirements": "申请表、成绩单、学位证明、简历、动机信、两封学术推荐信（在线提交）",
  "applicationOpen": "2026-27学年（2026年9月入学）：第1轮自2025-10-29、第2轮自2026-01-09、第3轮自2026-03-27在IP Paris申请系统开放",
  "deadline": "第1轮：2026-01-08；第2轮：2026-03-26；第3轮：2026-05-28",
  "deadlineNote": "结果于轮次截止后约2个月内邮件通知；录取后注册2026-06-02开放、截止2026-07-31，学费须于2026-07-31前缴清；最多同时申请5个项目",
  "updated": "2026-09"
 },


 {
  "id": "m2-probability-and-finance",
  "title": "Master Year 2 Probability and Finance",
  "titleCn": "概率与金融硕士第二年（M2，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/applied-mathematics-and-statistics-program/master-year-2-probability-and-finance",
  "summary": "应用数学与统计硕士的M2方向（60 ECTS，法语授课，帕莱索与索邦大学Jussieu校区），由巴黎各大金融数学实验室师资联合培养，是法国最负盛名的数学金融项目之一。课程为数学金融提供高水平训练，覆盖衍生品风险定价与管理、算法与统计金融、利率建模、投资组合管理、金融监管、金融科技与区块链、能源市场等内容，工具包括高级随机分析、蒙特卡洛方法、随机控制、过程统计、机器学习/深度学习、数值分析与微分博弈等。",
  "duration": "1年（M2，60 ECTS，全日制12个月，9月开学）",
  "teachingLanguage": "法语（官网授课语言：français；部分材料涉及英语文献）",
  "language": "法语（官网语言要求：Français）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "需已完成数学类硕士第一年（官网：应用数学与统计M1或等价）；⚠️ 需扎实的概率论、随机分析基础（官网课程即按此水准设计），并熟悉编程/数值计算，纯文科背景无法直接申请",
  "updated": "2026-09"
 },

 {
  "id": "m2-mathematical-modelling",
  "title": "Master Year 2 Mathematical Modelling",
  "titleCn": "数学建模硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/applied-mathematics-and-statistics-program/master-year-2-mathematical-modelling",
  "updated": "2026-09"
 },

 {
  "id": "m1-chemistry-and-interfaces",
  "title": "Master Year 1 Chemistry and Interfaces",
  "titleCn": "化学与界面硕士第一年（M1）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/chemistry-program/master-year-1-chemistry-and-interfaces",
  "summary": "化学与界面硕士第一年（60 ECTS，全英文，帕莱索校区），依托IP Paris在分子化学、物理化学与材料科学方向的卓越研究单元，提供有机化学、有机金属、超分子化学、固体化学与无机化学等领域的前沿课程，并向生物学、材料科学与能源等交叉方向延伸，强调\"在做中学\"——在实验室研究环境中掌握新实验技术。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英语（全英文授课）",
  "language": "英语（官网语言要求：English）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "化学或相关科学本科（官网未设硬性分类，面向化学/材料/生物交叉背景）；⚠️ 需要扎实的化学实验与理论功底",
  "updated": "2026-09"
 },

 {
  "id": "m2-chemistry-and-interfaces",
  "title": "Master Year 2 Chemistry and Interfaces",
  "titleCn": "化学与界面硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/chemistry-program/master-year-2-chemistry-and-interfaces",
  "summary": "化学与界面硕士第二年（60 ECTS，全英文），面向界面化学的深入训练——分子层面与材料化学并重，培养面向生物学、健康、人工智能与环境交叉领域的未来专家；通过研究项目、实验课与学术/工业实习发展实操能力，成果可应用于能源、交通、电子、医学、纳米技术与健康等社会挑战。",
  "duration": "1年（M2，60 ECTS，全日制12个月，9月开学）",
  "teachingLanguage": "英语（全英文授课）",
  "language": "英语（官网语言要求：English）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "需完成化学M1（官网：IP Paris化学与界面M1或等价），或具有扎实化学背景的本科/工程学历",
  "updated": "2026-09"
 },

 {
  "id": "m1-civil-engineering-and-construction",
  "title": "Master Year 1 in Civil Engineering and Construction",
  "titleCn": "土木工程与建造硕士第一年（M1，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/civil-engineering-program/master-year-1-civil-engineering-and-construction",
  "updated": "2026-09"
 },

 {
  "id": "m2-civil-engineering-and-construction",
  "title": "Master Year 2 in Civil Engineering and Construction",
  "titleCn": "土木工程与建造硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/civil-engineering-program/master-year-2-civil-engineering-and-construction",
  "summary": "土木工程与建造硕士第二年（60 ECTS，法语授课，ENPC Champs-sur-Marne校区），依托法国国立桥路学校（École des ponts）长期以来的土木工程传统培养国际化的基础设施与建造专家：课程覆盖大型基础设施项目、既有设施维护、能源生产与储存、建筑翻新改造、超高层建筑与都市网络等，并直面气候紧急状态与生物多样性流失背景下的绿色建造需求——降低能耗、限制温室气体排放、材料循环利用，以及极端天气下的韧性建筑与新材料应用。",
  "duration": "1年（M2，60 ECTS，全日制12个月，9月开学）",
  "teachingLanguage": "法语（官网授课语言：French）",
  "language": "法语（官网语言要求：French）",
  "tuition": "€4,870/年（欧盟/欧洲经济区/瑞士）；€7,166/年（其他国籍）——2026-27官方学费表（国际项目轨：M2 GCC在列），每学年计费",
  "background": "需完成土木/工程类M1（官网：Civil Engineering相关M1或等价）；⚠️ 需工程与力学基础，法语授课项目建议法语B2",
  "updated": "2026-09"
 },

 {
  "id": "m2-civil-engineering-materials-science-sustainable-construction",
  "title": "Master Year 2 in Materials Science for Sustainable Construction",
  "titleCn": "可持续建造材料科学硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/civil-engineering-program/master-year-2-materials-science-sustainable-construction",
  "updated": "2026-09"
 },

 {
  "id": "m2-civil-engineering-soil-rock-mechanics-geo-environmental",
  "title": "Master Year 2 in Soil and Rock Mechanics and Geo-environmental Engineering",
  "titleCn": "土力学与岩石力学及地质环境工程硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/civil-engineering-program/master-year-2-soil-and-rock-mechanics-and-geo-environmental-engineering",
  "updated": "2026-09"
 },

 {
  "id": "major-quantum-mathematics-computer-science",
  "title": "Major - Quantum, Mathematics, Computer Science (QMI)",
  "titleCn": "量子、数学与计算机科学专业方向（QMI，两年制）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/computer-science-program/major-quantum-mathematics-computer-science-qmi",
  "summary": "计算机科学硕士下的QMI专业方向（120 ECTS，两年，全英文，帕莱索校区）：量子技术正在走向成熟、将深刻改变计算、通信、加密与模拟方式；QMI为量子革命的理论、数学与计算机科学层面提供训练，课程覆盖量子密码学到纠错码等前沿主题，并链接Saclay地区活跃的量子产业与学术实验室。毕业可进入量子产业界或继续攻读博士。",
  "duration": "2年（120 ECTS，全日制；9月开学）",
  "teachingLanguage": "英语（全英文授课）",
  "language": "英语（官网语言要求：English）",
  "background": "量子力学、数学或计算机科学背景（官网：需要深入了解量子理论）；⚠️ 官网强调其培养包含数学与计算机科学深度内容，需扎实的物理/数学基础",
  "updated": "2026-09"
 },

 {
  "id": "major-computer-science-networks",
  "title": "Major - Computer Science for Networks (CSN)",
  "titleCn": "计算机网络专业方向（CSN）",
  "url": "https://www.ip-paris.fr/en/education/masters/computer-science-program/major-computer-science-networks-csn",
  "updated": "2026-09"
 },

 {
  "id": "major-cybersecurity",
  "title": "Major - Cybersecurity",
  "titleCn": "网络安全专业方向",
  "url": "https://www.ip-paris.fr/en/education/masters/computer-science-program/major-cybersecurity",
  "updated": "2026-09"
 },

 {
  "id": "major-formal-methods-cyber-physical-systems",
  "title": "Major - Formal Methods and Foundations of Cyber-Physical Systems (CPS)",
  "titleCn": "形式化方法与网络物理系统基础专业方向（CPS）",
  "url": "https://www.ip-paris.fr/en/education/masters/computer-science-program/major-formal-methods-and-foundations-cyber-physical-systems-cps",
  "updated": "2026-09"
 },

 {
  "id": "major-foundations-computer-science",
  "title": "Major - Foundations of Computer Science (MPRI)",
  "titleCn": "计算机科学基础专业方向（MPRI）",
  "url": "https://www.ip-paris.fr/en/education/masters/computer-science-program/major-foundations-computer-science-mpri",
  "updated": "2026-09"
 },

 {
  "id": "major-interaction-graphics-design",
  "title": "Major - Interaction, Graphics & Design",
  "titleCn": "交互、图形与设计专业方向（IGD）",
  "url": "https://www.ip-paris.fr/en/education/masters/computer-science-program/major-interaction-graphics-design",
  "updated": "2026-09"
 },

 {
  "id": "major-operational-research",
  "title": "Major - Operational Research (MPRO)",
  "titleCn": "运筹学专业方向（MPRO）",
  "url": "https://www.ip-paris.fr/en/education/masters/computer-science-program/major-operational-research-mpro",
  "updated": "2026-09"
 },

 {
  "id": "major-parallel-distributed-systems",
  "title": "Major - Parallel and Distributed Systems (PDS)",
  "titleCn": "并行与分布式系统专业方向（PDS）",
  "url": "https://www.ip-paris.fr/en/education/masters/computer-science-program/major-parallel-and-distributed-systems-pds",
  "updated": "2026-09"
 },

 {
  "id": "m1-digital-skills-health-transformation",
  "title": "Master Year 1 Digital Skills for Health Transformation (DS4Health)",
  "titleCn": "健康数字化转型数字技能硕士第一年（DS4Health）",
  "url": "https://www.ip-paris.fr/en/education/masters/computer-science-program/master-year-1-digital-skills-health-transformation-ds4health",
  "updated": "2026-09"
 },

 {
  "id": "m2-digital-skills-health-transformation",
  "title": "Master Year 2 in Digital Skills for Health Transformation (DS4Health)",
  "titleCn": "健康数字化转型数字技能硕士第二年（DS4Health）",
  "url": "https://www.ip-paris.fr/en/education/masters/health-engineering-program/master-year-2-digital-skills-health-transformation-ds4health",
  "updated": "2026-09"
 },

 {
  "id": "m1-recherche-en-design",
  "title": "Master 1 Recherche en Design",
  "titleCn": "设计研究硕士第一年（M1，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/design-program/master-1-recherche-en-design",
  "updated": "2026-09"
 },

 {
  "id": "m2-recherche-en-design",
  "title": "Master 2 Recherche en Design",
  "titleCn": "设计研究硕士第二年（M2，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/design-program/master-2-recherche-en-design",
  "updated": "2026-09"
 },

 {
  "id": "m1-electrical-engineering-communications",
  "title": "Master Year 1 Electrical Engineering for Communications & Information Processing",
  "titleCn": "电气工程（通信与信息处理）硕士第一年（M1）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/electrical-engineering-program/master-year-1-electrical-engineering-communications-information-processing",
  "summary": "电气工程（通信与信息处理）硕士第一年（60 ECTS，英语授课，Evry校区），第二学期即进入TNM/DataPac（通信、网络与多媒体/数据分析与模式识别）或EOE-MIE（电气与光学工程及微电子）专业方向，为第二年细化做准备。DataPAC/TNM方向覆盖5G网络、物联网与机器间通信、低时延高可靠网络、传感器数据处理、医学影像、生物识别、生物信息学、银行保险与数据挖掘等应用；EOE-MIE方向侧重电气与光学工程及微电子。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英语（官网：English；含法语语言课程）",
  "language": "英语（官网语言要求：English）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "电气/电子、通信、物理、计算机等工科或理科本科；⚠️ 需较强数学与物理基础",
  "updated": "2026-09"
 },

 {
  "id": "m2-electrical-engineering-communications",
  "title": "Master Year 2 Electrical Engineering for Communications & Information Processing",
  "titleCn": "电气工程（通信与信息处理）硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/electrical-engineering-program/master-year-2-electrical-engineering-communications-information-processing",
  "updated": "2026-09"
 },

 {
  "id": "m1-sciences-and-technologies-energy",
  "title": "Master Year 1 in Sciences and Technologies for Energy",
  "titleCn": "能源科学与技术硕士第一年（M1）",
  "url": "https://www.ip-paris.fr/en/education/masters/energy-program/master-year-1-energy",
  "updated": "2026-09"
 },

 {
  "id": "m2-sciences-and-technology-energy",
  "title": "Master Year 2 Sciences and Technology for Energy",
  "titleCn": "能源科学与技术硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/energy-program/master-year-2-energy",
  "updated": "2026-09"
 },

 {
  "id": "m2-territories-energy-transition",
  "title": "Master Year 2 in Territories and the Energy Transition - TET",
  "titleCn": "领土与能源转型硕士第二年（TET）",
  "url": "https://www.ip-paris.fr/en/education/masters/energy-program/master-year-2-territories-and-energy-transition-tet",
  "updated": "2026-09"
 },

 {
  "id": "m1-offwind-offshore-wind-energy",
  "title": "Master Year 1 OFFWIND - Offshore Wind Energy",
  "titleCn": "海上风电能源硕士第一年（OFFWIND）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/energy-program/master-year-1-offwind-offshore-wind-energy",
  "summary": "OFFWIND海上风电硕士第一年（60 ECTS，全英文，巴黎Saclay校区帕莱索/ENSTA与马恩河谷/ENPC）——为浮动式与固定式海上风电产业培养运营工程师、研发工程师与项目经理；由ENSTA与法国国立桥路学校（ENPC）联合开设，面向全球能源转型与海上风电大规模开发的战略需求，与产业界联系紧密。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英语（全英文授课）",
  "language": "英语（官网语言要求：English）",
  "tuition": "€4,870/年（欧盟/欧洲经济区/瑞士）；€7,166/年（其他国籍）——2026-27官方学费表（国际项目轨：M1 OFFWIND在列），每学年计费",
  "background": "机械/能源/海洋/土木等工程本科（官网面向工程师背景）；⚠️ 需流体力学与工程力学基础",
  "updated": "2026-09"
 },

 {
  "id": "m2-offwind-offshore-wind-energy",
  "title": "Master Year 2 OFFWIND - Offshore Wind Energy",
  "titleCn": "海上风电能源硕士第二年（OFFWIND）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/energy-program/master-year-2-offwind-offshore-wind-energy",
  "summary": "OFFWIND海上风电硕士第二年（60 ECTS，全英文，ENSTA Brest校区），在M1基础上深化浮动式与固定式海上风电系统的研发与设计，面向全球海上风电产业的高管人才培养需求；课程设在布列塔尼海域产业生态圈（Brest/ENSTA）。",
  "duration": "1年（M2，60 ECTS，全日制12个月，9月开学）",
  "teachingLanguage": "英语（全英文授课）",
  "language": "英语（官网语言要求：English）",
  "tuition": "€4,870/年（欧盟/欧洲经济区/瑞士）；€7,166/年（其他国籍）——2026-27官方学费表（国际项目轨：M2 OFFWIND在列），每学年计费",
  "background": "需完成OFFWIND M1或等价工程背景（官网：工程类M1）；⚠️ 需流体力学、结构力学基础，适合风电/海事工程背景",
  "updated": "2026-09"
 },

 {
  "id": "m1-biology-biotechnology-health",
  "title": "Master Year 1 in Biology, Biotechnology and Health",
  "titleCn": "生物学、生物技术与健康硕士第一年（M1）",
  "url": "https://www.ip-paris.fr/en/education/masters/biology-and-health-program/master-year-1-biology-biotechnology-and-health",
  "updated": "2026-09"
 },

 {
  "id": "m2-biology-biotechnology-health",
  "title": "Master Year 2 in Biology, Biotechnology and Health",
  "titleCn": "生物学、生物技术与健康硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/biology-and-health-program/master-year-2-biology-biotechnology-and-health",
  "updated": "2026-09"
 },

 {
  "id": "m1-biomedical-engineering-bme",
  "title": "Master Year 1 in BioMedical Engineering (BME)",
  "titleCn": "生物医学工程硕士第一年（BME）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/health-engineering-program/master-year-1-biomedical-engineering-bme",
  "summary": "健康工程/生物医学工程硕士第一年（60 ECTS，全英文，帕莱索校区），将物理与工程科学应用于生命科学、医学与健康：提供研究密集型的训练，覆盖生物医学成像、生物力学、生物材料、生物医学数据科学等方向；项目获法国国家研究署（ANR）France 2030计划资助（EUR BERTIP、AMI-CMA DaTSHealth），与巴黎医学院校及医院网络密切合作。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英语（全英文授课）",
  "language": "英语（官网语言要求：English）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "官网明确：申请人需具备工程学、物理科学或应用数学的扎实背景（strong background in engineering, physical sciences, or applied mathematics），并对生命科学与医学的变革充满兴趣；⚠️ 不需生物背景，但必须强量化",
  "updated": "2026-09"
 },

 {
  "id": "m2-biomedical-engineering-bme",
  "title": "Master Year 2 in BioMedical Engineering (BME)",
  "titleCn": "生物医学工程硕士第二年（BME）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/health-engineering-program/master-year-2-biomedical-engineering-bme",
  "summary": "生物医学工程硕士第二年（60 ECTS，全英文，帕莱索校区）：将数学/物理科学、工程概念与技术应用于生命科学及疾病的理解、诊断与治疗；高度跨学科，设成像与影像建模、生物物理与生物力学、生物材料与生物器件、生物医学数据科学与应用四个方向。毕业去向为生命科学与生物医学工程的工程师、研究者与创业者。",
  "duration": "1年（M2，60 ECTS，全日制12个月，9月开学）",
  "teachingLanguage": "英语（全英文授课）",
  "language": "英语（官网语言要求：English）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "官网明确：申请人需具备工程、物理或应用数学的扎实背景，不需生物背景；⚠️ 适合工科/物理/应数背景、想转向生物医学交叉领域者",
  "updated": "2026-09"
 },

 {
  "id": "m2-mechanical-engineering-clinicians-mecencli",
  "title": "Master Year 2 in Mechanical Engineering for Clinicians (MECENCLI)",
  "titleCn": "面向临床医生的机械工程硕士第二年（MECENCLI）",
  "url": "https://www.ip-paris.fr/en/education/masters/health-engineering-program/master-year-2-mechanical-engineering-clinicians-mecencli",
  "updated": "2026-09"
 },

 {
  "id": "m1-environmental-energy-transport-economics-eeet",
  "title": "Master Year 1 in Environmental, Energy and Transport Economics (EEET)",
  "titleCn": "环境、能源与交通经济学硕士第一年（EEET，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/environmental-energy-and-transportation-economics-eeet-program/master-year-1-environmental-energy-and-transport-economics-eeet",
  "updated": "2026-09"
 },

 {
  "id": "m2-energy-economics",
  "title": "Master Year 2 in Energy Economics",
  "titleCn": "能源经济学硕士第二年（EEET，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/environmental-energy-and-transportation-economics-eeet-program/master-year-2-energy-economics",
  "updated": "2026-09"
 },

 {
  "id": "m2-environmental-sustainable-development-economics",
  "title": "Master Year 2 in Environmental and Sustainable Development Economics",
  "titleCn": "环境与可持续发展经济学硕士第二年（EEET，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/environmental-energy-and-transportation-economics-eeet-program/master-year-2-environmental-and-sustainable-development-economics",
  "updated": "2026-09"
 },

 {
  "id": "m2-prospective-modelling-economy-energy-environment",
  "title": "Master Year 2 in Prospective Modelling: Economy, Energy, Environment",
  "titleCn": "经济-能源-环境前瞻建模硕士第二年（EEET，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/environmental-energy-and-transportation-economics-eeet-program/master-year-2-prospective-modelling-economy-energy-environment",
  "updated": "2026-09"
 },

 {
  "id": "m2-transport-mobility-economics",
  "title": "Master Year 2 in Transport and Mobility Economics",
  "titleCn": "交通与出行经济学硕士第二年（EEET，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/environmental-energy-and-transportation-economics-eeet-program/master-year-2-transport-and-mobility-economics",
  "updated": "2026-09"
 },

 {
  "id": "m2-projet-innovation-conception",
  "title": "Master 2 Projet, Innovation, Conception",
  "titleCn": "项目、创新与设计硕士第二年（PIC，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/innovation-industry-and-society-program/master-2-projet-innovation-conception",
  "updated": "2026-09"
 },

 {
  "id": "m2-analyse-modelisation-simulation",
  "title": "Master 2 Analyse, Modélisation, Simulation",
  "titleCn": "分析、建模与仿真硕士第二年（AMS，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/mathematics-and-applications-program/master-2-analyse-modelisation-simulation",
  "summary": "分析与应用数学硕士的AMS方向（60 ECTS，法语授课，帕莱索与巴黎萨克雷大学等）：从偏微分方程等理论分析到数值模拟，覆盖建模-分析-模拟全链条，由IP Paris与巴黎萨克雷大学联名授予；培养掌握高水平数学工具、数值方法与编程语言的建模与计算方向人才，毕业可进入工业研发或读博。",
  "duration": "1年（M2，60 ECTS，全日制12个月，9月开学）",
  "teachingLanguage": "法语（官网授课语言：Français）",
  "language": "法语（官网语言要求：Français）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "需完成数学类M1（官网：M1 mathématiques或等价）；⚠️ 需扎实分析、方程与数值计算基础，法语授课建议法语B2",
  "updated": "2026-09"
 },

 {
  "id": "m1-mathematiques-appliquees",
  "title": "Master 1 Mathématiques Appliquées",
  "titleCn": "应用数学硕士第一年（M1，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/mathematics-and-applications-program/master-1-mathematiques-appliquees",
  "updated": "2026-09"
 },

 {
  "id": "m1-mathematiques-jacques-hadamard",
  "title": "Master 1 Mathématiques Jacques Hadamard",
  "titleCn": "雅克·阿达马数学硕士第一年（M1，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/mathematics-and-applications-program/master-1-mathematiques-jacques-hadamard",
  "updated": "2026-09"
 },

 {
  "id": "m2-analyse-arithmetique-geometrie",
  "title": "Master 2 Analyse, Arithmétique, Géométrie",
  "titleCn": "分析、算术与几何硕士第二年（M2，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/mathematics-and-applications-program/master-2-analyse-arithmetique-geometrie",
  "updated": "2026-09"
 },

 {
  "id": "m2-mathematiques-sciences-du-vivant",
  "title": "Master 2 Mathématiques pour les Sciences du Vivant",
  "titleCn": "生命科学数学硕士第二年（M2，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/mathematics-and-applications-program/master-2-mathematiques-pour-les-sciences-du-vivant",
  "updated": "2026-09"
 },

 {
  "id": "m2-mathematics-of-randomness",
  "title": "Master Year 2 Mathematics of Randomness",
  "titleCn": "随机性数学硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/mathematics-and-applications-program/master-year-2-mathematics-randomness",
  "updated": "2026-09"
 },

 {
  "id": "m2-mathematics-vision-learning",
  "title": "Master Year 2 Mathematics, Vision, Learning",
  "titleCn": "数学、视觉与学习硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/mathematics-and-applications-program/master-year-2-mathematics-vision-learning",
  "updated": "2026-09"
 },

 {
  "id": "m2-optimization",
  "title": "Master Year 2 Optimization",
  "titleCn": "最优化硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/mathematics-and-applications-program/master-year-2-optimization",
  "updated": "2026-09"
 },

 {
  "id": "m1-mechanics",
  "title": "Master Year 1 Mechanics",
  "titleCn": "力学硕士第一年（M1）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/mechanics-program/master-year-1-mechanics",
  "summary": "力学硕士第一年（60 ECTS，英/法双语，帕莱索校区），研究导向、覆盖从基础到应用的广泛力学领域：连续介质力学、流体力学、力学实验与数值方法、波与振动、流固耦合等核心课，并可选修材料科学、声学、智能材料与耦合系统、环境科学等方向，为第二年细分方向打基础。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英/法语（官网：English, French）",
  "language": "英语+法语（官网语言要求：English and/or French；建议法语A2-B2便利校园生活）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "工程、力学、数学或物理背景本科；⚠️ 需扎实的数学分析、线性代数与基础物理",
  "updated": "2026-09"
 },

 {
  "id": "m2-mechanics",
  "title": "Master Year 2 Mechanics",
  "titleCn": "力学硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/mechanics-program/master-year-2-mechanics",
  "updated": "2026-09"
 },

 {
  "id": "m1-nuclear-engineering",
  "title": "Master Year 1 Nuclear Engineering",
  "titleCn": "核工程硕士第一年（M1）",
  "url": "https://www.ip-paris.fr/en/education/masters/nuclear-engineering-program/master-year-1-nuclear-engineering",
  "summary": "核工程硕士第一年（60 ECTS，全英文，帕莱索校区+CEA国家核科学与技术研究所等），面向核电产业的当前与未来需求：优化现有反应堆性能、设计第三代核设施（反应堆与燃料循环工厂）、开发第四代工艺与系统、运行维护与废物退役管理；课程与研究实验室实习（可选物理与工程、化学与工程两轨）结合，毕业可直入核工程M2。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英语（全英文授课）",
  "language": "英语（官网语言要求：English）",
  "tuition": "见官方2026-27学费表\"Master Nuclear Energy\"栏（PDF注明该栏目费用仅供参考，2026-07-01后确认）",
  "background": "工程、物理、化学或相关本科；⚠️ 需热力学、流体力学等工科基础，部分课程在CEA萨克雷校区及合作院校开设",
  "updated": "2026-09"
 },

 {
  "id": "m2-nuclear-engineering",
  "title": "Master Year 2 Nuclear Engineering",
  "titleCn": "核工程硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/nuclear-engineering-program/master-year-2-nuclear-engineering",
  "updated": "2026-09"
 },

 {
  "id": "m1-physics",
  "title": "Master Year 1 Physics",
  "titleCn": "物理硕士第一年（M1）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/physics-program/master-year-1-physics",
  "summary": "物理硕士第一年（60 ECTS，全英文，帕莱索校区），为进入博士或工业界研发提供高级实验与理论物理训练；研究方向对应IP Paris实验室的核心主线：高能物理、凝聚态理论与理论等离子体、数学物理、粒子物理与天体物理、实验凝聚态、纳米科学、光学与等离子体物理、原子物理与冷原子气体、大型科研装备使用等。第一年下设高能物理（HEP）、激光/光学/光与物质相互作用（LOM）等专业方向。",
  "duration": "1年（M1，60 ECTS；完成M2后获硕士学位，总学制2年）",
  "teachingLanguage": "英语（全英文授课；部分选修课为法语）",
  "language": "英语（官网语言要求：English）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "物理、数学或工程物理本科；⚠️ 需扎实的量子力学、电动力学与数学物理基础，科研导向",
  "updated": "2026-09"
 },

 {
  "id": "m1-high-energy-physics",
  "title": "Master Year 1 High Energy Physics",
  "titleCn": "高能物理硕士第一年（M1）",
  "url": "https://www.ip-paris.fr/en/education/masters/physics-program/master-year-1-high-energy-physics",
  "updated": "2026-09"
 },

 {
  "id": "m2-high-energy-physics",
  "title": "Master Year 2 High Energy Physics",
  "titleCn": "高能物理硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/physics-program/master-year-2-high-energy-physics",
  "updated": "2026-09"
 },

 {
  "id": "m2-physics-plasmas-fusion",
  "title": "Master 2 Physique des Plasmas et de la Fusion",
  "titleCn": "等离子体与聚变物理硕士第二年（M2，官方法语名称）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/physics-program/master-2-physics-plasmas-and-fusion",
  "summary": "物理硕士的等离子体与聚变方向（60 ECTS，英语授课，帕莱索/巴黎萨克雷、索邦大学、CentraleSupélec等校区）——等离子体物理是跨学科研究领域：涵盖磁约束与惯性约束热核聚变、激光-等离子体相互作用、天体物理与工艺等离子体；面向能源、环境、空间、健康与国防等应用，培养能进入聚变/等离子体研究或工业研发的高级人才。",
  "duration": "1年（M2，60 ECTS，全日制12个月，9月开学）",
  "teachingLanguage": "英语（官网授课语言：English）",
  "language": "英语（官网语言要求：English）",
  "tuition": "€255/年（欧盟/欧洲经济区/瑞士）；€4,327/年（其他国籍）——2026-27官方学费表（国家轨项目，未列入国际项目表），每学年计费",
  "background": "需完成物理/应数M1（官网：物理硕士M1相应方向或等价）；⚠️ 需等离子体物理、电动力学基础",
  "updated": "2026-09"
 },

 {
  "id": "m2-physics-international-centre-fundamental-physics",
  "title": "Master Year 2 International Centre for Fundamental Physics",
  "titleCn": "国际基础物理中心硕士第二年（M2，ICFP）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/physics-program/master-year-2-international-centre-fundamental-physics",
  "updated": "2026-09"
 },

 {
  "id": "m2-physics-large-facilities",
  "title": "Master Year 2 Large Facilities",
  "titleCn": "大型设施（等离子体-激光-加速器-托卡马克 GI-PLATO）硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/physics-program/master-year-2-large-facilities",
  "updated": "2026-09"
 },

 {
  "id": "m2-physics-materials-science-nano-objects",
  "title": "Master Year 2 in Materials Science and Nano-Objects - Nanomat",
  "titleCn": "材料科学与纳米物体硕士第二年（M2，Nanomat）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/physics-program/master-year-2-materials-science-and-nano-objects-nanomat",
  "updated": "2026-09"
 },

 {
  "id": "m2-physics-by-research",
  "title": "Master Year 2 Physics by Research",
  "titleCn": "研究型物理硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/physics-program/master-year-2-physics-research",
  "updated": "2026-09"
 },

 {
  "id": "m2-physics-quantum-light-materials-nano-sciences",
  "title": "Master Year 2 Quantum, Light, Materials, and Nano Sciences",
  "titleCn": "量子、光、材料与纳米科学硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/physics-program/master-year-2-quantum-light-materials-and-nano-sciences",
  "updated": "2026-09"
 },

 {
  "id": "m2-physics-quantum-devices",
  "title": "Master Year 2 Quantum devices",
  "titleCn": "量子器件硕士第二年（M2）",
  "url": "https://www.ip-paris.fr/en/education/masters/physics-program/master-year-2-quantum-devices",
  "updated": "2026-09"
 },

 {
  "id": "m1-sociologie-quantitative-demographie",
  "title": "Master 1 Sociologie Quantitative et Démographie",
  "titleCn": "定量社会学与人口学硕士第一年（M1，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/sociology-program/master-1-sociologie-quantitative-et-demographie",
  "updated": "2026-09"
 },

 {
  "id": "m2-quantitative-sociology-computational-social-science",
  "title": "Master 2 Quantitative Sociology and Computational Social Science",
  "titleCn": "定量社会学与计算社会科学硕士第二年（M2，QSCSS）",
  "url": "https://www.ip-paris.fr/en/education/graduate-programs/masters-science/sociology-program/master-2-quantitative-sociology-and-computational-social-science",
  "updated": "2026-09"
 },

 {
  "id": "m1-transport-mobility-networks",
  "title": "Master Year 1 in Transport, Mobility, Networks",
  "titleCn": "交通、移动与网络硕士第一年（M1，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/transport-mobility-networks-program/master-year-1-transport-mobility-networks",
  "updated": "2026-09"
 },

 {
  "id": "m2-transport-sustainable-development",
  "title": "Master Year 2 in Transport and Sustainable Development",
  "titleCn": "交通与可持续发展硕士第二年（M2，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/transport-mobility-networks-program/master-year-2-transport-and-sustainable-development",
  "updated": "2026-09"
 },

 {
  "id": "m1-urban-planning",
  "title": "Master Year 1 in Urban Planning",
  "titleCn": "城市规划硕士第一年（M1，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/urban-planning-program/master-year-1-urban-planning",
  "updated": "2026-09"
 },

 {
  "id": "m2-urban-planning-amur",
  "title": "Master Year 2 in Urban Planning and Project Management (AMUR)",
  "titleCn": "城市规划与项目管理硕士第二年（M2，AMUR，法语授课）",
  "url": "https://www.ip-paris.fr/en/education/masters/urban-planning-program/master-year-2-urban-planning-and-project-management-amur",
  "updated": "2026-09"
 },


 ]
};
