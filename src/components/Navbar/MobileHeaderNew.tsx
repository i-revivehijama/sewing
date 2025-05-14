"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";

export default function MobileHeaderNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!hasMounted) return null;

  return (
    <>
      <div className="relative flex justify-between items-center h-[122px] w-full md:hidden bg-[#ffff] font-inter">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo-SAS.png"
            alt="Logo"
            width={200}
            height={80}
            className="object-contain h-full w-auto"
            priority
          />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="bg-[#e63a27] w-12 h-12 flex items-center justify-center rounded-md"
        >
          <Image
            src="/menu4.webp"
            alt="Menu"
            width={28}
            height={28}
            className="object-contain"
            priority
          />
        </button>
      </div>
      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
