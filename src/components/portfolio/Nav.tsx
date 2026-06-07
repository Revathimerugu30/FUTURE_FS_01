import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between rounded-2xl transition-all ${
          scrolled ? "glass-strong py-2 px-4" : ""
        }`}
      >
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient">Revathi Portfolio</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium glass hover:bg-white/10 transition"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}
