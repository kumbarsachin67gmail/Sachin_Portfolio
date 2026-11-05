import { toast } from "sonner";

export const SITE = {
  name: "Sachin Kumbar",
  title:
    "Senior Software Engineer | Backend & Distributed Systems | Node.js, TypeScript, AWS, AI",
  email: "kumbarsachin67@gmail.com",
  location: "Bengaluru, Karnataka",
  github: "https://github.com/kumbarsachin67gmail",
  linkedin: "https://www.linkedin.com/in/sachin-kumbar-634b42171",
  resume: "/Sachin_Kumbar_Resume.pdf",
};

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const scrollToSection = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
};

export const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(SITE.email);
    toast.success("Email copied to clipboard", { description: SITE.email });
  } catch {
    toast.error("Couldn't copy automatically", { description: SITE.email });
  }
};
