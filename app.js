const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

const i18n={
zh:{
nav1:"生产力引擎",nav2:"数据看板",nav3:"产业变革",nav4:"未来与边界",eyebrow:"DATA STORY · 2026",hero1:"人工智能",hero2:"正在重写生产力。",
heroText:"当数据、算法、算力与产业场景连接起来，AI 不再只是一个工具，而开始成为改变生产方式、资源配置和创新速度的新型生产力基础设施。",
explore:"开始探索 ↓",sourcesBtn:"查看数据来源",statementTitle:"真正的变化，不是“AI 会做什么”，而是“人类可以把生产做到什么程度”。",
statementText:"新质生产力的核心不是单一技术，而是创新驱动、效率跃迁和产业重构。AI 通过感知、预测、生成、决策与自动化，把知识劳动中的重复环节转化为可规模化的计算能力。",
engineTitle:"一条从“信息”到“价值”的生产力链",engineSub:"拖动滑块，观察 AI 介入不同深度时，生产系统的能力如何变化。",
aiDepth:"AI 介入深度",s1:"辅助",s1d:"人做决定，AI 提供信息",s2:"协作",s2d:"人机共同完成任务",s3:"自动化",s3d:"AI 执行标准化流程",s4:"智能系统",s4d:"AI 参与预测、优化与决策",
prodLabel:"模拟生产率提升",m1:"重复劳动",m2:"知识处理",m3:"创新能力",m4:"决策速度",simNote:"* 这是用于解释机制的交互模拟，不是对企业真实收益的预测。",
dataTitle:"AI 正从“技术趋势”变成“经济变量”",dataSub:"把抽象的“人工智能很重要”，转换成可以观察的投资、采用率、成本和价值。",
kpi1:"全球企业 AI 投资规模",kpi2:"报告使用 AI 的组织比例",kpi3:"生成式 AI 达到 53% 人口采用率仅用约三年",kpi4:"达到 GPT-3.5 水平的模型调用成本约下降 280 倍",
adoptionTitle:"组织 AI 使用率",investmentTitle:"全球企业 AI 投资",insight:"当 AI 的采用率、投资规模和使用成本同时发生变化，AI 就不再只是“一个软件功能”，而开始成为生产体系的基础设施。",
industryTitle:"同一种 AI，正在进入完全不同的生产现场",industrySub:"点击行业，观察“输入 → AI → 生产力结果”的变化。",
shiftTitle:"生产力跃迁的关键，是“规模化”。",shiftText:"单个员工使用 AI，是工具升级；企业把 AI 嵌入流程，是组织升级；当 AI 与数据、算力、机器人和行业知识连接起来，才会形成新的生产系统。",
step1:"工具",step1d:"提高个人效率",step2:"流程",step2d:"重构组织协作",step3:"系统",step3d:"改变产业结构",
futureTitle:"新质生产力，不等于“无条件自动化”",futureSub:"真正有价值的 AI，应该同时回答三个问题：创造了什么、谁获得了价值、风险是否可控。",
goodTitle:"创造",goodText:"更快的研发、更低的试错成本、更广的知识获取，以及新的产品和服务。",
peopleTitle:"赋能",peopleText:"AI 可以把经验和知识“工具化”，帮助更多人完成过去需要高度专业技能的任务。",
riskTitle:"约束",riskText:"幻觉、偏见、隐私、能源消耗与就业结构变化提醒我们：生产力越强，治理越重要。",
closing:"AI 的意义，不只是让机器更聪明，而是让整个生产系统更有创造力。",closingSub:"The point is not smarter machines. It is a more capable production system.",
sourceTitle:"数据从哪里来？",sourceNote:"页面中的“生产率提升”滑块属于机制演示；经济指标均按公开报告中的口径标注年份，避免把模拟值误解为真实预测。"
},
en:{
nav1:"Productivity Engine",nav2:"Data Dashboard",nav3:"Industry Shift",nav4:"Future & Limits",eyebrow:"DATA STORY · 2026",hero1:"Artificial",hero2:"intelligence rewrites productivity.",
heroText:"When data, algorithms, compute and real-world industries connect, AI becomes more than a tool: it becomes infrastructure for changing how we produce, allocate resources and innovate.",
explore:"Explore ↓",sourcesBtn:"Data sources",statementTitle:"The real question is not “what can AI do?” but “how far can humans take production?”",
statementText:"New quality productive forces are driven by innovation, efficiency and structural transformation. AI turns repetitive knowledge work into scalable computational capability through perception, prediction, generation, decision-making and automation.",
engineTitle:"A productivity chain from information to value",engineSub:"Drag the slider to see how deeper AI integration changes a production system.",
aiDepth:"AI integration depth",s1:"Assist",s1d:"People decide; AI provides information",s2:"Collaborate",s2d:"People and AI complete tasks together",s3:"Automate",s3d:"AI executes standardized workflows",s4:"Intelligent system",s4d:"AI joins prediction, optimization and decisions",
prodLabel:"Simulated productivity gain",m1:"Repetitive work",m2:"Knowledge work",m3:"Innovation",m4:"Decision speed",simNote:"* This is an explanatory simulation, not a forecast of real company returns.",
dataTitle:"AI is becoming an economic variable",dataSub:"Turn the abstract idea that “AI matters” into observable investment, adoption, cost and value.",
kpi1:"Global corporate AI investment",kpi2:"Organizations reporting AI use",kpi3:"Generative AI reached 53% population adoption in about three years",kpi4:"Approximate decline in GPT-3.5-level inference cost",
adoptionTitle:"Organizational AI adoption",investmentTitle:"Global corporate AI investment",insight:"When adoption, investment and usage costs move together, AI stops looking like a software feature and starts looking like production infrastructure.",
industryTitle:"The same AI enters very different production floors",industrySub:"Click an industry to see input → AI → productivity outcome.",
shiftTitle:"The key to a productivity leap is scale.",shiftText:"One employee using AI is a tool upgrade. A company embedding AI into workflows is organizational change. Connecting AI with data, compute, robotics and domain knowledge creates a new production system.",
step1:"Tool",step1d:"Increase individual efficiency",step2:"Process",step2d:"Redesign collaboration",step3:"System",step3d:"Transform industries",
futureTitle:"New quality productive forces do not mean automation without limits",futureSub:"Valuable AI should answer three questions: what value is created, who gets it, and whether risks are controlled.",
goodTitle:"Create",goodText:"Faster R&D, lower experimentation costs, broader access to knowledge, and new products and services.",
peopleTitle:"Empower",peopleText:"AI can turn expertise into tools and help more people perform tasks that once required highly specialized skills.",
riskTitle:"Constrain",riskText:"Hallucinations, bias, privacy, energy use and labor-market shifts remind us: the stronger the productivity engine, the more important governance becomes.",
closing:"AI matters not only because it makes machines smarter, but because it can make the whole production system more creative.",closingSub:"The point is not smarter machines. It is a more capable production system.",
sourceTitle:"Where does the data come from?",sourceNote:"The productivity slider is a mechanism demo. Economic indicators retain the year and methodology of their public sources."
}};

let lang="zh";
function setLang(next){lang=next;document.documentElement.lang=lang==="zh"?"zh-CN":"en";$$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(i18n[lang][k])el.textContent=i18n[lang][k]});$("#langBtn").textContent=lang==="zh"?"EN":"中";drawInvestment();}
$("#langBtn").onclick=()=>setLang(lang==="zh"?"en":"zh");
$("#themeBtn").onclick=()=>document.body.classList.toggle("dark");

const industries={
zh:[
["✦","制造业","机器视觉、预测性维护与智能排产，把设备数据转化为更少停机和更稳定的产能。","传感器 + 设备数据","预测维护 + 智能排产"],
["⌁","医疗","AI 帮助医生从影像、病历和科研数据中快速发现模式，把诊断辅助与药物研发的搜索空间缩小。","医学影像 + 病历","辅助诊断 + 科研发现"],
["◫","教育","生成式 AI 可以把知识变成个性化讲解、练习和反馈，让教师把时间从重复批改转向更高价值的教学设计。","学习行为 + 知识库","个性化教学 + 反馈"],
["◎","科研","AI 加速文献理解、实验设计、材料/药物搜索与模拟，让“提出假设—验证—迭代”更快。","论文 + 实验数据","发现候选 + 模拟验证"],
["▣","物流","需求预测、路径优化和仓储自动化，让有限的车辆、仓库和人力得到更高效配置。","订单 + 路网 + 库存","预测 + 调度 + 自动化"]
],
en:[
["✦","Manufacturing","Computer vision, predictive maintenance and intelligent scheduling turn machine data into less downtime and steadier capacity.","Sensors + machine data","Predictive maintenance + scheduling"],
["⌁","Healthcare","AI finds patterns across images, records and research data, narrowing search spaces for diagnosis support and drug discovery.","Medical images + records","Decision support + discovery"],
["◫","Education","Generative AI turns knowledge into personalized explanations, practice and feedback, freeing teachers for higher-value design.","Learning behavior + knowledge","Personalized learning + feedback"],
["◎","Science","AI accelerates literature review, experiment design and material/drug search, shortening hypothesis-test-iteration loops.","Papers + experiments","Candidate discovery + simulation"],
["▣","Logistics","Demand forecasting, routing and warehouse automation help allocate vehicles, inventory and labor more efficiently.","Orders + roads + inventory","Forecasting + scheduling + automation"]
]};
function renderIndustries(){
  const arr=industries[lang], tabs=$("#industryTabs");tabs.innerHTML="";
  arr.forEach((d,i)=>{const b=document.createElement("button");b.textContent=d[1];b.onclick=()=>selectIndustry(i);if(i===0)b.classList.add("active");tabs.appendChild(b)});
  selectIndustry(0);
}
function selectIndustry(i){
  const d=industries[lang][i];$("#industryIcon").textContent=d[0];$("#industryName").textContent=d[1];$("#industryDesc").textContent=d[2];$("#flowInput").textContent=d[3];$("#flowOutput").textContent=d[4];
  $$("#industryTabs button").forEach((b,j)=>b.classList.toggle("active",j===i));
}
renderIndustries();
const oldSetLang=setLang;
setLang=function(next){oldSetLang(next);renderIndustries()};

function updateEngine(){
  const v=+$("#depth").value;$("#depthValue").textContent=v+"%";
  const prod=Math.round(4+v*.57);$("#prodValue").textContent=prod;
  const vals=[Math.max(5,100-v*.72),25+v*.7,10+v*.78,20+v*.75];
  $$(".mini-bars b").forEach((b,i)=>b.style.width=vals[i]+"%");
  $$(".stage").forEach((s,i)=>s.classList.toggle("active",v>=(i*25+10)));
}
$("#depth").oninput=updateEngine;updateEngine();

function drawAdoption(){
  const data=[["2023",55],["2024",78],["2025",88]], box=$("#adoptionChart");box.innerHTML="";
  data.forEach(([y,v])=>{const b=document.createElement("div");b.className="bar";b.style.height=(v/100*185)+"px";b.innerHTML=`<span>${v}%</span><label>${y}</label>`;box.appendChild(b)});
}
function drawInvestment(){
  const data=[["2013",14.57],["2024",252.3],["2025",581.69]], w=520,h=200,p=20;
  const max=600, pts=data.map((d,i)=>[p+i*(w-2*p)/(data.length-1),h-p-(d[1]/max)*(h-2*p)]);
  const labels=data.map((d,i)=>`<text x="${pts[i][0]}" y="${h-2}" text-anchor="middle" fill="#98a2b3" font-size="10">${d[0]}</text>`).join("");
  const vals=data.map((d,i)=>`<text x="${pts[i][0]}" y="${pts[i][1]-12}" text-anchor="middle" fill="#f7f8ff" font-size="11">${d[1]}B</text>`).join("");
  const path=pts.map((p,i)=>(i?"L":"M")+p[0]+" "+p[1]).join(" ");
  $("#investmentChart").innerHTML=`<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><line x1="${p}" y1="${h-p}" x2="${w-p}" y2="${h-p}" stroke="rgba(255,255,255,.12)"/><path d="${path}" fill="none" stroke="#9b8cff" stroke-width="3"/><path d="${path} L ${pts.at(-1)[0]} ${h-p} L ${pts[0][0]} ${h-p} Z" fill="rgba(109,93,252,.12)"/>${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="#74e0d4"/>`).join("")}${vals}${labels}</svg>`;
}
drawAdoption();drawInvestment();

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});$$(".reveal").forEach(e=>io.observe(e));
const counters=$$(".kpi strong");let counted=false;
const cio=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)&&!counted){counted=true;counters.forEach(el=>{const target=+el.dataset.count;let n=0;const step=target/45;const timer=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(timer)}el.textContent=target%1?n.toFixed(2):Math.round(n)},20)})}},{threshold:.3});cio.observe($(".kpi-grid"));
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;$("#progressBar").style.width=(scrollY/h*100)+"%"});
