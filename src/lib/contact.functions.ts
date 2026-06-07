import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { storeContactMessage } from "./contact.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(2000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    try {
      console.log("[contact] new message", {
        name: data.name,
        email: data.email,
        message: data.message,
        at: new Date().toISOString(),
      });

      await storeContactMessage(data);

      return { ok: true as const };
    } catch (error) {
      console.error("[contact] handler error", error);
      return {
        ok: false as const,
        error: "Unable to submit your message right now. Please try again later.",
      };
    }
  });
