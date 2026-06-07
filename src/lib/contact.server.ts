export type ContactEmailData = {
  name: string;
  email: string;
  message: string;
};

export async function storeContactMessage(data: ContactEmailData) {
  console.log("[contact] storing contact message", {
    name: data.name,
    email: data.email,
    message: data.message,
    at: new Date().toISOString(),
  });

  return { ok: true as const };
}
 
