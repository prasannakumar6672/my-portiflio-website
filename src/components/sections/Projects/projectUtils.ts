import { Project } from "@/types";

export const techColors: Record<string, string> = {
    Python: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    OpenCV: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    ML: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    "Web Dashboard": "bg-amber-500/10 text-amber-650 dark:text-amber-450 border-amber-500/20",
    "Next.js": "bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white/70 border-slate-300 dark:border-white/10",
    "Node.js": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    "AI Vision": "bg-pink-500/10 text-pink-650 dark:text-pink-400 border-pink-500/20",
    LangChain: "bg-teal-500/10 text-teal-650 dark:text-teal-400 border-teal-500/20",
    "Vector DB": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    LLM: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    "Tailwind CSS": "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    "Framer Motion": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

export const getTechClass = (tech: string) =>
    techColors[tech] ?? "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-foreground/50 border-slate-200 dark:border-white/10";

export const categories = [
    { id: "all", label: "All" },
    { id: "ai-vision", label: "AI & Computer Vision" },
    { id: "ai-nlp", label: "AI & NLP/RAG" },
    { id: "web-apps", label: "Web Applications" },
];

export const getProjectCategories = (id: string): string[] => {
    switch (id) {
        case "water-body-encroachment":
            return ["ai-vision", "web-apps"];
        case "road-damage-detection":
            return ["ai-vision", "web-apps"];
        case "ai-rag-chatbot":
            return ["ai-nlp"];
        case "neurax-hackathon":
            return ["web-apps"];
        default:
            return [];
    }
};

export const getFeaturedBadge = (id: string) => {
    switch (id) {
        case "water-body-encroachment":
            return { text: "SIH Selection", color: "border-amber-500/30 text-amber-500 bg-amber-500/5" };
        case "road-damage-detection":
            return { text: "Smart City AI", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" };
        case "ai-rag-chatbot":
            return { text: "LLM & RAG Agent", color: "border-purple-500/30 text-purple-400 bg-purple-500/5" };
        case "neurax-hackathon":
            return { text: "Guinness Record Venue", color: "border-emerald-500/30 text-emerald-450 bg-emerald-500/5" };
        default:
            return null;
    }
};
