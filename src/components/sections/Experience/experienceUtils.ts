export const getAvatarInitials = (name: string) => {
    const cleanName = name.replace("EduSkills (with ", "").replace(")", "");
    if (cleanName.toLowerCase().includes("microsoft")) return "MS";
    if (cleanName.toLowerCase().includes("palo alto")) return "PA";
    if (cleanName.toLowerCase().includes("aws")) return "AW";
    if (cleanName.toLowerCase().includes("evores")) return "EV";
    if (cleanName.toLowerCase().includes("cs tech")) return "CS";
    return cleanName.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
};

export const getAvatarGradient = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("cs tech")) return "from-blue-500 to-indigo-600";
    if (lower.includes("evores")) return "from-amber-500 to-orange-600";
    if (lower.includes("microsoft")) return "from-cyan-500 to-blue-600";
    if (lower.includes("palo alto")) return "from-red-500 to-rose-600";
    if (lower.includes("aws")) return "from-orange-400 to-amber-500";
    return "from-slate-400 to-slate-600";
};

export const categories = [
    { id: "all", label: "All Work" },
    { id: "Industry Internship", label: "Industry Internships" },
    { id: "Virtual Internship", label: "Virtual Internships" },
];
