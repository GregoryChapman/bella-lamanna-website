"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { CREATOR } from "@/config/creator";
import {
  CheckCircle2,
  AlertCircle,
  Mail,
  Instagram,
  Music2,
  Send,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

const PROJECT_TYPES = [
  "Sponsored Content",
  "Brand Partnership",
  "Event Appearance",
  "Product Review",
  "Media Kit Request",
  "Other",
];

// ─── Shared input styles ──────────────────────────────────────────────────────

const inputCls =
  "w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl " +
  "focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent " +
  "placeholder:text-gray-400 text-gray-900 text-sm transition-all shadow-sm";

const labelCls = "block text-sm font-semibold text-gray-700 mb-1.5";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

// ─── Component ────────────────────────────────────────────────────────────────

export function Contact() {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setServerMessage(data.message ?? "Thank you for reaching out! I'll get back to you soon.");
        setFormData(EMPTY_FORM);
      } else {
        throw new Error(data.error ?? "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setServerMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email directly."
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50/40 to-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-5">
              Get in Touch
            </span>
            <h1 className="font-outfit text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contact
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
              Interested in working together or have a question? I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Contact Info Strip ────────────────────────────────────────── */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <motion.div
          {...fadeUp(0.1)}
          className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-gray-600"
        >
          {/* Management email */}
          <a
            href={`mailto:${CREATOR.email}`}
            className="flex items-center gap-2.5 hover:text-pink-600 transition-colors group"
          >
            <span className="w-9 h-9 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
              <Mail className="w-4 h-4 text-pink-500" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                Management / Brand Inquiries
              </span>
              {CREATOR.email}
            </span>
          </a>

          <div className="hidden sm:block w-px h-10 bg-gray-200" />

          {/* Instagram */}
          <a
            href="https://instagram.com/Bella.lamannaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-pink-600 transition-colors group"
          >
            <span className="w-9 h-9 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
              <Instagram className="w-4 h-4 text-pink-500" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Instagram</span>
              @bella.lamannaa
            </span>
          </a>

          <div className="hidden sm:block w-px h-10 bg-gray-200" />

          {/* TikTok */}
          <a
            href="https://tiktok.com/@bella.lamanna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-pink-600 transition-colors group"
          >
            <span className="w-9 h-9 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
              <Music2 className="w-4 h-4 text-pink-500" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">TikTok</span>
              @bella.lamanna
            </span>
          </a>
        </motion.div>
      </section>

      {/* ── 3. Contact Form ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">

          {/* Success state */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-5 ring-4 ring-pink-100">
                <CheckCircle2 className="w-8 h-8 text-pink-500" />
              </div>
              <h2 className="font-outfit text-2xl font-bold text-gray-900 mb-3">
                Message Sent!
              </h2>
              <p className="text-gray-500 text-lg max-w-sm mx-auto mb-8">
                {serverMessage}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-7 py-3 bg-pink-50 hover:bg-pink-100 text-pink-600 font-semibold rounded-2xl border border-pink-100 transition-all text-sm"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.div {...fadeUp(0.15)}>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Name <span className="text-pink-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={set("name")}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Email <span className="text-pink-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={set("email")}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Company + Project Type row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className={labelCls}>
                      Company / Brand
                    </label>
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company or brand"
                      value={formData.company}
                      onChange={set("company")}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className={labelCls}>
                      Project / Collaboration Type <span className="text-pink-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      required
                      value={formData.projectType}
                      onChange={set("projectType")}
                      className={`${inputCls} cursor-pointer`}
                    >
                      <option value="">Select a type…</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelCls}>
                    Message <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project, campaign, or idea…"
                    value={formData.message}
                    onChange={set("message")}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Error banner */}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <p className="text-red-700 text-sm leading-relaxed">
                      {serverMessage}
                    </p>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Media kit note */}
              <motion.div
                {...fadeUp(0.2)}
                className="mt-10 p-6 bg-pink-50 rounded-3xl border border-pink-100 text-center"
              >
                <h3 className="font-outfit text-base font-semibold text-gray-900 mb-1.5">
                  Need a Media Kit?
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A full media kit with stats, demographics, and past collaborations is available on
                  request. Select &ldquo;Media Kit Request&rdquo; above, or email{" "}
                  <a
                    href={`mailto:${CREATOR.email}`}
                    className="text-pink-600 hover:text-pink-700 underline underline-offset-2"
                  >
                    {CREATOR.email}
                  </a>
                  .
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
