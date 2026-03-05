import { GitHubStats } from "../types";

const GITHUB_USERNAME = "prasannakumar6672";

interface RepoData {
    stargazers_count: number;
    forks_count: number;
    language: string | null;
}

/**
 * Fetches GitHub statistics for the specified user.
 * Cached for 1 hour using Next.js cache.
 */
export async function getGitHubStats(): Promise<GitHubStats> {
    try {
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
                next: { revalidate: 3600 },
            }),
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=100`, {
                next: { revalidate: 3600 },
            }),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

        const userData = await userRes.json() as { public_repos: number; followers: number };
        const reposData = await reposRes.json() as RepoData[];

        const totalStars = reposData.reduce((acc: number, repo: RepoData) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc: number, repo: RepoData) => acc + repo.forks_count, 0);

        // Mock contribution data as GitHub API doesn't provide it directly without complex GraphQL queries
        // Usually recommended to use a specialized library or specific proxy for this
        const mockContributionData = Array.from({ length: 50 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            return {
                date: d.toISOString().split("T")[0],
                count: Math.floor(Math.random() * 10),
            };
        });

        // Calculate language distribution
        const languagesMap: Record<string, number> = {};
        reposData.forEach((repo: RepoData) => {
            if (repo.language) {
                languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
            }
        });

        const totalRepos = reposData.length;
        const languages = Object.entries(languagesMap)
            .map(([name, count]) => ({
                name,
                percentage: Math.round((count / totalRepos) * 100),
                color: getLanguageColor(name),
            }))
            .sort((a, b) => b.percentage - a.percentage)
            .slice(0, 5);

        return {
            totalRepos: userData.public_repos,
            stars: totalStars,
            forks: totalForks,
            followers: userData.followers,
            contributionData: mockContributionData,
            languages,
        };
    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        // Return fallback data
        return {
            totalRepos: 0,
            stars: 0,
            forks: 0,
            followers: 0,
            contributionData: [],
            languages: [],
        };
    }
}

function getLanguageColor(lang: string): string {
    const colors: Record<string, string> = {
        TypeScript: "#3178C6",
        JavaScript: "#F7DF1E",
        Python: "#3776AB",
        HTML: "#E34F26",
        CSS: "#1572B6",
        Rust: "#dea584",
        Go: "#00ADD8",
    };
    return colors[lang] || "#ffffff";
}
