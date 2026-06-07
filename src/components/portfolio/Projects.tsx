import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { Section } from "./Section";
import { projects } from "./data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects."
      description="A mix of full-stack platforms, AI systems and developer tools — built end-to-end."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
            className="group glass-strong rounded-2xl overflow-hidden flex flex-col hover:translate-y-[-4px] transition-all duration-300 hover:shadow-[0_20px_60px_-20px_oklch(0.72_0.22_295_/_0.4)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent z-10" />
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={640}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <span className="size-1 rounded-full bg-accent" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md glass px-2 py-1 text-[11px] font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {p.demo && (
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
