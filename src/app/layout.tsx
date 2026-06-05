import type { Metadata } from "next";
import "./globals.css";
import { personalInfo } from "@/lib/data";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IntroWrapper } from "@/components/layout/Intro";

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} — Developer Portfolio`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: ["Full Stack Developer", "AI/ML Engineer", "Next.js", "TypeScript", "React"],
  authors: [{ name: personalInfo.name, url: "https://github.com/prasannakumar6672" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/prasannakumar6672",
    siteName: `${personalInfo.name} Portfolio`,
    images: ["/images/about.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    url: "https://github.com/prasannakumar6672",
    sameAs: [
      personalInfo.socials.github,
      personalInfo.socials.linkedin,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased font-body bg-background text-foreground"
      >
        <SmoothScroll />
        <ThemeProvider>
          <IntroWrapper>
            <ScrollProgress />
            <Navbar />
            <div className="noise min-h-screen gradient-mesh">
              {children}
            </div>
            <Footer />
          </IntroWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

