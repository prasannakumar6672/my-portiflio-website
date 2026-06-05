import { TechCategory } from "@/types";

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
