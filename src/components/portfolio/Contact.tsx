import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiCheck, FiAlertCircle, FiGithub, FiLinkedin } from "react-icons/fi";
import { Section } from "./Section";

export function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setState("error");
      setError("Please fill in all fields before sending.");
      return;
    }

    try {
      // No backend call: simply show success for the current deployment.
      setState("success");
      form.reset();
    } catch (err) {
      console.error("[contact] submit error", err);
      setState("error");
      setError("Unable to submit your message right now. Please try again later.");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      description="Open to internships, full-time roles and freelance collaborations."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-2xl p-7 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display text-xl font-semibold">Reach me directly</h3>
            <a
              href="mailto:revathimerugu30@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-accent hover:underline break-all"
            >
              <FiMail /> revathimerugu30@gmail.com
            </a>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              I usually respond within 24 hours. For project briefs, share goals,
              timelines and any relevant links.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a href="https://github.com/dashboard" target="_blank" rel="noreferrer" className="size-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition" aria-label="GitHub"><FiGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="size-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={onSubmit}
          className="glass-strong rounded-2xl p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" type="text" required maxLength={100} placeholder="Your name" />
            <Field label="Email" name="email" type="email" required maxLength={255} placeholder="you@email.com" />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              minLength={5}
              maxLength={2000}
              rows={5}
              placeholder="Tell me about your project, role or idea…"
              className="mt-1.5 w-full rounded-xl glass px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={state === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground glow-primary hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100 transition"
          >
            {state === "loading" ? "Sending…" : (<><FiSend /> Send message</>)}
          </button>
          {state === "success" && (
            <p className="flex items-center gap-2 text-sm text-accent" role="status" aria-live="polite">
              <FiCheck /> Message sent successfully — thank you!
            </p>
          )}
          {state === "error" && (
            <p className="flex items-center gap-2 text-sm text-destructive" role="alert" aria-live="assertive">
              <FiAlertCircle /> {error}
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className="text-xs font-mono text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        {...rest}
        className="mt-1.5 w-full rounded-xl glass px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      />
    </div>
  );
}
