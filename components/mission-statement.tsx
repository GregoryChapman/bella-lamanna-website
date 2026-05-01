"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";

export function MissionStatement() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-pink/10 via-white to-brand-pink-deep/10 rounded-2xl p-8 sm:p-12 border border-gray-100 shadow-sm"
        >
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            My Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
            {CREATOR.mission}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
