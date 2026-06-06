import { motion } from "framer-motion";
import { FiMapPin, FiBookOpen, FiAward, FiCode } from "react-icons/fi";
import { Section } from "./Section";

const stats = [
  { icon: FiCode, label: "Projects shipped", value: "8+" },
  { icon: FiAward, label: "Certifications", value: "6" },
  { icon: FiBookOpen, label: "CGPA", value: "8.97" },
  { icon: FiMapPin, label: "Based in", value: "Telangana" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering thoughtful, useful products.">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-7 md:p-9"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm an aspiring <span className="text-foreground font-medium">Full Stack Developer</span> and
            Computer Science Engineering student passionate about building responsive web applications,
            AI-powered solutions, and scalable digital products.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I've grown through internships, hackathons, and real-world projects — pairing strong
            problem-solving with modern web development to ship things people actually use.
          </p>

          <div className="mt-7 rounded-xl glass p-5">
            <p className="text-xs uppercase tracking-[0.18em] font-mono text-accent mb-2">Education</p>
            <h3 className="font-display text-lg font-semibold">B.Tech, Computer Science Engineering</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Jyothishmathi Institute of Technology and Science · 2023 – 2027 · CGPA 8.97
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 content-start">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:bg-white/10 transition"
            >
              <s.icon className="text-accent mb-3" size={20} />
              <div className="text-2xl font-display font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
