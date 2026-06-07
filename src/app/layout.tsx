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
  metadataBase: new URL("https://prasannakumar.dev"),
  title: {
    default: "Chirragoni Prasanna Kumar | AI/ML Engineer & Full Stack Developer",
    template: "%s | Chirragoni Prasanna Kumar",
  },
  description: "Portfolio of Chirragoni Prasanna Kumar showcasing AI/ML projects, Full Stack applications, Software Engineering experience, internships, cloud technologies, and intelligent systems.",
  keywords: [
    "Chirragoni Prasanna Kumar",
    "Prasanna Kumar",
    "AI/ML Engineer Portfolio",
    "Full Stack Developer Portfolio",
    "Software Engineer Portfolio",
    "Computer Vision Projects",
    "Data Engineering Portfolio",
    "Next.js",
    "TypeScript",
    "React",
    "Developer Portfolio",
    "Intelligent Systems"
  ],
  authors: [{ name: "Chirragoni Prasanna Kumar", url: "https://prasannakumar.dev" }],
  creator: "Chirragoni Prasanna Kumar",
  publisher: "Chirragoni Prasanna Kumar",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prasannakumar.dev",
    siteName: "Chirragoni Prasanna Kumar Portfolio",
    title: "Chirragoni Prasanna Kumar Portfolio",
    description: "AI/ML Engineer, Full Stack Developer, Software Engineer.",
    images: [
      {
        url: "/images/about.jpeg",
        width: 1200,
        height: 630,
        alt: "Chirragoni Prasanna Kumar Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirragoni Prasanna Kumar Portfolio",
    description: "AI/ML Engineer, Full Stack Developer, Software Engineer.",
    images: ["/images/about.jpeg"],
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
    name: "Chirragoni Prasanna Kumar",
    url: "https://prasannakumar.dev",
    jobTitle: [
      "AI/ML Engineer",
      "Software Engineer",
      "Full Stack Developer"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "CMR Technical Campus"
    },
    sameAs: [
      "https://github.com/prasannakumar6672",
      "https://www.linkedin.com/in/prashuyadav360"
    ]
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

