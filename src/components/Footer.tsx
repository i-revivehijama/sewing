"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  const paymentIcons = [
    "visa",
    "mastercard",
    "amex",
    "discover",
    "cash",
    "check",
  ];
  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/" },
    { label: "PROJECTS", path: "/" },
    { label: "REVIEWS", path: "/" },
    { label: "SERVICES", path: "/" },
    { label: "CONTACT", path: "/" },
  ];
  const socialIcons = [
    {
      src: "facebook",
      path: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      src: "houzz",
      path: "https://www.houzz.com/",
      label: "Houzz",
    },
    {
      src: "angi",
      path: "https://www.angi.com/",
      label: "Angi",
    },
    {
      src: "manta",
      path: "https://www.manta.com/",
      label: "Manta",
    },
    {
      src: "yellowpages",
      path: "https://www.yellowpages.com",
      label: "Yellow Pages",
    },
    {
      src: "yelp",
      path: "https://www.yelp.com/",
      label: "Yelp",
    },
    { src: "x", path: "https://x.com/", label: "X (Twitter)" },
    {
      src: "bbb",
      path: "https://www.bbb.org/",
      label: "BBB",
    },
    {
      src: "google_my_business",
      path: "https://www.google.com/",
      label: "Google Maps",
    },
  ];

  return (
    <footer className="bg-[#003269] text-white text-sm sm:text-[15px]">
      <motion.h2
        className="px-4 sm:px-6 md:px-12 pt-12 text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-12 max-w-4xl mx-auto font-inter"
        {...fadeUp(0)}
      >
        Welcome to City Sewing Machine Shop!
      </motion.h2>

      <div className="px-4 sm:px-6 md:px-12 pb-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* About Section */}
        <motion.div {...fadeUp(0.1)}>
          <h4 className="text-xl font-bold mb-2 font-inter">About Service</h4>
          <div className="w-12 h-[2px] bg-[#e63a27] mb-3" />
          <p className="text-white/90 leading-relaxed md:mt-10 text-sm font-bevietnam">
            “As a leader in Sewing Equipment and Sewing Supplies for over 30
            years we at City Sewing believe customer service still comes first.
            We have trained professional staff “
          </p>
          <p className="font-bold mt-4 font-inter">WE ARE AVAILABLE</p>
          <p className="text-white/80 font-bevietnam text-sm">
            Mon–Sat: 09.00 am to 6.30 pm
          </p>

          <Link
            href="/"
            className="inline-block mt-6 bg-[#e53935] text-white px-6 py-3 font-semibold hover:bg-[#e63a27] transition text-sm md:text-base More-hover-button font-inter"
          >
            MORE DETAILS
          </Link>

          <div className="flex gap-2 flex-wrap mt-4 items-center">
            {paymentIcons.map((icon) => (
              <Image
                key={icon}
                src={`/${icon}_logo.png`}
                alt={`${icon} accepted`}
                width={50}
                height={32}
                className="object-contain h-[35px] w-auto"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div {...fadeUp(0.2)}>
          <h4 className="text-xl font-bold mb-2 font-inter">Useful Links</h4>
          <div className="w-12 h-[2px] bg-[#e63a27] mb-3" />
          <ul className="space-y-3 mt-4 md:mt-10">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  href={path}
                  className="hover:text-[#e63a27] text-sm font-bevietnam"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Make Contact */}
        <motion.div {...fadeUp(0.3)}>
          <h4 className="text-xl font-bold mb-2 font-inter">Make Contact</h4>
          <div className="w-12 h-[2px] bg-[#e63a27] mb-3" />

          <div className="space-y-2 text-sm md:mt-5">
            <p className="font-bold font-inter">GENERAL INQUIRIES</p>
            <p className="font-bevietnam">Office: (212) 268-0409</p>
            
            <p className="font-bevietnam">Email: sales@citysewing.com</p>
          </div>

          <div className="space-y-2 mt-6 text-sm">
            <p className="font-bold font-inter">OFFICE LOCATION</p>
            <p className="font-bevietnam">
             300 west 38th St, New York, NY 10018


              <br />
             New York, NY 10018

            </p>
          </div>

          <div className="flex gap-2 flex-wrap mt-6 items-center">
            {socialIcons.map(({ src, path, label }) => (
              <a
                key={src}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Image
                  src={`/${src}_logo.png`}
                  alt={label}
                  width={35}
                  height={35}
                  className="object-contain h-[28px] w-auto"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00254c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs sm:text-sm md:text-[15px]">
          <p className="text-center md:text-left fontfont-bevietnam">
            © 2025{" "}
            <span className="text-[#e63144] font-bevietnam">
              
            </span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex gap-x-6 flex-wrap justify-center md:justify-end font-bevietnam">
            {["Terms of Service", "Privacy Policy"].map((text) => (
              <Link key={text} href="/" className="hover:underline">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
