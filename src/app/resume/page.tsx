import { Metadata } from "next";
import ResumeView from "@/components/sections/ResumeView";

export const metadata: Metadata = {
  title: "Resume | Chirragoni Prasanna Kumar",
  description: "View, print, or download the professional resume of Chirragoni Prasanna Kumar, AI/ML Engineer and Full Stack Developer.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return <ResumeView />;
}
