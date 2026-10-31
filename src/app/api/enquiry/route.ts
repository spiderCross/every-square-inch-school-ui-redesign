import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ENQUIRY_LABELS } from "@/lib/enquiry";

type EnquiryPayload = {
  enquiryType?: string;
  fullName?: string;
  school?: string;
  role?: string;
  email?: string;
  phone?: string;
  cityCountry?: string;
  preferredDestination?: string;
  ageGroup?: string;
  groupSize?: string;
  period?: string;
  programmeInterest?: string;
  objectives?: string;
  message?: string;
  consent?: boolean;
  honeypot?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? 587);
const smtpSecure = process.env.SMTP_SECURE === "true";
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom =
  process.env.SMTP_FROM ??
  `no-reply@${process.env.SMTP_DOMAIN ?? "everysquareinch.in"}`;
const smtpTo =
  process.env.CONTACT_TO_EMAIL ?? smtpUser ?? "info@everysquareinch.in";

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
});

export async function POST(request: Request) {
  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        ok: false,
        errors: [
          "Email delivery is not configured. Please set SMTP_HOST, SMTP_USER and SMTP_PASS.",
        ],
      },
      { status: 500 },
    );
  }

  const payload = (await request.json()) as EnquiryPayload;
  const errors: string[] = [];

  if (payload.honeypot) {
    return NextResponse.json(
      { ok: false, errors: ["Spam check failed."] },
      { status: 400 },
    );
  }
  if (!payload.fullName?.trim()) errors.push("Full name is required.");
  if (!payload.school?.trim())
    errors.push("School or organisation is required.");
  if (!payload.role?.trim()) errors.push("Role or designation is required.");
  if (!payload.email?.trim()) errors.push("Official email is required.");
  if (!payload.cityCountry?.trim())
    errors.push("City and country is required.");
  if (!payload.message?.trim()) errors.push("Message is required.");
  if (!payload.consent) errors.push("Privacy consent is required.");

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const enquiryLabel =
    ENQUIRY_LABELS[payload.enquiryType ?? ""] ?? "General Enquiry";

  const htmlBody = `
    <h1>New Website Enquiry</h1>
    <p><strong>Enquiry Type:</strong> ${escapeHtml(enquiryLabel)}</p>
    <p><strong>Name:</strong> ${escapeHtml(payload.fullName ?? "")}</p>
    <p><strong>School / Organisation:</strong> ${escapeHtml(payload.school ?? "")}</p>
    <p><strong>Role / Designation:</strong> ${escapeHtml(payload.role ?? "")}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email ?? "")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone ?? "N/A")}</p>
    <p><strong>City / Country:</strong> ${escapeHtml(payload.cityCountry ?? "")}</p>
    <p><strong>Preferred Destination:</strong> ${escapeHtml(payload.preferredDestination ?? "N/A")}</p>
    <p><strong>Student age group / grades:</strong> ${escapeHtml(payload.ageGroup ?? "N/A")}</p>
    <p><strong>Estimated group size:</strong> ${escapeHtml(payload.groupSize ?? "N/A")}</p>
    <p><strong>Preferred travel period:</strong> ${escapeHtml(payload.period ?? "N/A")}</p>
    <p><strong>Programme interest:</strong> ${escapeHtml(payload.programmeInterest ?? "N/A")}</p>
    <p><strong>Objectives / requirements:</strong> ${escapeHtml(payload.objectives ?? "N/A")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message ?? "")}</p>
  `;

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: payload.email,
      subject: `ESI Website Enquiry - ${enquiryLabel}`,
      text:
        `New enquiry from ${payload.fullName} (${payload.email})\n\n` +
        `Enquiry Type: ${enquiryLabel}\n` +
        `School / Organisation: ${payload.school}\n` +
        `Role / Designation: ${payload.role}\n` +
        `Phone: ${payload.phone ?? "N/A"}\n` +
        `City / Country: ${payload.cityCountry}\n` +
        `Preferred Destination: ${payload.preferredDestination ?? "N/A"}\n` +
        `Age group / grades: ${payload.ageGroup ?? "N/A"}\n` +
        `Group size: ${payload.groupSize ?? "N/A"}\n` +
        `Period: ${payload.period ?? "N/A"}\n` +
        `Programme interest: ${payload.programmeInterest ?? "N/A"}\n` +
        `Objectives: ${payload.objectives ?? "N/A"}\n\n` +
        `Message:\n${payload.message}`,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry email send failed:", error);
    return NextResponse.json(
      {
        ok: false,
        errors: [
          "Unable to send enquiry email right now. Please try again later.",
        ],
      },
      { status: 500 },
    );
  }
}
