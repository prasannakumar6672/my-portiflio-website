import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} — Developer Portfolio`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: ["Full Stack Developer", "UI/UX Designer", "Next.js", "TypeScript", "React"],
  authors: [{ name: personalInfo.name, url: "https://alexvance.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexvance.dev",
    siteName: `${personalInfo.name} Portfolio`,
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Portfolio`,
    description: personalInfo.bio,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
    url: "https://alexvance.dev",
    sameAs: [
      personalInfo.socials.github,
      personalInfo.socials.linkedin,
      personalInfo.socials.twitter,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${firaCode.variable} antialiased font-body bg-background text-foreground`}
      >
        <SmoothScroll />
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <div className="noise min-h-screen gradient-mesh">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
