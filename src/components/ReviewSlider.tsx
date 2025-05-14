"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
  detailText: string;
  image: string;
};

const reviews: Review[] = [
  {
    name: "MD Abdul Kader",
    date: "2 days ago",
    rating: 5,
    text: "CitySewing is the best sewing machine company I've dealt with.",
    detailText:
      "CitySewing is the best sewing machine company I've worked with. Their machines are reliable, and the customer service was excellent. I’d highly recommend them to anyone in the sewing business.",
    image: "/avatar.png",
  },
  {
    name: "Bklyn English",
    date: "1 week ago",
    rating: 5,
    text: "I had a great experience buying my sewing machine from CitySewing...",
    detailText:
      "I had a great experience buying my sewing machine from CitySewing. From the initial consultation to delivery, everything was smooth and professional. Their support team was helpful and knowledgeable.",
    image: "/avatar.png",
  },
  {
    name: "Scholar Chem",
    date: "3 months ago",
    rating: 5,
    text: "CitySewing exceeded my expectations! Their machines are efficient...",
    detailText:
      "CitySewing exceeded my expectations! Their machines are efficient, easy to operate, and built to last. I'm really happy with my purchase and would recommend them to others in the industry.",
    image: "/avatar.png",
  },
  {
    name: "Abm Hossain",
    date: "1 month ago",
    rating: 5,
    text: "I highly recommend CitySewing for all your sewing machine needs...",
    detailText:
      "I highly recommend CitySewing for all your sewing machine needs. They provide quality machines and clear guidance on how to use and maintain them. Great service overall!",
    image: "/avatar.png",
  },
  {
    name: "Alo Nazrul",
    date: "10 days ago",
    rating: 5,
    text: "CitySewing stands out with its exceptional customer service...",
    detailText:
      "CitySewing stands out with its exceptional customer service and commitment to satisfaction. They answered all my questions and ensured I chose the right machine for my needs. Highly satisfied!",
    image: "/avatar.png",
  },
];


const ReviewSlider = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedReview(null);
      }
    };

    if (selectedReview) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedReview]);

  return (
    <section className="py-8 bg-[#f9f9f9]">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-4xl font-bold text-gray-900 flex items-center justify-center font-inter">
          4.7
          <span className="ml-2 text-[#e63a27]">★★★★★</span>
        </div>
        <p className="text-gray-600 text-sm font-inter">(134 Google Reviews)</p>
        <Link
          href="https://www.google.com/search?sca_esv=44785faec4b38403&hl=en-IN&gl=in&sxsrf=AHTn8zqibJ4bTPvhVHIjXbIiCuri3N9dNg:1746640776320&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzRXdA7aRSP0fPCbY4r-w7Xlc_H5K-rMs-6p7czYZpZV5g8XT02WLATrugqbv9Pt2j-UXbKSxafnerU2YrHvGVWSwXaAj2lXaOtGbFRPxdNviohP_bg%3D%3D&q=SAS+Roofing+%26+Waterproofing+Reviews&sa=X&ved=2ahUKEwjZjZf495GNAxUbrVYBHaK-BfUQ0bkNegQIMxAE&biw=1600&bih=773&dpr=1#lrd=0x89c25b2dd928663d:0x5527086c2d45f8d8,3,,,,"
          target="_blank"
        >
          <button className="mt-2 bg-[#003269] text-white px-4 py-2 rounded-full text-sm hover:bg-[#e63a27] font-inter">
            Review us on Google
          </button>
        </Link>
      </motion.div>

      <div className="px-4 max-w-6xl md:mx-auto">
        <Swiper
          className="review-swiper"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <motion.div
                className="bg-[#002147] text-white rounded-xl p-4 w-[250px] h-[300px] flex flex-col gap-2 items-start mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-base font-inter">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-300 font-inter">
                      {review.date}
                    </p>
                  </div>
                </div>
                <div className="text-[#e63a27] text-3xl mt-2">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-sm text-left mt-2 leading-snug font-bevietnam">
                  {review.text}
                </p>
                <p
                  className="text-sm text-white hover:text-[#e63a27] mt-2 cursor-pointer font-bevietnam"
                  onClick={() => setSelectedReview(review)}
                >
                  Read more
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-300 mt-3">
                  <Image
                    src="/google.png"
                    alt="Google Logo"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="font-bevietnam">Posted on</span>
                  <span className="font-semibold text-white font-bevietnam">
                    Google
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="fixed inset-0 bg-black/40 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
                onClick={() => setSelectedReview(null)}
              >
                ×
              </button>
              <div className="flex items-start gap-3 mb-4">
                <Image
                  src={selectedReview.image}
                  alt={selectedReview.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{selectedReview.name}</p>
                  <p className="text-sm text-gray-500">{selectedReview.date}</p>
                </div>
              </div>
              <div className="text-[#e63a27] text-2xl">
                {"★".repeat(selectedReview.rating)}
              </div>
              <p className="mt-3 text-gray-700 text-sm text-left whitespace-pre-line">
                {selectedReview.detailText}
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <Image src="/google.png" alt="Google" width={16} height={16} />
                <span>Posted on</span>
                <strong>Google</strong>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewSlider;
