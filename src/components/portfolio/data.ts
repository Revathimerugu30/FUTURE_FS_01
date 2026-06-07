import hunarhub from "@/assets/proj-hunarhub.jpg";
import safety from "@/assets/proj-safety.jpg";
import school from "@/assets/proj-school.jpg";
import farmer from "@/assets/proj-farmer.jpg";
import entre from "@/assets/proj-entre.jpg";
import bone from "@/assets/proj-bone.jpg";
import campus from "@/assets/proj-campus.jpg";
import bpm from "@/assets/proj-bpm.jpg";

export type Project = {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "HunarHub",
    description:
      "A digital marketplace connecting local artisans with customers through product listings, dashboards and full e-commerce flows.",
    features: ["Artisan dashboards", "Auth & roles", "Order management", "Product catalog"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: hunarhub,
    demo: "https://www.youtube.com/watch?v=DtiyMR-gyaQ",
  },
  {
    title: "Women Safety Platform",
    description:
      "Real-time emergency response with SOS alerts, volunteer assignment, live tracking and admin oversight.",
    features: ["SOS alerts", "Live tracking", "Volunteer routing", "Admin dashboard"],
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    image: safety,
    demo: "https://www.youtube.com/watch?v=SplIHyG8DOI",
  },
  {
    title: "School Facility Reporting Portal",
    description:
      "A portal for reporting school infrastructure issues with image uploads, issue tracking and status workflows.",
    features: ["Image uploads", "Issue tracking", "Status management", "Admin monitoring"],
    tech: ["React", "Express", "MongoDB"],
    image: school,
    demo: "https://www.youtube.com/watch?v=FXznz7yfnJ0",
  },
  {
    title: "Digital Market Insights",
    description:
      "Real-time crop prices, weather updates and government scheme information for farmers and consumers.",
    features: ["Live market data", "Weather API", "Scheme directory", "Multi-language ready"],
    tech: ["React", "REST APIs", "Tailwind"],
    image: farmer,
    demo: "https://www.youtube.com/watch?v=ONMJj8x2F0E",
  },
  {
    title: "Entre Skill Hub",
    description:
      "AI-powered skill-to-startup platform with personalized roadmaps, mentor matching and founder toolkits.",
    features: ["Personalized roadmaps", "Mentor matching", "Resource library", "AI guidance"],
    tech: ["React", "Node.js", "AI APIs"],
    image: entre,
    demo: "https://www.youtube.com/watch?v=aPmTBnwZ8Ac",
  },
  {
    title: "AI Bone Fracture Detection",
    description:
      "Computer vision system that detects and classifies bone fractures from X-ray images using deep learning.",
    features: ["YOLO detection", "Classification model", "Image preprocessing", "Confidence scores"],
    tech: ["Python", "YOLO", "TensorFlow", "OpenCV"],
    image: bone,
    demo: "https://www.youtube.com/watch?v=r9j5sL9s5po",
  },
  {
    title: "Smart Campus Fix",
    description:
      "Web-based campus issue reporting platform streamlining facility complaints and resolution tracking.",
    features: ["Ticket workflow", "Category routing", "Status updates"],
    tech: ["React", "Node.js", "MongoDB"],
    image: campus,
  },
  {
    title: "Real-Time BPM Detection",
    description:
      "Heart-rate monitoring through webcam image processing using rPPG signal analysis.",
    features: ["Webcam capture", "Signal processing", "Live BPM chart"],
    tech: ["Python", "OpenCV", "NumPy"],
    image: bpm,
  },
];

export const skills = {
  Languages: ["JavaScript", "Python", "C", "Java (Basics)"],
  Frontend: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Responsive Design"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB"],
  "AI & ML": ["TensorFlow", "OpenCV", "YOLO", "ML Fundamentals"],
};

export const internships = [
  {
    role: "Front-End Intern",
    company: "Unified Platform",
    period: "May 2026 – Present",
    points: [
      "Building production React interfaces with modern tooling.",
      "Collaborating with designers on responsive component systems.",
    ],
  },
  {
    role: "Front-End Web Development Intern",
    company: "Edunet Foundation",
    period: "Aug 2025 – Sep 2025",
    points: [
      "Shipped real-world projects in collaboration with SAP mentors.",
      "Delivered accessible, mobile-first UI components.",
    ],
  },
];

export const achievements = [
  "Participant in India's Largest Bower AI Hackathon",
  "ISTE Member",
  "Contributor to SAP and Edunet real-time projects",
  "Multiple Full Stack Development projects shipped",
];

export const certifications = [
  "IBM SkillsBuild – Front-End Web Development",
  "Cisco Network Essentials",
  "Coursera DevOps Certification",
  "Wadhwani Foundation – Ignite India",
  "SAP Project Participation Certification",
  "Edunet Foundation Internship Certification",
];
