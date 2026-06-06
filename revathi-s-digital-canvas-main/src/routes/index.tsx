import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Revathi Portfolio";
const DESC =
  "Full Stack Developer & CSE student building scalable web apps, AI-powered tools and impactful digital experiences. React, Node.js, MongoDB, TensorFlow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "Revathi Merugu" },
      { name: "keywords", content: "Revathi Merugu, Full Stack Developer, React, Node.js, MongoDB, AI, Portfolio, India, CSE Student" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Revathi Merugu",
          jobTitle: "Full Stack Developer",
          email: "mailto:revathimerugu30@gmail.com",
          address: { "@type": "PostalAddress", addressRegion: "Telangana", addressCountry: "IN" },
          alumniOf: "Jyothishmathi Institute of Technology and Science",
          knowsAbout: ["React.js", "Node.js", "MongoDB", "Express.js", "TensorFlow", "OpenCV", "YOLO"],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
