"use client";

import ServicesSlider from "@/components/ServicesSlider";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import Link from "next/link";


type Props = {
  margin: number[];
};

export default function OurServicesPage({ margin }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main
      className={`
        mb-${margin[1]} md:mb-${margin[1]} shadow-2xl
        px-4 sm:px-6 lg:px-12 pt-10 pb-12 sm:pb-16 lg:pb-20 bg-[#f9f9f9] relative`}
    >
      <div className="mx-auto space-y-12">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-around items-center text-center md:text-left gap-8 md:gap-4"
        >
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              {" "}
              {/* Center on small screens */}
              <div className="w-6 h-px bg-[#e63a27]" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-[#e63a27] uppercase font-inter">
                Our Services
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003269] leading-snug font-inter">
              Best Selling Products
            </h1>
          </div>

          <Link
            href="/"
            className="group border-4 border-[#003269] p-2 inline-block flex-shrink-0"
          >
            <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button font-inter">
              All Services
            </div>
          </Link>
        </motion.section>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <ServicesSlider swiperRef={swiperRef} />
        </motion.div>
      </div>
    </main>
  );
}
