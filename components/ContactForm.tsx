"use client";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";

type Values = { name: string; email: string; message: string };
type Errors = Partial<Values>;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function check(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL.test(v.email.trim())) e.email = "Enter a valid email address, like name@company.com.";
  if (!v.message.trim()) e.message = "Describe your project in a sentence or two.";
  return e;
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

export default function ContactForm({ initialMessage = "" }: { initialMessage?: string }) {
  const [v, setV] = useState<Values>({ name: "", email: "", message: initialMessage });
  const [err, setErr] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const refs = { name: useRef<HTMLInputElement>(null), email: useRef<HTMLInputElement>(null), message: useRef<HTMLTextAreaElement>(null) };
  const okRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (done) okRef.current?.focus(); }, [done]);

  function set(k: keyof Values, val: string) {
    const next = { ...v, [k]: val };
    setV(next);
    if (err[k]) setErr({ ...err, [k]: check(next)[k] }); // clear the message as soon as the field is fixed
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const next = check(v);
    setErr(next);
    const first = (["name", "email", "message"] as const).find((k) => next[k]);
    if (first) return refs[first].current?.focus();
    setDone(true); // simulated: nothing is sent anywhere
  }

  if (done)
    return (
      <div className="ok" role="status" tabIndex={-1} ref={okRef}>
        <h2>Thank you!</h2>
        <p className="ok-flag">Thank you, our team will connect with you shortly.</p>
        <p>We have received your enquiry. One of our engineers will review your requirements and reach out within 24 hours.</p>
        <button
          type="button"
          className="btn btn-navy"
          onClick={() => {
            setV({ name: "", email: "", message: "" });
            setDone(false);
          }}
        >
          Send another message
        </button>
      </div>
    );

  const aria = (k: keyof Values) => ({ "aria-invalid": err[k] ? true : undefined, "aria-describedby": err[k] ? `${k}-error` : undefined });

  return (
    <form className="form" onSubmit={submit} noValidate>
      <Field id="name" label="Your name" error={err.name}>
        <input id="name" ref={refs.name} autoComplete="name" value={v.name} onChange={(e) => set("name", e.target.value)} {...aria("name")} />
      </Field>
      <Field id="email" label="Email address" error={err.email}>
        <input id="email" ref={refs.email} type="email" autoComplete="email" value={v.email} onChange={(e) => set("email", e.target.value)} {...aria("email")} />
      </Field>
      <Field id="message" label="Project message" error={err.message}>
        <textarea id="message" ref={refs.message} rows={6} value={v.message} onChange={(e) => set("message", e.target.value)} {...aria("message")} />
      </Field>
      <button className="btn" type="submit">Send enquiry</button>
    </form>
  );
}
