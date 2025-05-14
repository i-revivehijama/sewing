"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Karim Degonto",
    location: "NEW YORK",
    text: `We just had our roof redone with SAS. Mohammad came out to check out our
    roof from some leaking we had during a bad storm . Mohamad was kind and
    flexible with us.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "Master Showan",
    location: "NEW YORK",
    text: `Mohammad worked on my roof over a year ago. I purposely waited to write a
    review because I have had different companies worked on my roof and
    after a heavy rain, water leaked inside.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "Nicole Brier",
    location: "QUEEN",
    text: `We had SAS waterproof our basement after bricks started crumbling on the
    inside from moisture. They were professional, prompt, worked quick and
    clean and did a wonderful job. Well priced also. Highly recommend.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "David Packer",
    location: "NEW YORK",
    text: `This business is great. A really efficient and friendly crew arrived
    promptly and did a great job on repainting sand waterproofing some of my
    outside walls. The communication was excellent.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "T Brown",
    location: "BROOKLYN",
    text: `It was an absolute pleasure to work with Mohammad. He responded quickly
    to our request for estimate moved things around to meet with us even
    though his schedule was extremely busy and gave us fair price.`,
    rating: 5,
    avatar: "/user.png",
  },
  {
    name: "Sean McBRIDE",
    location: "QUEENS",
    text: `SAS and Mohammad did outstanding work. They fixed a persistent leak in
    our roof that we’d been having for 9 months. Mohammad was incredibly
    responsive during the process and very reasonably priced.`,
    rating: 5,
    avatar: "/user.png",
  },
];

export default function TestimonialSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlide = (dir: "next" | "prev") =>
    swiperRef.current?.[dir === "next" ? "slideNext" : "slidePrev"]();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        <Swiper
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1.2, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 32 },
          }}
        >
          {testimonials.map(({ name, location, text, rating, avatar }, i) => (
            <SwiperSlide key={i}>
              <div className="flex h-[230px] bg-white shadow-lg rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div
                  className="w-[50%] flex flex-col items-center justify-center p-4"
                  style={{
                    background:
                      "linear-gradient(to top, #df4432 60%, #f5f5f5 40%)",
                  }}
                >
                  <Image
                    src={avatar}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded-full bg-white p-1 shadow-md"
                  />
                  <div className="flex gap-1 text-white mt-3 text-base">
                    {Array.from({ length: rating }, (_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                </div>

                <div className="w-[65%] p-6 text-left">
                  <div className="flex items-start gap-3 mb-2">
                    <Image
                      src="/quote.png"
                      alt="Quote"
                      width={40}
                      height={40}
                      className="mt-1"
                    />
                    <div>
                      <h3 className="font-bold text-[#003269] text-lg leading-tight">
                        {name}
                      </h3>
                      <p className="text-[#e63a27] text-sm uppercase font-semibold">
                        {location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-snug">{text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 pt-6">
          {["prev", "next"].map((dir) => (
            <button
              key={dir}
              onClick={() => handleSlide(dir as "next" | "prev")}
              aria-label={`${dir === "next" ? "Next" : "Previous"} testimonial`}
              className="w-10 h-10 flex items-center justify-center border-2 border-[#003269] text-[#003269] rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003269] transition"
            >
              {dir === "prev" ? (
                <FiChevronLeft className="w-5 h-5" />
              ) : (
                <FiChevronRight className="w-5 h-5" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
