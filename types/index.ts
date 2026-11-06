import { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  sublabel?: string;
}

export type CourseCategory =
  | "all"
  | "fullstack"
  | "gamedev"
  | "animation"
  | "programming"
  | "cybersecurity";

export interface Course {
  id: string;
  number: string;
  title: string;
  headline?: string;
  description: string;
  category: CourseCategory;
  duration: string;
  level: string;
  rating: number;
  studentsCount: number;
  tags: string[];
  icon: LucideIcon;
  curriculumHighlights?: string[];
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarBg: string;
  initials: string;
  rating: number;
  content: string;
  course: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
