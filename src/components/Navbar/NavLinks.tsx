"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaHome } from "react-icons/fa";
import { Inter } from "next/font/google";


const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/" },
  {
    label: "SERVICES",
    path: "/",
    subItems: [
      { label: "Roofing", path: "/" },
      {
        label: "Waterproofing",
        path: "/waterproofing-contractors-NY",
      },
      { label: "Masonry", path: "masonry-services-brooklyn-ny" },
    ],
  },
  { label: "PROJECTS", path: "/" },
  { label: "TESTIMONIALS", path: "/" },
  { label: "CONTACT US", path: "/" },
];

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NavLinks({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarServicesOpen, setSidebarServicesOpen] = useState(false);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // delay in ms before hiding
  };

  return (
    <ul
      className={`flex gap-4 text-sm font-semibold text-[#003269] items-stretch h-full w-full justify-end ${inter.className}`}
    >
      {/* Desktop Links */}
      <div className="hidden xl:flex gap-6 items-center">
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
                className={`absolute left-0 top-full mt-1 bg-white border-t-4 border-[#e63a27] shadow-lg rounded-sm z-20 min-w-[180px] overflow-hidden transition-all duration-300 ease-in-out ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {subItems.map(({ label: subLabel, path: subPath }) => (
                  <Link
                    key={subLabel}
                    href={subPath}
                    className="block px-5 py-4 text-[#003269] hover:bg-[#e63a27] hover:text-white text-sm"
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
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex xl:hidden items-center gap-2">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="md:hidden border-2 border-white p-2"
        >
          <Image
            src="/menu4.png"
            alt=""
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="hidden md:block border-2 border-[#e63a27] p-2"
        >
          <Image
            src="/menu3.png"
            alt=""
            width={28}
            height={28}
            className="object-contain"
          />
        </button>
      </div>

      {/* Quote Button */}
      <Link
        href="/"
        className="bg-[#e5392c] hover:bg-[#e63a27] transition-colors text-white font-semibold px-6 flex items-center get-hover-button"
      >
        GET A QUOTE
      </Link>

      {/* Sidebar Trigger (hover effect) */}
      <div
        className="hidden md:flex items-center w-8 h-8 cursor-pointer relative mt-5"
        onClick={() => setSidebarOpen(true)}
      >
        <Image
          src="/menu.png"
          alt=""
          fill
          className="object-contain opacity-100 hover:opacity-0 transition-opacity duration-200"
        />
        <Image
          src="/menu-hover.png"
          alt=""
          fill
          className="object-contain opacity-0 hover:opacity-100 transition-opacity duration-200 absolute top-0 left-0"
        />
      </div>

      {/* Sidebar Panel */}
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          className={`w-[40%] h-full bg-[#003269] text-white relative flex flex-col transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-3 right-3 bg-[#e63a27] text-white w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <Link href="/" className="flex justify-center p-6">
            <Image
              src="/Logo.png"
              alt="Company Logo"
              width={260}
              height={130}
              className="object-contain cursor-pointer"
            />
          </Link>

          <nav className="flex flex-col mt-4">
            {navItems.map(({ label, path, subItems }) => {
              return subItems ? (
                <div
                  key={label}
                  className="border-t border-white/20 last:border-b"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold hover:bg-white hover:text-black transition-colors"
                    onClick={() => setSidebarServicesOpen((prev) => !prev)}
                  >
                    {label}
                    <span
                      className={`transform transition-transform duration-200 ${
                        sidebarServicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                      sidebarServicesOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {subItems.map(({ label: subLabel, path: subPath }) => (
                      <Link
                        key={subLabel}
                        href={subPath}
                        className="block px-8 py-3 hover:bg-white hover:text-black transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={label}
                  href={path}
                  className="border-t border-white/20 last:border-b px-6 py-4 hover:bg-white hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex justify-center gap-4 py-6">
            <a
              href="https://www.facebook.com/sasroofingwaterproofing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaHome className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>
    </ul>
  );
}
