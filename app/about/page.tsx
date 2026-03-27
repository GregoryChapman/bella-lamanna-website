"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageModal } from "@/components/image-modal";

// ─── Image data ───────────────────────────────────────────────────────────────

const aboutmeImages = [
  "/images/about/aboutme20.jpg",
  "/images/about/aboutme25.png",
  "/images/about/aboutme37.png",
  "/images/about/aboutme44.jpg",
  "/images/about/aboutme54.jpg",
  "/images/about/aboutme55.jpg",
  "/images/about/aboutme68.jpg",
];

const capturingMemoriesImages = [
  "/images/about/capturingmemories11.png",
  "/images/about/capturingmemories40.png",
  "/images/about/capturingmemories46.png",
  "/images/about/capturingmemories70.png",
];

const realityImages = [
  "/images/about/reality3.jpg",
  "/images/about/reality16.jpg",
  "/images/about/reality24.jpg",
  "/images/about/reality53.jpg",
  "/images/about/reality76.jpg",
];

const perspectiveImages = [
  "/images/about/perspective2.png",
  "/images/about/perspective21.jpg",
  "/images/about/perspective52.jpg",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// ─── Clickable image grid ──────────────────────────────────────────────────────

function ImageGrid({
  images,
  colsClass,
  aspectClass,
  sizes,
  onImageClick,
}: {
  images: string[];
  colsClass: string;
  aspectClass: string;
  sizes: string;
  onImageClick: (index: number) => void;
}) {
  return (
    <div className={`grid ${colsClass} gap-3 sm:gap-4`}>
      {images.map((src, i) => (
        <motion.button
          key={src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          onClick={() => onImageClick(i)}
          className={`relative ${aspectClass} rounded-2xl overflow-hidden shadow-md cursor-pointer group focus:outline-none focus:ring-2 focus:ring-pink-400`}
          aria-label={`View photo ${i + 1} of ${images.length}`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={sizes}
          />
          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </motion.button>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  // Single modal state — stores whichever image group is active
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback((images: string[], index: number) => {
    setModalImages(images);
    setModalIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Modal (shared across all grids) ── */}
      <ImageModal
        images={modalImages}
        initialIndex={modalIndex}
        isOpen={modalOpen}
        onClose={closeModal}
      />

      {/* 1. Hero Banner */}
      <div className="relative h-[50vh] sm:h-[55vh] w-full overflow-hidden">
        <Image
          src="/images/timeline/growth72.jpg"
          alt="Isabella Lamanna"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/40 via-transparent to-white/90" />
        <div className="absolute bottom-0 left-0 right-0 pb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            Who am I?
          </motion.h1>
        </div>
      </div>

      {/* 2. Intro paragraph — no subheading */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <motion.p
          {...fadeUp}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
        >
          I&apos;m Isabella, a girl who loves her amazing friends, huge family, good food,
          great company, travelling around the world, and making every day fun. You&apos;ll
          usually find me at a cafe doing school work with my friends, out on the town
          enjoying a Shirley Temple, or venturing around the city on a million side quests
          at once. If you ask my friends, they&apos;d tell you that I am always busy doing
          something, and also somehow everywhere at once. I share these everyday moments
          with people in hopes of making them smile and laugh.
        </motion.p>
      </section>

      {/* 3. Aboutme image grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ImageGrid
            images={aboutmeImages}
            colsClass="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            aspectClass="aspect-[3/4]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onImageClick={(i) => openModal(aboutmeImages, i)}
          />
        </div>
      </section>

      {/* 4 & 5. Capturing Memories */}
      <section className="bg-pink-50/60 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12">
            <motion.h2
              {...fadeUp}
              className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-5"
            >
              Capturing Memories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Ever since I was young, I would take my mum&apos;s video camera and record
              myself dancing, singing, or playing with my dolls. As I got older, I started
              to make music videos on Video Star with my friends and film vlogs on my family
              vacations. Let&apos;s just say, I have always had a passion for videography
              and editing. Now, I film get-ready-with-me videos, try-on hauls, Sunday
              resets, cooking videos, and bring my audience along for a day in my life.
            </motion.p>
          </div>
          <ImageGrid
            images={capturingMemoriesImages}
            colsClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            aspectClass="aspect-[4/3]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onImageClick={(i) => openModal(capturingMemoriesImages, i)}
          />
        </div>
      </section>

      {/* 6 & 7. Reality */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12">
            <motion.h2
              {...fadeUp}
              className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-5"
            >
              Reality
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              It&apos;s very easy to share achievements and good times with people; it&apos;s
              what glamorizes social media. I believe in showing up as myself; no filters,
              no pretending, no editing out the &lsquo;bad&rsquo; parts. Whether it&apos;s
              a good day or a hard one, I share honestly because I think that&apos;s what
              builds real connection. Life doesn&apos;t have to look a certain way to be
              meaningful or fulfilling, and sometimes, things don&apos;t always go as
              planned. I want to use my platforms to encourage people to keep going, even
              on tough days, reminding them that it&apos;s okay to slow down, reset, and
              start again, but never to give up.
            </motion.p>
          </div>
          <ImageGrid
            images={realityImages}
            colsClass="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            aspectClass="aspect-[3/4]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            onImageClick={(i) => openModal(realityImages, i)}
          />
        </div>
      </section>

      {/* 8 & 9. Life from a Different Perspective */}
      <section className="bg-pink-50/60 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12">
            <motion.h2
              {...fadeUp}
              className="font-outfit text-3xl sm:text-4xl font-bold text-gray-900 mb-5"
            >
              Life from a Different Perspective
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              As a little person living in a world built for average-height people, I bring
              a unique perspective to everyday life. This may come as a surprise to some,
              but I was a very shy kid, very insecure, and afraid of what people thought
              about me. Since then, I accepted that every time I go out, I will get stared
              at, pointed at, laughed at, and even taken pictures of just for being small.
              Don&apos;t get me wrong, it is easier to deal with some days than others, but
              I can&apos;t let other people affect how I live my life. I want to represent
              other little people, raise awareness in a fun way, and create a space where
              others can feel encouraged to be themselves. Being different is nothing to
              hide but everything to embrace. At the end of the day, I am the same as
              everyone else, just a little smaller. I can still do everything that an
              average-height person can, just maybe with some modifications or help from
              others. I am very fortunate to have a support system that has pulled me out
              of my shell and encouraged me to be confident in myself. Now I want to be
              that person for others. I aim to create a space that feels welcoming, honest,
              and uplifting.
            </motion.p>
          </div>
          <ImageGrid
            images={perspectiveImages}
            colsClass="grid-cols-1 sm:grid-cols-3"
            aspectClass="aspect-[3/4]"
            sizes="(max-width: 640px) 100vw, 33vw"
            onImageClick={(i) => openModal(perspectiveImages, i)}
          />
        </div>
      </section>
    </div>
  );
}
