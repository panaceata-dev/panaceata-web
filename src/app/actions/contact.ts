"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const phone = formData.get("phone") as string;
  const country = formData.get("country") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;
  const captchaToken = formData.get("captchaToken") as string;

  if (!name || !email || !message) {
    redirect("/contact?status=error");
  }

  // Verify reCAPTCHA
  if (!captchaToken) {
    redirect("/contact?status=error");
  }

  const captchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
  });
  const captchaData = await captchaRes.json();

  if (!captchaData.success) {
    redirect("/contact?status=error");
  }

  const { error } = await resend.emails.send({
    from: "Panaceata Website <onboarding@resend.dev>",
    to: "info@panaceata.com",
    replyTo: email,
    subject: `New Contact: ${name} — ${service || "General Inquiry"}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${country ? `<p><strong>Country:</strong> ${country}</p>` : ""}
      <p><strong>Service:</strong> ${service || "General Inquiry"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    redirect("/contact?status=error");
  }

  redirect("/contact?status=sent");
}
