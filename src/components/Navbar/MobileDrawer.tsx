"use client";

import { KeyboardEvent, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaHome } from "react-icons/fa";
import MobileNavItem from "./MobileNavItem";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileDrawer({ isOpen, setIsOpen }: Props) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/" },
    {
      name: "SERVICES",
      href: "/",
      subItems: [
        { name: "Roofing", href: "/" },
        {
          name: "Waterproofing",
          href: "/",
        },
        { name: "Masonry", href: "/" },
      ],
    },
    { name: "PROJECTS", href: "/" },
    { name: "TESTIMONIALS", href: "/" },
    { name: "CONTACT US", href: "/" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com",
      icon: <FaFacebookF className="text-white text-lg" />,
    },
    {
      href: "https://www.houzz.com/?",
      icon: <FaHome className="text-white text-lg" />,
    },
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-60 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div
        className="w-[40%] bg-black/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        role="button"
        tabIndex={0}
      />
      <div
        className={`relative w-[60%] h-full bg-[#003269] text-white flex flex-col overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-labelledby="mobile-menu-header"
        tabIndex={-1}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="absolute top-3 right-3 bg-[#e63a27] text-white w-6 h-6 rounded-full flex items-center justify-center"
        >
          ✕
        </button>

        <Link href="/" className="flex justify-center p-4">
          <Image
            src="/Logo-SAS.png"
            alt="Company Logo"
            width={260}
            height={130}
            className="object-contain cursor-pointer"
          />
        </Link>

        <nav className="mt-4 font-inter">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.name}
              item={item}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              servicesOpen={servicesOpen}
              setServicesOpen={setServicesOpen}
            />
          ))}
        </nav>

        <div className="mt-auto flex justify-center gap-4 py-6">
          {socialLinks.map(({ href, icon }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e63a27] rounded-full w-10 h-10 flex items-center justify-center"
              aria-label={`Go to ${href}`}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
