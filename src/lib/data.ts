import {
    PersonalInfo,
    TechCategory,
    Project,
    Experience,
    Achievement,
} from "../types";

export const personalInfo: PersonalInfo = {
    name: "Chirragoni Prasanna Kumar",
    title: "Full Stack Developer & AI/ML Enthusiast",
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
        title: "Frontend",
        skills: [
            { name: "React / Next.js", icon: "RiNextjsFill", level: 90, category: "Frontend", color: "#ffffff" },
            { name: "JavaScript", icon: "SiJavascript", level: 88, category: "Frontend", color: "#F7DF1E" },
            { name: "HTML & CSS", icon: "SiHtml5", level: 95, category: "Frontend", color: "#E34F26" },
            { name: "Tailwind CSS", icon: "SiTailwindcss", level: 85, category: "Frontend", color: "#06B6D4" },
        ],
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Node.js / Express", icon: "FaNodeJs", level: 85, category: "Backend", color: "#339933" },
            { name: "Python", icon: "SiPython", level: 88, category: "Backend", color: "#3776AB" },
            { name: "MongoDB", icon: "SiMongodb", level: 82, category: "Backend", color: "#47A248" },
            { name: "MySQL", icon: "SiMysql", level: 75, category: "Backend", color: "#4479A1" },
        ],
    },
    {
        title: "AI/ML & Tools",
        skills: [
            { name: "TensorFlow", icon: "SiTensorflow", level: 80, category: "Tools", color: "#FF6F00" },
            { name: "Roboflow API", icon: "SiPython", level: 78, category: "Tools", color: "#8B5CF6" },
            { name: "Git & GitHub", icon: "FaGitAlt", level: 92, category: "Tools", color: "#F05032" },
            { name: "Java", icon: "FaJava", level: 80, category: "Tools", color: "#007396" },
        ],
    },
];

export const projects: Project[] = [
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
        ]
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
        ]
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
        ]
    },
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
        ]
    },
];

export const experience: Experience[] = [
    {
        company: "EduSkills (with Palo Alto Networks)",
        role: "Palo Alto Cybersecurity Virtual Internship",
        duration: "Jan 2025 — Mar 2025",
        description: [
            "Explored network security principles, threat detection methods, and vulnerability analysis.",
            "Analyzed cybersecurity case studies and studied mitigation strategies.",
        ],
        active: true,
    },
    {
        company: "EduSkills (with AWS Academy)",
        role: "AWS Data Engineering Virtual Internship",
        duration: "Oct 2024 — Dec 2024",
        description: [
            "Applied data preprocessing and ETL concepts on structured datasets.",
            "Explored cloud storage fundamentals and practiced structured data transformation techniques.",
        ],
    },
];

export const achievements: Achievement[] = [
    {
        title: "Guinness World Record — Agentathon 2025",
        issuer: "Malla Reddy University",
        date: "2025",
        icon: "Award",
    },
    {
        title: "Smart India Hackathon (SIH) 2025",
        issuer: "Government of India",
        date: "2025",
        icon: "Code",
    },
    {
        title: "AWS Academy Data Engineering",
        issuer: "Amazon Web Services",
        date: "2024",
        icon: "Layout",
    },
    {
        title: "AI for Everyone",
        issuer: "Coursera",
        date: "2024",
        icon: "Award",
    },
];
