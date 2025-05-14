"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceAndFaqSection() {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <section className="relative w-full lg:h-[100vh] md:pt-5 pb-24 bg-[#f9f9f9] overflow-hidden md:border-t md:border-black/40 mb-10 md:mb-15 shadow-2xl">
      <div className="absolute inset-0 hidden lg:flex z-0">
        <div className="w-[30%] bg-[#dc0000]" />
        <div className="w-[70%] bg-white" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 text-center lg:text-left">
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-[#f5f5f5] w-full max-w-md p-6 md:p-12 shadow-xl grid gap-4 text-base mb-12 lg:mb-0"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-[3px] bg-[#e63a27]" />
            <p className="uppercase text-[#e63a27] font-semibold tracking-wide">
              Book A Service
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003269]">
            Free Estimation
          </h2>
          <p className="text-gray-500">
            Please fill out the form and provide details of your request.
          </p>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
            autoComplete="name"
            className="p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            required
            autoComplete="email"
            className="p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
          />

          
          <textarea
            id="message"
            placeholder="Your Requirements..."
            rows={4}
            required
            className="p-3 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-[#e63a27] focus:outline-none"
          />
          <button
            type="submit"
            className="border border-[#e63a27] text-[#e63a27] py-3 px-3 font-semibold rounded-md hover:bg-[#e63a27] hover:text-white transition hover-button"
          >
            SUBMIT NOW
          </button>
        </motion.form>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-xl"
        >
          <FaqSection />
        </motion.div>
      </div>
    </section>
  );
}
