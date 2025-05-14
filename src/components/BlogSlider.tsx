"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BlogSlideCard from "./BlogSlideCard";

interface Props {
  swiperRef?: RefObject<SwiperType | null>;
}

const slides = [
  {
    title: "Replacing Shingle Roof. And Installing Skylight.",
    description: "ROOF LEAKS",
    date: "13 JUNE",
    image: "/services1.jpg",
  },
  {
    title: "Foundation Wall Repair And Waterproofing",
    description: "MAINTENANCE",
    date: "13 JUNE",
    image: "/services2.jpg",
  },
  {
    title: "How To Weather Proof Your Roof This Winter?",
    description: "TIPS & TRICKS",
    date: "11 JUNE",
    image: "/services3.jpg",
  },
];

export default function BlogSlider({ swiperRef }: Props) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.current = swiperInstanceRef.current;
    }
    return () => {
      if (autoplayTimeout.current) clearTimeout(autoplayTimeout.current);
    };
  }, [swiperRef]);

  const handleManualSlide = (direction: "prev" | "next") => {
    if (!swiperInstanceRef.current) return;
    const swiper = swiperInstanceRef.current;
    swiper.autoplay?.stop();

    if (direction === "next") {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
    autoplayTimeout.current = setTimeout(() => {
      swiper.autoplay?.start();
    }, 2000);
  };

  const navBtnClass =
    "w-10 h-10 rounded-full border-2 border-[#003269] text-[#003269] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ef4423] transition";

  return (
    <div className="w-full px-4 sm:px-6 max-w-screen-xl mx-auto">
      <Swiper
        loop
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 14 },
          640: { slidesPerView: 1, spaceBetween: 18 },
          768: { slidesPerView: 2, spaceBetween: 22 },
          1024: { slidesPerView: 2, spaceBetween: 26 },
          1280: { slidesPerView: 3, spaceBetween: 28 },
        }}
        onSwiper={(swiper) => {
          swiperInstanceRef.current = swiper;
          if (swiperRef) swiperRef.current = swiper;
        }}
        className="pb-6"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SwiperSlide key={i}>
            <BlogSlideCard slide={slides[i % slides.length]} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div
        className="flex justify-center gap-4 pt-6"
        aria-label="Slider navigation"
      >
        <button
          onClick={() => handleManualSlide("prev")}
          aria-label="Previous"
          className={navBtnClass}
        >
          <FiChevronLeft className="w-5 h-5" aria-hidden />
        </button>
        <button
          onClick={() => handleManualSlide("next")}
          aria-label="Next"
          className={navBtnClass}
        >
          <FiChevronRight className="w-5 h-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
