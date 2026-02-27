"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const defaultState: ContactState = {
  name: "",
  email: "",
  company: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<ContactState>(defaultState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please complete name, work email, and message.");
      return;
    }

    setError("");
    setSubmitted(true);

    const subject = encodeURIComponent(`RegRely inquiry from ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:hello@regrely.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Work email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium">
          Company
        </label>
        <Input
          id="company"
          name="company"
          value={form.company}
          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          required
        />
      </div>

      {error ? (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </p>
      ) : null}

      {submitted ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Drafted an email in your mail app. If it did not open, send to hello@regrely.com.
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Send Message</Button>
        <a
          href="mailto:hello@regrely.com?subject=RegRely%20Contact"
          className="inline-flex h-10 items-center rounded-xl border border-border px-4 text-sm font-semibold"
        >
          Mailto fallback
        </a>
      </div>
    </form>
  );
}
