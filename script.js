/*
 * Tech Skill Gap & Career Roadmap Generator
 * File: script.js — All application behaviour and data
 */
'use strict';

// ===== I18N =====
// ═════════════════════════════════════════════════════════════
// I18N  — CHANGED: A1
// ═════════════════════════════════════════════════════════════
const I18N = {
  id: {
    appTitle:            '🧭 Generator Celah Skill &amp; Peta Karier Teknologi',
    appSubtitle:         'Pilih jalur karier · tandai skill yang dimiliki · dapatkan roadmap personal',
    chooseRole:          'Pilih Target Jalur Karier',
    roleSelectPlaceholder:'— Pilih peran untuk memulai —',
    studyHours:          'Jam belajar/minggu:',
    btnReset:            '↺ Reset',
    btnCopy:             '⎘ Salin Roadmap',
    btnPrint:            '🖨 Cetak / PDF',
    copied:              '✓ Disalin!',
    btnExport:           '⬇ Export JSON',
    btnImport:           '⬆ Import JSON',
    checklistTitle:      'Daftar Skill Penting',
    checklistEmpty:      'Pilih jalur karier di atas untuk melihat skill yang dibutuhkan.',
    scoreTitle:          'Skor Kesiapan',
    scorePlaceholder:    'Skor kesiapan akan muncul di sini.',
    gapTitle:            'Ringkasan Celah Skill',
    gapPlaceholder:      'Skill yang kurang akan muncul di sini.',
    roadmapTitle:        'Peta Pembelajaran Personal',
    roadmapPlaceholder:  'Peta langkah-langkah belajar akan dibuat di sini.',
    matcherTitle:        'Pencocokan Skill Lowongan Kerja',
    matcherPrivacy:      '🔒 Analisis berjalan sepenuhnya di browser Anda. Tidak ada data yang dikirimkan ke server.',
    matcherPlaceholder:  'Tempel teks lowongan kerja di sini (maks. 5000 karakter)…',
    btnAnalyze:          '🔍 Analisis',
    btnClear:            '✕ Hapus',
    overallReadiness:    'Kesiapan Keseluruhan',
    notStarted:          'Belum Dimulai',
    beginner:            'Pemula 🌱',
    developing:          'Berkembang 📚',
    proficient:          'Mahir ⚡',
    advanced:            'Lanjutan 🔥',
    jobReady:            'Siap Kerja! 🎉',
    statTotal:           'Total',
    statMastered:        'Dikuasai',
    statLearning:        'Dipelajari',
    statGap:             'Celah',
    weeksEst:            '⏱ Estimasi siap kerja: ~{w} minggu dengan {h} jam/minggu',
    nextBestSkill:       'Skill Terbaik Berikutnya',
    officialResource:    '→ Sumber resmi',
    noGap:               'Tidak ada celah skill — kamu sudah siap!',
    gapCount:            '{n} skill yang masih perlu dikuasai:',
    inProgress:          '(sedang dipelajari)',
    allDoneRoadmap:      'Selamat! Kamu telah menyelesaikan semua fase roadmap.',
    levelNone:           'Belum',
    levelLearning:       'Belajar',
    levelMastered:       'Dikuasai',
    selectAll:           'Pilih semua',
    clearAll:            'Hapus',
    filterPlaceholder:   'Cari skill…',
    inDemand:            'Dicari',
    matchPctLabel:       'Kecocokan Pasar',
    matchFoundTitle:     'Skill Dicari yang Ditemukan',
    matchGapTitle:       'Celah Prioritas (Dicari)',
    matchOtherTitle:     'Istilah Teknis Lain Ditemukan',
    matchNoResult:       'Tidak ada skill yang cocok dengan teks lowongan ini untuk peran yang dipilih.',
    matchNoRole:         'Pilih peran terlebih dahulu sebelum menganalisis lowongan.',
    matchEmpty:          'Tempelkan teks lowongan kerja, lalu klik Analisis.',
    addCustom:           'Tambah sebagai skill kustom',
    importOk:            '✓ Data berhasil diimpor',
    importErr:           '✗ JSON tidak valid: ',
    phaseLabel:          'Fase',
    ofText:              'dari',
    skillsMastered:      'skill dikuasai',
    learningText:        'sedang dipelajari',
    remainingText:       'tersisa',
    // CHANGED: Item 1 – sample button + Item 2 – matcher hint
    btnSample:           '📄 Coba Teks Contoh',
    matcherHint:         "Tempel teks lowongan atau klik 'Coba Teks Contoh'.",
    // CHANGED: career info card labels
    careerInfoTitle:     'Informasi Gaji & Prospek Kerja',
    careerSalaryLabel:   'Kisaran Gaji (Junior–Mid)',
    careerSalaryUnit:    '/ bulan',
    careerOverviewLabel: 'Gambaran Peran',
    careerDemandLabel:   'Permintaan Pasar',
    careerSourceLabel:   'Sumber',
    careerDisclaimer:    'Perkiraan kasar, bukan data resmi. Gaji berbeda menurut kota, perusahaan, dan pengalaman.',
    demandVeryHigh:      '🔥 Sangat Tinggi',
    demandHigh:          '⬆ Tinggi',
    demandMedium:        '➡ Sedang',
  },
  en: {
    appTitle:            '🧭 Tech Skill Gap &amp; Career Roadmap Generator',
    appSubtitle:         'Select a target role · check your skills · get your personalised roadmap',
    chooseRole:          'Choose Your Target Career Path',
    roleSelectPlaceholder:'— Select a role to get started —',
    studyHours:          'Study hrs/week:',
    btnReset:            '↺ Reset',
    btnCopy:             '⎘ Copy Roadmap',
    btnPrint:            '🖨 Print / PDF',
    copied:              '✓ Copied!',
    btnExport:           '⬇ Export JSON',
    btnImport:           '⬆ Import JSON',
    checklistTitle:      'Essential Skills Checklist',
    checklistEmpty:      'Select a career path above to see required skills.',
    scoreTitle:          'Readiness Score',
    scorePlaceholder:    'Your readiness score will appear here.',
    gapTitle:            'Skill Gap Summary',
    gapPlaceholder:      'Missing skills will appear here.',
    roadmapTitle:        'Personalised Learning Roadmap',
    roadmapPlaceholder:  'Your step-by-step roadmap will be generated here.',
    matcherTitle:        'Job Posting Skill Matcher',
    matcherPrivacy:      '🔒 Analysis runs locally in your browser. Nothing is sent anywhere.',
    matcherPlaceholder:  'Paste a job posting text here (max 5000 chars)…',
    btnAnalyze:          '🔍 Analyze',
    btnClear:            '✕ Clear',
    overallReadiness:    'Overall Readiness',
    notStarted:          'Not Started',
    beginner:            'Beginner 🌱',
    developing:          'Developing 📚',
    proficient:          'Proficient ⚡',
    advanced:            'Advanced 🔥',
    jobReady:            'Job Ready! 🎉',
    statTotal:           'Total',
    statMastered:        'Mastered',
    statLearning:        'Learning',
    statGap:             'Gaps',
    weeksEst:            '⏱ Est. job-ready: ~{w} wks at {h} hrs/week',
    nextBestSkill:       'Next Best Skill',
    officialResource:    '→ Official resource',
    noGap:               'No skill gaps — you\'re fully equipped!',
    gapCount:            '{n} skill{s} still to master:',
    inProgress:          '(in progress)',
    allDoneRoadmap:      'Congratulations! You\'ve completed all phases.',
    levelNone:           'None',
    levelLearning:       'Learning',
    levelMastered:       'Mastered',
    selectAll:           'Select all',
    clearAll:            'Clear',
    filterPlaceholder:   'Search skills…',
    inDemand:            'In demand',
    matchPctLabel:       'Market Match',
    matchFoundTitle:     'In-Demand Skills Found',
    matchGapTitle:       'Priority Gaps (In-Demand)',
    matchOtherTitle:     'Other Tech Terms Found',
    matchNoResult:       'No skill matches found in this job posting for the selected role.',
    matchNoRole:         'Select a role first before analyzing a job posting.',
    matchEmpty:          'Paste a job posting then click Analyze.',
    addCustom:           'Add as custom skill',
    importOk:            '✓ Data imported successfully',
    importErr:           '✗ Invalid JSON: ',
    phaseLabel:          'Phase',
    ofText:              'of',
    skillsMastered:      'skills mastered',
    learningText:        'in progress',
    remainingText:       'remaining',
    // CHANGED: Item 1 – sample button + Item 2 – matcher hint
    btnSample:           '📄 Try Sample Text',
    matcherHint:         "Paste a job posting or click 'Try Sample Text'.",
    // CHANGED: career info card labels
    careerInfoTitle:     'Salary & Job Market Info',
    careerSalaryLabel:   'Salary Range (Junior–Mid)',
    careerSalaryUnit:    '/ month',
    careerOverviewLabel: 'Role Overview',
    careerDemandLabel:   'Market Demand',
    careerSourceLabel:   'Source',
    careerDisclaimer:    'Rough estimate only, not official data. Salary varies by city, company, and experience.',
    demandVeryHigh:      '🔥 Very High',
    demandHigh:          '⬆ High',
    demandMedium:        '➡ Medium',
  }
};

// CHANGED: A1 – translation helper
let currentLang = 'id';
function t(key, params) {
  const dict = I18N[currentLang] || I18N.en;
  let str = (key in dict) ? dict[key] : (I18N.en[key] || key);
  if (params) {
    Object.keys(params).forEach(k => { str = str.replace('{' + k + '}', params[k]); });
  }
  return str;
}

// Apply all data-i18n text nodes + placeholder attrs in the DOM
function applyI18N() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    // Use innerHTML only for the title which contains &amp; — safe hardcoded strings
    if (key === 'appTitle') { el.innerHTML = t(key); }
    else { el.textContent = t(key); }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.documentElement.lang = currentLang;
}

// ===== DATA =====
// ═════════════════════════════════════════════════════════════
// DATA
// ═════════════════════════════════════════════════════════════
// Each skill: { id, name, cat, tip, hours, requires?, resource?, keywords? }
// CHANGED: C8 – keywords arrays added; B3 – new roles

const ROLES = {
  frontend: {
    label: 'Frontend Developer',
    color: 'badge-blue',
    skills: [
      { id:'html',    name:'HTML5 & Semantic Markup',    cat:'Foundation',    tip:'Document structure, accessibility, SEO basics', hours:12, resource:'https://developer.mozilla.org/en-US/docs/Web/HTML', keywords:['html','html5','semantic html','markup'] },
      { id:'css',     name:'CSS3 & Responsive Design',   cat:'Foundation',    tip:'Flexbox, Grid, media queries, animations',      hours:18, resource:'https://developer.mozilla.org/en-US/docs/Web/CSS', keywords:['css','css3','sass','scss','tailwind','responsive design'] },
      { id:'js',      name:'JavaScript (ES6+)',           cat:'Core Language', tip:'DOM, events, async/await, modules',              hours:40, resource:'https://developer.mozilla.org/en-US/docs/Web/JavaScript', keywords:['javascript','js','es6','es2015','vanilla js','ecmascript'] },
      { id:'ts',      name:'TypeScript',                  cat:'Core Language', tip:'Types, interfaces, generics',                   hours:20, requires:['js'], resource:'https://www.typescriptlang.org/docs/', keywords:['typescript','ts'] },
      { id:'react',   name:'React',                       cat:'Framework',     tip:'Components, hooks, state management',           hours:30, requires:['js'], resource:'https://react.dev', keywords:['react','react.js','reactjs','react hooks','next.js','nextjs'] },
      { id:'git',     name:'Git & Version Control',       cat:'Tooling',       tip:'Branching, PRs, rebasing',                      hours:8,  resource:'https://git-scm.com/doc', keywords:['git','github','gitlab','version control','source control'] },
      { id:'webpack', name:'Build Tools (Vite/Webpack)',  cat:'Tooling',       tip:'Bundling, tree-shaking, code splitting',         hours:10, requires:['js'], resource:'https://vitejs.dev/guide/', keywords:['webpack','vite','rollup','bundler','esbuild'] },
      { id:'testing', name:'Testing (Jest/Vitest)',        cat:'Quality',       tip:'Unit tests, mocking, TDD basics',               hours:15, requires:['js'], resource:'https://jestjs.io/docs/getting-started', keywords:['jest','vitest','testing','unit test','cypress','playwright'] },
      { id:'a11y',    name:'Web Accessibility (WCAG)',    cat:'Quality',       tip:'ARIA, keyboard nav, screen readers',             hours:10, requires:['html'], resource:'https://www.w3.org/WAI/WCAG22/quickref/', keywords:['accessibility','wcag','aria','a11y'] },
      { id:'perf',    name:'Web Performance',             cat:'Advanced',      tip:'Core Web Vitals, lazy loading, caching',         hours:12, requires:['html','css','js'], resource:'https://web.dev/performance/', keywords:['web performance','core web vitals','lighthouse','performance optimization'] },
      { id:'api',     name:'REST & GraphQL APIs',         cat:'Advanced',      tip:'Fetch, Axios, Apollo Client',                   hours:14, requires:['js'], resource:'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API', keywords:['rest','graphql','api','fetch','axios','apollo'] },
      { id:'cicd',    name:'CI/CD Basics',                cat:'DevOps',        tip:'GitHub Actions, Netlify, Vercel',               hours:8,  requires:['git'], resource:'https://docs.github.com/en/actions', keywords:['ci/cd','github actions','continuous integration','continuous deployment','devops'] },
    ],
    roadmap: [
      { phase:'Phase 1 — Foundations',        skills:['html','css','js'],                   note:'Master the core building blocks of the web.' },
      { phase:'Phase 2 — Professional Stack',  skills:['ts','react','git','webpack'],        note:'Build production-ready apps with modern tooling.' },
      { phase:'Phase 3 — Mastery & DevOps',   skills:['testing','a11y','perf','api','cicd'], note:'Level up with quality, performance, and deployment.' },
    ],
  },

  backend: {
    label: 'Backend Developer',
    color: 'badge-green',
    skills: [
      { id:'python',   name:'Python or Node.js',           cat:'Core Language', tip:'Syntax, OOP, async patterns',            hours:40, resource:'https://docs.python.org/3/', keywords:['python','node.js','nodejs','node','django','flask','express'] },
      { id:'sql',      name:'SQL & Relational DBs',        cat:'Database',      tip:'Queries, joins, indexing, transactions', hours:20, resource:'https://www.postgresql.org/docs/', keywords:['sql','postgresql','postgres','mysql','database','rdbms'] },
      { id:'nosql',    name:'NoSQL (MongoDB/Redis)',        cat:'Database',      tip:'Document stores, caching strategies',    hours:12, requires:['sql'], resource:'https://www.mongodb.com/docs/', keywords:['nosql','mongodb','redis','dynamodb','cassandra'] },
      { id:'rest',     name:'REST API Design',              cat:'Architecture',  tip:'HTTP verbs, status codes, versioning',   hours:15, requires:['python'], resource:'https://developer.mozilla.org/en-US/docs/Web/HTTP', keywords:['rest','restful','api design','http','openapi','swagger'] },
      { id:'auth',     name:'Auth & Security (JWT/OAuth)', cat:'Security',      tip:'Tokens, sessions, OWASP Top 10',         hours:14, requires:['rest'], resource:'https://jwt.io/introduction', keywords:['jwt','oauth','oauth2','authentication','authorization','security'] },
      { id:'docker',   name:'Docker & Containers',         cat:'DevOps',        tip:'Dockerfiles, volumes, networking',        hours:16, resource:'https://docs.docker.com/get-started/', keywords:['docker','containers','containerization','dockerfile'] },
      { id:'cloud',    name:'Cloud Platforms (AWS/GCP)',   cat:'DevOps',        tip:'EC2, Lambda, managed services',           hours:20, requires:['docker'], resource:'https://aws.amazon.com/getting-started/', keywords:['aws','gcp','azure','cloud','lambda','ec2','s3'] },
      { id:'git2',     name:'Git & Version Control',       cat:'Tooling',       tip:'Branching strategies, code reviews',      hours:8,  resource:'https://git-scm.com/doc', keywords:['git','github','gitlab','version control'] },
      { id:'testing2', name:'Unit & Integration Testing',  cat:'Quality',       tip:'pytest, Jest, test coverage',             hours:14, requires:['python'], resource:'https://docs.pytest.org/en/stable/', keywords:['pytest','testing','unit test','integration test','tdd'] },
      { id:'micro',    name:'Microservices Architecture',  cat:'Advanced',      tip:'Service mesh, message queues, gRPC',      hours:20, requires:['docker','rest'], resource:'https://microservices.io', keywords:['microservices','grpc','kafka','rabbitmq','message queue','service mesh'] },
      { id:'perf2',    name:'Performance & Caching',       cat:'Advanced',      tip:'Redis, CDN, DB query optimisation',        hours:12, requires:['nosql'], resource:'https://redis.io/docs/', keywords:['caching','redis','cdn','performance','optimization'] },
      { id:'graphql',  name:'GraphQL',                     cat:'Advanced',      tip:'Schema design, resolvers, subscriptions',  hours:14, requires:['rest'], resource:'https://graphql.org/learn/', keywords:['graphql','apollo','hasura'] },
    ],
    roadmap: [
      { phase:'Phase 1 — Core Backend',    skills:['python','sql','git2'],                         note:'Build a strong programming and data foundation.' },
      { phase:'Phase 2 — APIs & Security', skills:['rest','auth','nosql','testing2'],               note:'Design secure, well-tested APIs and data layers.' },
      { phase:'Phase 3 — Cloud & Scale',   skills:['docker','cloud','micro','perf2','graphql'],     note:'Deploy, scale, and optimise production systems.' },
    ],
  },

  datascientist: {
    label: 'Data Scientist',
    color: 'badge-orange',
    skills: [
      { id:'pyds',   name:'Python for Data Science',      cat:'Core Language', tip:'NumPy, list comprehensions, OOP',              hours:30, resource:'https://docs.python.org/3/', keywords:['python','numpy','scipy','pandas'] },
      { id:'sql2',   name:'SQL & Database Querying',      cat:'Data',          tip:'Window functions, CTEs, aggregations',         hours:16, resource:'https://www.postgresql.org/docs/', keywords:['sql','database','query','postgresql'] },
      { id:'pandas', name:'Pandas & Data Wrangling',      cat:'Data',          tip:'DataFrames, merging, cleaning, reshaping',     hours:20, requires:['pyds'], resource:'https://pandas.pydata.org/docs/', keywords:['pandas','dataframe','data wrangling','etl'] },
      { id:'viz',    name:'Data Visualisation',           cat:'Communication', tip:'Matplotlib, Seaborn, Plotly, storytelling',    hours:14, requires:['pandas'], resource:'https://matplotlib.org/stable/tutorials/', keywords:['matplotlib','seaborn','plotly','tableau','power bi','visualization'] },
      { id:'stats',  name:'Statistics & Probability',    cat:'Foundation',    tip:'Distributions, hypothesis testing, Bayesian',  hours:24, resource:'https://www.khanacademy.org/math/statistics-probability', keywords:['statistics','probability','hypothesis testing','regression','bayesian'] },
      { id:'ml',     name:'Machine Learning (Sklearn)',   cat:'ML',            tip:'Regression, classification, clustering',       hours:30, requires:['pyds','stats'], resource:'https://scikit-learn.org/stable/user_guide.html', keywords:['machine learning','ml','scikit-learn','sklearn','regression','classification','clustering'] },
      { id:'fe',     name:'Feature Engineering',         cat:'ML',            tip:'Encoding, scaling, selection, PCA',            hours:14, requires:['ml'], resource:'https://scikit-learn.org/stable/modules/preprocessing.html', keywords:['feature engineering','pca','feature selection'] },
      { id:'jupyter',name:'Jupyter & Reproducibility',   cat:'Tooling',       tip:'Notebooks, nbconvert, DVC',                    hours:8,  resource:'https://jupyter.org/documentation', keywords:['jupyter','notebook','colab','google colab'] },
      { id:'git3',   name:'Git & Collaboration',         cat:'Tooling',       tip:'Data science workflows with Git',              hours:8,  resource:'https://git-scm.com/doc', keywords:['git','github','version control'] },
      { id:'deep',   name:'Deep Learning Basics',        cat:'Advanced',      tip:'Neural nets, backprop, TensorFlow/Keras',      hours:30, requires:['ml'], resource:'https://keras.io/getting_started/', keywords:['deep learning','neural network','tensorflow','keras','pytorch'] },
      { id:'cloud2', name:'Cloud ML (SageMaker/Vertex)', cat:'Advanced',      tip:'Managed notebooks, training jobs, endpoints',  hours:18, requires:['deep'], resource:'https://docs.aws.amazon.com/sagemaker/', keywords:['sagemaker','vertex ai','azure ml','cloud ml'] },
      { id:'comm',   name:'Storytelling with Data',      cat:'Communication', tip:'Dashboards, executive summaries, slide decks', hours:12, resource:'https://www.storytellingwithdata.com', keywords:['dashboard','storytelling','powerpoint','presentation'] },
    ],
    roadmap: [
      { phase:'Phase 1 — Data Foundations',      skills:['pyds','sql2','stats','pandas'],       note:'Build the numerical and data-handling bedrock.' },
      { phase:'Phase 2 — Analysis & ML',         skills:['viz','ml','fe','jupyter','git3'],      note:'Analyse data and build your first ML models.' },
      { phase:'Phase 3 — Advanced & Deployment', skills:['deep','cloud2','comm'],                note:'Scale to deep learning and communicate insights.' },
    ],
  },

  aiml: {
    label: 'AI / ML Engineer',
    color: 'badge-purple',
    skills: [
      { id:'pyml',   name:'Python (Advanced)',             cat:'Core Language', tip:'Generators, decorators, concurrency',             hours:24, resource:'https://docs.python.org/3/', keywords:['python','async','multiprocessing'] },
      { id:'linear', name:'Linear Algebra & Calculus',    cat:'Mathematics',   tip:'Matrices, gradients, chain rule',                 hours:30, resource:'https://www.khanacademy.org/math/linear-algebra', keywords:['linear algebra','calculus','mathematics','matrix'] },
      { id:'stats2', name:'Probability & Statistics',     cat:'Mathematics',   tip:'MLE, Bayesian inference, distributions',          hours:24, resource:'https://www.khanacademy.org/math/statistics-probability', keywords:['statistics','probability','bayesian'] },
      { id:'sklearn',name:'Scikit-learn',                  cat:'ML',            tip:'Supervised/unsupervised, pipelines, tuning',      hours:22, requires:['pyml'], resource:'https://scikit-learn.org/stable/user_guide.html', keywords:['scikit-learn','sklearn','machine learning','ml'] },
      { id:'pytorch',name:'PyTorch',                       cat:'Deep Learning', tip:'Tensors, autograd, custom layers',                hours:35, requires:['sklearn','linear'], resource:'https://pytorch.org/tutorials/', keywords:['pytorch','torch','deep learning','neural network'] },
      { id:'cnn',    name:'CNNs & Computer Vision',       cat:'Deep Learning', tip:'ResNet, YOLO, image augmentation',                hours:25, requires:['pytorch'], resource:'https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html', keywords:['cnn','computer vision','image recognition','yolo','resnet','opencv'] },
      { id:'nlp',    name:'NLP & Transformers',           cat:'Deep Learning', tip:'BERT, GPT, HuggingFace, fine-tuning',             hours:30, requires:['pytorch'], resource:'https://huggingface.co/learn/nlp-course/', keywords:['nlp','transformers','bert','gpt','huggingface','language model','llm'] },
      { id:'mlops',  name:'MLOps & Model Serving',        cat:'Production',    tip:'MLflow, FastAPI, Docker, CI/CD for ML',           hours:25, requires:['pytorch'], resource:'https://mlflow.org/docs/latest/index.html', keywords:['mlops','mlflow','model serving','fastapi','kubeflow'] },
      { id:'cloud3', name:'Cloud ML Platforms',           cat:'Production',    tip:'SageMaker, Vertex AI, AzureML',                   hours:18, requires:['mlops'], resource:'https://docs.aws.amazon.com/sagemaker/', keywords:['sagemaker','vertex ai','azure ml','cloud','aws'] },
      { id:'data',   name:'Data Pipelines (Spark/Kafka)', cat:'Data Eng.',     tip:'ETL, streaming, feature stores',                  hours:20, resource:'https://spark.apache.org/docs/latest/', keywords:['spark','kafka','airflow','data pipeline','etl','feature store'] },
      { id:'rl',     name:'Reinforcement Learning',       cat:'Advanced',      tip:'MDPs, Q-learning, PPO, Gym environments',         hours:30, requires:['pytorch'], resource:'https://gymnasium.farama.org', keywords:['reinforcement learning','rl','q-learning','ppo','gym'] },
      { id:'llm',    name:'LLM Fine-tuning & RAG',        cat:'Advanced',      tip:'LoRA, PEFT, vector DBs, LangChain',               hours:28, requires:['nlp'], resource:'https://huggingface.co/learn/cookbook', keywords:['llm','rag','langchain','lora','peft','vector database','fine-tuning','prompt engineering'] },
    ],
    roadmap: [
      { phase:'Phase 1 — Mathematical & Python Foundations', skills:['pyml','linear','stats2','sklearn'],  note:'Build the theoretical and practical ML groundwork.' },
      { phase:'Phase 2 — Deep Learning & Specialisations',   skills:['pytorch','cnn','nlp','data'],         note:'Master neural networks and pick a deep-learning domain.' },
      { phase:'Phase 3 — Production & Frontier AI',          skills:['mlops','cloud3','rl','llm'],          note:'Ship models to production and tackle frontier topics.' },
    ],
  },

  devops: {
    label: 'DevOps Engineer',
    color: 'badge-green',
    skills: [
      { id:'do_linux',  name:'Linux & Shell Scripting',     cat:'Foundation',   tip:'Bash, file system, processes, cron',                hours:20, resource:'https://linuxcommand.org/lc3_learning_the_shell.php', keywords:['linux','bash','shell','unix','scripting'] },
      { id:'do_git',    name:'Git & Branching Strategies',  cat:'Foundation',   tip:'Gitflow, trunk-based, hooks',                       hours:8,  resource:'https://git-scm.com/doc', keywords:['git','github','gitlab','gitflow'] },
      { id:'do_docker', name:'Docker & Containers',         cat:'Containers',   tip:'Dockerfiles, volumes, networking, Compose',         hours:16, requires:['do_linux'], resource:'https://docs.docker.com/get-started/', keywords:['docker','containers','dockerfile','docker compose'] },
      { id:'do_k8s',    name:'Kubernetes',                  cat:'Containers',   tip:'Pods, Services, Deployments, Helm',                 hours:30, requires:['do_docker'], resource:'https://kubernetes.io/docs/home/', keywords:['kubernetes','k8s','helm','kubectl','pods','eks','gke'] },
      { id:'do_ci',     name:'CI/CD Pipelines',             cat:'Automation',   tip:'GitHub Actions, Jenkins, GitLab CI',                hours:18, requires:['do_git'], resource:'https://docs.github.com/en/actions', keywords:['ci/cd','github actions','jenkins','gitlab ci','continuous integration','pipeline'] },
      { id:'do_iac',    name:'Infrastructure as Code',      cat:'Automation',   tip:'Terraform, Ansible, CloudFormation',                hours:24, requires:['do_linux'], resource:'https://developer.hashicorp.com/terraform/docs', keywords:['terraform','ansible','cloudformation','iac','infrastructure as code'] },
      { id:'do_aws',    name:'Cloud Platforms (AWS/GCP)',   cat:'Cloud',        tip:'EC2, EKS, IAM, VPC, S3',                            hours:28, requires:['do_k8s'], resource:'https://docs.aws.amazon.com', keywords:['aws','gcp','azure','cloud','ec2','s3','iam','eks'] },
      { id:'do_mon',    name:'Monitoring & Observability',  cat:'Reliability',  tip:'Prometheus, Grafana, ELK stack',                    hours:18, requires:['do_k8s'], resource:'https://prometheus.io/docs/introduction/overview/', keywords:['prometheus','grafana','elk','elasticsearch','observability','monitoring','datadog'] },
      { id:'do_sec',    name:'DevSecOps & Security',        cat:'Reliability',  tip:'SAST, secrets management, OWASP',                   hours:16, resource:'https://owasp.org/www-project-devsecops-guideline/', keywords:['devsecops','security','sast','owasp','secrets management','vault'] },
      { id:'do_net',    name:'Networking Fundamentals',     cat:'Foundation',   tip:'DNS, TCP/IP, load balancers, TLS',                   hours:14, resource:'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work', keywords:['networking','dns','tcp','load balancer','tls','ssl'] },
      { id:'do_py',     name:'Python for Automation',       cat:'Scripting',    tip:'Boto3, fabric, automation scripts',                 hours:18, resource:'https://docs.python.org/3/', keywords:['python','boto3','automation','scripting'] },
      { id:'do_gitops', name:'GitOps & ArgoCD',             cat:'Advanced',     tip:'Declarative infra, reconciliation loops',           hours:16, requires:['do_k8s','do_ci'], resource:'https://argo-cd.readthedocs.io/en/stable/', keywords:['gitops','argocd','flux','declarative'] },
      { id:'do_sre',    name:'SRE Principles',              cat:'Advanced',     tip:'SLOs, error budgets, chaos engineering',            hours:14, resource:'https://sre.google/sre-book/table-of-contents/', keywords:['sre','site reliability','slo','sla','chaos engineering'] },
      { id:'do_cost',   name:'Cloud Cost Optimisation',     cat:'Advanced',     tip:'Reserved instances, rightsizing, tagging',          hours:10, requires:['do_aws'], resource:'https://docs.aws.amazon.com/cost-management/', keywords:['cost optimization','finops','rightsizing','reserved instances'] },
    ],
    roadmap: [
      { phase:'Phase 1 — Linux & Containers',  skills:['do_linux','do_git','do_net','do_docker','do_k8s'],    note:'Master the foundation of modern infrastructure.' },
      { phase:'Phase 2 — Automation & Cloud',  skills:['do_ci','do_iac','do_aws','do_py'],                    note:'Automate everything and deploy on cloud.' },
      { phase:'Phase 3 — Reliability & Scale', skills:['do_mon','do_sec','do_gitops','do_sre','do_cost'],     note:'Run resilient, secure, cost-efficient systems.' },
    ],
  },

  // CHANGED: B3 – Mobile Developer role
  mobile: {
    label: 'Mobile Developer',
    color: 'badge-blue',
    skills: [
      { id:'mob_js',    name:'JavaScript / TypeScript',      cat:'Core Language', tip:'ES6+, async, modules',                          hours:30, resource:'https://developer.mozilla.org/en-US/docs/Web/JavaScript', keywords:['javascript','typescript','js','ts'] },
      { id:'mob_rn',    name:'React Native',                  cat:'Framework',     tip:'Cross-platform mobile, Expo, navigation',       hours:35, requires:['mob_js'], resource:'https://reactnative.dev/docs/getting-started', keywords:['react native','expo','cross-platform','mobile'] },
      { id:'mob_flutter',name:'Flutter & Dart',               cat:'Framework',     tip:'Widgets, BLoC, pub packages',                  hours:35, resource:'https://flutter.dev/docs', keywords:['flutter','dart','widgets'] },
      { id:'mob_ios',   name:'iOS Development (Swift)',       cat:'Platform',      tip:'UIKit, SwiftUI, Xcode, App Store',              hours:40, resource:'https://developer.apple.com/documentation/swift/', keywords:['swift','swiftui','uikit','ios','xcode','app store'] },
      { id:'mob_android',name:'Android Development (Kotlin)', cat:'Platform',      tip:'Jetpack Compose, Gradle, Play Store',           hours:40, resource:'https://developer.android.com/kotlin', keywords:['kotlin','android','jetpack compose','gradle','play store'] },
      { id:'mob_ui',    name:'Mobile UI/UX Principles',       cat:'Design',        tip:'HIG, Material Design, thumb zones',            hours:12, resource:'https://developer.apple.com/design/human-interface-guidelines/', keywords:['mobile ux','material design','human interface guidelines','ui design'] },
      { id:'mob_api',   name:'REST & GraphQL Integration',    cat:'Backend',       tip:'Fetch, Axios, Apollo, auth tokens',             hours:14, requires:['mob_js'], resource:'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API', keywords:['rest','graphql','api','fetch','axios'] },
      { id:'mob_state', name:'State Management',              cat:'Architecture',  tip:'Redux, MobX, Zustand, Riverpod',                hours:16, requires:['mob_js'], resource:'https://redux.js.org/', keywords:['redux','mobx','zustand','state management','riverpod','provider'] },
      { id:'mob_test',  name:'Mobile Testing',                cat:'Quality',       tip:'Jest, Detox, Espresso, XCTest',                 hours:14, resource:'https://jestjs.io/', keywords:['testing','jest','detox','espresso','xctest','unit test'] },
      { id:'mob_push',  name:'Push Notifications & Firebase', cat:'Services',      tip:'FCM, APNs, remote config, analytics',           hours:10, resource:'https://firebase.google.com/docs', keywords:['firebase','push notifications','fcm','analytics','remote config'] },
      { id:'mob_store', name:'App Store Deployment',          cat:'Deployment',    tip:'Certificates, provisioning, ASO',               hours:10, resource:'https://developer.apple.com/distribute/', keywords:['app store','play store','deployment','aso','distribution'] },
      { id:'mob_perf',  name:'Performance & Optimisation',    cat:'Advanced',      tip:'Memory, rendering, bundle size, profiling',     hours:14, resource:'https://reactnative.dev/docs/performance', keywords:['performance','optimization','profiling','memory'] },
    ],
    roadmap: [
      { phase:'Phase 1 — Core & Frameworks',   skills:['mob_js','mob_rn','mob_flutter'],                     note:'Choose a cross-platform framework and build foundations.' },
      { phase:'Phase 2 — Platform & Services', skills:['mob_ios','mob_android','mob_ui','mob_api','mob_state','mob_push'], note:'Deep-dive platform specifics and integrate backend services.' },
      { phase:'Phase 3 — Quality & Ship',      skills:['mob_test','mob_store','mob_perf'],                   note:'Ensure quality and publish to app stores.' },
    ],
  },

  uiux: {
    label: 'UI/UX Designer',
    color: 'badge-purple',
    skills: [
      { id:'ux_research', name:'User Research Methods',        cat:'Foundation',   tip:'Interviews, surveys, usability testing',        hours:16, resource:'https://www.nngroup.com/articles/which-ux-research-methods/', keywords:['user research','usability','interviews','surveys','ux research'] },
      { id:'ux_ia',       name:'Information Architecture',     cat:'Foundation',   tip:'Card sorting, site maps, navigation design',    hours:12, resource:'https://www.nngroup.com/articles/ia-study-guide/', keywords:['information architecture','sitemap','navigation','ia'] },
      { id:'ux_wire',     name:'Wireframing & Prototyping',    cat:'Design',       tip:'Low-fi to hi-fi, Figma flows, rapid iteration',  hours:18, requires:['ux_ia'], resource:'https://www.figma.com/resources/learn-design/', keywords:['wireframe','prototype','figma','sketch','adobe xd'] },
      { id:'ux_figma',    name:'Figma (Advanced)',             cat:'Design',       tip:'Components, auto-layout, design tokens',         hours:20, requires:['ux_wire'], resource:'https://help.figma.com/hc/en-us', keywords:['figma','auto layout','design tokens','components','figma'] },
      { id:'ux_visual',   name:'Visual Design Principles',     cat:'Design',       tip:'Typography, colour theory, hierarchy, grids',   hours:16, resource:'https://www.interaction-design.org/literature/topics/visual-design', keywords:['visual design','typography','color theory','hierarchy','grids'] },
      { id:'ux_a11y',     name:'Accessibility in Design',      cat:'Quality',      tip:'WCAG 2.2, contrast, focus states, ARIA',        hours:12, requires:['ux_visual'], resource:'https://www.w3.org/WAI/WCAG22/quickref/', keywords:['accessibility','wcag','contrast','aria','a11y'] },
      { id:'ux_motion',   name:'Motion & Interaction Design',  cat:'Advanced',     tip:'Micro-interactions, easing, Lottie',            hours:14, requires:['ux_figma'], resource:'https://www.interaction-design.org/literature/topics/interaction-design', keywords:['motion design','animation','micro-interactions','lottie'] },
      { id:'ux_ds',       name:'Design Systems',               cat:'Advanced',     tip:'Tokens, component libraries, Storybook',        hours:18, requires:['ux_figma','ux_visual'], resource:'https://bradfrost.com/blog/post/atomic-web-design/', keywords:['design system','component library','storybook','design tokens'] },
      { id:'ux_hand',     name:'Developer Handoff',            cat:'Tooling',      tip:'Inspect panel, redlines, Zeplin/Figma',         hours:8,  requires:['ux_figma'], resource:'https://zeplin.io/getting-started', keywords:['developer handoff','zeplin','inspect','redlines'] },
      { id:'ux_test',     name:'Usability Testing & Metrics',  cat:'Research',     tip:'Task success, SUS score, A/B testing',          hours:14, requires:['ux_research'], resource:'https://www.nngroup.com/articles/usability-testing-101/', keywords:['usability testing','sus score','a/b testing','analytics'] },
      { id:'ux_mobile',   name:'Mobile UX & Responsive Design',cat:'Advanced',     tip:'iOS HIG, Material You, thumb zones',            hours:12, requires:['ux_wire'], resource:'https://developer.apple.com/design/human-interface-guidelines/', keywords:['mobile ux','responsive design','material you','hig'] },
      { id:'ux_copy',     name:'UX Writing & Content Design',  cat:'Communication',tip:'Microcopy, error messages, tone of voice',      hours:10, resource:'https://www.nngroup.com/articles/ux-writing-study-guide/', keywords:['ux writing','microcopy','content design','copywriting'] },
      { id:'ux_port',     name:'Portfolio & Case Studies',     cat:'Career',       tip:'Structuring process work, storytelling',        hours:16, resource:'https://www.nngroup.com/articles/ux-portfolio-study-guide/', keywords:['portfolio','case study','behance','dribbble'] },
      { id:'ux_collab',   name:'Cross-functional Collaboration',cat:'Career',      tip:'Working with PMs, engineers, stakeholders',     hours:10, resource:'https://www.nngroup.com/articles/collaboration-ux-methods/', keywords:['collaboration','stakeholders','agile','scrum'] },
    ],
    roadmap: [
      { phase:'Phase 1 — Research & Foundations', skills:['ux_research','ux_ia','ux_visual','ux_wire'],              note:'Understand users and establish a design vocabulary.' },
      { phase:'Phase 2 — Tools & Delivery',       skills:['ux_figma','ux_a11y','ux_hand','ux_test','ux_mobile'],     note:'Master the craft and deliver accessible, tested work.' },
      { phase:'Phase 3 — Systems & Career',       skills:['ux_motion','ux_ds','ux_copy','ux_port','ux_collab'],      note:'Scale your impact through systems thinking and communication.' },
    ],
  },

  // CHANGED: B3 – Cybersecurity Analyst role
  cybersec: {
    label: 'Cybersecurity Analyst',
    color: 'badge-red',
    skills: [
      { id:'cy_net',    name:'Networking Fundamentals',       cat:'Foundation',   tip:'TCP/IP, DNS, HTTP, OSI model, firewalls',       hours:20, resource:'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work', keywords:['networking','tcp/ip','dns','firewall','osi','wireshark'] },
      { id:'cy_linux',  name:'Linux & Command Line',          cat:'Foundation',   tip:'File permissions, logs, bash scripting',        hours:18, resource:'https://linuxcommand.org/lc3_learning_the_shell.php', keywords:['linux','bash','command line','unix','scripting'] },
      { id:'cy_threats',name:'Threat Landscape & OWASP',     cat:'Foundation',   tip:'OWASP Top 10, CVEs, attack vectors',            hours:16, resource:'https://owasp.org/www-project-top-ten/', keywords:['owasp','cve','threat','vulnerability','attack','exploit','malware'] },
      { id:'cy_py',     name:'Python for Security',           cat:'Scripting',    tip:'Scripts, automation, exploit PoCs',             hours:20, resource:'https://docs.python.org/3/', keywords:['python','scripting','automation','exploit'] },
      { id:'cy_pentest',name:'Penetration Testing Basics',    cat:'Offensive',    tip:'Metasploit, Burp Suite, enumeration',           hours:30, requires:['cy_net','cy_linux'], resource:'https://www.metasploit.com/', keywords:['penetration testing','pentest','metasploit','burp suite','kali linux','nmap'] },
      { id:'cy_web',    name:'Web Application Security',      cat:'Offensive',    tip:'XSS, SQLi, CSRF, SSRF, API security',          hours:24, requires:['cy_threats'], resource:'https://portswigger.net/web-security', keywords:['xss','sql injection','sqli','csrf','ssrf','web security','portswigger'] },
      { id:'cy_siem',   name:'SIEM & Log Analysis',           cat:'Defensive',    tip:'Splunk, ELK, alert rules, incident detection',  hours:18, resource:'https://www.splunk.com/en_us/training.html', keywords:['siem','splunk','elk','log analysis','incident detection','soc'] },
      { id:'cy_ir',     name:'Incident Response',             cat:'Defensive',    tip:'IR playbooks, forensics, containment',          hours:16, requires:['cy_siem'], resource:'https://www.cisa.gov/resources-tools/resources/computer-security-incident-handling-guide', keywords:['incident response','forensics','ir','playbook','containment'] },
      { id:'cy_crypt',  name:'Cryptography Fundamentals',     cat:'Foundation',   tip:'Symmetric/asymmetric, PKI, TLS, hashing',       hours:14, resource:'https://cryptobook.nakov.com/', keywords:['cryptography','encryption','pki','tls','ssl','hashing','aes','rsa'] },
      { id:'cy_cloud',  name:'Cloud Security',                cat:'Advanced',     tip:'IAM policies, S3 security, GuardDuty, CSPM',    hours:20, requires:['cy_crypt'], resource:'https://docs.aws.amazon.com/security/', keywords:['cloud security','iam','guardduty','cspm','aws security','zero trust'] },
      { id:'cy_comp',   name:'Compliance & Frameworks',       cat:'GRC',          tip:'ISO 27001, SOC 2, NIST, GDPR',                  hours:14, resource:'https://www.nist.gov/cyberframework', keywords:['iso 27001','soc 2','nist','gdpr','compliance','governance','risk'] },
      { id:'cy_ctf',    name:'CTF & Labs Practice',           cat:'Hands-on',     tip:'HackTheBox, TryHackMe, PicoCTF',                hours:30, resource:'https://www.hackthebox.com/', keywords:['ctf','hackthebox','tryhackme','hands-on','lab','picoctf'] },
    ],
    roadmap: [
      { phase:'Phase 1 — Foundations',        skills:['cy_net','cy_linux','cy_threats','cy_py','cy_crypt'],     note:'Build a strong theoretical and scripting base.' },
      { phase:'Phase 2 — Offensive & Defensive', skills:['cy_pentest','cy_web','cy_siem','cy_ir'],             note:'Learn to attack and defend web and infrastructure targets.' },
      { phase:'Phase 3 — Advanced & Compliance', skills:['cy_cloud','cy_comp','cy_ctf'],                       note:'Expand to cloud security, governance, and continuous practice.' },
    ],
  },
};

// CHANGED: C9 – common tech terms dictionary for "other terms" detection
const COMMON_TECH_TERMS = [
  'agile','scrum','jira','confluence','figma','sketch','adobe xd','notion',
  'slack','jenkins','github','gitlab','bitbucket','linux','windows server',
  'bash','powershell','nginx','apache','redis','kafka','rabbitmq',
  'elasticsearch','mongodb','postgresql','mysql','sqlite','firebase',
  'heroku','netlify','vercel','cloudflare','terraform','ansible',
  'prometheus','grafana','datadog','new relic','sentry',
];

// ===== CAREER INFO =====
// CHANGED: career info data — salary ranges (IDR/month, junior–mid), market demand, overviews.
// Sources: Glints Salary Report 2024, Jobstreet Salary Guide Indonesia 2024,
//          Kalibrr career pages, Dicoding/Codepolitan industry surveys.
const CAREER_INFO = {
  frontend: {
    salary: { min: 6000000, max: 13000000 },
    overview: {
      id: 'Frontend Developer membangun tampilan antarmuka web yang dilihat pengguna. Permintaan tinggi di startup, e-commerce, dan perusahaan teknologi Indonesia.',
      en: 'Frontend Developers build the user-facing side of web applications. High demand across startups, e-commerce, and tech companies in Indonesia.',
    },
    demand: {
      level: 'high',
      id: 'Tinggi — dibutuhkan di hampir semua perusahaan digital Indonesia.',
      en: 'High — required at nearly every digital company in Indonesia.',
    },
    source: 'Glints Salary Report 2024',
    updated: 'Juni 2025',
  },
  backend: {
    salary: { min: 7000000, max: 15000000 },
    overview: {
      id: 'Backend Developer merancang API, logika bisnis, dan sistem database. Salah satu peran paling dicari di ekosistem startup Indonesia.',
      en: 'Backend Developers design APIs, business logic, and database systems. One of the most sought-after roles in the Indonesian startup ecosystem.',
    },
    demand: {
      level: 'veryHigh',
      id: 'Sangat Tinggi — digunakan di hampir semua startup & enterprise.',
      en: 'Very High — used at nearly all startups and enterprise companies.',
    },
    source: 'Glints Salary Report 2024',
    updated: 'Juni 2025',
  },
  datascientist: {
    salary: { min: 8000000, max: 18000000 },
    overview: {
      id: 'Data Scientist menganalisis data besar untuk menghasilkan wawasan bisnis dan model prediktif. Permintaan meningkat pesat di sektor keuangan, e-commerce, dan teknologi.',
      en: 'Data Scientists analyse large datasets to produce business insights and predictive models. Demand is growing rapidly in finance, e-commerce, and tech.',
    },
    demand: {
      level: 'veryHigh',
      id: 'Sangat Tinggi — pertumbuhan pesat di fintech, e-commerce, dan kesehatan.',
      en: 'Very High — rapid growth in fintech, e-commerce, and healthtech.',
    },
    source: 'Jobstreet Salary Guide Indonesia 2024',
    updated: 'Juni 2025',
  },
  aiml: {
    salary: { min: 10000000, max: 22000000 },
    overview: {
      id: 'AI/ML Engineer mengembangkan dan men-deploy model machine learning ke produksi. Peran dengan pertumbuhan tercepat di Indonesia dan secara global.',
      en: 'AI/ML Engineers develop and deploy machine learning models to production. The fastest-growing role in Indonesia and globally.',
    },
    demand: {
      level: 'veryHigh',
      id: 'Sangat Tinggi — ledakan permintaan AI di semua industri.',
      en: 'Very High — AI demand explosion across all industries.',
    },
    source: 'Glints Salary Report 2024 & LinkedIn Jobs Indonesia',
    updated: 'Juni 2025',
  },
  devops: {
    salary: { min: 8000000, max: 18000000 },
    overview: {
      id: 'DevOps Engineer mengotomasi pipeline deployment, mengelola infrastruktur cloud, dan menjamin ketersediaan sistem. Sangat penting untuk perusahaan yang scaling.',
      en: 'DevOps Engineers automate deployment pipelines, manage cloud infrastructure, and ensure system reliability. Critical for scaling companies.',
    },
    demand: {
      level: 'veryHigh',
      id: 'Sangat Tinggi — wajib ada di perusahaan teknologi yang berkembang.',
      en: 'Very High — essential at any growing tech company.',
    },
    source: 'Jobstreet Salary Guide Indonesia 2024',
    updated: 'Juni 2025',
  },
  mobile: {
    salary: { min: 7000000, max: 15000000 },
    overview: {
      id: 'Mobile Developer membangun aplikasi untuk iOS dan Android. Sangat dibutuhkan seiring penetrasi smartphone yang terus tumbuh di Indonesia.',
      en: 'Mobile Developers build applications for iOS and Android. High demand driven by Indonesia\'s continued smartphone penetration growth.',
    },
    demand: {
      level: 'high',
      id: 'Tinggi — didorong oleh penetrasi smartphone yang terus tumbuh.',
      en: 'High — driven by continued smartphone penetration growth.',
    },
    source: 'Kalibrr & Glints Indonesia 2024',
    updated: 'Juni 2025',
  },
  uiux: {
    salary: { min: 6000000, max: 14000000 },
    overview: {
      id: 'UI/UX Designer merancang pengalaman pengguna yang intuitif dan antarmuka visual. Peran strategis di perusahaan produk dan startup tahap growth.',
      en: 'UI/UX Designers craft intuitive user experiences and visual interfaces. A strategic role at product companies and growth-stage startups.',
    },
    demand: {
      level: 'high',
      id: 'Tinggi — peran kunci di perusahaan produk dan startup growth stage.',
      en: 'High — key role at product companies and growth-stage startups.',
    },
    source: 'Glints Salary Report 2024',
    updated: 'Juni 2025',
  },
  cybersec: {
    salary: { min: 8000000, max: 18000000 },
    overview: {
      id: 'Cybersecurity Analyst melindungi sistem dan data dari ancaman siber. Permintaan melonjak seiring meningkatnya regulasi keamanan data di Indonesia (UU PDP).',
      en: 'Cybersecurity Analysts protect systems and data from cyber threats. Demand has surged alongside Indonesia\'s new personal data protection laws.',
    },
    demand: {
      level: 'veryHigh',
      id: 'Sangat Tinggi — didorong regulasi UU PDP dan maraknya ancaman siber.',
      en: 'Very High — driven by data protection regulations and rising cyber threats.',
    },
    source: 'Jobstreet & Kalibrr Indonesia 2024',
    updated: 'Juni 2025',
  },
};

// ===== SAMPLE JOBS =====
// CHANGED: Item 1 – realistic sample job postings, one per role, keyed by ROLES key.
const SAMPLE_JOBS = {
  frontend: `Frontend Developer — TechStartup Indonesia

Responsibilities:
- Build and maintain responsive user interfaces using React and TypeScript
- Implement pixel-perfect UI from Figma designs with HTML5 and CSS3
- Optimize web performance (Core Web Vitals, lazy loading, code splitting with Vite/Webpack)
- Write unit tests using Jest and Vitest; ensure WCAG accessibility compliance
- Integrate REST and GraphQL APIs using Fetch and Axios
- Collaborate via Git with trunk-based branching and pull-request reviews
- Set up CI/CD pipelines with GitHub Actions and deploy to Vercel/Netlify

Requirements:
- 2+ years with React, JavaScript (ES6+), TypeScript, and CSS3/Sass
- Experience with Vite or Webpack build tools
- Familiarity with web accessibility (ARIA, WCAG) and web performance best practices`,

  backend: `Backend Engineer — Fintech Platform

Responsibilities:
- Design and maintain RESTful APIs and GraphQL endpoints using Python (Django/FastAPI) or Node.js (Express)
- Manage relational databases (PostgreSQL, MySQL) and NoSQL stores (MongoDB, Redis)
- Implement authentication and authorization using JWT and OAuth2; follow OWASP Top 10 guidelines
- Containerize services with Docker; deploy and scale on AWS (EC2, Lambda, S3) or GCP
- Build microservices architecture with Kafka message queues and gRPC
- Write comprehensive unit and integration tests using pytest or Jest
- Collaborate via Git; apply branching strategies and code reviews

Requirements:
- 2+ years in backend development with Python or Node.js
- Solid understanding of SQL, PostgreSQL, and NoSQL (MongoDB/Redis)
- Experience with Docker, cloud platforms (AWS/GCP), and CI/CD pipelines`,

  datascientist: `Data Scientist — E-Commerce Analytics

Responsibilities:
- Analyze large datasets using Python (NumPy, Pandas) and SQL/PostgreSQL
- Build and evaluate machine learning models (regression, classification, clustering) with Scikit-learn
- Create data visualizations and dashboards using Matplotlib, Seaborn, and Plotly
- Perform feature engineering, PCA, and data wrangling to prepare datasets
- Develop deep learning models using TensorFlow/Keras and deploy on AWS SageMaker or Google Vertex AI
- Work in Jupyter notebooks; apply statistical hypothesis testing and Bayesian methods
- Present storytelling with data insights to business stakeholders

Requirements:
- Proficiency in Python (Pandas, NumPy, Scikit-learn) and SQL
- Familiarity with deep learning frameworks (TensorFlow, Keras, PyTorch)
- Experience with data visualization tools (Matplotlib, Seaborn, Tableau, or Power BI)`,

  aiml: `AI / ML Engineer — AI Product Team

Responsibilities:
- Develop and deploy machine learning and deep learning models using PyTorch
- Build and fine-tune NLP Transformer models (BERT, GPT) via HuggingFace; implement RAG with LangChain and vector databases
- Apply CNNs for computer vision tasks; work with ResNet, YOLO, and OpenCV
- Implement reinforcement learning (Q-learning, PPO, Gymnasium environments)
- Design data pipelines using Apache Spark, Kafka, and Airflow
- Manage model lifecycle with MLflow; serve models via FastAPI and Docker
- Deploy and monitor on cloud ML platforms (AWS SageMaker, Google Vertex AI, Azure ML)

Requirements:
- Strong Python skills (advanced async, multiprocessing); Linear algebra and calculus foundations
- Hands-on PyTorch and Scikit-learn experience
- LLM fine-tuning (LoRA, PEFT), prompt engineering, and MLOps practices`,

  devops: `DevOps / Platform Engineer — Cloud Infrastructure

Responsibilities:
- Design and maintain CI/CD pipelines using GitHub Actions, Jenkins, and GitLab CI
- Manage Kubernetes (K8s) clusters on AWS EKS and GCP GKE using Helm and kubectl
- Write Infrastructure as Code with Terraform and Ansible; provision AWS (EC2, S3, IAM, VPC) resources
- Implement monitoring and observability with Prometheus, Grafana, ELK stack, and Datadog
- Harden systems with DevSecOps practices: SAST, OWASP, secrets management with Vault
- Automate operations with Python (Boto3) and Bash shell scripting on Linux
- Implement GitOps workflows using ArgoCD; enforce SRE principles (SLOs, error budgets, chaos engineering)

Requirements:
- Strong Linux/Bash and networking fundamentals (DNS, TCP/IP, TLS, load balancers)
- Experience with Docker, Kubernetes, Terraform, and cloud platforms (AWS/GCP/Azure)
- Familiarity with monitoring tools (Prometheus, Grafana, Datadog)`,

  mobile: `Mobile Developer — Super App Team

Responsibilities:
- Develop cross-platform mobile applications using React Native and Expo
- Build Flutter/Dart widgets and manage state with BLoC and Riverpod/Provider
- Implement native iOS features in Swift (SwiftUI, UIKit, Xcode) and Android features in Kotlin (Jetpack Compose, Gradle)
- Integrate REST APIs and GraphQL endpoints; handle authentication tokens with Axios and Apollo
- Manage application state with Redux, MobX, or Zustand
- Implement push notifications via Firebase (FCM, APNs) and remote config
- Write mobile tests using Jest, Detox, Espresso, and XCTest; publish to App Store and Play Store

Requirements:
- 2+ years with React Native or Flutter; JavaScript/TypeScript proficiency
- Knowledge of iOS (Swift/SwiftUI) and Android (Kotlin/Jetpack Compose) development
- Experience with Firebase, push notifications, and mobile performance optimization`,

  uiux: `UI/UX Designer — Product Design Team

Responsibilities:
- Conduct user research (interviews, surveys, usability testing) to inform design decisions
- Define information architecture and create site maps and navigation flows
- Create wireframes, low-fi and hi-fi prototypes in Figma (using auto-layout, components, design tokens)
- Apply visual design principles: typography, color theory, hierarchy, grids
- Ensure WCAG 2.2 accessibility: contrast ratios, focus states, ARIA labels
- Build and maintain a design system with component libraries and Storybook
- Produce developer handoff documentation using Figma inspect and Zeplin redlines
- Perform usability testing, SUS scoring, and A/B testing

Requirements:
- Proficiency in Figma (advanced: auto-layout, design tokens, components)
- Understanding of UX writing, microcopy, and content design
- Portfolio of case studies demonstrating end-to-end design process`,

  cybersec: `Cybersecurity Analyst — Security Operations Center (SOC)

Responsibilities:
- Monitor and analyze security events using SIEM tools (Splunk, ELK stack) and conduct log analysis
- Perform penetration testing using Metasploit, Burp Suite, Nmap, and Kali Linux
- Identify and remediate web application vulnerabilities: XSS, SQL injection, CSRF, SSRF (OWASP Top 10)
- Conduct incident response (IR playbooks, digital forensics, containment) for security breaches
- Implement cloud security controls on AWS (IAM, GuardDuty, CSPM) and manage PKI/TLS/encryption
- Ensure compliance with ISO 27001, SOC 2, NIST frameworks, and GDPR
- Write Python scripts for security automation and exploit proof-of-concept testing

Requirements:
- Strong networking fundamentals (TCP/IP, DNS, firewalls, OSI model, Wireshark)
- Hands-on experience with penetration testing tools and CTF platforms (HackTheBox, TryHackMe)
- Knowledge of cryptography, cloud security, and GRC frameworks (NIST, ISO 27001)`,
};

// Generic fallback sample used when no role is selected
const SAMPLE_JOBS_FALLBACK = `Software Engineer — Technology Company

Responsibilities:
- Develop and maintain web applications using modern JavaScript frameworks
- Write clean, testable code and participate in code reviews via Git and GitHub
- Collaborate with product and design teams using Agile/Scrum methodology
- Deploy applications to cloud platforms (AWS, GCP, or Azure) using Docker and CI/CD pipelines
- Implement RESTful APIs and integrate third-party services
- Ensure application quality through unit and integration tests

Requirements:
- Proficiency in JavaScript, Python, or a similar programming language
- Experience with Git, SQL databases, and cloud platforms
- Strong communication skills and ability to work in an Agile team`;

// ===== STATE =====
// ═════════════════════════════════════════════════════════════
// STATE
// ═════════════════════════════════════════════════════════════
let currentRole   = null;
let skillState    = {};   // { skillId: 0 | 0.5 | 1 }
let inDemandSkillIds = new Set(); // CHANGED: C10 – skills found in current job posting
let lastMilestone = -1;
let scoreDomBuilt = false;
// CHANGED: C10 – custom skills per role { roleKey: [{id, name, cat, tip, hours, phase}] }
let customSkills  = {};

// ===== UTILS =====
// ═════════════════════════════════════════════════════════════
// UTILS
// ═════════════════════════════════════════════════════════════
// CHANGED: B6 – lsKey versioned; migration of legacy boolean → 1
function lsKey(role) { return 'skillgap_v3_' + role; }
function lsKeyCustom(role) { return 'skillgap_v3_custom_' + role; }

function saveProgress(role) {
  try { localStorage.setItem(lsKey(role), JSON.stringify(skillState)); } catch (_) {}
}
function loadProgress(role) {
  try {
    const raw = localStorage.getItem(lsKey(role));
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    // CHANGED: B6 – migrate legacy true/false → 1/0
    const migrated = {};
    Object.keys(parsed).forEach(k => {
      const v = parsed[k];
      if (v === true)       migrated[k] = 1;
      else if (v === false) migrated[k] = 0;
      else if ([0, 0.5, 1].includes(v)) migrated[k] = v;
    });
    return migrated;
  } catch (_) { return {}; }
}
function saveCustom(role) {
  try { localStorage.setItem(lsKeyCustom(role), JSON.stringify(customSkills[role] || [])); } catch (_) {}
}
function loadCustom(role) {
  try {
    const raw = localStorage.getItem(lsKeyCustom(role));
    return raw ? JSON.parse(raw) : [];
  } catch (_) { return []; }
}

// CHANGED: A1, A2 – theme/lang persistence
function savePref(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }
function loadPref(k, def) { try { return localStorage.getItem(k) || def; } catch (_) { return def; } }

function studyHours() {
  const val = parseInt(document.getElementById('hours-input').value, 10);
  return (isFinite(val) && val >= 1 && val <= 60) ? val : 10;
}

// CHANGED: B5 – weighted computeState
function computeState() {
  if (!currentRole) return { total:0, mastered:0, learning:0, pct:0, missing:[], learningSkills:[] };
  const allSkills = getAllSkillsForRole(currentRole);
  const total = allSkills.length;
  let mastered = 0, learning = 0;
  const missing = [], learningSkills = [];
  allSkills.forEach(s => {
    const st = skillState[s.id] || 0;
    if      (st === 1)   { mastered++; }
    else if (st === 0.5) { learning++; learningSkills.push(s); missing.push(s); }
    else                 { missing.push(s); }
  });
  const weightedDone = mastered + learning * 0.5;
  const pct = total === 0 ? 0 : Math.round((weightedDone / total) * 100);
  return { total, mastered, learning, pct, missing, learningSkills };
}

// Helper: combine ROLES skills + custom skills for a role
function getAllSkillsForRole(role) {
  const base = ROLES[role] ? [...ROLES[role].skills] : [];
  const custom = customSkills[role] || [];
  return [...base, ...custom];
}

// Build a flat skill map for a role (including custom)
function getSkillMap(role) {
  const map = {};
  getAllSkillsForRole(role).forEach(s => { map[s.id] = s; });
  return map;
}

// ===== HELPERS =====
// ═════════════════════════════════════════════════════════════
// HELPERS
// ═════════════════════════════════════════════════════════════
function qs(sel) { return document.querySelector(sel); }
function ce(tag) { return document.createElement(tag); }

// CHANGED: B4 – state icon + text label (non-color indicator)
function stateIcon(st) {
  if (st === 1)   return '✓';
  if (st === 0.5) return '◑';
  return '';
}
function stateLevelText(st) {
  if (st === 1)   return t('levelMastered');
  if (st === 0.5) return t('levelLearning');
  return t('levelNone');
}
function cycleState(cur) {
  if (cur === 0)   return 0.5;
  if (cur === 0.5) return 1;
  return 0;
}

// ===== RENDER: CHECKLIST =====
// ═════════════════════════════════════════════════════════════
// RENDER: CHECKLIST  — CHANGED: B4 (level text label), C10 (in-demand badge)
// ═════════════════════════════════════════════════════════════
function renderChecklist(role) {
  const container = qs('#checklist-container');
  container.innerHTML = '';
  const roleData = ROLES[role];
  const skillMap = getSkillMap(role);

  // Toolbar
  const toolbar = ce('div'); toolbar.className = 'checklist-toolbar';
  const searchInput = ce('input');
  searchInput.type = 'search'; searchInput.id = 'skill-search';
  searchInput.placeholder = t('filterPlaceholder');
  searchInput.setAttribute('aria-label', t('filterPlaceholder'));
  toolbar.appendChild(searchInput);
  container.appendChild(toolbar);

  const ul = ce('ul'); ul.className = 'skill-list'; ul.id = 'skill-list-ul';
  container.appendChild(ul);

  buildSkillGroups(role, ul, skillMap, '');
  searchInput.addEventListener('input', function() {
    buildSkillGroups(role, ul, skillMap, this.value.trim().toLowerCase());
  });
}

function buildSkillGroups(role, ul, skillMap, query) {
  ul.innerHTML = '';
  const roleData = ROLES[role];

  // Build phase → skillIds map (including custom skills assigned to a phase)
  const phaseLists = roleData.roadmap.map(ph => ({ ...ph }));
  // custom skills get appended to phase 2 by default (their phase index stored in custom obj)
  (customSkills[role] || []).forEach(cs => {
    const phIdx = (cs.phase || 2) - 1;
    if (phaseLists[phIdx]) phaseLists[phIdx].skills = [...phaseLists[phIdx].skills, cs.id];
  });

  phaseLists.forEach((ph, phIdx) => {
    const phaseSkills = ph.skills
      .map(id => skillMap[id])
      .filter(s => s && (!query || s.name.toLowerCase().includes(query)));
    if (phaseSkills.length === 0) return;

    // Phase group header
    const headerLi = ce('li'); headerLi.setAttribute('aria-hidden', 'true');
    const headerDiv = ce('div'); headerDiv.className = 'phase-group-header';
    const lbl = ce('span'); lbl.className = 'phase-group-label';
    lbl.textContent = t('phaseLabel') + ' ' + (phIdx + 1) + ': ' + ph.phase.replace(/^Phase \d — /, '');
    headerDiv.appendChild(lbl);

    const btnGroup = ce('div'); btnGroup.className = 'phase-group-btns';
    const btnAll = ce('button'); btnAll.className = 'btn-group-sm'; btnAll.type = 'button';
    btnAll.textContent = t('selectAll');
    btnAll.addEventListener('click', () => { phaseSkills.forEach(s => { skillState[s.id] = 1; }); saveProgress(role); renderChecklist(role); updateDashboard(); });
    const btnClear = ce('button'); btnClear.className = 'btn-group-sm'; btnClear.type = 'button';
    btnClear.textContent = t('clearAll');
    btnClear.addEventListener('click', () => { phaseSkills.forEach(s => { skillState[s.id] = 0; }); saveProgress(role); renderChecklist(role); updateDashboard(); });
    btnGroup.appendChild(btnAll); btnGroup.appendChild(btnClear);
    headerDiv.appendChild(btnGroup); headerLi.appendChild(headerDiv); ul.appendChild(headerLi);

    // Skill items
    phaseSkills.forEach(skill => {
      const st = skillState[skill.id] || 0;
      const li = ce('li');
      li.className = 'skill-item';
      li.dataset.id = skill.id;
      li.dataset.state = st === 1 ? 'confident' : st === 0.5 ? 'learning' : 'none';
      li.setAttribute('tabindex', '0');
      li.setAttribute('role', 'checkbox');
      li.setAttribute('aria-checked', st === 1 ? 'true' : st === 0.5 ? 'mixed' : 'false');
      li.setAttribute('aria-label', skill.name + ' — ' + stateLevelText(st));
      li.title = skill.tip;

      // Level indicator (icon + text — not color-only) — CHANGED: B4
      const indicator = ce('div'); indicator.className = 'skill-level-indicator';
      indicator.setAttribute('aria-hidden', 'true');
      const box = ce('div'); box.className = 'skill-checkbox'; box.textContent = stateIcon(st);
      const lvlTxt = ce('span'); lvlTxt.className = 'skill-level-text'; lvlTxt.textContent = stateLevelText(st);
      indicator.appendChild(box); indicator.appendChild(lvlTxt);

      const nameRow = ce('div'); nameRow.className = 'skill-name-row';
      const nameSp = ce('span'); nameSp.className = 'skill-name'; nameSp.textContent = skill.name;
      nameRow.appendChild(nameSp);

      // CHANGED: C10 – in-demand badge
      if (inDemandSkillIds.has(skill.id)) {
        const db = ce('span'); db.className = 'badge badge-demand'; db.textContent = t('inDemand');
        nameRow.appendChild(db);
      }

      const catSp = ce('span'); catSp.className = 'skill-category'; catSp.textContent = skill.cat;

      li.appendChild(indicator); li.appendChild(nameRow); li.appendChild(catSp);

      // Custom skill remove button — CHANGED: C10
      if (skill._custom) {
        const removeBtn = ce('button'); removeBtn.className = 'custom-skill-remove';
        removeBtn.type = 'button'; removeBtn.textContent = '✕';
        removeBtn.setAttribute('aria-label', 'Remove custom skill ' + skill.name);
        removeBtn.addEventListener('click', e => { e.stopPropagation(); removeCustomSkill(role, skill.id); });
        li.appendChild(removeBtn);
      }

      function doToggle() {
        const cur = skillState[skill.id] || 0;
        const next = cycleState(cur);
        skillState[skill.id] = next;
        li.dataset.state = next === 1 ? 'confident' : next === 0.5 ? 'learning' : 'none';
        li.setAttribute('aria-checked', next === 1 ? 'true' : next === 0.5 ? 'mixed' : 'false');
        li.setAttribute('aria-label', skill.name + ' — ' + stateLevelText(next));
        box.textContent = stateIcon(next);
        lvlTxt.textContent = stateLevelText(next);
        saveProgress(role);
        updateDashboard();
      }
      li.addEventListener('click', doToggle);
      li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doToggle(); } });
      ul.appendChild(li);
    });
  });
}

// ===== RENDER: SCORE =====
// ═════════════════════════════════════════════════════════════
// RENDER: SCORE (persistent DOM) — CHANGED: B5 (Learning stat)
// ═════════════════════════════════════════════════════════════
function buildScoreDom() {
  const scoreEl = qs('#score-container');
  scoreEl.innerHTML = '';
  const wrap = ce('div'); wrap.className = 'score-wrap';

  const hdr = ce('div'); hdr.className = 'score-header';
  const lbl = ce('span'); lbl.className = 'score-label'; lbl.id = 'score-lbl';
  lbl.textContent = t('overallReadiness');
  const val = ce('span'); val.className = 'score-value'; val.id = 'score-val-text'; val.textContent = '0%';
  hdr.appendChild(lbl); hdr.appendChild(val);

  const track = ce('div'); track.className = 'progress-track';
  const fill  = ce('div'); fill.className = 'progress-fill'; fill.id = 'prog-fill';
  fill.setAttribute('role', 'progressbar'); fill.setAttribute('aria-valuemin', '0');
  fill.setAttribute('aria-valuemax', '100'); fill.setAttribute('aria-valuenow', '0');
  fill.setAttribute('aria-label', t('overallReadiness')); fill.style.width = '0%';
  track.appendChild(fill);

  const meta  = ce('div'); meta.className = 'score-meta';
  const metaL = ce('span'); metaL.id = 'score-meta-l';
  const metaR = ce('span'); metaR.id = 'score-meta-r';
  meta.appendChild(metaL); meta.appendChild(metaR);

  const rlbl = ce('div'); rlbl.className = 'readiness-label'; rlbl.id = 'readiness-lbl';

  const weeksEl = ce('div'); weeksEl.id = 'total-weeks';
  weeksEl.style.cssText = 'font-size:.8rem;color:var(--text-muted);text-align:center;margin-top:.3rem;';

  // CHANGED: B5 – 4 stats: Total, Mastered, Learning, Gaps
  const statsRow = ce('div'); statsRow.className = 'stats-row';
  statsRow.innerHTML =
    '<div class="stat-box"><div class="stat-num" id="stat-total"    style="color:var(--accent)">0</div><div class="stat-lbl" id="lbl-total">—</div></div>' +
    '<div class="stat-box"><div class="stat-num" id="stat-mastered" style="color:var(--green)">0</div><div class="stat-lbl" id="lbl-mastered">—</div></div>' +
    '<div class="stat-box"><div class="stat-num" id="stat-learning" style="color:var(--blue)">0</div><div class="stat-lbl" id="lbl-learning">—</div></div>' +
    '<div class="stat-box"><div class="stat-num" id="stat-gap"      style="color:var(--red)">0</div><div class="stat-lbl" id="lbl-gap">—</div></div>';

  const milestones = ce('div'); milestones.className = 'milestone-row'; milestones.id = 'milestone-row';
  milestones.innerHTML =
    '<span class="milestone-badge m25"  id="m25"  >🌱 25%</span>' +
    '<span class="milestone-badge m50"  id="m50"  >📚 50%</span>' +
    '<span class="milestone-badge m75"  id="m75"  >⚡ 75%</span>' +
    '<span class="milestone-badge m100" id="m100" >🏆 100%</span>';

  wrap.appendChild(hdr); wrap.appendChild(track); wrap.appendChild(meta);
  wrap.appendChild(rlbl); wrap.appendChild(weeksEl); wrap.appendChild(statsRow); wrap.appendChild(milestones);
  scoreEl.appendChild(wrap);
  scoreDomBuilt = true;
}

let animFrameId = null;
function updateScoreDom(state) {
  const { total, mastered, learning, pct, missing } = state;
  const notStarted = total - mastered - learning;
  const fill = qs('#prog-fill'); if (!fill) return;
  const valText = qs('#score-val-text');
  const metaL   = qs('#score-meta-l');
  const metaR   = qs('#score-meta-r');
  const rlbl    = qs('#readiness-lbl');
  const weeksEl = qs('#total-weeks');

  requestAnimationFrame(() => { fill.style.width = pct + '%'; fill.setAttribute('aria-valuenow', pct); });

  const prevPct = parseInt(valText.dataset.prev || '0', 10);
  valText.dataset.prev = pct;
  if (animFrameId) cancelAnimationFrame(animFrameId);
  const start = performance.now(); const duration = 400;
  function tick(now) {
    const elapsed = Math.min((now - start) / duration, 1);
    valText.textContent = Math.round(prevPct + (pct - prevPct) * elapsed) + '%';
    if (elapsed < 1) animFrameId = requestAnimationFrame(tick);
    else valText.textContent = pct + '%';
  }
  animFrameId = requestAnimationFrame(tick);

  metaL.textContent = mastered + ' ' + t('ofText') + ' ' + total + ' ' + t('skillsMastered');
  if (learning > 0) metaL.textContent += ' · ' + learning + ' ' + t('learningText');
  metaR.textContent = notStarted + ' ' + t('remainingText');

  let readLabel = '', readStyle = '';
  if (pct === 0)      { readLabel = t('notStarted');  readStyle = 'background:var(--red-light);color:var(--red);'; }
  else if (pct < 30)  { readLabel = t('beginner');    readStyle = 'background:var(--amber-light);color:var(--amber);'; }
  else if (pct < 60)  { readLabel = t('developing');  readStyle = 'background:var(--blue-light);color:var(--blue);'; }
  else if (pct < 80)  { readLabel = t('proficient');  readStyle = 'background:var(--accent-light);color:var(--accent);'; }
  else if (pct < 100) { readLabel = t('advanced');    readStyle = 'background:var(--green-light);color:var(--green);'; }
  else                { readLabel = t('jobReady');    readStyle = 'background:var(--green-light);color:var(--green);border:1px solid var(--green-mid);'; }
  rlbl.setAttribute('style', readStyle); rlbl.textContent = readLabel;

  // CHANGED: B5 – update 4-stat row + labels
  qs('#stat-total').textContent    = total;
  qs('#stat-mastered').textContent = mastered;
  qs('#stat-learning').textContent = learning;
  qs('#stat-gap').textContent      = missing.length;
  qs('#lbl-total').textContent    = t('statTotal');
  qs('#lbl-mastered').textContent = t('statMastered');
  qs('#lbl-learning').textContent = t('statLearning');
  qs('#lbl-gap').textContent      = t('statGap');
  qs('#score-lbl').textContent    = t('overallReadiness');

  const hrs = studyHours();
  if (currentRole && missing.length > 0) {
    // CHANGED: B5 – learning skills count half remaining hours
    const totalHoursLeft = missing.reduce((acc, s) => {
      const isLearning = (skillState[s.id] || 0) === 0.5;
      return acc + (s.hours || 0) * (isLearning ? 0.5 : 1);
    }, 0);
    const weeks = Math.ceil(totalHoursLeft / hrs);
    weeksEl.textContent = t('weeksEst', { w: weeks, h: hrs });
  } else { weeksEl.textContent = ''; }

  [25,50,75,100].forEach(m => { const el = qs('#m' + m); if (el) el.classList.toggle('unlocked', pct >= m); });

  if (pct === 100 && lastMilestone < 100) { lastMilestone = 100; launchConfetti(); }
  else if (pct < 100) { lastMilestone = pct >= 75 ? 75 : pct >= 50 ? 50 : pct >= 25 ? 25 : 0; }
}

// ===== RENDER: GAP =====
// ═════════════════════════════════════════════════════════════
// RENDER: GAP
// ═════════════════════════════════════════════════════════════
function renderGap(state) {
  const gapEl = qs('#gap-container');
  const { missing } = state;
  if (missing.length === 0) {
    gapEl.innerHTML = '';
    const d = ce('div'); d.className = 'all-done';
    const ch = ce('div'); ch.className = 'big-check'; ch.setAttribute('aria-hidden','true'); ch.textContent = '✅';
    const p  = ce('p');  p.textContent = t('noGap');
    d.appendChild(ch); d.appendChild(p); gapEl.appendChild(d);
    return;
  }
  const frag = document.createDocumentFragment();
  const intro = ce('p');
  intro.style.cssText = 'font-size:.82rem;color:var(--text-muted);margin-bottom:.75rem;';
  const count = missing.length;
  const s = currentLang === 'en' && count !== 1 ? 's' : '';
  intro.textContent = t('gapCount', { n: count, s });
  frag.appendChild(intro);
  const ul = ce('ul'); ul.className = 'gap-list'; ul.setAttribute('aria-label', t('gapTitle'));
  missing.forEach(skill => {
    const li = ce('li');
    const isLearning = (skillState[skill.id] || 0) === 0.5;
    li.className = 'gap-chip' + (isLearning ? ' gap-chip-learning' : '');
    li.textContent = skill.name + (isLearning ? ' ' + t('inProgress') : '');
    ul.appendChild(li);
  });
  frag.appendChild(ul);
  gapEl.innerHTML = ''; gapEl.appendChild(frag);
}

// ===== RENDER: ROADMAP =====
// ═════════════════════════════════════════════════════════════
// RENDER: ROADMAP — CHANGED: C10 (in-demand prioritization)
// ═════════════════════════════════════════════════════════════
function renderRoadmap(role) {
  const rmEl = qs('#roadmap-container');
  const roleData = ROLES[role];
  const skillMap = getSkillMap(role);
  const hrs = studyHours();

  // Build phasesToShow (including custom skills)
  const augmentedPhases = roleData.roadmap.map((ph, phIdx) => {
    let skillIds = [...ph.skills];
    (customSkills[role] || []).filter(cs => (cs.phase || 2) === phIdx + 1).forEach(cs => skillIds.push(cs.id));
    const missing = skillIds.filter(id => !skillMap[id] || (skillState[id] || 0) < 1);
    return { ...ph, missingSkills: missing };
  }).filter(ph => ph.missingSkills.length > 0);

  if (augmentedPhases.length === 0) {
    rmEl.innerHTML = '';
    const d = ce('div'); d.className = 'all-done';
    const ch = ce('div'); ch.className = 'big-check'; ch.setAttribute('aria-hidden','true'); ch.textContent = '🏆';
    const p  = ce('p');  p.textContent = t('allDoneRoadmap');
    d.appendChild(ch); d.appendChild(p); rmEl.appendChild(d);
    return;
  }

  // CHANGED: C10 – next best skill prefers in-demand
  let nextSkill = null;
  for (const ph of augmentedPhases) {
    // first pass: in-demand with prereqs met
    for (const id of ph.missingSkills) {
      const s = skillMap[id]; if (!s) continue;
      const prereqsMet = !s.requires || s.requires.every(req => (skillState[req] || 0) === 1);
      if (prereqsMet && inDemandSkillIds.has(id)) { nextSkill = s; break; }
    }
    if (nextSkill) break;
    // second pass: any skill with prereqs met
    for (const id of ph.missingSkills) {
      const s = skillMap[id]; if (!s) continue;
      const prereqsMet = !s.requires || s.requires.every(req => (skillState[req] || 0) === 1);
      if (prereqsMet) { nextSkill = s; break; }
    }
    if (nextSkill) break;
  }

  const frag = document.createDocumentFragment();

  if (nextSkill) {
    const nsc = ce('div'); nsc.className = 'next-skill-card';
    nsc.setAttribute('role', 'region'); nsc.setAttribute('aria-label', t('nextBestSkill'));
    const icon = ce('div'); icon.className = 'next-skill-icon'; icon.setAttribute('aria-hidden','true'); icon.textContent = '🎯';
    const info = ce('div');
    const l2   = ce('div'); l2.className = 'next-skill-label'; l2.textContent = t('nextBestSkill');
    const nm   = ce('div'); nm.className  = 'next-skill-name';  nm.textContent  = nextSkill.name;
    const meta = ce('div'); meta.className = 'next-skill-meta';
    meta.textContent = nextSkill.tip;
    if (nextSkill.hours) {
      const sw = Math.ceil(nextSkill.hours / hrs);
      meta.textContent += ' · ~' + sw + ' wk' + (sw !== 1 ? 's' : '');
    }
    if (inDemandSkillIds.has(nextSkill.id)) {
      const db = ce('span'); db.className = 'badge badge-demand'; db.textContent = t('inDemand');
      db.style.marginLeft = '.4rem';
      nm.appendChild(db);
    }
    info.appendChild(l2); info.appendChild(nm); info.appendChild(meta);
    nsc.appendChild(icon); nsc.appendChild(info);
    frag.appendChild(nsc);
  }

  const wrap = ce('div'); wrap.className = 'roadmap-phases';

  augmentedPhases.forEach(ph => {
    const phaseNum = roleData.roadmap.findIndex(p => p.phase === ph.phase) + 1;
    const div = ce('div'); div.className = 'phase phase-' + phaseNum;

    const ordered = [...ph.missingSkills].sort((a, b) => {
      const sa = skillMap[a], sb = skillMap[b]; if (!sa || !sb) return 0;
      const aOk = !sa.requires || sa.requires.every(req => (skillState[req]||0)===1);
      const bOk = !sb.requires || sb.requires.every(req => (skillState[req]||0)===1);
      const aD = inDemandSkillIds.has(a), bD = inDemandSkillIds.has(b); // CHANGED: C10
      if (aOk && aD && !(bOk && bD)) return -1;
      if (!(aOk && aD) && bOk && bD) return 1;
      if (aOk && !bOk) return -1; if (!aOk && bOk) return 1;
      return 0;
    });

    const phaseHoursLeft = ordered.reduce((acc, id) => {
      const s = skillMap[id]; if (!s) return acc;
      const isLearning = (skillState[id]||0) === 0.5;
      return acc + (s.hours||0) * (isLearning ? 0.5 : 1);
    }, 0);
    const phaseWeeks = Math.ceil(phaseHoursLeft / hrs);

    const hdr = ce('div'); hdr.className = 'phase-header';
    const numEl = ce('div'); numEl.className = 'phase-num'; numEl.setAttribute('aria-hidden','true'); numEl.textContent = phaseNum;
    const titleEl = ce('div'); const strong = ce('strong'); strong.textContent = ph.phase; titleEl.appendChild(strong);
    const weeksSpan = ce('span'); weeksSpan.className = 'phase-weeks';
    weeksSpan.textContent = '~' + phaseWeeks + ' wk' + (phaseWeeks !== 1 ? 's' : '');
    hdr.appendChild(numEl); hdr.appendChild(titleEl); hdr.appendChild(weeksSpan);

    const body = ce('div'); body.className = 'phase-body';
    const noteP = ce('p'); noteP.style.cssText = 'font-size:.8rem;color:var(--text-muted);margin-bottom:.65rem;';
    noteP.textContent = ph.note; body.appendChild(noteP);

    const skillsUl = ce('ul'); skillsUl.className = 'phase-skills-list';
    ordered.forEach((id, idx) => {
      const s = skillMap[id]; if (!s) return;
      const li = ce('li'); li.className = 'phase-skill-item';
      const stepNum = ce('div'); stepNum.className = 'phase-step-num'; stepNum.setAttribute('aria-hidden','true'); stepNum.textContent = idx + 1;
      const infoDiv = ce('div');
      const nameRow2 = ce('div'); nameRow2.style.display = 'flex'; nameRow2.style.alignItems = 'center'; nameRow2.style.gap = '.3rem';
      const nameSpan = ce('span'); nameSpan.textContent = s.name;
      nameRow2.appendChild(nameSpan);
      if (inDemandSkillIds.has(id)) { const db = ce('span'); db.className = 'badge badge-demand'; db.textContent = t('inDemand'); nameRow2.appendChild(db); }
      const tipEm = ce('em'); tipEm.textContent = s.tip;
      const sw = s.hours ? Math.ceil(s.hours / hrs) : 0;
      const hourEm = ce('em'); if (sw) hourEm.textContent = ' · ~' + sw + ' wk' + (sw !== 1 ? 's' : '');
      infoDiv.appendChild(nameRow2); infoDiv.appendChild(tipEm);
      if (sw) infoDiv.appendChild(hourEm);
      if (s.resource) {
        const a = ce('a'); a.href = s.resource; a.target = '_blank'; a.rel = 'noopener noreferrer';
        a.className = 'skill-resource-link'; a.textContent = t('officialResource');
        infoDiv.appendChild(a);
      }
      li.appendChild(stepNum); li.appendChild(infoDiv); skillsUl.appendChild(li);
    });
    body.appendChild(skillsUl); div.appendChild(hdr); div.appendChild(body); wrap.appendChild(div);
  });

  frag.appendChild(wrap); rmEl.innerHTML = ''; rmEl.appendChild(frag);
}

// ===== RENDER: FULL DASHBOARD =====
// ═════════════════════════════════════════════════════════════
// RENDER: FULL DASHBOARD
// ═════════════════════════════════════════════════════════════
function updateDashboard() {
  if (!currentRole) return;
  const state = computeState();
  if (!scoreDomBuilt) buildScoreDom();
  updateScoreDom(state);
  renderGap(state);
  renderRoadmap(currentRole);
}

// ===== RENDER: CAREER INFO =====
// CHANGED: career info card — salary, overview, demand, source
function renderCareerInfo(roleKey) {
  const card = qs('#career-info-card');
  if (!card) return;
  const info = CAREER_INFO[roleKey];
  if (!info) { card.style.display = 'none'; return; }
  card.style.display = '';

  const fmt = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
  const fmtSalary = (n) => fmt.format(n).replace('IDR', 'Rp').replace(/\s+/, '\u00A0');

  // Title
  qs('#career-info-title').textContent = t('careerInfoTitle');

  // Salary
  qs('#career-salary-label').textContent = t('careerSalaryLabel');
  qs('#career-salary-value').textContent =
    fmtSalary(info.salary.min) + ' – ' + fmtSalary(info.salary.max) + ' ' + t('careerSalaryUnit');

  // Overview
  qs('#career-overview-label').textContent = t('careerOverviewLabel');
  qs('#career-overview-text').textContent = info.overview[currentLang] || info.overview.id;

  // Demand badge
  qs('#career-demand-label').textContent = t('careerDemandLabel');
  const demandBadge = qs('#career-demand-badge');
  const demandText = info.demand[currentLang] || info.demand.id;
  demandBadge.textContent = demandText;
  demandBadge.className = 'career-demand-badge career-demand-' + info.demand.level;

  // Source line
  qs('#career-source-text').textContent = t('careerSourceLabel') + ': ' + info.source + ', ' + info.updated;

  // Disclaimer
  qs('#career-disclaimer').textContent = t('careerDisclaimer');
}

// ===== MARKET MATCHER =====
// ═════════════════════════════════════════════════════════════
// MARKET MATCHER — CHANGED: C7-C11
// ═════════════════════════════════════════════════════════════

// CHANGED: C8 – token-safe, word-boundary matching
function buildTermRegex(term) {
  // Escape special chars, then wrap in word-boundary-aware pattern
  // Handles c++, ci/cd, node.js, etc.
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Use lookahead/lookbehind where possible; fall back to \b
  return new RegExp('(?<![\\w])' + escaped + '(?![\\w])', 'gi');
}

function countTermInText(term, text) {
  try {
    const re = buildTermRegex(term);
    return (text.match(re) || []).length;
  } catch (_) { return 0; }
}

// CHANGED: Item 2 – show hint while textarea is empty
function showMatcherHint() {
  const resultsEl = qs('#match-results');
  if (!resultsEl) return;
  resultsEl.innerHTML = '';
  const p = ce('p');
  p.className = 'matcher-hint';
  p.textContent = t('matcherHint');
  resultsEl.appendChild(p);
}

function analyzeJobPosting() {
  const ta = qs('#job-textarea');
  const resultsEl = qs('#match-results');
  const text = ta.value.trim();

  // CHANGED: Item 2 – show hint if textarea is empty before anything else
  if (!text) {
    showMatcherHint();
    return;
  }
  if (!currentRole) {
    resultsEl.innerHTML = ''; const p = ce('p'); p.style.cssText = 'color:var(--text-muted);font-size:.85rem;';
    p.textContent = t('matchNoRole'); resultsEl.appendChild(p); return;
  }

  const skillMap = getSkillMap(currentRole);
  const allSkills = getAllSkillsForRole(currentRole);
  const textLower = text.toLowerCase();

  // Score each skill
  const skillScores = allSkills.map(s => {
    const terms = s.keywords && s.keywords.length ? s.keywords : [s.name.toLowerCase()];
    const count = terms.reduce((acc, kw) => acc + countTermInText(kw, textLower), 0);
    return { skill: s, count };
  }).filter(x => x.count > 0)
    .sort((a, b) => b.count - a.count);

  // Update in-demand set
  inDemandSkillIds = new Set(skillScores.map(x => x.skill.id));

  // Priority gaps: in-demand skills not mastered
  const priorityGaps = skillScores.filter(x => (skillState[x.skill.id] || 0) < 1);

  // Market match %: weighted mastery of in-demand skills
  const inDemandTotal = skillScores.length;
  const inDemandMastered = skillScores.reduce((acc, x) => acc + (skillState[x.skill.id] || 0), 0);
  const matchPct = inDemandTotal === 0 ? 0 : Math.round((inDemandMastered / inDemandTotal) * 100);

  // CHANGED: C9 – other tech terms in text not in current role
  const roleTerms = new Set(allSkills.flatMap(s => (s.keywords || [s.name.toLowerCase()])));
  const otherTerms = COMMON_TECH_TERMS.filter(term => {
    if (roleTerms.has(term)) return false;
    return countTermInText(term, textLower) > 0;
  });

  resultsEl.innerHTML = '';

  if (skillScores.length === 0 && otherTerms.length === 0) {
    const p = ce('p'); p.style.cssText = 'color:var(--text-muted);font-size:.85rem;';
    p.textContent = t('matchNoResult'); resultsEl.appendChild(p);
    // re-render checklist to clear in-demand badges
    renderChecklist(currentRole); renderRoadmap(currentRole); return;
  }

  // Match % banner
  const banner = ce('div'); banner.className = 'match-pct-banner';
  const blbl = ce('div'); blbl.className = 'match-pct-label'; blbl.textContent = t('matchPctLabel');
  const bval = ce('div'); bval.className = 'match-pct-value'; bval.textContent = matchPct + '%';
  banner.appendChild(blbl); banner.appendChild(bval); resultsEl.appendChild(banner);

  // Found skills
  if (skillScores.length > 0) {
    const t1 = ce('div'); t1.className = 'match-section-title'; t1.textContent = t('matchFoundTitle');
    resultsEl.appendChild(t1);
    const cl = ce('div'); cl.className = 'match-chip-list';
    skillScores.forEach(x => {
      const chip = ce('span'); chip.className = 'match-chip match-chip-found';
      chip.textContent = x.skill.name;
      const cnt = ce('span'); cnt.className = 'match-chip-count'; cnt.textContent = '×' + x.count;
      chip.appendChild(cnt); cl.appendChild(chip);
    });
    resultsEl.appendChild(cl);
  }

  // Priority gaps
  if (priorityGaps.length > 0) {
    const t2 = ce('div'); t2.className = 'match-section-title'; t2.textContent = t('matchGapTitle');
    resultsEl.appendChild(t2);
    const cl2 = ce('div'); cl2.className = 'match-chip-list';
    priorityGaps.forEach(x => {
      const chip = ce('span'); chip.className = 'match-chip match-chip-gap';
      chip.textContent = x.skill.name;
      const cnt = ce('span'); cnt.className = 'match-chip-count'; cnt.textContent = '×' + x.count;
      chip.appendChild(cnt); cl2.appendChild(chip);
    });
    resultsEl.appendChild(cl2);
  }

  // CHANGED: C9 – other terms + add-as-custom
  if (otherTerms.length > 0) {
    const t3 = ce('div'); t3.className = 'match-section-title'; t3.textContent = t('matchOtherTitle');
    resultsEl.appendChild(t3);
    const cl3 = ce('div'); cl3.className = 'match-chip-list';
    otherTerms.forEach(term => {
      const cnt = countTermInText(term, textLower);
      const chip = ce('span'); chip.className = 'match-chip match-chip-other';
      chip.textContent = term;
      const cntSp = ce('span'); cntSp.className = 'match-chip-count'; cntSp.textContent = '×' + cnt;
      chip.appendChild(cntSp); cl3.appendChild(chip);

      // CHANGED: C10 – add as custom skill button
      const addRow = ce('div'); addRow.className = 'custom-add-row';
      const addLbl = ce('span'); addLbl.textContent = term;
      const addBtn = ce('button'); addBtn.className = 'btn btn-green'; addBtn.type = 'button';
      addBtn.style.fontSize = '.72rem'; addBtn.style.padding = '.2rem .5rem';
      addBtn.textContent = t('addCustom');
      addBtn.addEventListener('click', () => {
        addCustomSkill(currentRole, term);
        addRow.remove();
      });
      addRow.appendChild(addLbl); addRow.appendChild(addBtn);
      resultsEl.appendChild(addRow);
    });
    resultsEl.appendChild(cl3);
  }

  // Re-render checklist + roadmap to show in-demand badges
  renderChecklist(currentRole);
  renderRoadmap(currentRole);
}

// CHANGED: C10 – add/remove custom skill
function addCustomSkill(role, name) {
  if (!customSkills[role]) customSkills[role] = [];
  const id = 'custom_' + Date.now();
  const skill = { id, name, cat:'Custom', tip:'Custom skill from job posting', hours:10, phase:2, _custom:true };
  customSkills[role].push(skill);
  saveCustom(role);
  renderChecklist(role);
  updateDashboard();
}

function removeCustomSkill(role, id) {
  if (!customSkills[role]) return;
  customSkills[role] = customSkills[role].filter(s => s.id !== id);
  delete skillState[id];
  saveProgress(role);
  saveCustom(role);
  renderChecklist(role);
  updateDashboard();
}

// ===== EXPORT / IMPORT =====
// ═════════════════════════════════════════════════════════════
// EXPORT / IMPORT — CHANGED: C11
// ═════════════════════════════════════════════════════════════
function exportJSON() {
  if (!currentRole) return;
  const payload = {
    role: currentRole,
    roleLabel: ROLES[currentRole].label,
    skillState,
    customSkills: customSkills[currentRole] || [],
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = ce('a'); a.href = url;
  a.download = 'skillgap_' + currentRole + '_' + Date.now() + '.json';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

function importJSON(file) {
  const statusEl = qs('#import-status');
  statusEl.className = ''; statusEl.style.display = ''; statusEl.textContent = ''; // CHANGED: do not force inline display:none

  const reader = new FileReader();
  reader.onload = function(e) {
    let parsed;
    try { parsed = JSON.parse(e.target.result); } catch (err) {
      statusEl.className = 'err'; statusEl.textContent = t('importErr') + err.message; return;
    }
    // CHANGED: C11 – validate structure
    const errs = validateImport(parsed);
    if (errs.length > 0) {
      statusEl.className = 'err'; statusEl.textContent = t('importErr') + errs[0]; return;
    }
    // Apply
    const role = parsed.role;
    if (!ROLES[role]) { statusEl.className = 'err'; statusEl.textContent = t('importErr') + 'Unknown role: ' + role; return; }

    // Migrate legacy true/false
    const migrated = {};
    Object.keys(parsed.skillState || {}).forEach(k => {
      const v = parsed.skillState[k];
      if (v === true)  migrated[k] = 1;
      else if (v === false) migrated[k] = 0;
      else if ([0, 0.5, 1].includes(v)) migrated[k] = v;
    });

    if (role !== currentRole) {
      // switch role
      qs('#role-select').value = role;
      currentRole = role; scoreDomBuilt = false; lastMilestone = -1;
    }
    skillState = migrated;
    customSkills[role] = (parsed.customSkills || []).filter(cs => cs.id && cs.name);
    saveProgress(role); saveCustom(role);
    qs('#controls-row').style.display = 'flex';
    renderCareerInfo(role); // CHANGED: update career info card on import
    renderChecklist(role); updateDashboard();
    statusEl.className = 'ok'; statusEl.textContent = t('importOk');
    setTimeout(() => { statusEl.style.display = 'none'; }, 3000);
  };
  reader.readAsText(file);
}

function validateImport(obj) {
  const errs = [];
  if (!obj || typeof obj !== 'object') { errs.push('Root must be an object'); return errs; }
  if (typeof obj.role !== 'string') errs.push('"role" must be a string');
  if (obj.skillState !== undefined && typeof obj.skillState !== 'object') errs.push('"skillState" must be an object');
  if (obj.customSkills !== undefined && !Array.isArray(obj.customSkills)) errs.push('"customSkills" must be an array');
  if (Array.isArray(obj.customSkills)) {
    obj.customSkills.forEach((cs, i) => {
      if (!cs.id || typeof cs.id !== 'string')   errs.push('customSkills[' + i + '].id must be a string');
      if (!cs.name || typeof cs.name !== 'string') errs.push('customSkills[' + i + '].name must be a string');
      if (cs.hours !== undefined && typeof cs.hours !== 'number') errs.push('customSkills[' + i + '].hours must be a number');
    });
  }
  return errs;
}

// ===== COPY ROADMAP TEXT =====
// ═════════════════════════════════════════════════════════════
// COPY ROADMAP TEXT — CHANGED: include custom skills and localized headers
// ═════════════════════════════════════════════════════════════
function buildRoadmapText() {
  if (!currentRole) return '';
  const role = ROLES[currentRole]; const skillMap = getSkillMap(currentRole); const hrs = studyHours();
  const isId = currentLang === 'id';
  let out = (isId ? 'Peta Karier: ' : 'Career Roadmap: ') + role.label + '\n' + '='.repeat(40) + '\n\n';
  const state = computeState();
  out += (isId ? 'Kesiapan: ' : 'Readiness: ') + state.pct + '% (' + state.mastered + '/' + state.total + ' ' + (isId ? 'skill dikuasai' : 'skills mastered') + ')\n\n';
  role.roadmap.forEach((ph, i) => {
    let skillIds = [...ph.skills];
    (customSkills[currentRole] || []).filter(cs => (cs.phase || 2) === i + 1).forEach(cs => skillIds.push(cs.id));
    const missing = skillIds.filter(id => !skillMap[id] || (skillState[id] || 0) < 1);
    if (missing.length === 0) return;
    out += (isId ? 'FASE ' : 'PHASE ') + (i+1) + ': ' + ph.phase + '\n' + ph.note + '\n';
    missing.forEach((id, j) => {
      const s = skillMap[id]; if (!s) return;
      const sw = s.hours ? Math.ceil(s.hours / hrs) + (isId ? ' mgg' : ' wks') : '';
      out += '  ' + (j+1) + '. ' + s.name + (sw ? ' (' + sw + ')' : '') + '\n';
      out += '     ' + s.tip + '\n';
      if (s.resource) out += '     ' + s.resource + '\n';
    });
    out += '\n';
  });
  return out;
}

function fallbackCopy(text, cb) {
  try {
    const ta = ce('textarea'); ta.value = text;
    ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta); cb();
  } catch (_) {}
}

// ===== CONFETTI =====
// ═════════════════════════════════════════════════════════════
// CONFETTI
// ═════════════════════════════════════════════════════════════
function launchConfetti() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = qs('#confetti-canvas'); const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const COLORS = ['#4F46E5','#818CF8','#059669','#34D399','#2563EB','#FBBF24','#F87171'];
  const particles = Array.from({length:120}, () => ({
    x: Math.random()*canvas.width, y: Math.random()*canvas.height - canvas.height,
    w: 6+Math.random()*6, h: 10+Math.random()*6,
    color: COLORS[Math.floor(Math.random()*COLORS.length)],
    rot: Math.random()*Math.PI*2, vx:(Math.random()-.5)*2, vy:2+Math.random()*3,
    vrot:(Math.random()-.5)*.15,
  }));
  const end = performance.now() + 3000; let raf;
  function draw(now) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.vrot;
      if (p.y>canvas.height+20) { p.y=-20; p.x=Math.random()*canvas.width; }
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
      ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore();
    });
    if (now<end) raf=requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  raf = requestAnimationFrame(draw);
}

// ===== INTERACTIONS =====
// ═════════════════════════════════════════════════════════════
// INTERACTIONS
// ═════════════════════════════════════════════════════════════

// Role change
qs('#role-select').addEventListener('change', function() {
  const role = this.value; scoreDomBuilt = false; lastMilestone = -1;
  inDemandSkillIds = new Set();
  const ta = qs('#job-textarea');
  if (!ta.value.trim()) {
    showMatcherHint(); // CHANGED: Item 2 – show hint if empty
  } else {
    qs('#match-results').innerHTML = '';
  }
  if (!role) {
    currentRole = null; skillState = {};
    qs('#controls-row').style.display = 'none';
    renderCareerInfo(null); // CHANGED: hide career card when no role selected
    ['checklist-container','score-container','gap-container','roadmap-container'].forEach(id => {
      const el = qs('#'+id); el.innerHTML = '';
      const ph = ce('div'); ph.className = 'placeholder';
      const em = ce('span'); em.className = 'emoji'; em.setAttribute('aria-hidden','true');
      const txt = ce('span');
      if (id==='checklist-container') { em.textContent='🗂️'; txt.setAttribute('data-i18n','checklistEmpty'); }
      else if (id==='score-container') { em.textContent='📈'; txt.setAttribute('data-i18n','scorePlaceholder'); }
      else if (id==='gap-container') { em.textContent='🔍'; txt.setAttribute('data-i18n','gapPlaceholder'); }
      else { em.textContent='🚀'; txt.setAttribute('data-i18n','roadmapPlaceholder'); }
      txt.textContent = t(txt.getAttribute('data-i18n'));
      ph.appendChild(em); ph.appendChild(txt); el.appendChild(ph);
    });
    return;
  }
  currentRole = role;
  skillState = loadProgress(role);
  customSkills[role] = customSkills[role] || loadCustom(role);
  qs('#controls-row').style.display = 'flex';
  renderCareerInfo(role); // CHANGED: show career info for selected role
  renderChecklist(role); updateDashboard();
});

qs('#btn-reset').addEventListener('click', function() {
  if (!currentRole) return;
  skillState = {}; saveProgress(currentRole);
  scoreDomBuilt = false; lastMilestone = -1;
  renderChecklist(currentRole); updateDashboard();
});

qs('#hours-input').addEventListener('input', function() {
  const v = parseInt(this.value, 10);
  if (!isFinite(v)||v<1) this.value=1; if (v>60) this.value=60;
  if (currentRole) updateDashboard();
});

qs('#btn-copy').addEventListener('click', function() {
  if (!currentRole) return;
  const text = buildRoadmapText(); const confirmEl = qs('#copy-confirm');
  function show() { confirmEl.classList.add('show'); setTimeout(()=>confirmEl.classList.remove('show'),2000); }
  if (navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(text).then(show).catch(()=>fallbackCopy(text,show));
  else fallbackCopy(text, show);
});

qs('#btn-print').addEventListener('click', () => window.print());

// Export / Import — CHANGED: C11
qs('#btn-export').addEventListener('click', exportJSON);
qs('#btn-import').addEventListener('click', () => qs('#import-file').click());
qs('#import-file').addEventListener('change', function() {
  if (this.files && this.files[0]) { importJSON(this.files[0]); this.value=''; }
});

// Matcher — CHANGED: C7
qs('#job-textarea').addEventListener('input', function() {
  const len = this.value.length;
  const counter = qs('#char-counter');
  counter.textContent = len + ' / 5000';
  counter.className = len > 4500 ? 'warn' : '';
});
qs('#btn-analyze').addEventListener('click', analyzeJobPosting);
qs('#btn-clear-jd').addEventListener('click', function() {
  qs('#job-textarea').value = '';
  qs('#char-counter').textContent = '0 / 5000';
  qs('#char-counter').className = '';
  showMatcherHint(); // CHANGED: Item 2 – show hint on clear
  inDemandSkillIds = new Set();
  if (currentRole) { renderChecklist(currentRole); renderRoadmap(currentRole); }
});
// CHANGED: Item 1 – sample text button fills textarea and triggers analysis
qs('#btn-sample').addEventListener('click', function() {
  const sample = (currentRole && SAMPLE_JOBS[currentRole]) ? SAMPLE_JOBS[currentRole] : SAMPLE_JOBS_FALLBACK;
  const ta = qs('#job-textarea');
  ta.value = sample;
  const len = sample.length;
  const counter = qs('#char-counter');
  counter.textContent = len + ' / 5000';
  counter.className = len > 4500 ? 'warn' : '';
  analyzeJobPosting();
});

// CHANGED: A1 – Language toggle
function setLanguage(lang) {
  currentLang = lang;
  savePref('skillgap_lang', lang);
  document.documentElement.lang = lang;
  qs('#btn-lang-id').setAttribute('aria-pressed', lang==='id' ? 'true' : 'false');
  qs('#btn-lang-en').setAttribute('aria-pressed', lang==='en' ? 'true' : 'false');
  qs('#btn-lang-id').classList.toggle('active', lang==='id');
  qs('#btn-lang-en').classList.toggle('active', lang==='en');
  applyI18N();
  // CHANGED: Item 2 – update matcher hint on language change if textarea is empty or hint is showing
  const ta = qs('#job-textarea');
  if (!ta || !ta.value.trim() || qs('#match-results .matcher-hint')) {
    showMatcherHint();
  }
  // Re-render dynamic content with new strings
  if (currentRole) { renderCareerInfo(currentRole); renderChecklist(currentRole); updateDashboard(); } // CHANGED: re-render career info on lang switch
  else {
    // Update placeholders in containers
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key === 'appTitle') el.innerHTML = t(key);
      else el.textContent = t(key);
    });
  }
}

qs('#btn-lang-id').addEventListener('click', () => setLanguage('id'));
qs('#btn-lang-en').addEventListener('click', () => setLanguage('en'));

// CHANGED: A2 – Theme toggle
function setTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  const btn = qs('#btn-theme');
  btn.textContent = dark ? '☀️' : '🌙';
  btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
  btn.classList.toggle('active', dark);
  savePref('skillgap_theme', dark ? 'dark' : 'light');
}

qs('#btn-theme').addEventListener('click', function() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  setTheme(!isDark);
});

// ===== INIT =====
// ═════════════════════════════════════════════════════════════
// INIT
// ═════════════════════════════════════════════════════════════
(function init() {
  // CHANGED: A1 – restore language
  const savedLang = loadPref('skillgap_lang', 'id');
  currentLang = savedLang;
  applyI18N();
  qs('#btn-lang-id').setAttribute('aria-pressed', savedLang==='id' ? 'true' : 'false');
  qs('#btn-lang-en').setAttribute('aria-pressed', savedLang==='en' ? 'true' : 'false');
  qs('#btn-lang-id').classList.toggle('active', savedLang==='id');
  qs('#btn-lang-en').classList.toggle('active', savedLang==='en');

  // CHANGED: A2 – restore theme
  const savedTheme = loadPref('skillgap_theme', 'light');
  setTheme(savedTheme === 'dark');

  // CHANGED: Item 2 – show initial empty-state hint
  showMatcherHint();
})();
