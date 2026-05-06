"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";
import Image from "next/image";
import Link from "next/link";

// ─── Variant switch ────────────────────────────────────────────────────────────
// Change HERO_VARIANT to 'fullbleed' | 'split' | 'card' to preview each layout.

type HeroVariant = "fullbleed" | "split" | "card";
const HERO_VARIANT: HeroVariant = "fullbleed";
const HERO_IMAGE_PATH = "/images/hero/hero3.jpg";

// ─── Shared data ──────────────────────────────────────────────────────────────

const categories = ["lifestyle", "wellness", "student life", "inclusivity"];

// ─── Variant A — Full-bleed background image ──────────────────────────────────

function HeroFullBleed() {
  return (
    <>
      {/* ── Mobile + tablet (below lg) — stacked photo card + content ── */}
      <section className="lg:hidden">

        {/* Photo card with name overlay */}
        <div className="relative w-full h-[60vh] sm:h-[65vh] overflow-hidden rounded-b-3xl">
          <Image
            src={HERO_IMAGE_PATH}
            alt="Isabella Lamanna, Canadian lifestyle and wellness content creator"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Bottom gradient so the name reads cleanly without overpowering the photo */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
          {/* Name pinned to bottom of photo */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <h1 className="font-outfit text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
              {CREATOR.name}
            </h1>
          </div>
        </div>

        {/* Content block below the photo */}
        <div className="px-6 sm:px-8 py-10 bg-gradient-to-b from-pink-50 via-white to-white">
          <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-xl">
            I&apos;m passionate about living life to the fullest, finding the fun in the chaos, and
            encouraging you to do the same.
          </p>

          {/* Pill chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink-deep text-sm font-medium"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* CTAs — stacked on mobile, side-by-side at sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/about"
              className="px-6 py-3 rounded-full bg-brand-pink-deep text-white font-semibold text-center hover:bg-white hover:text-brand-pink-deep border-2 border-brand-pink-deep transition-colors duration-200 shadow-md"
            >
              Who Am I?
            </Link>
            <Link
              href="/work-with-me"
              className="px-6 py-3 rounded-full bg-white text-brand-pink-deep font-semibold text-center hover:bg-brand-pink-deep hover:text-white border-2 border-brand-pink-deep transition-colors duration-200 shadow-md"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </section>

      {/* ── Desktop (lg+) — full-bleed, unchanged ──────────────────────── */}
      <section className="hidden lg:flex items-end relative w-full min-h-[85vh] overflow-hidden">
        {/* Background image */}
        <Image
          src={HERO_IMAGE_PATH}
          alt="Isabella Lamanna, Canadian lifestyle and wellness content creator"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Left-side pink gradient overlay — stronger to give text a legible panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-pink-deep/85 via-brand-pink-deep/50 to-transparent" />
        {/* Bottom darkening gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Bottom white fade — seamless transition into the white page below */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        {/* Text block */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h1 className="font-outfit text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 leading-tight drop-shadow-lg">
              {CREATOR.name}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 drop-shadow">
              I&apos;m passionate about living life to the fullest, finding the fun in the chaos, and
              encouraging you to do the same.
            </p>

            {/* Category chips — frosted glass */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/about"
                className="px-8 py-3.5 bg-white text-brand-pink-deep font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-brand-pink/10 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-pink-deep text-center"
              >
                Who Am I?
              </Link>
              <Link
                href="/work-with-me"
                className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-brand-pink-deep transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-pink-deep text-center"
              >
                Work With Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ─── Variant B — Split (image left, text right) ───────────────────────────────

function HeroSplit() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[80vh] overflow-hidden">
      {/* Image — full width on mobile, left half on desktop */}
      <div className="relative w-full h-[55vh] lg:h-auto lg:w-1/2 flex-shrink-0">
        <Image
          src={HERO_IMAGE_PATH}
          alt="Isabella Lamanna, Canadian lifestyle and wellness content creator"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text — right half */}
      <div className="lg:w-1/2 bg-gradient-to-br from-brand-pink/10 via-brand-pink/5 to-white flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <h1 className="font-outfit text-5xl sm:text-6xl font-bold text-gray-900 mb-5 leading-tight">
            {CREATOR.name}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            I&apos;m passionate about living life to the fullest, finding the fun in the chaos, and
            encouraging you to do the same.
          </p>

          {/* Category chips — light */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 bg-brand-pink/15 text-brand-pink-deep text-sm font-medium rounded-full border border-brand-pink/30"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/about"
              className="px-8 py-3.5 bg-gradient-to-r from-brand-pink to-brand-pink-deep text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 text-center"
            >
              Who Am I?
            </Link>
            <Link
              href="/work-with-me"
              className="px-8 py-3.5 bg-white border-2 border-brand-pink/30 text-brand-pink-deep font-semibold rounded-2xl hover:border-brand-pink hover:bg-brand-pink/5 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 text-center"
            >
              Work With Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Variant C — Card (original two-column layout) ────────────────────────────

function HeroCard() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-pink/10 via-brand-pink/5 to-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink-deep/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="font-outfit text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {CREATOR.name}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I&apos;m passionate about living life to the fullest, finding the fun in the chaos, and
              encouraging you to do the same.
            </p>

            {/* Category chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 bg-brand-pink/15 text-brand-pink-deep text-sm font-medium rounded-full border border-brand-pink/30"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Link
                href="/about"
                className="px-8 py-3.5 bg-gradient-to-r from-brand-pink to-brand-pink-deep text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2"
              >
                Who Am I?
              </Link>
              <Link
                href="/work-with-me"
                className="px-8 py-3.5 bg-white border-2 border-brand-pink/30 text-brand-pink-deep font-semibold rounded-2xl hover:border-brand-pink hover:bg-brand-pink/5 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2"
              >
                Work With Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-brand-pink/20">
              <Image
                src={HERO_IMAGE_PATH}
                alt="Isabella Lamanna, Canadian lifestyle and wellness content creator"
                fill
                priority
                quality={100}
                className="object-cover object-top"
                sizes="(max-width: 1024px) 384px, 480px"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function Hero() {
  if (HERO_VARIANT === "fullbleed") return <HeroFullBleed />;
  if (HERO_VARIANT === "split") return <HeroSplit />;
  return <HeroCard />;
}
