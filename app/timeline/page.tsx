"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageModal } from "@/components/image-modal";

// ─── Data ─────────────────────────────────────────────────────────────────────

/** The 6 sections that live inside the alternating timeline */
const timelineSections = [
  {
    era: "Pre-COVID",
    title: "Just for Fun",
    description:
      "I first started posting back in the Musical.ly days purely for fun. Content creation was never about views or numbers; it was about creativity, connection, and enjoying life in the moment.",
    alt: "Isabella in her early Musical.ly days, posting just for fun",
    images: ["/images/timeline/precovid.png"],
  },
  {
    era: "2020",
    title: "TikTok, Community & COVID",
    description:
      "When the COVID-19 pandemic began, I started posting publicly on TikTok as something fun to do while the world felt paused. Some of my videos randomly went viral, so I just… kept going.\n\nI shared TikTok dances and videos about what it's like living with dwarfism, meeting new people and making friends along the way.",
    alt: "Isabella creating TikTok content during the early pandemic",
    images: [
      "/images/timeline/tiktok50.png",
      "/images/timeline/tiktok9.png",
      "/images/timeline/tiktok27.png",
      "/images/timeline/tiktok61.png",
    ],
  },
  {
    era: "2021",
    title: "School Comes First",
    description:
      "In 2021, I began my undergraduate degree and naturally slowed down my posting. University became my main focus, and content creation was something I continued for fun, without pressure.",
    alt: "Isabella starting her undergraduate degree at the University of Guelph",
    images: [
      "/images/timeline/school10.jpg",
      "/images/timeline/school39.jpg",
      "/images/timeline/school74.jpg",
      "/images/timeline/school77.jpg",
    ],
  },
  {
    era: "2022–2025",
    title: "Growth Beyond the Screen",
    description:
      "From 2022 to 2025, I stepped away from social media to focus on myself, my friends, and my family. I was figuring out who I was, where I wanted to go, and what truly mattered to me. Through some tough moments, I learned how to love myself and realized that life doesn't need to be perfect to be meaningful.",
    alt: "Isabella stepping back from social media to focus on family and friends",
    images: [
      "/images/timeline/growth12.jpg",
      "/images/timeline/growth34.jpg",
      "/images/timeline/growth42.jpg",
      "/images/timeline/growth59.jpg",
    ],
  },
  {
    era: "Summer 2025",
    title: "Coming Back With Purpose",
    description:
      "In the spring of 2025, I returned to posting with a fresh mindset and began sharing my TikToks as Reels on Instagram and Facebook. I realized that I have a platform, not for numbers, but for connection. I wanted to take advantage and use it to spread kindness, encourage people to chase opportunities, and remind others (especially those of us in our 20s) to enjoy the journey, even when things feel uncertain.",
    alt: "Isabella returning to content creation with renewed purpose",
    images: [
      "/images/timeline/comingback6.jpg",
      "/images/timeline/comingback7.jpg",
      "/images/timeline/comingback17.jpg",
      "/images/timeline/comingback23.jpg",
      "/images/timeline/comingback.jpg",
      "/images/timeline/comingback33.png",
      "/images/timeline/comingback49.jpg",
      "/images/timeline/comingback58.jpg",
      "/images/timeline/comingback69.jpg",
      "/images/timeline/comingback71.jpg",
      "/images/timeline/comingback73.jpg",
    ],
  },
  {
    era: "2026",
    title: "Fun, Real & Purposeful",
    description:
      "This year, I hope to continue to take advantage of new opportunities, make even more friends, travel around the world, gain new skills, and document the memories I make along the way.",
    alt: "Isabella documenting new adventures and travel memories",
    images: [
      "/images/timeline/fun26.jpg",
      "/images/timeline/fun28.jpg",
      "/images/timeline/fun51.jpg",
      "/images/timeline/fun63.jpg",
    ],
  },
];

/** Beyond Social Media — rendered as a full-width section below the timeline.
 *  Each group renders its paragraph followed by its own image grid, so school
 *  photos sit visually with the school/psychology paragraph. */
const beyondSection = {
  title: "Beyond Social Media",
  groups: [
    {
      paragraph: (
        <>
          I&apos;m currently completing my undergraduate degree in Psychology and Neuroscience at the University of Guelph,
          with the long-term goal of pursuing a master&apos;s degree and becoming a child psychologist or therapist.
          Supporting children and adolescents through life&apos;s stresses and challenges is something I&apos;m deeply
          passionate about, and it strongly influences how I show up online, with empathy, honesty, and encouragement.
          In recent years, I have also worked with children of all ages and abilities, as an after-school program
          coordinator, a day camp instructor and an overnight camp counsellor. All of these experiences have shaped me
          into who I am today.
        </>
      ),
      alt: "Isabella at the University of Guelph and working with children",
      images: [
        "/images/timeline/school32.png",
        "/images/timeline/beyond15.png",
        "/images/timeline/beyond63.png",
      ],
    },
    {
      paragraph: (
        <>
          In 2021, I founded <strong className="font-semibold text-gray-900">The Little Kindness Project</strong>, an
          organization created to support and advocate for children with dwarfism. I initially mentored young children
          with dwarfism, offering guidance, support, and a safe space to feel understood by someone who had lived similar
          experiences. Through this experience, I realized that while mentorship made a difference, the root of the issue
          often came from a lack of education, especially in school environments. Many instances of bullying stemmed from
          misunderstanding rather than maliciousness. That realization led me to shift my focus toward education in a fun,
          engaging, and approachable way. I created an educational PowerPoint presentation filled with photos and videos
          to teach youth across Ontario about dwarfism, encouraging curiosity, understanding, and kindness rather than
          judgment. The project has been an incredible success so far, and I&apos;m excited to continue growing it and
          spreading a little kindness in our world. I have also been volunteering for my little people organizations in
          Ontario forever now, and bonding with the children, while meeting lots of new people, is the reason I keep going
          back. It brings a sense of community :)
        </>
      ),
      alt: "Isabella with children and youth at Little Kindness Project events",
      images: [
        "/images/timeline/beyond4.png",
        "/images/timeline/beyond13.png",
        "/images/timeline/beyond14.jpg",
        "/images/timeline/beyond32.jpg",
        "/images/timeline/beyond8.jpg",
        "/images/timeline/beyond38.jpg",
        "/images/timeline/beyond57.jpg",
        "/images/timeline/beyond62.png",
        "/images/timeline/beyond67.jpg",
        "/images/timeline/beyond75.jpg",
        "/images/timeline/beyond78.jpg",
      ],
    },
  ],
};

/** What This Is Really About — closing full-width section */
const reallyAboutSection = {
  title: "What This Is Really About",
  paragraphs: [
    "This platform will always be about fun, connection, and living life to the fullest. It's about making new friends, saying yes to new experiences, laughing through the hard days, and reminding people that they're perfect just the way they are. Life isn't always sunshine and rainbows, and that's okay. What matters is getting back up, doing your best on both good and bad days, and knowing that everything will work out.",
    "Thank you for supporting and joining me on my journey 🤍",
  ],
  alt: "Isabella enjoying life and celebrating with friends and family",
  images: [
    "/images/timeline/reallyabout57.jpg",
    "/images/timeline/reallyabout67.jpg",
    "/images/timeline/reallyabout35.jpg",
    "/images/timeline/reallyabout34.png",
    "/images/timeline/reallyabout55.jpg",
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const slideIn = (side: "left" | "right", delay = 0) => ({
  initial: { opacity: 0, x: side === "left" ? -28 : 28 },
  whileInView: { opacity: 1, x: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Responsive image grid with click-to-open modal support */
function ImageGrid({
  images,
  alt,
  animDelay = 0,
  onImageClick,
}: {
  images: string[];
  alt: string;
  animDelay?: number;
  onImageClick: (index: number) => void;
}) {
  if (images.length === 0) return null;

  return (
    <motion.div
      {...fadeUp(animDelay + 0.1)}
      className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
    >
      {images.map((src, i) => (
        <motion.button
          key={src}
          type="button"
          onClick={() => onImageClick(i)}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: animDelay + 0.12 + i * 0.04 }}
          className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm bg-brand-pink/10 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-1"
          aria-label={`View image ${i + 1}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-brand-pink-deep/0 group-hover:bg-brand-pink-deep/10 transition-colors duration-300 rounded-2xl" />
          {/* Zoom hint on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm text-brand-pink-deep text-lg">
              ⤢
            </span>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}

/** Timeline card: era badge, title, divider, text, image grid */
function SectionCard({
  section,
  animDelay,
  onImageClick,
}: {
  section: (typeof timelineSections)[number];
  animDelay: number;
  onImageClick: (index: number) => void;
}) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-brand-pink/30 hover:shadow-md transition-all duration-300 p-6 sm:p-8">
      <span className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink-deep text-xs font-semibold rounded-full border border-brand-pink/20 mb-3">
        {section.era}
      </span>
      <h3 className="font-outfit text-xl sm:text-2xl font-bold text-gray-900 mb-3">
        {section.title}
      </h3>
      <div className="w-8 h-0.5 bg-brand-pink rounded-full mb-4" />
      <div className="space-y-3">
        {section.description.split("\n\n").map((para, i) => (
          <p key={i} className="text-gray-500 text-sm leading-relaxed">
            {para}
          </p>
        ))}
      </div>
      <ImageGrid
        images={section.images}
        alt={section.alt}
        animDelay={animDelay}
        onImageClick={onImageClick}
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TimelinePage() {
  // ── Modal state ────────────────────────────────────────────────────────────
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalAlt, setModalAlt] = useState<string>("");
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (images: string[], alt: string, index: number) => {
    setModalImages(images);
    setModalAlt(alt);
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-pink/10 via-brand-pink/5 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-outfit text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              My Story so Far
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Alternating Timeline ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative">

            {/* Center line */}
            <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-brand-pink via-brand-pink-deep to-brand-pink left-5 lg:left-1/2 lg:-translate-x-px" />

            <div className="space-y-16">
              {timelineSections.map((section, i) => {
                const isLeft = i % 2 === 0;
                const animDelay = i * 0.06;
                const handleClick = (index: number) => openModal(section.images, section.alt, index);

                return (
                  <div
                    key={`${section.era}-${section.title}`}
                    className="relative grid grid-cols-[2.5rem_1fr] lg:grid-cols-[1fr_5rem_1fr] items-start"
                  >
                    {/* LEFT col — desktop even sections */}
                    <div className="hidden lg:flex justify-end pr-8">
                      {isLeft && (
                        <motion.div {...slideIn("left", animDelay)} className="w-full">
                          <SectionCard
                            section={section}
                            animDelay={animDelay}
                            onImageClick={handleClick}
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Dot */}
                    <div className="relative flex justify-center pt-8 lg:pt-9">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: animDelay + 0.15 }}
                        className="relative z-10 w-5 h-5 rounded-full bg-white border-[3px] border-brand-pink shadow-sm shadow-brand-pink/30 shrink-0"
                      >
                        <span className="absolute inset-0 rounded-full bg-brand-pink/20 animate-ping" />
                      </motion.div>
                    </div>

                    {/* RIGHT col — always mobile, desktop odd sections */}
                    <div className="pl-5 lg:pl-8">
                      {/* Mobile */}
                      <motion.div
                        {...slideIn("right", animDelay)}
                        className="lg:hidden"
                      >
                        <SectionCard
                          section={section}
                          animDelay={animDelay}
                          onImageClick={handleClick}
                        />
                      </motion.div>
                      {/* Desktop odd */}
                      {!isLeft && (
                        <motion.div
                          {...slideIn("right", animDelay)}
                          className="hidden lg:block w-full"
                        >
                          <SectionCard
                            section={section}
                            animDelay={animDelay}
                            onImageClick={handleClick}
                          />
                        </motion.div>
                      )}
                      {/* Desktop spacer for even sections */}
                      {isLeft && <div className="hidden lg:block" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* End cap sparkle */}
            <motion.div
              {...fadeUp(0.3)}
              className="relative flex justify-start lg:justify-center mt-14 ml-[0.625rem] lg:ml-0"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-pink to-brand-pink-deep flex items-center justify-center shadow-md shadow-brand-pink/30 z-10">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Beyond Social Media (full-width) ────────────────────────────── */}
      <section className="bg-brand-pink/5 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <span className="inline-block px-3 py-1 bg-white text-brand-pink-deep text-xs font-semibold rounded-full border border-brand-pink/20 mb-4">
              Always
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {beyondSection.title}
            </h2>
            <div className="w-10 h-0.5 bg-brand-pink rounded-full mb-6" />
          </motion.div>

          <div className="space-y-12">
            {beyondSection.groups.map((group, i) => (
              <div key={i}>
                <motion.p
                  {...fadeUp(0.05 + i * 0.05)}
                  className="text-gray-600 text-base leading-relaxed mb-6"
                >
                  {group.paragraph}
                </motion.p>
                <ImageGrid
                  images={group.images}
                  alt={group.alt}
                  animDelay={0.1 + i * 0.05}
                  onImageClick={(index) => openModal(group.images, group.alt, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What This Is Really About (full-width closing) ───────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp()} className="mb-10">
            <span className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink-deep text-xs font-semibold rounded-full border border-brand-pink/20 mb-4">
              Always
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {reallyAboutSection.title}
            </h2>
            <div className="w-10 h-0.5 bg-brand-pink rounded-full mb-6" />
            <div className="space-y-5">
              {reallyAboutSection.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-600 text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          <ImageGrid
            images={reallyAboutSection.images}
            alt={reallyAboutSection.alt}
            animDelay={0.1}
            onImageClick={(index) => openModal(reallyAboutSection.images, reallyAboutSection.alt, index)}
          />
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-pink to-brand-pink-deep py-24 px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="max-w-2xl mx-auto text-center">
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-white mb-5">
            Be Part of the Journey
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-10">
            I&apos;m always excited to meet new people, work with brands, and create meaningful
            content and experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work-with-me"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-pink-deep font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-brand-pink/5 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-pink-deep"
            >
              Work With Me
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-2xl border border-white/30 hover:border-white/50 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-pink-deep"
            >
              Contact
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Image Modal ──────────────────────────────────────────────────── */}
      <ImageModal
        images={modalImages}
        alt={modalAlt}
        initialIndex={modalIndex}
        isOpen={modalOpen}
        onClose={closeModal}
      />

    </div>
  );
}
