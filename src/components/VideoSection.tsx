"use client";

import React, { useState } from "react";
import { GoVideo } from "react-icons/go";
import { SiTicktick } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const VideoIframe = dynamic(() => import("./VideoIframe"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type Props = {
  margin: number[];
};

const VideoSection = ({ margin }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section
        className={`relative w-full flex flex-col md:flex-row overflow-hidden h-[550px] bg-[#dc0000] lg:bg-[#f9f9f9] mb-${margin[1]} md:mb-${margin[1]} shadow-2xl`}
      >
        <Image
          src="/VideoSectionBg.jpg"
          alt="Video background"
          fill
          priority
          sizes="100vw"
          className="object-right z-0"
        />

        {/* Left Section */}
        <div className="relative md:w-[60%] w-full h-[500px] md:h-auto">
          <div className="absolute inset-0 bg-[#dc0000] red-left-shape-2 z-20 translate-x-6 translate-y-16">
            <div className="w-full h-full bg-[url('/thm-pattern-5.png')] bg-repeat left" />
          </div>
          <div className="absolute inset-0 bg-[#dc0000] red-left-shape-2 z-20">
            <div className="w-full h-full bg-[url('/thm-pattern-5.png')] bg-repeat" />
          </div>

         <div className="flex justify-center items-center">
  <motion.div
    className="relative z-30 text-white p-10 md:p-16 lg:max-w-[80%] xl:max-w-[60%]"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-6 h-px bg-white" />
      <h5 className="text-sm uppercase font-semibold">Video Proof</h5>
    </div>

    <h2 className="text-3xl lg:text-5xl font-medium leading-tight mb-4 font-inter">
      Have a Look <br /> At Our Machines in Action
    </h2>

    <ul className="space-y-2">
      <li>
        <SiTicktick className="inline mr-2 font-bevietnam" /> Best-in-Class Stitching Performance
      </li>
      <li>
        <SiTicktick className="inline mr-2 font-bevietnam" /> Industrial & Domestic Models Available
      </li>
      <li>
        <SiTicktick className="inline mr-2 font-bevietnam" /> Trusted by Tailors Across the City
      </li>
      <li>
        <SiTicktick className="inline mr-2 font-bevietnam" /> Affordable Repairs & Services
      </li>
    </ul>

    {/* Mobile Video Icon */}
    <div className="mt-4 ml-6 pr-6 pl-6 flex flex-col md:hidden">
      <GoVideo
        size={60}
        className="text-white text-4xl sm:text-6xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
    </div>
    <div className="text-white md:hidden font-inter text-sm">
      SEWING MACHINE DEMO
    </div>
  </motion.div>
</div>

        </div>

        {/* Right Section with Video Icon */}
        <motion.div
          className="relative md:w-[40%] w-full overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-full h-full ">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
              <GoVideo
                className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl mr-16 md:mr-24 lg:mr-48 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
              <div className="hidden md:block mt-1 text-white font-semibold text-lg tracking-wide mr-16 md:mr-24 lg:mr-48 font-inter">
                FLAT ROOF INSTALLATION
              </div>
            </div>
            <div className="absolute inset-0 bg-[#e63a27] red-left-shape-1 z-20 translate-y-20">
              <div className="w-full h-full bg-[url('/thm-pattern-5.webp')] bg-repeat" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Modal with accessibility + hydration-safe iframe */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] p-0 rounded-lg border-none bg-transparent shadow-none font-bevietnam">
          <VisuallyHidden>
            <DialogTitle>Flat Roof Installation Video</DialogTitle>
          </VisuallyHidden>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <VideoIframe />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl bg-black bg-opacity-60 rounded-full p-1"
            >
              <IoClose />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoSection;
