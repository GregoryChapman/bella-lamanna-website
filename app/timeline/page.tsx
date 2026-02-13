"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-outfit text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Story So Far...
          </h1>
          <p className="text-lg text-gray-600">
            A look back at the milestones that have shaped my journey as a creator.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-fuchsia-500" />

          <div className="space-y-12">
            {CREATOR.timeline.map((entry, index) => (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Dot on the timeline */}
                <div className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full bg-white border-2 border-sky-400" />

                <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {entry.year}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {entry.description}
                </p>

                {index < CREATOR.timeline.length - 1 && (
                  <div className="mt-12 border-b border-gray-100" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
