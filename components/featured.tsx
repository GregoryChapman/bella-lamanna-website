"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/lib/icons";

export function Featured() {
  return (
    <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Posts
          </h2>
          <p className="text-lg text-gray-600">
            Check out some of my latest adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CREATOR.featured.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-outfit text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.subtitle}</p>
                  <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                    View Post
                    <Icons.ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

