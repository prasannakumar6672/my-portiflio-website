import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://prasannakumar.dev";
    const pages = [
        "",
        "/about",
        "/skills",
        "/projects",
        "/experience",
        "/contact",
        "/resume",
        "/projects/water-body-encroachment-detection",
        "/projects/road-damage-civic-complaint-system",
        "/projects/preptrack",
        "/projects/neurax-hackathon",
        "/projects/ai-rag-chatbot",
        "/projects/vital-agent"
    ];

    return pages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : page.startsWith("/projects/") ? 0.8 : 0.8,
    }));
}
