"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";


interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

interface Props {
  item: NavItem;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  servicesOpen: boolean;
  setServicesOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNavItem({
  item,
  setIsOpen,
  servicesOpen,
  setServicesOpen,
}: Props) {
const toggleSubmenu = () => setServicesOpen((prev) => !prev);

  if (item.subItems) {
    return (
      <div className="border-t border-white/20 last:border-b font-inter">
        <button
          onClick={toggleSubmenu}
          className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold hover:bg-white hover:text-black transition-colors font-inter"
          aria-expanded={servicesOpen}
          aria-controls={`services-menu-${item.name}`}
        >
          {item.name}
          <span
            className={`transform transition-transform duration-200 ${
              servicesOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
        <div
          id={`services-menu-${item.name}`}
          className={`bg-[#00244d] text-sm overflow-hidden transition-all duration-300 ease-in-out font-inter ${
            servicesOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {item.subItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block px-8 py-3 hover:bg-white hover:text-black transition-colors font-inter"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={() => setIsOpen(false)}
      className="block px-6 py-4 border-t border-white/20 last:border-b hover:bg-white hover:text-black transition-colors"
    >
      {item.name}
    </Link>
  );
}
