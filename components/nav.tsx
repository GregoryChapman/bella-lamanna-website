"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CREATOR } from "@/config/creator";

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 42.7l-2.9-2.64C10.8 30.72 4 24.56 4 17 4 10.84 8.84 6 15 6c3.48 0 6.82 1.62 9 4.18C26.18 7.62 29.52 6 33 6c6.16 0 11 4.84 11 11 0 7.56-6.8 13.72-17.1 23.08L24 42.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Who am I?" },
    { href: "/work-with-me", label: "Work With Me" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/timeline", label: "My Story" },
    { href: "/contact", label: "Contact" },
    { href: "/links", label: "Links" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-outfit text-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label={CREATOR.name}
          >
            <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-pink-deep shrink-0" />
            <span className="bg-gradient-to-r from-brand-pink to-brand-pink-deep bg-clip-text text-transparent">
              {CREATOR.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-colors ${
                    isActive ? "text-brand-pink-deep font-semibold" : "text-gray-600 hover:text-brand-pink-deep"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-pink to-brand-pink-deep"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-brand-pink-deep transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 rounded"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-gray-100">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-medium transition-colors ${
                        isActive ? "text-brand-pink-deep font-semibold" : "text-gray-600 hover:text-brand-pink-deep"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
