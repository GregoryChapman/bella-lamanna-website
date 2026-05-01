"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

// ─── Portfolio Data ────────────────────────────────────────────────────────────

const portfolioItems = [
  {
    href: "https://www.instagram.com/p/DVNKVKkDf87/",
    caption: "HomeSense kitchen essentials haul",
    category: "Lifestyle / Home",
    image: "/images/portfolio/homesense.png",
  },
  {
    href: "https://www.instagram.com/p/DT_32PcjXzf/",
    caption: "Test out my new Ninja airfryer with me",
    category: "Food & Cooking",
    image: "/images/portfolio/ninja.png",
  },
  {
    href: "https://www.instagram.com/p/DTecOFGDeNm/",
    caption: "Old Navy Clothing Haul",
    category: "Fashion",
    image: "/images/portfolio/oldnavy.png",
  },
  {
    href: "https://www.instagram.com/p/DTEmgmFDdtd/",
    caption: "Bake with us",
    category: "Food",
    image: "/images/portfolio/bake.png",
  },
  {
    href: "https://www.instagram.com/p/DSwAEvVjcIS/",
    caption: "Learn how to use the Shark flexstyle with me!",
    category: "Beauty / Hair",
    image: "/images/portfolio/shark.png",
  },
  {
    href: "https://www.instagram.com/p/DPiGB5sDQK8/",
    caption: "Day in the life at school",
    category: "Day in the Life",
    image: "/images/portfolio/dayinthelife.png",
  },
];

const categoryTags = [
  "Lifestyle",
  "Food & Cooking",
  "Fashion",
  "Brand Collaborations",
  "Day in the Life",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. Hero Banner ──────────────────────────────────────────────── */}
      <div className="relative h-[50vh] sm:h-[55vh] w-full overflow-hidden">
        <Image
          src="/images/portfolio/hero.jpg"
          alt="Isabella with friends celebrating together"
          fill
          className="object-cover object-top md:object-[center_40%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/10 via-transparent to-white/90" />
        <div className="absolute bottom-0 left-0 right-0 pb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            Portfolio
          </motion.h1>
        </div>
      </div>

      {/* ── 2. Featured Work Intro ───────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-brand-pink/10 to-white pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp(0.1)}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Here&apos;s a selection of content that reflects my approach to storytelling and brand
            partnerships, authentic, relatable, and grounded in real life. Each collaboration is
            created with care, intention, and audience trust in mind.
          </p>
        </motion.div>
      </section>

      {/* ── 3. Portfolio Grid ────────────────────────────────────────────── */}
      <section className="py-6 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Category pill tags */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-wrap justify-center gap-2.5 mb-12"
          >
            {categoryTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-brand-pink/10 text-brand-pink-deep text-sm font-medium rounded-full border border-brand-pink/20"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.href}
                {...fadeUp(i * 0.08)}
                className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-pink/30 transition-all duration-300 overflow-hidden"
              >
                {/* ── Thumbnail ── */}
                <div className="relative aspect-square overflow-hidden bg-brand-pink/10">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-pink-deep/0 group-hover:bg-brand-pink-deep/10 transition-colors duration-300" />
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-col flex-1 p-6">

                  {/* Category pill */}
                  <span className="self-start px-3 py-1 bg-brand-pink/10 text-brand-pink-deep text-xs font-semibold rounded-full border border-brand-pink/20 mb-3">
                    {item.category}
                  </span>

                  {/* Caption */}
                  <p className="font-outfit text-base font-semibold text-gray-900 leading-snug flex-1 mb-5">
                    {item.caption}
                  </p>

                  {/* Divider */}
                  <div className="w-10 h-0.5 bg-brand-pink rounded-full mb-5" />

                  {/* Button */}
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-brand-pink/10 hover:bg-gradient-to-r hover:from-brand-pink hover:to-brand-pink-deep text-brand-pink-deep hover:text-white font-semibold text-sm rounded-2xl border border-brand-pink/20 hover:border-transparent hover:shadow-md transition-all duration-200 group/btn"
                  >
                    View Post
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Bottom CTA ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-pink to-brand-pink-deep py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp()}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-white mb-5">
            Interested in working together?
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-10">
            Explore my content and reach out if you&apos;d like to collaborate on a project or campaign.
          </p>
          <Link
            href="/work-with-me"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-pink-deep font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-brand-pink/5 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-pink-deep"
          >
            Work With Me
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
