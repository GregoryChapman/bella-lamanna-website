"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";
import Link from "next/link";

const collaborationTypes = [
  {
    title: "Sponsored Content",
    description:
      "Authentic, on-brand posts across TikTok and Instagram that resonate with my audience.",
  },
  {
    title: "UGC (User-Generated Content)",
    description:
      "High-quality content created for your brand's own channels — no posting required on my end.",
  },
  {
    title: "Brand Ambassadorships",
    description:
      "Long-term partnerships where I become a genuine advocate for your brand over time.",
  },
  {
    title: "Event Coverage & Appearances",
    description:
      "On-site content creation and social coverage for launches, events, and activations.",
  },
  {
    title: "Product Reviews & Unboxings",
    description:
      "Honest, engaging reviews that showcase your product in an authentic way.",
  },
];

const brandExpectations = [
  "Professional, timely communication from my management team",
  "High-quality, on-brand content delivered on schedule",
  "Authentic storytelling that connects with a real audience",
  "Transparent analytics and performance reporting",
  "A collaborative, flexible creative process",
];

export default function WorkWithMePage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-outfit text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Work With Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I love collaborating with brands that align with my values —
            wellness, lifestyle, inclusivity, and authenticity. If that sounds
            like you, let&apos;s create something great together.
          </p>
        </motion.div>

        {/* Collaboration Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-outfit text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
            Collaboration Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <h3 className="font-outfit text-lg font-semibold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What Brands Can Expect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-outfit text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
            What Brands Can Expect
          </h2>
          <div className="bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 rounded-2xl p-8 border border-gray-100">
            <ul className="space-y-4">
              {brandExpectations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Past Collaborations Note */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-gray-600 text-lg">
            I&apos;ve worked with brands across beauty, fashion, wellness, and
            lifestyle. For a full list of past collaborations and detailed
            analytics, request my media kit through the contact form.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-sky-400 to-fuchsia-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            Start a Collaboration
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
