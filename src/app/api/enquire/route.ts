import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

function asTrimmed(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const kind = asTrimmed(body.kind, 20) === "speaking" ? "speaking" : "contact";
  const name = asTrimmed(body.name, 120);
  const email = asTrimmed(body.email, 200);
  const organization = asTrimmed(body.organization ?? body.organisation, 200);
  const subjectLine = asTrimmed(body.subject, 200);
  const message = asTrimmed(body.message, 4000);

  if (!name || !email || !email.includes("@") || !message) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }
  if (kind === "speaking" && !organization) {
    return NextResponse.json({ error: "Please add the event or organization." }, { status: 400 });
  }

  const apiKey = (process.env.RESEND_API_KEY ?? "").trim();
  const from = (process.env.EMAIL_FROM ?? "").trim();
  const to = (process.env.ENQUIRY_TO ?? "").trim();
  if (!apiKey || !from || !to) {
    return NextResponse.json(
      {
        error:
          "The inquiry inbox is not configured yet. Please email hello@zoeharries.com directly.",
      },
      { status: 503 }
    );
  }

  const subject =
    kind === "speaking"
      ? `Speaking inquiry from ${name}`
      : `Website message from ${name}${subjectLine ? ` – ${subjectLine}` : ""}`;

  const text = [
    kind === "speaking" ? "Speaking inquiry – zoeharries.com" : "Contact – zoeharries.com",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    kind === "speaking" ? `Event / Organization: ${organization}` : `Subject: ${subjectLine || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
  <!doctype html>
  <html>
    <body style="margin:0;padding:16px;font-family:Inter,Arial,sans-serif;color:#2c2c2a;">
      <p style="margin:0 0 10px 0;"><strong>${kind === "speaking" ? "Speaking inquiry" : "Website message"}</strong></p>
      <p style="margin:0 0 6px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0 0 6px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:0 0 6px 0;"><strong>${kind === "speaking" ? "Event / Organization" : "Subject"}:</strong> ${escapeHtml(kind === "speaking" ? organization : subjectLine || "-")}</p>
      <p style="margin:0 0 6px 0;"><strong>Message:</strong></p>
      <p style="margin:0;padding:8px;background:#f7f5f1;border-radius:2px;white-space:pre-wrap;">${escapeHtml(message)}</p>
    </body>
  </html>
  `;

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject,
    text,
    html,
  });

  if (result.error) {
    return NextResponse.json({ error: result.error.message || "Could not send email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
