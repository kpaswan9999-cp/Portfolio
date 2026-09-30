import type { Project, SkillCategory, Achievement, Education, UpskillingItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Krishna Paswan',
  title: 'AI & Tech Intern | Python · FastAPI · Automation · AI-Assisted Development',
  tagline: 'Hands-on AI Builder & Certified Data Scientist building production Generative AI products',
  bio: `Certified Data Scientist with a BSc IT (2025), experienced in shipping Generative AI products with Python, FastAPI, Gemini API, LangChain, FAISS, and Next.js deployed live on Vercel. Top 15 Finalist among 16,000+ teams at AI for Bharat Hackathon 2026. Actively expanding expertise in Open-Source AI, LoRA fine-tuning, Model Context Protocol (MCP), and Cybersecurity.`,
  location: 'Mumbai, India (Open to 100% Remote)',
  email: 'kpaswan9999@gmail.com',
  phone: '+91 82917 37832',
  github: 'https://github.com/kpaswan9999-cp',
  linkedin: 'https://www.linkedin.com/in/krishna-paswan-9999', // Updated standard format
  status: 'Available Immediately for 100% Remote Internship / Tech Roles',
  relocation: 'Open to future relocation to Europe or the UK',
  avatar: '/krishna-paswan.jpg',
  resumePdf: '/Krishna_Paswan_Resume.pdf'
};

export const RESUME_CONFIG = {
  // Option 1: File placed in public/ (e.g. public/Krishna_Paswan_Resume.pdf)
  localPdfPath: '/Krishna_Paswan_Resume.pdf',
  // Option 2: Direct Google Drive / Cloud link (leave empty to use local PDF)
  cloudResumeUrl: '',
};

export const PROJECTS: Project[] = [
  {
    id: 'hireresume-ai',
    title: 'HireResumeAI',
    subtitle: 'AI-Powered Resume Optimizer & ATS Analyzer',
    category: 'Gen AI',
    tags: ['FastAPI', 'Gemini API', 'LangChain', 'FAISS', 'Next.js', 'Python', 'Vercel'],
    description: 'Designed, built, and deployed an end-to-end AI-powered Applicant Tracking System (ATS) analyzer that helps job seekers optimize resumes for specific job descriptions.',
    bulletPoints: [
      'Built a FastAPI backend integrating Gemini API via LangChain with FAISS vector search for semantic matching.',
      'Generates match scores, detailed skill gap analysis, personalized resume rewrite suggestions, and targeted interview preparation questions.',
      'Developed Next.js frontend with dynamic template selection and automated the resume analysis workflow end to end.',
      'Shipped the product live to production on Vercel.'
    ],
    liveUrl: 'https://hire-resume-ai.vercel.app',
    githubUrl: 'https://github.com/kpaswan9999-cp',
    featured: true,
    awardBadge: '🚀 Live Production App',
    iconName: 'FileSearch'
  },
  {
    id: 'raksha-ai',
    title: 'Raksha AI',
    subtitle: 'Women\'s Emergency Command Center',
    category: 'Gen AI',
    tags: ['Next.js', 'FastAPI', 'Python', 'Real-time Alerts', 'Location Tracking', 'AI Safety'],
    description: 'AI-driven women\'s safety command center developed for AI for Bharat Hackathon 2026, earning a spot in the Top 15 National Finalists out of 16,000+ competing teams.',
    bulletPoints: [
      'Collaborated with a cross-functional product team on feature development, real-time telemetry testing, and issue resolution.',
      'Tested and validated data flows for real-time SOS alerts, intelligent threat triage, and live location-tracking features.',
      'Invited to the onsite Grand Finale at Bangalore after advancing through multiple rigorous national elimination rounds.',
      'Contributed to issue triage, documentation, and feature refinement under tight hackathon deadlines.'
    ],
    liveUrl: 'https://raksha-ai-command-center.vercel.app',
    githubUrl: 'https://github.com/kpaswan9999-cp',
    featured: true,
    awardBadge: '🏆 Top 15 Finalist (16,000+ Teams)',
    iconName: 'ShieldAlert'
  },
  {
    id: 'flight-analysis',
    title: 'Indian Domestic Flight Analysis',
    subtitle: 'Airline Fare Trends & Demand Insights Engine',
    category: 'Data Science',
    tags: ['SQL', 'Python', 'Power BI', 'Data Analytics', 'EDA'],
    description: 'Validated and analyzed extensive domestic flight booking data to uncover pricing dynamics, seasonal demand patterns, and passenger booking behavior.',
    bulletPoints: [
      'Engineered SQL data cleaning and aggregation pipelines for multi-dimensional flight booking telemetry.',
      'Uncovered fare trends across airlines, routes, and advance booking windows using Python exploratory data analysis.',
      'Presented actionable business insights in an interactive Power BI dashboard with dynamic parameters.'
    ],
    githubUrl: 'https://github.com/kpaswan9999-cp',
    featured: false,
    awardBadge: '📊 BI Analytics',
    iconName: 'Plane'
  },
  {
    id: 'supermarket-sales',
    title: 'Supermarket Sales BI Dashboard',
    subtitle: 'Multi-Dimensional Retail Transaction Analytics',
    category: 'Data Science',
    tags: ['Advanced Excel', 'Pivot Tables', 'GETPIVOTDATA', 'Dynamic Slicers', 'KPI Cards'],
    description: 'Built an interactive Excel BI dashboard analyzing 1,000+ retail transactions to uncover revenue trends, customer segmentation, and branch performance.',
    bulletPoints: [
      'Utilized advanced Excel techniques including Pivot Tables, dynamic Slicers, and GETPIVOTDATA formulas.',
      'Designed executive KPI cards and dynamic visualizations that transformed raw transaction logs into commercial insights.',
      'Enabled multi-dimensional filtering by product line, payment method, and customer type.'
    ],
    githubUrl: 'https://github.com/kpaswan9999-cp',
    featured: false,
    awardBadge: '📈 Executive Dashboard',
    iconName: 'ShoppingBag'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Generative AI & LLMs',
    icon: 'Brain',
    skills: [
      { name: 'Gemini API & LangChain', level: 92, tag: 'Core' },
      { name: 'FAISS Vector Search', level: 88, tag: 'Vector DB' },
      { name: 'Prompt Engineering', level: 95, tag: 'Optimization' },
      { name: 'AI-Assisted Coding', level: 95, tag: 'Workflow' },
      { name: 'RAG Architectures', level: 85, tag: 'Advanced' }
    ]
  },
  {
    title: 'Languages & Frameworks',
    icon: 'Code',
    skills: [
      { name: 'Python (Pandas, NumPy)', level: 90, tag: 'Primary' },
      { name: 'FastAPI', level: 88, tag: 'Backend' },
      { name: 'Next.js & React', level: 82, tag: 'Frontend' },
      { name: 'SQL & MySQL', level: 85, tag: 'Database' },
      { name: 'HTML5 & CSS3', level: 88, tag: 'Styling' }
    ]
  },
  {
    title: 'Data Science & Analytics',
    icon: 'BarChart3',
    skills: [
      { name: 'Power BI & DAX', level: 85, tag: 'Visualization' },
      { name: 'Tableau', level: 80, tag: 'BI' },
      { name: 'Exploratory Data Analysis (EDA)', level: 90, tag: 'Analytics' },
      { name: 'Excel (Pivot, GETPIVOTDATA)', level: 92, tag: 'Spreadsheets' },
      { name: 'Data Cleaning & Validation', level: 90, tag: 'ETL' }
    ]
  },
  {
    title: 'Automation & APIs',
    icon: 'Cpu',
    skills: [
      { name: 'Model Context Protocol (MCP)', level: 82, tag: 'Protocol' },
      { name: 'Automated Workflows', level: 88, tag: 'Automation' },
      { name: 'Social Media APIs', level: 80, tag: 'APIs' },
      { name: 'Git & GitHub', level: 90, tag: 'Version Control' },
      { name: 'Vercel Deployment', level: 88, tag: 'DevOps' }
    ]
  }
];

export const UPSKILLING_ITEMS: UpskillingItem[] = [
  {
    topic: 'Open-Source AI, LoRA & CivitAI',
    description: 'Mastering LoRA fine-tuning of open-source image models and utilizing CivitAI platform for specialized AI media creation.',
    badge: 'In Progress'
  },
  {
    topic: 'Model Context Protocol (MCP)',
    description: 'Connecting AI foundation models with custom tools, databases, and automated workflow MCP servers.',
    badge: 'In Progress'
  },
  {
    topic: 'Social Media APIs & Automation',
    description: 'Exploring YouTube, Instagram, and TikTok APIs to build hands-free content publishing and analytics automation pipelines.',
    badge: 'In Progress'
  },
  {
    topic: 'AI Video & Audio Generation',
    description: 'Experimenting with cutting-edge AI video synthesis and neural voice generation for short-form media content.',
    badge: 'In Progress'
  },
  {
    topic: 'Cybersecurity & Ethical Hacking',
    description: 'Building cybersecurity foundations, ethical hacking practices, and application vulnerability remediation.',
    badge: 'In Progress'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ai-for-bharat',
    title: 'Top 15 Finalist — AI for Bharat Hackathon',
    organizer: 'PanIIT Alumni India & PanIIT Bangalore Summit 2026 (Govt. of Karnataka & HackerEarth)',
    rank: 'Top 15 out of 16,000+ Teams Nationwide',
    location: 'National Grand Finale, Bangalore',
    description: 'Emerging as a Finalist in the AI for Bharat Hackathon with Raksha AI. Recognized for technical excellence, innovative approach, and building impactful AI-driven safety solutions.',
    year: '16th May, 2026',
    badgeType: 'gold',
    category: 'Hackathon',
    certificateUrl: '/certificates/ai-for-bharat-certificate.png',
    certificateType: 'image'
  },
  {
    id: 'nebulon',
    title: 'Exceptional Performance — Nebulon Hackathon',
    organizer: 'TransStadia Institute & University of Mumbai (VR Techlearn & Bharat Co-op Bank)',
    rank: 'Top 5 Finalist & Innovation Recognition',
    location: 'Mumbai',
    description: 'Awarded in recognition of exceptional performance and innovative AI development demonstrated during the Nebulon Hackathon 2026.',
    year: '2026',
    badgeType: 'silver',
    category: 'Hackathon',
    certificateUrl: '/certificates/nebulon-hackathon-certificate.jpg',
    certificateType: 'image'
  },
  {
    id: 'far-away',
    title: 'Round 2 Contestant — FAR AWAY International Hackathon',
    organizer: 'ZuUp International & Chandigarh University',
    rank: 'Round 2 Global Contestant (18th Place)',
    location: 'Global Online',
    description: 'Selected as a Round 2 contestant representing team "The Outliers" in FAR AWAY 2026 – International Hackathon.',
    year: 'August 2026',
    badgeType: 'bronze',
    category: 'Hackathon',
    certificateUrl: '/certificates/far-away-hackathon-certificate.pdf',
    certificateType: 'pdf',
    certificateId: 'FA26-U530EK11-02'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Post Graduate Program in Data Science & Analytics with Advanced ML Track',
    institution: 'Imarticus Learning (NSDC & Skill India)',
    duration: '2025 – 2026',
    details: 'Certified Data Scientist Professional covering advanced statistics, Machine Learning, Deep Learning, SQL, Python, Power BI, and Tableau.',
    certificateUrl: '/certificates/imarticus-data-science-certificate.png',
    certificateType: 'image',
    certificateId: 'EK4ECEE25650E5'
  },
  {
    degree: 'Bachelor of Information Technology (BSc IT)',
    institution: 'Rajiv Gandhi College, University of Mumbai',
    duration: '2022 – 2025',
    score: 'CGPA: 8.27 (Distinction)',
    details: 'Graduated with Distinction in Information Technology, Software Engineering, and Database Management.'
  }
];
