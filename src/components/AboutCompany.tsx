"use client";

import React from "react";
import Image from "next/image";
import { FaCertificate, FaLightbulb, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const FeatureItem = ({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
}) => (
  <div className="flex items-center gap-1.5">
    <Icon className={color} aria-label={label} size="1.1em" />
    <span className="font-bold uppercase">{label}</span>
  </div>
);

export default function AboutCompany() {
  return (
    <div className="m-2 mb-5 md:m-0 md:mb-10 shadow-xl">
      <div className="py-12 sm:py-16 lg:py-20 bg-[#f5f5f5] relative">
        <section className="flex flex-col xl:flex-row px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 gap-10 lg:gap-16 max-w-7xl mx-auto">
          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm mx-auto xl:mx-0 md:max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0 xl:self-start aspect-[5/5] shadow-lg rounded-md"
          >
            <div className="relative w-full h-full border-2 border-[#e63a27] rounded-sm overflow-hidden">
              <Image
                src="/aboutimg.jpg"
                alt="SAS Roofing & Waterproofing team working"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-10 bg-white bg-opacity-90 px-4 py-3 rounded-md text-[#003269] shadow-md flex items-center gap-2">
                <span className="text-3xl sm:text-4xl md:text-7xl font-extrabold font-inter">
                  15+
                </span>
                <div className="leading-tight text-left text-base sm:text-xl font-extrabold uppercase font-inter">
                  <div>Years</div>
                  <div>of Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Block */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-center"
          >
            <div>
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-[1px] bg-[#e63a27]" />
                <h4 className="text-sm sm:text-base uppercase text-[#e63a27] font-semibold tracking-wider font-inter">
                  About Company
                </h4>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#003269] leading-tight mb-4 font-inter">
                Roofing Is Our Heritage & Quality Is Our Tradition
              </h1>

              {/* Features */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#003269] mb-6">
                <FeatureItem
                  icon={FaCertificate}
                  label="Certified"
                  color="text-[#e63a27]"
                />
                <FeatureItem
                  icon={FaLightbulb}
                  label="Innovative"
                  color="text-yellow-500"
                />
                <FeatureItem
                  icon={FaHome}
                  label="Experienced"
                  color="text-[#e63a27]"
                />
              </div>

              {/* Description Paragraph */}
              <p className="text-gray-700 text-sm leading-relaxed mb-8 font-bevietnam">
                For over twelve years, SAS Roofing & Waterproofing has proudly
                served Brooklyn, Manhattan, and Queens with top-tier roofing,
                waterproofing, and masonry solutions. Roofing isn’t just our
                job—it’s our legacy. Every roof we install, every leak we seal,
                and every brick we lay reflects our unwavering commitment to
                quality and craftsmanship.
              </p>

              {/* ✅ Certified Company Block */}
              <div className="flex items-center gap-4 mt-0 mb-6">
                <Image
                  src="/certified-badge.jpg"
                  alt="Certified Company Badge"
                  width={50}
                  height={50}
                  className="flex-shrink-0"
                />
                <div className="text-[#003269] text-base font-sm font-inter">
                  <h4 className="font-bold mb-1">Certified Company</h4>
                  <p className="text-[#e63a27]">#2050416-DCA</p>
                </div>
              </div>
            </div>

            {/* Read More Link */}
            <Link
              href="/aboutus"
              className="inline-block border-4 border-[#003269] p-1 self-start group mt-auto"
            >
              <span className="block border-2 border-[#e63a27] text-[#e63a27] px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#e63a27] hover:text-white transition text-sm lg:text-base hover-button font-inter">
                Read More
              </span>
            </Link>
          </motion.article>
        </section>
      </div>
    </div>
  );
}
