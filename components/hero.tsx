"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";
import { Icons } from "@/lib/icons";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${CREATOR.heroImage})`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Hey, it&apos;s Izzy!
          </h1>
          <p className="font-outfit text-xl sm:text-2xl text-gray-700 mb-6">
            {CREATOR.tagline}
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
            <Icons.MapPin className="w-5 h-5" />
            <span>{CREATOR.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-sky-400 to-fuchsia-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            Work With Me
          </Link>
          <Link
            href={CREATOR.socials[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-sky-400 hover:text-sky-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            Watch Latest
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

