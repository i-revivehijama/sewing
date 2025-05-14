"use client"; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

interface Props {
  swiperRef?: RefObject<SwiperType | null>;
}

const slides = [
  {
    title: "Consew CP206R",
    description:
      "Designed for stitching such products as auto, boat and furniture upholstery, tarpaulins, covers, sails, tents, camping trailer covers,",
    image: "/services1.jpg",
    icon: "/pattern-1.png",
    link: "/waterproofing-contractors-NY",
  },
  {
    title: "JACK K5-D-01GB",
    description:
      "The speed of the K5E is 5,500 rpm, compared to the 3,700 rpm of a normal machine with cover, the efficiency increases more than 50%",
    image: "/services2.jpg",
    icon: "/masonry.png",
    link: "/masonry-services-brooklyn-ny",
  },
  {
    title: "Bernette b05 ",
    description:
      "Equipped with a wide range of functions, 30 exclusive stitches and a fast motor, the b05 ACADEMY lets you quickly realize your wildest ideas",
    image: "/services3.jpg",
    icon: "/roofing.png",
    link: "/roofing-contractors-brooklyn",
  },
];


export default function ServicesSlider({ swiperRef }: Props) {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const autoplayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.current = swiperInstanceRef.current;
    }
  }, [swiperRef]);

  const handleManualSlide = (direction: "prev" | "next") => {
    if (!swiperInstanceRef.current) return;
    const swiper = swiperInstanceRef.current;

    swiper.autoplay?.stop();
    if (direction === "next") swiper.slideNext();
    else swiper.slidePrev();

    clearTimeout(autoplayTimeout.current!);
    autoplayTimeout.current = setTimeout(() => swiper.autoplay?.start(), 2000);
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 mb-5">
      <div className="w-10/12 overflow-hidden">
        <Swiper
          loop
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          allowTouchMove={false}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 14 },
            640: { slidesPerView: 1.2, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 22 },
            1024: { slidesPerView: 2.5, spaceBetween: 26 },
            1280: { slidesPerView: 3, spaceBetween: 28 },
          }}
          onSwiper={(swiper) => {
            swiperInstanceRef.current = swiper;
            if (swiperRef) swiperRef.current = swiper;
          }}
          className="!overflow-visible"
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const { title, description, image, icon, link } =
              slides[i % slides.length];
            return (
              <SwiperSlide key={i}>
                <div
                  className="relative h-[380px] flex items-end bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="flex w-full items-end">
                    <div className="w-[70%] bg-[#f5f5f5] shadow-md p-4 min-h-[120px] sm:min-h-[140px] md:min-h-[150px] flex flex-col">
                      <h3 className="text-[#003269] text-sm md:text-base lg:text-lg font-bold tracking-wide font-inter">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 leading-snug line-clamp-3 font-bevietnam">
                        {description}
                      </p>
                    </div>
                    <Link
                      href={link}
                      className="w-[30%] bg-gray-100 relative group overflow-hidden border border-gray-300 flex items-center justify-center"
                      style={{ height: "50%" }}
                    >
                      {/* Icon (default state) */}
                      <div className="relative w-12 sm:w-14 aspect-square transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                        <Image
                          src={icon}
                          alt={`${title} Icon`}
                          fill
                          className="object-center"
                        />
                      </div>

                      {/* Hover state: Red background with arrow */}
                      <div className="absolute inset-0 bg-[#e63a27] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <FiChevronRight className="w-6 h-6 text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <nav
        className="flex justify-center gap-4 pt-6"
        role="navigation"
        aria-label="Carousel navigation"
      >
        {["prev", "next"].map((dir) => {
          const Icon = dir === "prev" ? FiChevronLeft : FiChevronRight;
          return (
            <button
              key={dir}
              onClick={() => handleManualSlide(dir as "prev" | "next")}
              className="w-10 h-10 rounded-full border-2 border-[#003269] text-[#003269] flex items-center justify-center hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003269] transition"
              aria-label={`${dir === "prev" ? "Previous" : "Next"} slide`}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
