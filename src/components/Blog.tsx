"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

const BlogSlider = dynamic(() => import("@/components/BlogSlider"), {
  ssr: false,
});

export default function Blog() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="mx-2 md:m-0 shadow-xl">
      <section className="pb-15 pt-5 px-4 sm:px-6 bg-[#f9f9f9]">
        <motion.div
          className="max-w-screen-xl mx-auto text-center font-inter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-6 h-[1px] bg-[#e63a27]" />
              <span className="text-sm font-bold text-[#e63a27] uppercase tracking-widest">
                News & Updates
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003269]">
              Latest From Blog Post
            </h2>
          </header>

          {/* Blog Slider */}
          <BlogSlider swiperRef={swiperRef} />
        </motion.div>
      </section>
    </div>
  );
}
