"use client";
import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Masonry from "@/components/Masonry";
import Navbar from "@/components/Navbar/Navbar";
import ServicesSlider from "@/components/ServicesSlider";
import StickyNavbar from "@/components/StickyNavbar";
import { motion } from "framer-motion";
import React from "react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const page = () => {
  //   const mvalue = [0, 0, 0];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const swiperRef = useRef<SwiperType | null>(null);
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle={"Masonry Services"}
        imageSrc={"/breadcrumb-19.jpg"}
      />
      <Masonry />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="" // No specific class needed here usually
      >
        <ServicesSlider swiperRef={swiperRef} />
      </motion.div>
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
