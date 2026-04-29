import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    // Server-side guard
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const from = process.env.CONTACT_FROM;

    if (!from) {
      console.error("[contact route] CONTACT_FROM env variable is not set.");
      return NextResponse.json(
        { error: "Email sender not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    console.log("[contact route] Sending from:", from);

    // Capture the full result — Resend returns { data, error } and does NOT throw on failure
    const to = process.env.CONTACT_TO;

    if (!to) {
      console.error("[contact route] CONTACT_TO env variable is not set.");
      return NextResponse.json(
        { error: "Email recipient not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    console.log("[contact route] Sending to:", to);

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `New enquiry from ${name.trim()} — IGS Website`,
      text: [
        `Name:    ${name.trim()}`,
        `Email:   ${email.trim()}`,
        `Phone:   ${phone?.trim() || "Not provided"}`,
        ``,
        `Message:`,
        message.trim(),
      ].join("\n"),
    });

    // Log the full result so you can see exactly what Resend returned
    console.log("[contact route] Resend result:", { data, error });

    if (error) {
      console.error("[contact route] Resend returned an error:", error);
      return NextResponse.json(
        { error: error.message ?? "Resend rejected the request." },
        { status: 500 }
      );
    }

    console.log("[contact route] Email sent successfully. ID:", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact route] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected server error. Please try again." },
      { status: 500 }
    );
  }
}
