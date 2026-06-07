import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { ResumeDownload } from "./ResumeDownload";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg font-semibold">
            <span className="text-gradient">Revathi Merugu</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} · Built with React, TanStack & Tailwind.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FooterLink href="https://github.com/dashboard" label="GitHub"><FiGithub /></FooterLink>
          <FooterLink href="https://www.linkedin.com/in/revathi-merugu-0370b3343" label="LinkedIn"><FiLinkedin /></FooterLink>
          <FooterLink href="mailto:revathimerugu30@gmail.com" label="Email"><FiMail /></FooterLink>
          <ResumeDownload className="size-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition" iconOnly />
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label, children, download }: { href: string; label: string; children: React.ReactNode; download?: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      download={download}
      className="size-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}
