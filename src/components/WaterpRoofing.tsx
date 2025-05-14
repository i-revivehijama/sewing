"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RoofingServices() {
  const services = [
    {
      title: "Waterproofing Solutions in Brooklyn",
      desc: "We specialize in basement waterproofing and roof waterproofing in Brooklyn, ensuring your property stays dry and protected. Our waterproofing solutions in Brooklyn are designed to prevent leaks and mold growth.",
    },
    {
      title: "Foundation Waterproofing Manhattan",
      desc: "Protect your foundation with our foundation waterproofing services in Manhattan. We seal cracks and provide long-lasting solutions to keep your property secure.",
    },
    {
      title: "Waterproofing Experts in Queens",
      desc: "Our team of waterproofing experts in Queens offers comprehensive services to protect your home or business from water damage. We handle everything from exterior waterproofing to basement waterproofing.",
    },
    {
      title: "Commercial Waterproofing Manhattan",
      desc: "For businesses in Manhattan, we offer commercial waterproofing, ensuring your commercial property stays safe from water-related issues.",
    },
    {
      title: "Why Choose SAS Roofing & Waterproofing?",
      isLink: true,
    },
  ];

  return (
    <section className="px-6 py-12 md:px-16 bg-white text-[#003269] lg:mx-30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8 mb-12"
      >
        <div>
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
            <div className="w-6 h-px bg-[#e63a27]" />
            <span className="text-sm font-bold text-[#e63a27] uppercase font-inter">
              Waterproofing Services
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#003269] leading-snug font-inter">
            Professional Waterproofing Services in Brooklyn, Manhattan and
            Queens
          </h2>
        </div>

        <Link
          href="/waterproofing-contractors-NY"
          className="group border-4 border-[#003269] p-2 inline-block flex-shrink-0"
        >
          <div className="border border-[#e63a27] px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#e63a27] uppercase whitespace-nowrap hover-button font-inter">
            All Services
          </div>
        </Link>
      </motion.div>

      {/* Description Paragraph */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="text-sm md:text-base text-gray-700 mb-6 font-bevietnam"
      >
        SAS Roofing & Waterproofing offers expert waterproofing services across
        Brooklyn, Manhattan, and Queens. From basement waterproofing in Brooklyn
        to commercial waterproofing in Manhattan, we provide reliable solutions
        to keep your property safe from water damage.
      </motion.p>

      <div className="grid gap-8">
        {services.map(({ title, desc, isLink }, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-2"
          >
            <h3 className="text-xl md:text-3xl font-bold text-[#003269]">
              {title}
            </h3>
            {isLink ? (
              <div className="text-sm md:text-base text-gray-700 font-bevietnam">
                At SAS Roofing & Waterproofing, we provide top-quality, durable
                waterproofing services in Brooklyn, Manhattan, and Queens.
                Protect your property today by Visit{" "}
                <Link href="/" className="text-[#e63a27] hover:text-[#003269]">
                  SAS Roofing & Waterproofing
                </Link>
              </div>
            ) : (
              <p className="text-sm md:text-base text-gray-700 font-bevietnam">
                {desc}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
