"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/aboutus" },
  {
    label: "SERVICES",
    path: "/services",
    subItems: [
      { label: "Roofing", path: "/roofing-contractors-brooklyn" },
      {
        label: "Waterproofing",
        path: "/waterproofing-contractors-NY",
      },
      { label: "Masonry", path: "/masonry-services-brooklyn-ny" },
    ],
  },
  { label: "PROJECTS", path: "/projects" },
  { label: "TESTIMONIALS", path: "/reviews" },
  { label: "CONTACT US", path: "/contact-us" },
];

export default function StickyNavbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  if (!showSticky) return null;

  return (
    <div className="hidden xl:flex fixed top-0 left-0 right-0 items-center justify-between bg-white z-50 shadow-md transition-all">
      <Link href="/" className="bg-[#003269] px-8">
        <Image src="/Logo.png" alt="Logo" width={210} height={160} />
      </Link>

      <nav className="flex gap-6 font-semibold text-sm text-[#003269] pr-6">
        {navItems.map(({ label, path, subItems }) =>
          subItems ? (
            <div
              key={label}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={path}
                className="px-2 hover:text-[#e63a27] flex items-center gap-1"
              >
                {label}
                <span
                  className={`text-[#e63a27] transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </Link>
              <div
                className={`absolute left-0 top-full mt-1 bg-white border-t-4 border-[#e63a27] shadow-lg rounded-sm z-50 min-w-[180px] overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {subItems.map(({ label: subLabel, path: subPath }) => (
                  <Link
                    key={subLabel}
                    href={subPath}
                    className="block px-5 py-4 text-[#003269] hover:bg-[#e63a27] hover:text-white text-sm font-inter"
                  >
                    {subLabel}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={label} href={path} className="px-2 hover:text-[#e63a27]">
              {label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
