"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";
import { Icons, IconName } from "@/lib/icons";
import Link from "next/link";
import Image from "next/image";

export function LinkHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-fuchsia-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              alt={CREATOR.name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>

          <h1 className="font-outfit text-3xl font-bold text-gray-900 mb-2">
            {CREATOR.name}
          </h1>
          <p className="text-gray-600 mb-2">{CREATOR.handle}</p>
          <p className="text-sm text-gray-500">{CREATOR.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {CREATOR.socials.map((social, index) => {
            const Icon = Icons[social.icon as IconName];
            if (!Icon) return null;

            return (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center justify-between w-full px-6 py-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">{social.label}</span>
                  </div>
                  <Icons.ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

