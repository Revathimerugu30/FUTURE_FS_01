import { useState } from "react";
import { motion } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import { FiMail, FiSend, FiCheck, FiAlertCircle, FiGithub, FiLinkedin } from "react-icons/fi";
import { Section } from "./Section";
import { sendContactMessage } from "@/lib/contact.functions";

export function Contact() {
  const send = useServerFn(sendContactMessage);
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const result = await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      if (!result?.ok) {
        throw new Error(result?.error ?? "Unable to send message. Please try again later.");
      }
      setPreviewUrl((result as any).previewUrl ?? null);
      setState("success");
      form.reset();
    } catch (err) {
      // Normalize error message for better UX; avoid dumping full HTML error pages
      console.error("[contact] submit error", err);
      let message = "Something went wrong";
      if (err instanceof Error && err.message) {
        message = err.message;
      } else if (typeof err === "string") {
        message = err;
      } else {
        try {
          message = JSON.stringify(err);
        } catch {}
      }

      // Strip HTML responses and long stack traces
      if (message.trim().startsWith("<!doctype") || message.trim().startsWith("<html")) {
        message = "Server error. Please try again later or contact me directly via email.";
      }
      if (message.length > 300) {
        message = message.slice(0, 300) + "...";
      }

      setState("error");
      setError(message);
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
              <FiCheck /> Message sent — I'll reply soon.
            </p>
          )}
          {previewUrl && (
            <p className="mt-2 text-sm">
              Preview (dev): <a href={previewUrl} target="_blank" rel="noreferrer" className="underline">Open email</a>
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
