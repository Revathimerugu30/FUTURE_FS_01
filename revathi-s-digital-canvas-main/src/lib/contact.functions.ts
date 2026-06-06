import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    // Log server-side; can be wired to Lovable Cloud / email later.
    console.log("[contact] new message", {
      name: data.name,
      email: data.email,
      at: new Date().toISOString(),
    });
    return { ok: true as const };
  });
