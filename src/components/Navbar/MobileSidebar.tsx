"use client";

import { FaFacebookF, FaHome } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function MobileSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/" },
    { name: "SERVICES", href: "/" },
    { name: "PROJECTS", href: "/" },
    { name: "TESTIMONIALS", href: "/s" },
    { name: "CONTACT US", href: "/" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end ${
        !isOpen && "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className={`w-[60%] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`w-[40%] h-full bg-black text-white relative flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"
        }`}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="p-6 flex justify-center">
          <Image
            src="/Logo-SAS.png"
            alt="Company Logo"
            width={260}
            height={130}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          {navItems.map(({ name, href }, idx) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 border-t border-white/20 hover:bg-white hover:text-black transition-colors font-inter ${
                idx === navItems.length - 1 ? "border-b" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-auto flex justify-center gap-4 py-6 font-inter">
          <Link
            href="https://www.facebook.com/sasroofingwaterproofing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Facebook"
            className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
          >
            <FaFacebookF className="text-white text-lg" />
          </Link>
          <Link
            href="https://www.houzz.com/professionals/general-contractors/sas-roofing-and-waterproofing-pfvwus-pf~849386886?"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="houzz"
            className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
          >
            <FaHome className="text-white text-lg" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
