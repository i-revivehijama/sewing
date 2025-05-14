"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
  FaFacebookF,
  FaHome,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SidebarOverlay({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[999] bg-black/70 flex justify-start cursor-[url('/white_cursor.png')_0_0,auto] font-inter"
    >
      <motion.aside
        onClick={(e) => e.stopPropagation()}
        className="w-[280px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[420px] 2xl:w-[460px] bg-[#003269] text-white overflow-y-auto p-4 sm:p-6 lg:p-8 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close sidebar"
          className="absolute top-4 right-4 text-white text-2xl"
        >
          <IoMdClose />
        </button>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="SAS Roofing Logo"
              width={240}
              height={240}
              className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[260px]"
            />
          </Link>
        </div>

        {/* About Section */}
        <section className="mb-6">
          <h2 className="text-base md:text-lg font-bold mb-1 font-inter">
            ABOUT US
          </h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-3" />
          <p className="text-sm md:text-sm leading-relaxed tracking-wide font-bevietnam">
            With over three decades of proven success in quality Roofing
            services, Waterproofing and General contractors.
          </p>
        </section>

        {/* Free Quote Form */}
        <section className="mb-6">
          <h2 className="text-base md:text-lg font-bold mb-1 font-inter">
            GET A FREE QUOTE
          </h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" />
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {["name", "email"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                required
                className="p-3 text-sm md:text-base text-black bg-white outline-none"
              />
            ))}
            <textarea
              rows={4}
              placeholder="Message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="p-3 text-sm md:text-base text-black bg-white outline-none"
            />
            <button
              type="submit"
              className="border border-[#e63a27] text-[#e63a27] font-semibold text-sm md:text-base py-3 hover:bg-[#e63a27] hover:text-white transition form-hover-button font-bevietnam"
            >
              SUBMIT NOW
            </button>
          </form>
        </section>

        {/* Contact Info & Social */}
        <section>
          <h2 className="text-base md:text-lg font-bold mb-1 font-inter">
            CONTACT INFO
          </h2>
          <div className="w-8 h-[2px] bg-[#e63a27] mb-4" />
          <ul className="text-sm space-y-3">
            <li className="flex gap-3 items-start font-bevietnam">
              <FaMapMarkerAlt className="text-[#e63a27] mt-1 shrink-0" />
              <span>552 Rugby Rd, Brooklyn, NY 11230</span>
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaPhoneAlt className="text-[#e63a27]" />
              <span>Office: (347) 221-6549</span>
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaMobileAlt className="text-[#e63a27]" />
              <span>Cell: (347) 394-9384</span>
            </li>
            <li className="flex gap-3 items-center font-bevietnam">
              <FaEnvelope className="text-[#e63a27]" />
              <span>amzadh78@gmail.com</span>
            </li>
          </ul>

          <div className="flex gap-4 mt-6">
            {[
              {
                href: "https://www.facebook.com/sasroofingwaterproofing",
                icon: <FaFacebookF />,
                label: "Facebook",
              },
              {
                href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
                icon: <FaHome />,
                label: "Houzz",
              },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit us on ${label}`}
                className="bg-[#e63a27] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e63a27] transition"
              >
                {icon}
              </Link>
            ))}
          </div>
        </section>
      </motion.aside>
    </div>
  );
}
