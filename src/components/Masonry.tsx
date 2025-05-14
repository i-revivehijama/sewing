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
      title: "Masonry Services in Brooklyn",
      desc: "We specialize in brick masonry, stone masonry, and concrete masonry in Brooklyn, delivering high-quality results for both residential and commercial projects. From masonry repair in Queens to custom masonry in Queens, our experienced team ensures durability and beauty for your property.",
    },
    {
      title: "Masonry Construction in Manhattan",
      desc: "Our team offers expert masonry construction in Manhattan, handling everything from new builds to repairs. We are among the best masonry contractors in Brooklyn, providing services that last.",
    },
    {
      title: "Residential and Commercial Masonry Services in Manhattan",
      desc: "For homeowners in Manhattan, our residential and commercial masonry services include everything from brickwork to stone and concrete masonry, creating lasting, beautiful structures.",
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
              Top Masonry Contractors NYC
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#003269] leading-snug font-inter">
            Expert Masonry Services in Brooklyn, Manhattan and Queens
          </h2>
        </div>

        <Link
          href="/masonry-services-brooklyn-ny"
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
        SAS Roofing & Waterproofing provides top-tier masonry services across
        Brooklyn, Manhattan, and Queens. Whether you need brickwork contractors
        in Brooklyn or stone masonry in Brooklyn, we offer expert solutions
        tailored to your needs.
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
            <h3 className="text-xl md:text-2xl font-bold text-[#003269]">
              {title}
            </h3>
            {isLink ? (
              <div className="text-sm md:text-base text-gray-700 font-bevietnam">
                At SAS Roofing & Waterproofing, we are committed to delivering
                exceptional masonry solutions. Our team provides reliable,
                long-lasting masonry construction and repair across Brooklyn,
                Manhattan, and Queens. Visit{" "}
                <Link href="/" className="text-[#e63a27] hover:text-[#003269]">
                  SAS Roofing & Waterproofing
                </Link>{" "}
                to learn more.
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
