import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "./data";

export function Skills() {
  const groups = Object.entries(skills);
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Technical skills."
      description="A focused stack across frontend, backend, data and AI — chosen for shipping speed and quality."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map(([group, items], i) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass-strong rounded-2xl p-6 hover:translate-y-[-2px] transition"
          >
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" /> {group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((t) => (
                <span
                  key={t}
                  className="rounded-lg glass px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
