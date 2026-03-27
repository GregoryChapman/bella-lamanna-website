import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "bella.lamanna@gmail.com";
const FROM_DISPLAY = "Isabella Lamanna Website <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  try {
    // ── Parse body ──────────────────────────────────────────────────────────
    const body = await request.json();
    const { name, email, company, projectType, message } = body as {
      name?: string;
      email?: string;
      company?: string;
      projectType?: string;
      message?: string;
    };

    // ── Basic validation ─────────────────────────────────────────────────────
    if (!name || !email || !message || !projectType) {
      return NextResponse.json(
        { error: "Name, email, project type, and message are required." },
        { status: 400 }
      );
    }

    // ── Console log for dev / fallback ───────────────────────────────────────
    console.log("[Contact Form Submission]", {
      to: TO_EMAIL,
      name,
      email,
      company: company || "—",
      projectType,
      message,
    });

    // ── Resend (only runs when API key is present) ───────────────────────────
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="color: #ec4899; margin-bottom: 4px;">New Collaboration Inquiry</h2>
          <p style="color: #6b7280; font-size: 14px; margin-top: 0;">Submitted via Isabella Lamanna's website</p>
          <hr style="border: none; border-top: 1px solid #fce7f3; margin: 20px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 140px; vertical-align: top; color: #374151;">Name</td>
              <td style="padding: 8px 0; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top; color: #374151;">Email</td>
              <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #ec4899;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top; color: #374151;">Company / Brand</td>
              <td style="padding: 8px 0; color: #111827;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top; color: #374151;">Project Type</td>
              <td style="padding: 8px 0; color: #111827;">${projectType}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #fce7f3; margin: 20px 0;" />

          <p style="font-weight: 600; color: #374151; margin-bottom: 8px;">Message</p>
          <p style="color: #111827; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `;

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_DISPLAY,
          to: TO_EMAIL,
          reply_to: email,
          subject: `[Website Inquiry] ${projectType} — ${name}${company ? ` @ ${company}` : ""}`,
          html: emailHtml,
        }),
      });

      if (!resendRes.ok) {
        const err = await resendRes.text();
        console.error("[Resend error]", err);
        throw new Error("Resend delivery failed");
      }
    } else {
      // API key not yet configured — log only (safe for dev / pre-deploy)
      console.warn(
        "[Contact] RESEND_API_KEY not set — email logged to console only."
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("[Contact] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email directly." },
      { status: 500 }
    );
  }
}
