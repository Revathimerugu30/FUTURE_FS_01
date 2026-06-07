import { motion } from "framer-motion";
import { FiDownload, FiMail, FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import portrait from "@/assets/revathi-portrait.jpg";
import { ResumeDownload } from "./ResumeDownload";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Available for internships & full-time roles
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Revathi Merugu</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-muted-foreground font-display">
            Full Stack Developer · CSE Student
          </p>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Building scalable web applications, AI-powered solutions, and impactful
            digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground glow-primary hover:scale-[1.03] transition"
            >
              View Projects <FiArrowRight />
            </a>
            <ResumeDownload className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold glass-strong hover:bg-white/10 transition" />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold glass hover:bg-white/10 transition"
            >
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/dashboard" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition"><FiGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/revathi-merugu-0370b3343" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition"><FiLinkedin size={20} /></a>
            <a href="mailto:revathimerugu30@gmail.com" aria-label="Email" className="hover:text-foreground transition"><FiMail size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl rounded-full" aria-hidden />
          <div className="relative glass-strong rounded-3xl p-3 animate-float">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src={portrait}
                alt="Revathi Merugu, Full Stack Developer"
                width={896}
                height={896}
                draggable={false}
                onContextMenu={(event) => event.preventDefault()}
                onDragStart={(event) => event.preventDefault()}
                style={{ userSelect: "none", WebkitUserDrag: "none" }}
                className="w-full h-full object-cover select-none protected-image"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-3 py-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-accent" />
                <span className="font-mono text-muted-foreground">Education</span>
              </div>
              <span className="font-mono text-accent">online</span>
            </div>
          </div>
          {/* Floating chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-4 top-10 glass rounded-xl px-3 py-2 text-xs font-mono"
          >
            💻 Full Stack
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 bottom-16 glass rounded-xl px-3 py-2 text-xs font-mono"
          >
            🧠 AI / ML
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-3 left-12 glass rounded-xl px-3 py-2 text-xs font-mono"
          >
            🚀 Problem solving
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
