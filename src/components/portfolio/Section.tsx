import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-accent mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
