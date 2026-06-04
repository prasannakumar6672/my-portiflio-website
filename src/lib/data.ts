import {
    PersonalInfo,
    TechCategory,
    Project,
    Experience,
    Achievement,
    Certification,
    Education,
} from "../types";

export const personalInfo: PersonalInfo = {
    name: "Prasanna Kumar Chirragoni",
    title: "Full Stack Developer & AI/ML Engineer",
    bio: "Building intelligent systems that solve real-world problems",
    avatar: "/images/about.jpeg",
    email: "prasannakumar6672@gmail.com",
    location: "Hyderabad, India",
    resumeUrl: "/resume/prasanna-kumar-resume.pdf",
    socials: {
        github: "https://github.com/prasannakumar6672",
        linkedin: "https://linkedin.com/in/prashuyadav360",
        email: "mailto:prasannakumar6672@gmail.com",
    },
};

export const techStack: TechCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: "SiPython", level: 90, category: "Languages", color: "#3776AB" },
            { name: "TypeScript", icon: "SiTypescript", level: 85, category: "Languages", color: "#3178C6" },
            { name: "JavaScript", icon: "SiJavascript", level: 90, category: "Languages", color: "#F7DF1E" },
            { name: "Java", icon: "FaJava", level: 80, category: "Languages", color: "#007396" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: "FaReact", level: 90, category: "Frontend", color: "#61DAFB" },
            { name: "Next.js", icon: "RiNextjsFill", level: 92, category: "Frontend", color: "#ffffff" },
            { name: "Tailwind CSS", icon: "SiTailwindcss", level: 90, category: "Frontend", color: "#06B6D4" },
            { name: "HTML & CSS", icon: "SiHtml5", level: 95, category: "Frontend", color: "#E34F26" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js / Express", icon: "FaNodeJs", level: 88, category: "Backend", color: "#339933" },
            { name: "FastAPI", icon: "SiFastapi", level: 80, category: "Backend", color: "#009688" },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", icon: "SiMongodb", level: 85, category: "Databases", color: "#47A248" },
            { name: "MySQL", icon: "SiMysql", level: 82, category: "Databases", color: "#4479A1" },
            { name: "PostgreSQL", icon: "SiPostgresql", level: 80, category: "Databases", color: "#4169E1" },
            { name: "Firebase", icon: "SiFirebase", level: 80, category: "Databases", color: "#FFCA28" },
        ],
    },
    {
        title: "AI/ML",
        skills: [
            { name: "TensorFlow", icon: "SiTensorflow", level: 82, category: "AI/ML", color: "#FF6F00" },
            { name: "OpenCV", icon: "SiOpencv", level: 85, category: "AI/ML", color: "#5C3EE6" },
            { name: "LangChain (RAG)", icon: "SiPython", level: 88, category: "AI/ML", color: "#8B5CF6" },
            { name: "Roboflow API", icon: "SiPython", level: 78, category: "AI/ML", color: "#8B5CF6" },
        ],
    },
    {
        title: "Cloud",
        skills: [
            { name: "AWS Academy", icon: "SiAmazonaws", level: 80, category: "Cloud", color: "#FF9900" },
            { name: "Microsoft Azure", icon: "SiMicrosoftazure", level: 82, category: "Cloud", color: "#0089D6" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git & GitHub", icon: "FaGitAlt", level: 92, category: "Tools", color: "#F05032" },
            { name: "VS Code", icon: "SiVisualstudiocode", level: 90, category: "Tools", color: "#007ACC" },
            { name: "Docker", icon: "SiDocker", level: 75, category: "Tools", color: "#2496ED" },
        ],
    },
];

export const projects: Project[] = [
    {
        id: "neurax-hackathon",
        title: "NeuraX Hackathon Website",
        tagline: "Modern hackathon event website with animated UI and responsive design",
        description: "A modern hackathon event website featuring a stunning animated UI with Framer Motion transitions, fully responsive design, and an engaging experience for participants and organizers alike.",
        image: "/images/neurax_hackthon website.png",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/prasannakumar6672/Neurax2.0-Hackthon-Website",
        liveUrl: "https://neurax2-0.vercel.app",
        features: [
            "Modern animated UI with Framer Motion",
            "Fully responsive design",
            "Event timeline and schedule",
            "Participant registration integration",
            "Interactive FAQ and info sections"
        ],
        problemStatement: "Hackathons need highly engaging, informative, and visually spectacular websites to attract top talent and maintain sponsor interest, but generic event registration templates fail to inspire tech students.",
        solution: "Built a fully customized, ultra-premium event portal for the NeuraX Hackathon, leveraging motion designs and interactive timelines to represent the brand's scientific, futuristic identity.",
        architecture: "Created with Next.js and Tailwind CSS. The motion layout is powered by Framer Motion, presenting animated timeline components, collapsible FAQ menus, and an integrated registrations endpoint.",
        challenges: "Ensuring high-end, complex Framer Motion transitions run at a buttery-smooth 60fps on low-powered mobile browsers. Solved by offloading transforms to GPU layers and implementing lazy rendering for below-the-fold assets.",
        futureScope: "Developing an integrated dashboard inside the website that allows live event check-ins, team matchmaking, and peer-to-peer submission review."
    },
    {
        id: "road-damage-detection",
        title: "AI Road Damage Detection & Civic Reporting",
        tagline: "Smart city platform that detects road damage and allows citizens to report civic issues",
        description: "A smart city platform powered by AI vision that automatically detects road damage from images and enables citizens to report civic issues. Features a comprehensive reporting dashboard for municipal authorities to prioritize repairs.",
        image: "/images/ai road damage and civic complaint system.jpeg",
        tech: ["Next.js", "Node.js", "AI Vision"],
        githubUrl: "https://github.com/prasannakumar6672/AI-Road-Damage-Civic-Complaint-System",
        liveUrl: "https://ai-road-damage-civic-complaint-syst.vercel.app/",
        features: [
            "AI-powered road damage identification",
            "Citizen reporting interface",
            "Municipal authority dashboard",
            "Automated triage and prioritization",
            "Real-time status tracking for reports"
        ],
        problemStatement: "Potholes and structural road damage lead to high vehicle repair costs and accidents. Manual surveying by city maintenance departments is slow, expensive, and reactive, relying on user complaints that are often poorly categorized.",
        solution: "A complete smart-city reporting system that automates damage classification using an AI vision engine on citizen-submitted photographs, automatically mapping GPS locations and scheduling repairs based on severity.",
        architecture: "Next.js frontend connects to an Express.js backend. User image uploads are piped to an AI vision inference engine. Damage locations, types (alligator cracking, deep potholes), and severity indexes are mapped in real-time.",
        challenges: "Determining physical dimensions and severity score of road damage using single 2D photos without scale reference. Solved by calibrating aspect ratios using standard lane width guidelines and temporal degradation models.",
        futureScope: "Deploying the vision models on dashcams of municipal garbage trucks or public buses to map the entire city's road network automatically every week."
    },
    {
        id: "water-body-encroachment",
        title: "AI Water Body Encroachment Detection",
        tagline: "Computer vision system that detects illegal water body encroachments using satellite imagery",
        description: "A role-based AI geospatial system for monitoring water body encroachment with interactive dashboards. Uses computer vision and satellite imagery analysis to detect illegal constructions near water bodies, enabling authorities to take timely action.",
        image: "/images/water bodies encroachment detection system.png",
        tech: ["Python", "OpenCV", "ML", "Web Dashboard"],
        githubUrl: "https://github.com/prasannakumar6672/water_Bodies_Encroachment_Detection",
        liveUrl: "https://water-bodies-encroachment-detection.vercel.app/",
        features: [
            "Satellite imagery analysis with OpenCV",
            "Real-time encroachment detection",
            "Role-based access control (Public, Officer, Admin)",
            "Interactive geospatial dashboard",
            "Historical deployment monitoring"
        ],
        problemStatement: "Illegal constructions and encroaching developments near local water bodies pose severe environmental risks, causing urban flooding and ecological degradation. Municipal authorities lack real-time scalable tools to monitor vast areas and detect encroachments automatically.",
        solution: "Developed a computer vision system that monitors satellite and aerial imagery, applying custom object-detection and segmentation pipelines to automatically isolate water boundaries, flag structures constructed within buffer zones, and issue alerts.",
        architecture: "The system uses Python/OpenCV and deep learning models to ingest geospatial satellite feeds. Detected discrepancies are written to a database and served on a role-based dashboard built with Next.js, displaying geofenced construction alerts.",
        challenges: "Varying atmospheric conditions, clouds, and shadow distortions in low-resolution satellite images caused false positives in early iterations. Resolved by incorporating historical temporal image comparisons and adaptive color thresholding.",
        futureScope: "Integrating high-resolution SAR (Synthetic Aperture Radar) data for day-and-night all-weather tracking, and automating notice dispatch to local municipal divisions."
    },
    {
        id: "ai-rag-chatbot",
        title: "AI Chatbot with Retrieval Augmented Generation",
        tagline: "AI assistant that answers questions using document retrieval and LLM reasoning",
        description: "An intelligent AI assistant that leverages Retrieval Augmented Generation (RAG) to answer questions by combining document retrieval with large language model reasoning. Users can query custom knowledge bases built from their own documents for accurate, context-aware responses.",
        image: "",
        tech: ["Python", "LangChain", "Vector DB", "LLM"],
        githubUrl: "https://github.com/prasannakumar6672",
        features: [
            "Multi-document knowledge retrieval",
            "Context-aware LLM reasoning",
            "Vector database integration",
            "Custom knowledge base uploading",
            "Streaming response interface"
        ],
        problemStatement: "Generic LLMs frequently hallucinate and lack access to proprietary user documents or real-time local knowledge bases, rendering them ineffective for specialized company search tools or personal research assistants.",
        solution: "A Retrieval-Augmented Generation (RAG) assistant that indexes local document formats (PDFs, docs, text), converts text chunks into vector embeddings, and uses semantic search to augment the prompt context before feeding it to LLMs.",
        architecture: "Built with LangChain and Python, using vector storage (ChromaDB/Pinecone) to index document embeddings. Semantic searches pull relevant context chunks, and the resulting prompt is orchestrated through custom LLM chains.",
        challenges: "Context pollution, where retrieved documents contain irrelevant text that degrades output quality. Solved by implementing dynamic ranking (Reranking) using cross-encoders and metadata pre-filtering.",
        futureScope: "Adding agentic reasoning loops that let the chatbot run SQL queries, execute web search lookups, and summarize long-term conversational memory profiles."
    },
];

export const experience: Experience[] = [
    {
        company: "evoRES Technologies",
        role: "React & Firebase Developer Intern",
        duration: "May 2026 – Present",
        description: [
            "Working on modern web applications using React and Firebase. Contributing to frontend development, authentication systems, database integration, responsive UI implementation, and real-world product development.",
            "Collaborating with team members to build scalable and user-friendly web experiences."
        ],
        responsibilities: [
            "React Application Development: Crafted responsive views, modular components, and optimized client-side state.",
            "Firebase Authentication: Integrated social logins, email verification, and session persistence handlers.",
            "Firestore Database Integration: Structured document subcollections, wrote query constraints, and synced real-time updates.",
            "Responsive UI Development: Built fluid mobile-first layouts using advanced flexbox, grids, and Tailwind configurations.",
            "API Integration: Standardized custom fetch/axios hooks to connect client views to external REST APIs.",
            "Bug Fixing & Feature Development: Debugged production layouts and shipped new interactive elements in lockstep with designers.",
            "Performance Optimization: Implemented bundle lazy-loading, asset optimization, and layout rendering audits."
        ],
        tech: ["React", "Firebase", "Firestore", "JavaScript", "Tailwind CSS", "Git", "GitHub"],
        active: true,
        type: "Industry Internship"
    },
    {
        company: "CS Tech Solutions (Aeccentric)",
        role: "Junior AI Tools Engineer Intern",
        duration: "March 2026 – Present",
        description: [
            "Working on AI-powered tools, automation systems, prompt engineering workflows, and modern AI development practices.",
            "Contributing to intelligent applications, AI integrations, workflow automation, and productivity-focused solutions."
        ],
        responsibilities: [
            "AI Tool Development: Built custom workflow scripts leveraging generative AI and API automation.",
            "Prompt Engineering: Structured, optimized, and evaluated LLM prompts for consistent response formatting.",
            "Workflow Automation: Automated internal administrative tasks and data pipeline ingestion scripts.",
            "AI Integration: Embedded OpenAI and secondary AI endpoints into backend applications.",
            "Product Research: Investigated next-gen agentic frameworks and analyzed competitor capabilities.",
            "Feature Testing: Handled end-to-end debugging and validation of AI models in sandbox environments.",
            "AI-Assisted Development: Integrated AI-assisted coding protocols to accelerate development velocity."
        ],
        tech: ["AI Tools", "Prompt Engineering", "Automation", "OpenAI Ecosystem", "Product Development", "Research & Analysis"],
        active: true,
        type: "Industry Internship"
    },
    {
        company: "MICROSOFT ELEVATE AICTE VIRTUAL INTERNSHIP",
        role: "Azure Virtual Intern (Emerging Technologies)",
        duration: "Jan 2026 - Feb 2026",
        description: [
            "Participated in structured learning modules on Microsoft Azure, cloud architecture, and modern software development practices.",
            "Completed guided hands-on labs and problem-solving tasks through the Microsoft Learn platform while working on real-world technical concepts."
        ],
        responsibilities: [
            "Cloud Infrastructure: Studied cloud computing modules and virtual machine hosting paradigms on Azure.",
            "Guided labs: Completed structured exercises on database setup, networking security groups, and storage endpoints.",
            "Problem-solving tasks: Worked on cloud architecture deployment concepts and cloud scaling principles."
        ],
        tech: ["Microsoft Azure", "Cloud Computing", "Microsoft Learn Platform"],
        certificateUrl: "https://drive.google.com/file/d/1T1rwzj8wlWIrAFHn3fDZQJhTFgvBgyZO/view?usp=drivesdk",
        active: false,
        type: "Virtual Internship"
    },
    {
        company: "EduSkills (with Palo Alto Networks)",
        role: "Palo Alto Cybersecurity Virtual Internship",
        duration: "Jan 2025 — Mar 2025",
        description: [
            "Explored network security principles, threat detection methods, and vulnerability analysis.",
            "Analyzed cybersecurity case studies and studied mitigation strategies."
        ],
        responsibilities: [
            "Network Security: Examined firewall configuration procedures and firewall traffic routing rules.",
            "Threat Detection: Explored methods for vulnerability identification and structural threats.",
            "Vulnerability Analysis: Studied common vulnerability scoring metrics and penetration concepts."
        ],
        tech: ["Network Security", "Threat Detection", "Vulnerability Analysis"],
        active: false,
        type: "Virtual Internship"
    },
    {
        company: "EduSkills (with AWS Academy)",
        role: "AWS Data Engineering Virtual Internship",
        duration: "Oct 2024 — Dec 2024",
        description: [
            "Applied data preprocessing and ETL concepts on structured datasets.",
            "Explored cloud storage fundamentals and practiced structured data transformation techniques."
        ],
        responsibilities: [
            "Data Preprocessing: Applied cleaning techniques to clean tabular database records.",
            "ETL Pipelines: Studied storage extracts, data transforms, and structural database loads.",
            "Cloud Storage: Explored object databases like Amazon S3 and relational AWS data repositories."
        ],
        tech: ["AWS", "Data Engineering", "ETL Pipelines"],
        active: false,
        type: "Virtual Internship"
    }
];

export const achievements: Achievement[] = [
    {
        title: "Guinness World Record — Agentathon 2025",
        issuer: "Malla Reddy University",
        date: "2025",
        icon: "Award",
        link: "https://drive.google.com/file/d/1maA7_LKUI6qYGmxJ97oKU2V3XH0rAvlc/view?usp=drivesdk",
        description: "Achieved the Guinness World Record for participating in Agentathon 2025, the world's largest AI agent hackathon, developing multi-agent systems using advanced LLM reasoning frameworks."
    },
    {
        title: "Smart India Hackathon (SIH) 2025",
        issuer: "Government of India",
        date: "2025",
        icon: "Code",
        link: "https://drive.google.com/file/d/1uATS83ZpG9ofOjB_rxPEV5llfeVsAlSY/view?usp=drivesdk",
        description: "Finalist at SIH 2025, solving national-scale geospatial water body encroachment problems with intelligent deep learning computer vision frameworks."
    },
    {
        title: "NeuraX Hackathon — Technical Lead",
        issuer: "NeuraX",
        date: "2025",
        icon: "Code",
        link: "https://drive.google.com/file/d/1D_9J9CHYZYq1StNovAyijg1zkv24x0TT/view?usp=drivesdk",
        description: "Served as Technical Lead for the NeuraX hackathon web infrastructure, leading a team of developers and implementing responsive animated web systems."
    },
];

export const certifications: Certification[] = [
    {
        title: "Generative AI for Data Science",
        issuer: "Microsoft & Coursera",
        date: "2024",
        icon: "Award",
        link: "https://drive.google.com/file/d/1eyxv92bwGWrElmattd6nNfkzwu7xqsh9/view?usp=drivesdk",
    },
    {
        title: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        date: "2024",
        icon: "Layout",
        link: "https://drive.google.com/file/d/1FT9_qqc1Y1RyrOMfJiJtxbDNcI5sX_r3/view?usp=drivesdk",
    },
    {
        title: "Internet of Things - NPTEL",
        issuer: "NPTEL",
        date: "2024",
        icon: "Award",
        link: "https://drive.google.com/file/d/1ONdu2Dr_n1DWAwHug99aQbhHA9DW78Xk/view?usp=drivesdk",
    },
    {
        title: "AWS Academy Cloud Foundation",
        issuer: "Amazon Web Services",
        date: "2024",
        icon: "Layout",
        link: "https://drive.google.com/file/d/1I6zZe3j66uypZYhJ8qJE4yRHMVJ7M62e/view?usp=drivesdk",
    },
    {
        title: "AWS Academy Data Engineering",
        issuer: "Amazon Web Services",
        date: "2024",
        icon: "Layout",
        link: "https://drive.google.com/file/d/1wSzmmYYWrBKwITB2GRbsQfzbjF8cgVvp/view?usp=drivesdk",
    },
    {
        title: "Tata Gen AI Powered Data Analytics",
        issuer: "Tata",
        date: "2024",
        icon: "Code",
        link: "https://drive.google.com/file/d/1FT9_qqc1Y1RyrOMfJiJtxbDNcI5sX_r3/view?usp=drivesdk",
    },
    {
        title: "Salesforce Agentforce Specialist",
        issuer: "Salesforce",
        date: "2024",
        icon: "Award",
        link: "https://drive.google.com/file/d/1GdLivLkA3EQpW5LKZAaSgqb7nyuYNmpP/view?usp=drivesdk",
    },
    {
        title: "AI for Everyone",
        issuer: "Coursera",
        date: "2024",
        icon: "Award",
        link: "https://drive.google.com/file/d/1QPF_GdVUfVSV72a6cv8JWviu949e1v_y/view?usp=drivesdk",
    },
];

export const education: Education[] = [
    {
        school: "CMR Technical Campus",
        degree: "B.Tech — Computer Science & Engineering (AI & ML)",
        duration: "2023 — 2027",
        content: "Current CGPA: 8.24. Focusing on advanced AI models, full-stack microservices, and system architecture.",
        logo: "/images/college logo.png",
    },
];

