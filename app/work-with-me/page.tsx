"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Star,
  Camera,
  ShoppingBag,
  CalendarDays,
  Gift,
  Heart,
  Utensils,
  Music2,
  Video,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const collaborationTypes = [
  {
    icon: Star,
    title: "Sponsored Content",
    description:
      "Dedicated videos and posts that fit my niche, made to resonate with my audience while highlighting your brand.",
  },
  {
    icon: Users,
    title: "Brand Ambassadorships",
    description:
      "Long-term relationships where I become a genuine advocate for your brand, naturally and authentically integrating your product or service into my everyday content.",
  },
  {
    icon: CalendarDays,
    title: "Event Coverage & Appearances",
    description:
      "Pre-event promotion, real-time social coverage, and post-event content creation for brand launches and experiential events.",
  },
  {
    icon: ShoppingBag,
    title: "Product Reviews & Unboxing",
    description:
      "Honest, engaging reviews and unboxings that showcase your product in a fun, relatable way.",
  },
  {
    icon: Gift,
    title: "PR & Gifted Opportunities",
    description:
      "Gifted products will be posted on my Instagram and Facebook stories, and may be integrated naturally into my content.",
  },
];

const contentForms = [
  { icon: Camera, title: "Get ready or unready with me" },
  { icon: ShoppingBag, title: "Product testing and unboxing" },
  { icon: Star, title: "Shopping hauls (clothing, beauty, household items, etc)" },
  { icon: Utensils, title: "Cooking, baking, and meal prep content" },
  { icon: Video, title: "Day in the life videos and vlogs" },
  { icon: Music2, title: "Song promos" },
  { icon: CalendarDays, title: "Event coverage" },
];

const brandExpectations = [
  "Professional, timely communication and reliability from management",
  "High quality and creative content tailored to your brand",
  "On-time delivery",
  "A genuine connection with the audience",
];

const audienceDemographics = [
  "Primarily 18-34 age range",
  "Lifestyle & wellness enthusiasts",
  "Travel and adventure seekers",
  "University students and young professionals",
];

const audienceEngagement = [
  "High engagement rates on lifestyle content",
  "Strong community interaction",
  "Authentic, relatable content style",
  "Active in wellness and travel spaces",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkWithMePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-pink/10 via-brand-pink/5 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-1.5 bg-brand-pink/15 text-brand-pink-deep text-sm font-medium rounded-full mb-5">
                Collaborations & Partnerships
              </span>
              <h1 className="font-outfit text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Work With Me
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4">
                I enjoy collaborating with brands that align with my values and feel like a natural fit in my life.
                I&apos;m passionate about working with companies that care about inclusivity, authenticity, and making
                the world a better place. If that sounds like you, let&apos;s create something great together.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                My content integrates products into real routines, the good days and the challenging ones, in a way
                that feels honest and relatable. I focus on storytelling that connects, inspires, and resonates
                with my audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-gradient-to-r from-brand-pink to-brand-pink-deep text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-72 sm:w-80 lg:w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand-pink/20">
                <Image
                  src="/images/work/workwithme5.jpg"
                  alt="Isabella Lamanna ready to collaborate with brands"
                  fill
                  priority
                  quality={90}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 320px, 384px"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. Types of Collaborations ───────────────────────────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Types of Collaborations I Offer
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From one-off campaigns to long-term partnerships — here&apos;s how we can work together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp(i * 0.08)}
                  className="group p-7 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-pink/30 transition-all"
                >
                  <div className="w-12 h-12 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-pink/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-pink-deep" />
                  </div>
                  <h3 className="font-outfit text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Forms of Content I Deliver ───────────────────────────────── */}
      <section className="bg-brand-pink/5 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Forms of Content I Deliver
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A glimpse at the type of content I bring to every collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentForms.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp(i * 0.08)}
                  className="group flex items-center gap-4 p-6 bg-white rounded-3xl border border-brand-pink/20 shadow-sm hover:shadow-md hover:border-brand-pink/40 transition-all"
                >
                  <div className="w-11 h-11 shrink-0 bg-brand-pink/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-pink/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-pink-deep" />
                  </div>
                  <p className="font-outfit text-base font-medium text-gray-800 leading-snug">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. What Brands Can Expect ────────────────────────────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Brands Can Expect
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {brandExpectations.map((item, i) => (
              <motion.div
                key={item}
                {...fadeUp(i * 0.08)}
                className="flex items-start gap-4 p-6 bg-brand-pink/10 rounded-3xl border border-brand-pink/20"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-pink-deep mt-0.5 shrink-0" />
                <p className="text-gray-700 text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Audience Snapshot ─────────────────────────────────────────── */}
      <section className="bg-brand-pink/5 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Audience Snapshot
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Who&apos;s tuning in and how they show up.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              {...fadeUp(0.1)}
              className="bg-white rounded-3xl border border-brand-pink/20 shadow-sm p-8"
            >
              <h3 className="font-outfit text-xl font-semibold text-gray-900 mb-4">
                Demographics
              </h3>
              <div className="w-10 h-0.5 bg-brand-pink rounded-full mb-5" />
              <ul className="space-y-3">
                {audienceDemographics.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-pink-deep shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              className="bg-white rounded-3xl border border-brand-pink/20 shadow-sm p-8"
            >
              <h3 className="font-outfit text-xl font-semibold text-gray-900 mb-4">
                Engagement
              </h3>
              <div className="w-10 h-0.5 bg-brand-pink rounded-full mb-5" />
              <ul className="space-y-3">
                {audienceEngagement.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-pink-deep shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. Content I Create — link to portfolio ─────────────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="max-w-2xl mx-auto text-center">
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
            Content I Create
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            See examples of recent collaborations and the kind of storytelling I bring to every project.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-pink to-brand-pink-deep text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2"
          >
            See My Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* ── 7. Media Kit Note ───────────────────────────────────────────── */}
      <section className="bg-brand-pink/10 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            I&apos;ve worked with brands across beauty, fashion, wellness, and lifestyle. For a full list of past
            collaborations and detailed analytics, request my media kit through the contact form.
          </p>
        </motion.div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-pink to-brand-pink-deep py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp()}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-white mb-5">
            Start a Collaboration
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-10">
            If you&apos;re interested in working together, I would love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-brand-pink-deep font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-brand-pink/5 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-pink-deep"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
