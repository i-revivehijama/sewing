"use client";
import Image from "next/image";
import { FaHeadphonesAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FooterTopCTA() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  return (
    <div className="bg-[#00254c] text-white px-4 py-10 sm:px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 text-center lg:text-left">
        {/* Logo */}
        <motion.div
          className="min-w-[100px] sm:min-w-[120px] lg:min-w-[160px]"
          {...fadeUp(0)}
        >
          <Link href="/" className="block">
            {/* <div className=" border-2"> */}
            <Image
              src="/Logo.png"
              alt="SAS Roofing Logo"
              width={200}
              height={200}
              className="border-2 bg-white p-2"
              loading="lazy"
            />
            {/* </div> */}
          </Link>
        </motion.div>

        {/* Vertical Divider */}
        <motion.span
          className="hidden lg:inline-block w-px h-[80px] bg-white/30"
          {...fadeUp(0.1)}
        />

        {/* Text Content */}
        <motion.div className="max-w-md px-2" {...fadeUp(0.2)}>
  <h3 className="text-lg md:text-xl font-bold mb-1 font-inter">
    Sewing Machine Issues Can’t Wait?
  </h3>
  <p className="text-sm text-white/80 leading-snug font-inter">
    Keep your creativity flowing — contact CitySewing today for expert repairs and reliable machines.
  </p>
</motion.div>


        {/* CTA Buttons */}
        <motion.div
          className="flex gap-3 flex-wrap justify-center items-center"
          {...fadeUp(0.3)}
        >
          <Link href="/aboutus">
            <button className="call-hover-button font-inter">KNOW MORE</button>
          </Link>
          <Link
            href="tel:113472216549"
            className="bg-[#dc0000] text-white flex items-center gap-2 px-4 py-2 font-semibold transition hover:bg-[#e63a27] call-hover-button"
          >
            <FaHeadphonesAlt />
            <span className="text-sm sm:text-base font-inter">
              (212) 268-0409


            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
