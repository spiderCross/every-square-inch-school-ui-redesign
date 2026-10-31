"use client";

import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { ENQUIRY_LABELS, ENQUIRY_TYPE_OPTIONS } from "@/lib/enquiry";

type FormState = {
  enquiryType: string;
  fullName: string;
  school: string;
  role: string;
  email: string;
  phone: string;
  cityCountry: string;
  preferredDestination: string;
  ageGroup: string;
  groupSize: string;
  period: string;
  programmeInterest: string;
  objectives: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  enquiryType: "general",
  fullName: "",
  school: "",
  role: "",
  email: "",
  phone: "",
  cityCountry: "",
  preferredDestination: "",
  ageGroup: "",
  groupSize: "",
  period: "",
  programmeInterest: "",
  objectives: "",
  message: "",
  consent: false,
};

export function ContactForm() {
  const search = useSearchParams();
  const typeParam = search.get("type") ?? "";
  const programmeParam = search.get("programme") ?? "";
  const destinationParam = search.get("destination") ?? "";
  const lockedType = ENQUIRY_LABELS[typeParam] ? typeParam : "";
  const [state, setState] = useState<FormState>(() => ({
    ...initialState,
    enquiryType: lockedType || "general",
    preferredDestination: destinationParam,
    objectives: programmeParam
      ? `Programme of interest: ${programmeParam}`
      : "",
  }));
  const isLocked = Boolean(lockedType);
  const isCorporate = state.enquiryType.startsWith("corporate");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [serverError, setServerError] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);
  const utm = useMemo(
    () => ({
      source: search.get("utm_source") ?? "",
      medium: search.get("utm_medium") ?? "",
      campaign: search.get("utm_campaign") ?? "",
    }),
    [search],
  );

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
    setServerError("");
  };

  const validate = () => {
    const errors: Partial<Record<keyof FormState, string>> = {};
    if (!state.fullName.trim()) errors.fullName = "Full name is required.";
    if (!state.school.trim())
      errors.school = "School or organisation is required.";
    if (!state.role.trim()) errors.role = "Role or designation is required.";
    if (!state.email.trim()) errors.email = "Official email is required.";
    if (!state.cityCountry.trim())
      errors.cityCountry = "City and country is required.";
    if (!state.message.trim()) errors.message = "Message is required.";
    if (!state.consent) errors.consent = "Privacy consent is required.";
    setFieldErrors(errors);
    return errors;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      trackEvent("contact_form_error", {
        count: Object.keys(validationErrors).length,
      });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...state,
          honeypot: honeypotRef.current?.value ?? "",
        }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        errors?: string[];
      };
      if (!response.ok || !data.ok) {
        const serverErrors = "Unable to submit enquiry right now.";
        setServerError(serverErrors);
        trackEvent("contact_form_error", {
          count: serverErrors.length,
          source: "server",
        });
        return;
      }
      trackEvent("contact_form_submit", {
        programme_interest: state.programmeInterest || "not_selected",
        utm_source: utm.source || "none",
        utm_medium: utm.medium || "none",
        utm_campaign: utm.campaign || "none",
      });
      setFieldErrors({});
      setServerError("");
      setSubmitted(true);
    } catch {
      setServerError("Unable to submit enquiry right now. Please try again.");
      trackEvent("contact_form_error", { count: 1, source: "network" });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl rounded-2xl border border-slate-200 bg-tint p-8">
        <h2 className="text-2xl font-bold text-ink">
          Thank you. Your enquiry has been received.
        </h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm text-muted">
          <li>We review your requirements</li>
          <li>We connect with you</li>
          <li>We shape suitable options</li>
          <li>We refine together</li>
        </ol>
      </div>
    );
  }

  return (
    <form
      className="max-w-3xl space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-24px_rgba(21,19,46,0.2)] sm:p-8"
      onFocus={() => trackEvent("contact_form_start", { page: "contact" })}
      onSubmit={onSubmit}
      noValidate
    >
      {serverError && (
        <div
          className="rounded-xl border border-red-200 bg-red-50 p-4"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-sm font-semibold text-red-700">{serverError}</p>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="enquiryType">
            Enquiry type *
          </label>
          {isLocked ? (
            <div className="field flex items-center bg-tint text-sm font-semibold text-ink">
              {ENQUIRY_LABELS[state.enquiryType]}
            </div>
          ) : (
            <select
              id="enquiryType"
              className="field"
              value={state.enquiryType}
              onChange={(e) => setField("enquiryType", e.target.value)}
            >
              {ENQUIRY_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <label className="field-label" htmlFor="fullName">
            Full name *
          </label>
          <input
            id="fullName"
            className="field"
            value={state.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
            aria-describedby={
              fieldErrors.fullName ? "fullName-error" : undefined
            }
          />
          {fieldErrors.fullName && (
            <p id="fullName-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.fullName}
            </p>
          )}
        </div>
        <div>
          <label className="field-label" htmlFor="school">
            {isCorporate
              ? "Company / organisation *"
              : "School / organisation *"}
          </label>
          <input
            id="school"
            className="field"
            value={state.school}
            onChange={(e) => setField("school", e.target.value)}
            aria-describedby={fieldErrors.school ? "school-error" : undefined}
          />
          {fieldErrors.school && (
            <p id="school-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.school}
            </p>
          )}
        </div>
        <div>
          <label className="field-label" htmlFor="role">
            Role / designation *
          </label>
          <input
            id="role"
            className="field"
            value={state.role}
            onChange={(e) => setField("role", e.target.value)}
            aria-describedby={fieldErrors.role ? "role-error" : undefined}
          />
          {fieldErrors.role && (
            <p id="role-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.role}
            </p>
          )}
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            Official email address *
          </label>
          <input
            id="email"
            type="email"
            className="field"
            value={state.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.email}
            </p>
          )}
        </div>
        <div>
          <label className="field-label" htmlFor="phone">
            Phone number (optional)
          </label>
          <input
            id="phone"
            type="tel"
            className="field"
            value={state.phone}
            onChange={(e) => setField("phone", e.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="cityCountry">
            City and country *
          </label>
          <input
            id="cityCountry"
            className="field"
            value={state.cityCountry}
            onChange={(e) => setField("cityCountry", e.target.value)}
            aria-describedby={
              fieldErrors.cityCountry ? "cityCountry-error" : undefined
            }
          />
          {fieldErrors.cityCountry && (
            <p id="cityCountry-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.cityCountry}
            </p>
          )}
        </div>
        <div>
          <label className="field-label" htmlFor="preferredDestination">
            Preferred destination (if known)
          </label>
          <input
            id="preferredDestination"
            className="field"
            value={state.preferredDestination}
            onChange={(e) => setField("preferredDestination", e.target.value)}
          />
        </div>
        {!isCorporate && (
          <div>
            <label className="field-label" htmlFor="ageGroup">
              Student age group / grades
            </label>
            <input
              id="ageGroup"
              className="field"
              value={state.ageGroup}
              onChange={(e) => setField("ageGroup", e.target.value)}
            />
          </div>
        )}
        <div>
          <label className="field-label" htmlFor="groupSize">
            {isCorporate
              ? "Number of participants"
              : "Approximate number of students / participants"}
          </label>
          <input
            id="groupSize"
            className="field"
            value={state.groupSize}
            onChange={(e) => setField("groupSize", e.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="period">
            Preferred travel period
          </label>
          <input
            id="period"
            className="field"
            value={state.period}
            onChange={(e) => setField("period", e.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="programmeInterest">
            Programme interest
          </label>
          <select
            id="programmeInterest"
            className="field"
            value={state.programmeInterest}
            onChange={(e) => setField("programmeInterest", e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="india">India</option>
            <option value="international">International</option>
            <option value="open">Open to recommendations</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="objectives">
            {isCorporate
              ? "Type of requirement"
              : "Learning objectives or special requirements"}
          </label>
          <textarea
            id="objectives"
            className="field"
            rows={3}
            value={state.objectives}
            onChange={(e) => setField("objectives", e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            className="field"
            rows={4}
            value={state.message}
            onChange={(e) => setField("message", e.target.value)}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
          />
          {fieldErrors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.message}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label className="inline-flex items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-secondary"
              checked={state.consent}
              onChange={(e) => setField("consent", e.target.checked)}
              aria-describedby={
                fieldErrors.consent ? "consent-error" : undefined
              }
            />
            <span>
              I consent to being contacted regarding this enquiry and agree to
              the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-primary"
              >
                privacy notice
              </a>
              . *
            </span>
          </label>
          {fieldErrors.consent && (
            <p id="consent-error" className="mt-2 text-sm text-red-600">
              {fieldErrors.consent}
            </p>
          )}
        </div>
      </div>
      <input type="hidden" name="utm_source" value={utm.source} />
      <input type="hidden" name="utm_medium" value={utm.medium} />
      <input type="hidden" name="utm_campaign" value={utm.campaign} />
      <input
        type="text"
        name="company"
        ref={honeypotRef}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <button type="submit" className="btn btn-secondary" disabled={submitting}>
        {submitting
          ? "Sending..."
          : state.enquiryType === "plan_your_journey"
            ? "Start Planning"
            : "Send Enquiry"}
      </button>
    </form>
  );
}
