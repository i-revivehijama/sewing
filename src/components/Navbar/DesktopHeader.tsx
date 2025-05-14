"use client";

import Image from "next/image";
import NavLinks from "./NavLinks";
import TopBar from "./TopBar";
import Link from "next/link";

export default function DesktopHeader({
  setSidebarOpen,
}: {
  setSidebarOpen: (val: boolean) => void;
}) {
  return (
    <header className="relative z-50 hidden md:block">
      {/* Logo Section with clip-path */}
      <Link
        href="/"
        className="absolute left-0 top-0 h-full w-[350px] bg-[#ffffff] z-10 flex items-center justify-center [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)]"
      >
        <Image
          src="/Logo-SAS.png"
          alt="Company Logo"
          width={295}
          height={295}
          className="object-contain cursor-pointer"
          priority
        />
      </Link>

      <TopBar />

      <nav className="flex justify-end items-center gap-5 px-6 bg-white shadow-md h-18">
        <NavLinks setSidebarOpen={setSidebarOpen} />
      </nav>
    </header>
  );
}
