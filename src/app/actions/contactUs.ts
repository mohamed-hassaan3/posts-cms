"use server";
import { client } from "@/sanity/lib/client";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const submitContactAction = async (formValues: ContactFormProps) => {
  const name = formValues.name.toString() || "";
  const email = formValues.email.toString() || "";
  const subject = formValues.subject.toString() || "";
  const message = formValues.message.toString() || "";

  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required" };
  }

  try {
    // Create Form to Sanity Studio
    await client.create({
      _type: "contactUs",
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    });

    // Confirmation to User
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: email,
        subject: "We've received your message",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting us. We have received your message and will get back to you soon.</p>
          <p>Here's a copy of your message:</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send user confirmation email:", emailError);
      return { success: false, message: "Failed to send confirmation email" };
    }

    // Notification to Owner
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["mmhassaan3@gmail.com", "mmhassaan3@gmail.com"],
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send owner notification email:", emailError);
      return { success: false, message: "Failed to send notification email" };
    }

    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    console.error("Contact form submission error:", error);

    if (error instanceof Error) {
      return { success: false, message: error.message };
    }

    return { success: false, message: "Failed to process your request" };
  }
};
