import emailjs from "@emailjs/browser";

export type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(payload: ContactEmailPayload)  {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Missing EmailJS env vars");
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      name: payload.name,
      email: payload.email,
      message: payload.message,
    },
    { publicKey },
  );
}