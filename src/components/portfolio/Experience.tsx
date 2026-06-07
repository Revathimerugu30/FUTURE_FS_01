import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { Section } from "./Section";
import { internships } from "./data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internships & timeline."
      description="Hands-on roles where I shipped real interfaces alongside engineering and design teams."
    >
      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        <div className="space-y-8">
          {internships.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[1.05rem] sm:-left-[1.55rem] top-6 size-3 rounded-full bg-primary glow-primary ring-4 ring-background" />
              <div className="glass-strong rounded-2xl p-6 md:p-7">
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold flex items-center gap-2">
                      <FiBriefcase className="text-accent" /> {job.role}
                    </h3>
                    <p className="text-muted-foreground mt-1">{job.company}</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-lg glass text-accent">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
