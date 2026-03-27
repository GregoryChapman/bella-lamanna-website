"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";
import { Icons } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";

const categories = ["lifestyle", "wellness", "student life", "inclusivity"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-rose-50/40 to-white overflow-hidden">
      {/* Subtle decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text — right on mobile stack, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Location badge */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-pink-500 mb-5">
              <Icons.MapPin className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">{CREATOR.location}</span>
            </div>

            <h1 className="font-outfit text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {CREATOR.name}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I&apos;m passionate about living life fully, finding the fun in the chaos, and encouraging you to do the same.
            </p>

            {/* Category chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 bg-pink-100 text-pink-700 text-sm font-medium rounded-full border border-pink-200"
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
                className="px-8 py-3.5 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              >
                Who am I?
              </Link>
              <Link
                href="/work-with-me"
                className="px-8 py-3.5 bg-white border-2 border-pink-200 text-pink-700 font-semibold rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              >
                Work With Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Image — top on mobile stack, right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 lg:w-full max-w-md xl:max-w-lg aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-pink-100">
              <Image
                src={CREATOR.heroImage}
                alt={CREATOR.name}
                fill
                priority
                quality={100}
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 480px"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
