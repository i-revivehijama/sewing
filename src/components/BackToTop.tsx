"use client";

import React, { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to Top"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.3 }}
          className="hidden xl:block fixed bottom-4 right-4 p-4 bg-white hover:bg-[#003269] z-50 text-white shadow-lg"
        >
          <GoArrowUp size={30} className="text-[#e63a27]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
