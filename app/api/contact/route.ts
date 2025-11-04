import { NextRequest, NextResponse } from "next/server";
import { CREATOR } from "@/config/creator";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if using Formspree or Resend
    const useFormspree = process.env.USE_FORMSPREE === "true";
    const formspreeId = process.env.FORMSPREE_ID;

    if (useFormspree && formspreeId) {
      // Send to Formspree
      const formspreeResponse = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _replyto: email,
        }),
      });

      if (!formspreeResponse.ok) {
        throw new Error("Formspree submission failed");
      }

      return NextResponse.json({ success: true });
    } else {
      // Use Resend (requires RESEND_API_KEY)
      const resendApiKey = process.env.RESEND_API_KEY;
      
      if (!resendApiKey) {
        // Fallback: just log the email (in production, you'd want proper email handling)
        console.log("Contact Form Submission:", {
          to: CREATOR.email,
          from: email,
          subject: `[${CREATOR.name} Website] ${subject}`,
          body: `From: ${name} (${email})\n\n${message}`,
        });

        return NextResponse.json({ 
          success: true,
          message: "Message received (email not configured)" 
        });
      }

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Website Contact <noreply@example.com>", // Update with your domain
          to: CREATOR.email,
          reply_to: email,
          subject: `[${CREATOR.name} Website] ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        throw new Error("Resend submission failed");
      }

      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

