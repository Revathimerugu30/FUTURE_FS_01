import { motion } from "framer-motion";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import { Section } from "./Section";
import { achievements, certifications } from "./data";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Achievements & certifications."
      description="Continuously learning — through hackathons, programs and structured courses."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-2xl p-7"
        >
          <h3 className="font-display text-xl font-semibold flex items-center gap-2 mb-5">
            <FiAward className="text-accent" /> Achievements
          </h3>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 text-sm text-muted-foreground">
                <FiCheckCircle className="text-accent mt-0.5 shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-strong rounded-2xl p-7"
        >
          <h3 className="font-display text-xl font-semibold flex items-center gap-2 mb-5">
            <FiCheckCircle className="text-accent" /> Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
