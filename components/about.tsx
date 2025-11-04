"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I&apos;m Izzy — a UofG student and lifestyle creator sharing everyday adventures, 
            wellness routines, and moments that make life brighter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

