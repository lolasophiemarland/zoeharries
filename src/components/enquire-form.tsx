"use client";

import { useState } from "react";

type Kind = "contact" | "speaking";

const fieldClass =
  "mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-2 text-sm text-foreground outline-none transition-colors focus:border-graphite";

export function EnquireForm({ kind }: { kind: Kind }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });
      const payload = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(payload.error || "Could not send your message.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setError("Could not send your message. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      {kind === "speaking" ? (
        <Field label="Event / Organization" name="organization" required />
      ) : (
        <Field label="Subject" name="subject" />
      )}
      <label className="block">
        <span className="label-caps">Message</span>
        <textarea name="message" required rows={6} className={`${fieldClass} resize-none`} />
      </label>
      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : kind === "speaking" ? "Submit inquiry" : "Send message"}
      </button>
      {status === "sent" ? (
        <p className="text-sm text-muted">Thank you. I will be in touch shortly.</p>
      ) : null}
      {status === "error" ? <p className="text-sm text-graphite">{error}</p> : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="label-caps">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className={fieldClass}
      />
    </label>
  );
}
