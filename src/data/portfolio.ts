// SINGLE SOURCE OF TRUTH for all portfolio content.
// Use null for any URL/detail you don't have yet: the site hides it automatically.

export type ProjectStatus = "Planned" | "In progress" | "Completed";

export interface Project {
  title: string;
  category: string;
  summary: string;
  demonstrates: string;
  stack: string[];
  status: ProjectStatus;
  repoUrl: string | null;
  demoUrl: string | null;
  docsUrl: string | null;
}
export interface Certification {
  name: string;
  issuer: string;
  status: "Earned";
  credentialUrl: string | null; // official verification link, if you have one
  issued: string | null; // e.g. "March 2025"
  credentialId: string | null;
  logo: string | null; // optional local path, e.g. /icons/aws.svg
}
export interface BlogPost { title: string; description: string; date: string; tags: string[]; readingTime: string; url: string }
export interface SkillGroup { category: string; icon: "cloud" | "terminal" | "branch" | "box" | "activity" | "shield"; items: string[] }

// Helper so each certification only needs its name, issuer and verification link.
const earned = (name: string, issuer: string, credentialUrl: string | null): Certification => ({
  name,
  issuer,
  status: "Earned",
  credentialUrl,
  issued: null,
  credentialId: null,
  logo: null,
});

export const portfolio = {
  name: "Narayan Sahu",
  title: "Cloud Native DevOps & SRE Engineer",
  experience: "2+ years" as string | null, // shown in the About card; set to null to hide
  siteUrl: "https://narayan-sahu.github.io/" as string | null, // set to your https://USERNAME.github.io/ to enable canonical URL
  headline: "Building reliable cloud infrastructure and automation for resilient systems.",
  intro:
    "I work across cloud infrastructure, Infrastructure as Code, CI/CD, containers, and observability, with a focus on improving delivery workflows and production reliability.",
  profileImage: "/images/profile.svg", // e.g. swap for an optimised "/images/profile.webp"
  blog: [] as BlogPost[], // add real articles here; section stays hidden while empty
  focus: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes", "CI/CD", "Observability"],
  about: [
    "I'm a Cloud Native DevOps & Site Reliability Engineer at Wipro, where I help keep production systems healthy. My work covers infrastructure management, monitoring, incident resolution, service requests, and release and change activities.",
    "Working with Dynatrace has shaped how I think about reliability: monitoring is a way to understand a system, not just to raise alerts. I focus on finding the root cause of an issue, not only restoring service.",
    "Alongside my role, I'm building hands-on depth with Terraform, Docker, Kubernetes, Jenkins, and GitHub Actions across AWS, Google Cloud, and Azure. I care about automation, maintainability, and continuous improvement, and I'm looking to grow into DevOps, SRE, and platform engineering roles where I help build reliable systems, not just operate them.",
  ],
  links: {
    github: "https://github.com/narayan-sahu",
    linkedin: "https://www.linkedin.com/in/narayansahu",
    email: "narayansahu.career@gmail.com",
    resume: null as string | null, // add "/resume.pdf" later
  },
  skills: [
    { category: "Cloud Platforms", icon: "cloud", items: ["AWS", "Google Cloud Platform", "Microsoft Azure"] },
    { category: "Infrastructure as Code & Scripting", icon: "terminal", items: ["Terraform", "Python", "Bash"] },
    { category: "CI/CD & Version Control", icon: "branch", items: ["Jenkins", "GitHub Actions", "Git", "GitHub"] },
    { category: "Containers & Orchestration", icon: "box", items: ["Docker", "Kubernetes"] },
    { category: "Monitoring & Observability", icon: "activity", items: ["Dynatrace", "Monitoring", "Alerting", "Troubleshooting"] },
    { category: "Reliability & Operations", icon: "shield", items: ["Linux", "Incident Management", "Root Cause Analysis", "Release & Change Activities", "Infrastructure Operations"] },
  ] as SkillGroup[],
  projects: [
    {
      title: "Cloud Infrastructure Automation with Terraform",
      category: "Infrastructure as Code",
      summary: "A personal lab that provisions a small cloud environment from code using a safe, low-cost demonstration setup.",
      demonstrates: "Module organisation, validation (fmt/validate/plan), and repeatable deployment and teardown.",
      stack: ["Terraform", "AWS / GCP / Azure"],
      status: "Planned",
      repoUrl: null,
      demoUrl: null,
      docsUrl: null,
    },
    {
      title: "CI/CD Pipeline Automation",
      category: "Delivery Automation",
      summary: "A delivery pipeline for a sample application, built with GitHub Actions (or Jenkins).",
      demonstrates: "Automated checks, build and test stages, and a clear, repeatable deployment process.",
      stack: ["GitHub Actions", "Jenkins", "Docker", "Git"],
      status: "Planned",
      repoUrl: null,
      demoUrl: null,
      docsUrl: null,
    },
    {
      title: "Observability & Reliability Lab",
      category: "Observability & SRE",
      summary: "A lab environment for exploring monitoring, alerting, troubleshooting, and incident write-ups.",
      demonstrates: "Meaningful alerts, reliability metrics, and blameless-style incident documentation.",
      stack: ["Kubernetes", "Docker", "Linux", "Monitoring"],
      status: "Planned",
      repoUrl: null,
      demoUrl: null,
      docsUrl: null,
    },
  ] as Project[],
  certifications: [
    earned(
      "Associate Cloud Engineer",
      "Google Cloud",
      "https://www.credly.com/badges/17080691-478b-48ea-9697-4f9ed6bca970",
    ),
    earned(
      "AWS Certified Cloud Practitioner",
      "Amazon Web Services",
      "https://www.credly.com/badges/fed91a95-0eab-4734-93eb-ee2fdc852be9",
    ),
    earned(
      "Microsoft Certified: Azure Fundamentals (AZ-900)",
      "Microsoft",
      "https://learn.microsoft.com/api/credentials/share/en-gb/narayansahu/D367261BC031360?sharingId=A04A06F0EFFFCAD1",
    ),
    earned(
      "Cloud Digital Leader",
      "Google Cloud",
      "https://www.credly.com/badges/86bfa3ce-798d-4903-927e-444310495100",
    ),
    earned(
      "AWS Certified AI Practitioner",
      "Amazon Web Services",
      "https://www.credly.com/badges/1ff659de-faad-4b51-8568-601c114c196b",
    ),
    earned(
      "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      "Microsoft",
      "https://learn.microsoft.com/api/credentials/share/en-gb/narayan-sahu/AC7089F68BBB20A2?sharingId=B7EE5E9199E16E68",
    ),
  ] as Certification[],
};
