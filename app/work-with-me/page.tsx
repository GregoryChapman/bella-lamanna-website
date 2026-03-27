"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Star,
  Camera,
  ShoppingBag,
  CalendarDays,
  Gift,
  Music2,
  Instagram,
  Eye,
  Heart,
  Utensils,
  Megaphone,
  CheckCircle2,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const collaborationTypes = [
  {
    icon: Star,
    title: "Sponsored Content",
    description:
      "Dedicated TikTok videos and Instagram posts that feel native to my feed, crafted to resonate with my audience while highlighting your brand.",
  },
  {
    icon: Users,
    title: "Brand Ambassadorships",
    description:
      "Long-term relationships where I become a genuine advocate for your brand — authentically weaving your product or service into my everyday content.",
  },
  {
    icon: CalendarDays,
    title: "Event Coverage & Appearances",
    description:
      "On-site content creation and real-time social coverage for brand launches, activations, and experiential events.",
  },
  {
    icon: ShoppingBag,
    title: "Product Reviews & Unboxing",
    description:
      "Honest, engaging reviews and unboxings that showcase your product in a fun, relatable way that drives genuine interest.",
  },
  {
    icon: Megaphone,
    title: "Product Launches & Campaigns",
    description:
      "Creative campaign content designed to build excitement and awareness around new products across my platforms.",
  },
  {
    icon: Gift,
    title: "PR & Gifted Opportunities",
    description:
      "Organic, authentic coverage of gifted products integrated naturally into my content and daily life.",
  },
];

const contentForms = [
  {
    icon: Camera,
    title: "Get ready with me & lifestyle integrations",
  },
  {
    icon: ShoppingBag,
    title: "Product testing and unboxing",
  },
  {
    icon: Star,
    title: "Shopping hauls (clothing & lifestyle)",
  },
  {
    icon: Utensils,
    title: "Cooking & meal prep content",
  },
  {
    icon: Heart,
    title: "Long-term partnerships & ambassadorships",
  },
  {
    icon: CalendarDays,
    title: "Event coverage",
  },
];

const brandExpectations = [
  "Professional, timely communication and reliability from management",
  "High quality and creative content tailored to your brand",
  "On-time delivery",
  "A genuine connection with the audience",
];

const workImages = [
  "/images/work/workwithme5.jpg",
  "/images/work/workwithme19.jpg",
  "/images/work/workwithme30.jpg",
  "/images/work/workwithme36.png",
  "/images/work/workwithme47.jpg",
  "/images/work/workwithme66.jpg",
];

const stats = [
  {
    icon: Music2,
    label: "TikTok Followers",
    value: CREATOR.tiktokFollowers,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: Instagram,
    label: "Instagram Followers",
    value: CREATOR.instagramFollowers,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: Heart,
    label: "TikTok Likes",
    value: CREATOR.tiktokLikes,
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: Eye,
    label: "Average Views",
    value: "20K+",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: Star,
    label: "Engagement Rate",
    value: "8%",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
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
      <section className="bg-gradient-to-br from-pink-50 via-rose-50/40 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-medium rounded-full mb-5">
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
                  className="px-8 py-3.5 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/media-kit"
                  className="px-8 py-3.5 bg-white border-2 border-pink-200 text-pink-700 font-semibold rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                >
                  View Media Kit
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
              <div className="relative w-72 sm:w-80 lg:w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-pink-100">
                <Image
                  src="/images/work/workwithme5.jpg"
                  alt="Isabella Lamanna — content creator"
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
                  className="group p-7 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-100 transition-all"
                >
                  <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-pink-100 transition-colors">
                    <Icon className="w-5 h-5 text-pink-500" />
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
      <section className="bg-pink-50/50 py-24 px-4 sm:px-6 lg:px-8">
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
                  className="group flex items-center gap-4 p-6 bg-white rounded-3xl border border-pink-100 shadow-sm hover:shadow-md hover:border-pink-200 transition-all"
                >
                  <div className="w-11 h-11 shrink-0 bg-pink-50 rounded-2xl flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                    <Icon className="w-5 h-5 text-pink-500" />
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
                className="flex items-start gap-4 p-6 bg-pink-50 rounded-3xl border border-pink-100"
              >
                <CheckCircle2 className="w-6 h-6 text-pink-500 mt-0.5 shrink-0" />
                <p className="text-gray-700 text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Gallery ──────────────────────────────────────────────────── */}
      <section className="bg-pink-50/50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Content I Create
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A glimpse at the kind of content I bring to every collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workImages.map((src, i) => (
              <motion.div
                key={src}
                {...fadeUp(i * 0.08)}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Isabella Lamanna content ${i + 1}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* subtle overlay on hover */}
                <div className="absolute inset-0 bg-pink-900/0 group-hover:bg-pink-900/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Stats ────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              My Reach
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Real numbers, real engagement — a community that actually shows up.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  {...fadeUp(i * 0.1)}
                  className={`${stat.bg} ${stat.border} border rounded-3xl p-6 text-center shadow-sm`}
                >
                  <div className="flex justify-center mb-3">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className={`font-outfit text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-gray-500 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Media Kit Note ───────────────────────────────────────────── */}
      <section className="bg-pink-50/60 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            I&apos;ve worked with brands across beauty, fashion, wellness, and lifestyle. For a full list of past
            collaborations and detailed analytics, request my media kit through the contact form.
          </p>
          <Link
            href="/media-kit"
            className="inline-block mt-6 px-7 py-3 bg-white border-2 border-pink-200 text-pink-700 font-semibold rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          >
            View Media Kit
          </Link>
        </motion.div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp()}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-white mb-5">
            Start a Collaboration
          </h2>
          <p className="text-pink-100 text-lg leading-relaxed mb-10">
            If you&apos;re interested in working together, I would love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-pink-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-pink-50 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
