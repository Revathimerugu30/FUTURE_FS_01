import process from "node:process";
import nodemailer from "nodemailer";

export type ContactEmailData = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(data: ContactEmailData) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const emailTo = process.env.CONTACT_EMAIL_TO ?? "revathimerugu30jits@gmail.com";
  const emailFrom = process.env.CONTACT_EMAIL_FROM ?? smtpUser ?? `no-reply@${process.env.VERCEL_URL ?? 'local'}`;

  const messageText = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
  const messageHtml = `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, "<br/>")}</p>`;

  // Prefer Resend when API key is provided
  console.log('[contact] sendContactEmail start, envs:', {
    hasResend: !!resendApiKey,
    hasSmtp: !!(smtpHost && smtpPort && smtpUser && smtpPass),
    vercel: !!process.env.VERCEL,
  });
  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: emailTo,
          subject: `New portfolio message from ${data.name}`,
          html: messageHtml,
          text: messageText,
          reply_to: data.email,
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Resend send failed (${response.status}): ${body}`);
      }

      console.log("[contact] email sent via Resend", { to: emailTo, from: emailFrom, name: data.name, email: data.email });
      return { ok: true as const };
    } catch (error) {
      console.error("[contact] Resend send error", error);
      return {
        ok: false as const,
        error: error instanceof Error ? `Email delivery failed: ${error.message}` : "Email delivery failed.",
      };
    }
  }

  // If SMTP is configured, use it
  console.log('[contact] SMTP configured?', !!(smtpHost && smtpPort && smtpUser && smtpPass));
  if (smtpHost && smtpPort && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure || smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: emailFrom,
        to: emailTo,
        replyTo: data.email,
        subject: `New portfolio contact from ${data.name}`,
        text: messageText,
        html: messageHtml,
      });

      console.log("[contact] email sent via SMTP", { to: emailTo, from: emailFrom, name: data.name, email: data.email, messageId: info.messageId });
      // If running locally and using Ethereal behind the scenes, nodemailer provides a preview URL
      const previewUrl = (nodemailer.getTestMessageUrl && (nodemailer.getTestMessageUrl(info) as string)) || undefined;
      return { ok: true as const, previewUrl };
    } catch (error) {
      console.error("[contact] SMTP send error", error);
      return {
        ok: false as const,
        error: error instanceof Error ? `Email delivery failed: ${error.message}` : "Email delivery failed.",
      };
    }
  }

  // Development fallback: use Ethereal when not running on Vercel (local preview)
  console.log('[contact] falling back to Ethereal?', !process.env.VERCEL);
  if (!process.env.VERCEL) {
    console.log('[contact] creating Ethereal test account...');
    try {
      const testAccount = await nodemailer.createTestAccount();
      console.log('[contact] Ethereal account created', { user: testAccount.user });
      const transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      const info = await transporter.sendMail({
        from: emailFrom,
        to: emailTo,
        replyTo: data.email,
        subject: `New portfolio contact from ${data.name} (DEV ETHEREAL)`,
        text: messageText,
        html: messageHtml,
      });

      const previewUrl = nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : undefined;
      console.log('[contact] email sent via Ethereal (dev)', { previewUrl });
      return { ok: true as const, previewUrl };
    } catch (error) {
      console.error('[contact] Ethereal send error', error);
      return { ok: false as const, error: error instanceof Error ? error.message : 'Email delivery failed' };
    }
  }

  const message = "Email service not configured. Add RESEND_API_KEY or SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_EMAIL_FROM.";
  console.error("[contact] config error", message);
  return { ok: false as const, error: message };
}
 
