"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery10.jpg",
  "/gallery11.jpg",
  "/gallery12.jpg",
  "/gallery13.jpg",
  "/gallery14.jpg",
  "/gallery15.jpg",
  "/gallery16.jpg",
  "/gallery17.jpg",
  "/gallery18.jpg",
  "/gallery19.jpg",
  "/gallery20.jpg",
  "/gallery21.jpg",
];

const getAspectClass = (src: string) => {
  if (
    [
      "/gallery1.jpg",
      "/gallery2.jpg",
      "/gallery5.jpg",
      "/gallery6.jpg",
      "/gallery7.jpg",
      "/gallery8.jpg",
    ].includes(src)
  ) {
    return "aspect-square";
  }
  if (["/gallery19.jpg", "/gallery20.jpg", "/gallery21.jpg"].includes(src)) {
    return "aspect-[3/5]";
  }
  return "aspect-[3/4]";
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

function Modal({
  open,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  open: boolean;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-60">
      <button
        className="absolute top-4 right-4 text-white text-3xl z-10"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Arrows hidden on small screens */}
      <button
        className="absolute left-4 text-white text-4xl hidden md:block z-10"
        onClick={onPrev}
      >
        &#8592;
      </button>

      <motion.div
        className="max-w-[90%] max-h-[80vh]"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -100) onNext();
          else if (info.offset.x > 100) onPrev();
        }}
      >
        <Image
          src={images[index]}
          alt={`Zoomed ${index}`}
          width={1200}
          height={1200}
          className="object-contain max-h-[80vh]"
        />
      </motion.div>

      <button
        className="absolute right-4 text-white text-4xl hidden md:block z-10"
        onClick={onNext}
      >
        &#8594;
      </button>
    </div>
  );
}

const GalleryCard = ({
  src,
  alt,
  delay,
  onZoom,
}: {
  src: string;
  alt: string;
  delay: number;
  onZoom: () => void;
}) => {
  const aspectClass = getAspectClass(src);

  return (
    <motion.div
      className="relative group overflow-hidden shadow-lg"
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      transition={{ ...fadeIn.transition, delay }}
      viewport={{ once: true }}
    >
      <div className={`relative ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#003269]/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition duration-700">
        <span className="text-lg sm:text-xl font-semibold mb-4 font-inter">
          SAS Roofing
        </span>
        <button
          className="w-10 h-10 bg-transparent border border-white flex items-center justify-center hover:bg-[#e63a27] hover:border-[#e63a27] transition-colors"
          onClick={onZoom}
        >
          <Image src="/search.png" alt="Zoom" width={20} height={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default function GallerySection2() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const closeModal = () => setSelectedIndex(null);
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <GalleryCard
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            delay={idx * 0.05}
            onZoom={() => setSelectedIndex(idx)}
          />
        ))}
      </div>

      <Modal
        open={selectedIndex !== null}
        index={selectedIndex ?? 0}
        onClose={closeModal}
        onNext={showNext}
        onPrev={showPrev}
      />
    </section>
  );
}
