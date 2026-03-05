import {
    PersonalInfo,
    TechCategory,
    Project,
    Experience,
    Achievement,
    Testimonial,
} from "../types";

export const personalInfo: PersonalInfo = {
    name: "Chirragoni Prasanna Kumar",
    title: "Full Stack Developer & AI/ML Enthusiast",
    bio: "Building intelligent systems that solve real-world problems",
    avatar: "/images/about.jpeg",
    email: "prasannakumar6672@gmail.com",
    location: "Hyderabad, India",
    resumeUrl: "/resume.pdf",
    socials: {
        github: "https://github.com/prasannakumar6672",
        linkedin: "https://linkedin.com/in/prashuyadav360",
        twitter: "https://twitter.com",
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
        id: "road-damage-detection",
        title: "AI Road Damage & Civic Complaint System",
        tagline: "Real-time pothole & crack detection with smart reporting",
        description: "A full-stack platform with role-based JWT authentication for citizens and officials. Integrates Roboflow pretrained API to detect potholes, cracks, and erosion with severity scoring. Uses RESTful MongoDB schema and complaint lifecycle tracking.",
        image: "/images/projects/road.jpg",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Roboflow API", "Multer", "Cloudinary"],
        githubUrl: "https://github.com",
        liveUrl: "https://neurax2-0.vercel.app",
        featured: true,
    },
    {
        id: "vital-agent",
        title: "Vital Agent — AI Health Risk Predictor",
        tagline: "AI-powered health risk scoring with 7-day vitals analysis",
        description: "Developed an AI health risk prediction system using TensorFlow LSTM on 7-day sequential vitals data. Generates probabilistic risk scores (0–1) and integrates a trained .h5 model into a Python backend for real-time inference with Gemini API recommendations.",
        image: "/images/projects/vitals.jpg",
        tech: ["Python", "TensorFlow", "LSTM", "REST APIs", "Gemini API"],
        githubUrl: "https://github.com/prasannakumar6672",
        liveUrl: "https://example.com",
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

export const testimonials: Testimonial[] = [
    {
        name: "CMR Technical Campus",
        role: "B.Tech — Computer Science & Engineering (AI & ML)",
        content: "CGPA: 8.24 | 2023 – 2027 | Consistently excelling in AI, ML, and full-stack development coursework.",
        avatar: "/images/testimonials/cmr.jpg",
    },
];
