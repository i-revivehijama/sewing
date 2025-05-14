"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const reviewLogos = [
  {
    alt: "Facebook",
    src: "/reviews/facebook.png",
    href: "https://www.facebook.com/kalapania78",
  },
  {
    alt: "Houzz",
    src: "/reviews/houzz.png",
    href: "https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?",
  },
  {
    alt: "Yellow Pages",
    src: "/reviews/yp.png",
    href: "https://www.yellowpages.com/brooklyn-ny/mip/sas-roofing-waterproofing-465411323",
  },
  {
    alt: "Yelp",
    src: "/reviews/yelp.png",
    href: "https://www.yelp.com/biz/sas-roofing-and-waterproofing-brooklyn-8",
  },
  {
    alt: "Google",
    src: "/reviews/google.png",
    href: "https://www.google.com/maps/place/SAS+Roofing+&+Waterproofing/@40.6359752,-73.9646363,17z/data=!3m1!4b1!4m8!3m7!1s0x89c25b2dd928663d:0x5527086c2d45f8d8!8m2!3d40.6359752!4d-73.9646363!9m1!1b1!16s/g/11bbw_w0v0?entry=ttu",
  },
  {
    alt: "X",
    src: "/reviews/x.png",
    href: "https://x.com/sasroofing91254",
  },
  {
    alt: "Angi",
    src: "/reviews/angi.png",
    href: "https://www.angi.com/companylist/us/ny/brooklyn/",
  },
  {
    alt: "BBB",
    src: "/reviews/bbb.png",
    href: "https://www.bbb.org/us/ny/brooklyn/profile/roofing-contractors/sas-contracting-co-inc-0121-161078/#sealclick",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-[#f9f9f9] py-10 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003269] font-inter">
          Customer Reviews
        </h2>
        <div className="mt-1 h-1 w-12 mx-auto bg-[#003269]" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {reviewLogos.map(({ alt, src, href }, index) => (
          <motion.a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our reviews on ${alt}`}
            className="border rounded-md p-3 shadow-sm hover:shadow-md transition bg-white w-[70px] h-[70px]  lg:w-[100px] lg:h-[100px] flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <Image
              src={src}
              alt={alt}
              width={72}
              height={72}
              loading="lazy"
              className="object-contain"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
