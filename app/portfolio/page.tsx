"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";
import Link from "next/link";

export default function PortfolioPage() {
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
            Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            A selection of my content and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CREATOR.portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Video / Thumbnail Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-sky-100 to-fuchsia-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">
                  Video Coming Soon
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-outfit text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.caption}</p>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors"
                  >
                    Watch Now &rarr;
                  </Link>
                ) : (
                  <span className="text-gray-400 text-sm">Link coming soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
