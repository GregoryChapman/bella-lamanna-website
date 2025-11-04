"use client";

import { motion } from "framer-motion";
import { CREATOR } from "@/config/creator";
import { Icons } from "@/lib/icons";
import Link from "next/link";

export default function MediaKitPage() {
  const handleDownloadPDF = async () => {
    try {
      const response = await fetch("/api/media-kit-pdf");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${CREATOR.name}-Media-Kit.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        throw new Error("Failed to generate PDF");
      }
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("PDF generation is coming soon! Please contact via email for now.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-fuchsia-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-outfit text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            {CREATOR.name}
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-fuchsia-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-700">Verified Creator</span>
            <Icons.Check className="w-4 h-4 text-sky-600" />
          </div>
          <p className="text-xl text-gray-600 mb-8">{CREATOR.bio}</p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <div className="text-center">
              <div className="font-outfit text-3xl font-bold bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
                {CREATOR.tiktokFollowers}
              </div>
              <div className="text-sm text-gray-600">TikTok Followers</div>
            </div>
            <div className="text-center">
              <div className="font-outfit text-3xl font-bold bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
                {CREATOR.instagramFollowers}
              </div>
              <div className="text-sm text-gray-600">Instagram Followers</div>
            </div>
            <div className="text-center">
              <div className="font-outfit text-3xl font-bold bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
                {CREATOR.following}
              </div>
              <div className="text-sm text-gray-600">Following</div>
            </div>
          </div>

          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-400 to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            <Icons.Download className="w-5 h-5" />
            Download Media Kit PDF
          </button>
        </motion.div>

        {/* Audience Snapshot */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
        >
          <h2 className="font-outfit text-3xl font-bold text-gray-900 mb-6">
            Audience Snapshot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Demographics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Primarily 18-34 age range</li>
                <li>• Lifestyle & wellness enthusiasts</li>
                <li>• Travel and adventure seekers</li>
                <li>• University students and young professionals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Engagement</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• High engagement rates on lifestyle content</li>
                <li>• Strong community interaction</li>
                <li>• Authentic, relatable content style</li>
                <li>• Active in wellness and travel spaces</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Collaboration Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
        >
          <h2 className="font-outfit text-3xl font-bold text-gray-900 mb-6">
            Collaboration Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100">
              <h3 className="font-semibold text-gray-900 mb-2">UGC</h3>
              <p className="text-gray-600 text-sm">
                User-generated content for your brand with authentic storytelling
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-fuchsia-50 to-white rounded-xl border border-fuchsia-100">
              <h3 className="font-semibold text-gray-900 mb-2">Partnerships</h3>
              <p className="text-gray-600 text-sm">
                Long-term brand partnerships and sponsored content collaborations
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-2">Travel</h3>
              <p className="text-gray-600 text-sm">
                Destination features, hotel stays, and travel experience content
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          <h2 className="font-outfit text-3xl font-bold text-gray-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-600 mb-6">
            Ready to collaborate? Get in touch to discuss your project.
          </p>
          <Link
            href={`mailto:${CREATOR.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-sky-400 to-fuchsia-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            <Icons.Mail className="w-5 h-5" />
            {CREATOR.email}
          </Link>
        </motion.section>
      </div>
    </div>
  );
}

