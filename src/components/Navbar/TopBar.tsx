"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaHome } from "react-icons/fa";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function TopBar() {
  return (
    <div
      className={`bg-[#003269] text-white px-6 text-[15px] h-[50px] ${beVietnamPro.className}`}
    >
      <div className="flex justify-between items-center h-full">
        <div className="w-[373px] h-full bg-[#00254c] [clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]" />

        <div className="flex items-center h-full">
          <div className="hidden xl:flex items-center pr-4 divide-x divide-white/30">
            <Link
              href="tel:+13472216549"
              className="flex items-center text-base gap-2 pr-4 hover:text-[#e63a27] transition-colors"
            >
              <FaPhoneAlt className="text-[#e63a27]" />
              (212) 268-0409
            </Link>
            <Link
              href="mailto:sascon09@yahoo.com"
              className="flex items-center text-base gap-2 px-4 hover:text-[#e63a27] transition-colors"
            >
              <FaEnvelope className="text-[#e63a27]" />
             sales@citysewing.com
            </Link>
            
          </div>

          <div className="flex items-center pl-4 text-white text-base">
            <span className="mr-3">Follow On:</span>
            <div className="flex items-center divide-x divide-white/30">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="pr-3 text-[#e63a27] transition-colors"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.houzz.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Houzz page"
                className="pl-3 text-[#e63a27] transition-colors"
              >
                <FaHome />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
