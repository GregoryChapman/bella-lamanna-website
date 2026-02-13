"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";

const sections = [
  {
    title: "Lifestyle Creator",
    content:
      "I'm Isabella — a University of Guelph student and lifestyle content creator based in Ontario, Canada. I share everyday moments, from campus life and wellness routines to travel adventures and the little things that make each day brighter. My content is rooted in authenticity and a love for connecting with people.",
  },
  {
    title: "Real Life & Honesty",
    content:
      "I believe in showing up as my real self — no filters, no pretending. Whether it's a good day or a hard one, I share honestly because I think that's what builds real connection. My community means everything to me, and I want them to feel like they're getting the real me every single time.",
  },
  {
    title: "Perspective as a Little Person",
    content:
      "As a little person, I bring a unique perspective to everything I create. I talk openly about my experiences because I believe representation matters. My content is a space where people can see themselves reflected, feel encouraged, and know that being different is something to celebrate — not hide.",
  },
  {
    title: "A Welcoming Space",
    content:
      "Above all, I want my platform to feel like a welcoming, inclusive space. Whether you're here for lifestyle tips, a good laugh, or just to feel seen — you're welcome here. I create content for everyone, and I hope it makes your day a little bit better.",
  },
];

export default function AboutPage() {
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
            More Than Just Content
          </h1>
          <p className="text-lg text-gray-600">
            Get to know the person behind the camera.
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="font-outfit text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {section.content}
              </p>
              {index < sections.length - 1 && (
                <div className="mt-12 border-b border-gray-100" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
