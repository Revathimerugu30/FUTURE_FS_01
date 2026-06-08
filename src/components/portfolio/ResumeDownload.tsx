import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

interface ResumeDownloadProps {
  className?: string;
  label?: string;
  iconOnly?: boolean;
}

export function ResumeDownload({ className, label = "Download Resume", iconOnly = false }: ResumeDownloadProps) {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/resume/Main_Resume2.pdf", { method: "HEAD", cache: "no-store" })
      .then((response) => {
        if (!active) return;
        setAvailable(response.ok);
      })
      .catch(() => {
        if (!active) return;
        setAvailable(false);
      });
    return () => {
      active = false;
    };
  }, []);

  if (available === false) {
    return (
      <button
        type="button"
        disabled
        className={className}
        aria-disabled="true"
      >
        <FiDownload /> Resume unavailable
      </button>
    );
  }

  return (
    <a
      href="/resume/Main_Resume2.pdf"
      download="Revathi_Merugu_Resume.pdf"
      className={className}
      aria-label={iconOnly ? "Download Resume" : undefined}
    >
      {iconOnly ? <FiDownload /> : <><FiDownload /> {label}</>}
    </a>
  );
}
