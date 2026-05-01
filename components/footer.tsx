"use client";

import { CREATOR } from "@/config/creator";
import { Icons, IconName } from "@/lib/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-outfit text-lg font-semibold text-white mb-1">
              &copy; {CREATOR.name}
            </p>
            <p className="text-sm text-gray-400 mb-1">
              {CREATOR.title}
            </p>
            <p className="text-sm text-gray-400 mb-2">
              {CREATOR.tagline}
            </p>
            <p className="text-sm">
              <Icons.Mail className="w-4 h-4 inline-block mr-1" aria-hidden="true" />
              <a
                href={`mailto:${CREATOR.email}`}
                className="text-brand-pink hover:text-brand-pink-deep transition-colors"
              >
                {CREATOR.email}
              </a>
            </p>
          </div>

          <div className="flex space-x-6">
            {CREATOR.socials.map((social) => {
              const Icon = Icons[social.icon as IconName];
              if (!Icon) return null;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            Built by{" "}
            <a
              href="https://chapmandigitalservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-pink hover:text-brand-pink-deep transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            >
              Chapman Digital Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
