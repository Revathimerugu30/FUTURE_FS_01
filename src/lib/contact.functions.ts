import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendContactEmail } from "./contact.server";

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

      const result = await sendContactEmail(data);
      if (!result.ok) {
        console.error("[contact] email send failed", result.error);
        throw new Error(result.error ?? "Unable to send your message right now.");
      }

      // Return full result so callers can access previewUrl in dev
      return result;
    } catch (error) {
      console.error("[contact] handler error", error);
      throw new Error(
        error instanceof Error
          ? error.message
          : "Unable to submit your message right now. Please try again later."
      );
    }
  });
