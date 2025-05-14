"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    href: "tel:13472216549",
    label: "Call SAS Roofing",
    icon: <Phone size={24} />,
    text: "Phone",
  },
  {
    href: "https://maps.google.com/?cid=6135882278024640728&entry=gps&g_st=aw",
    label: "View SAS Roofing location on Google Maps",
    icon: <MapPin size={24} />,
    text: "Location",
    external: true,
  },
  {
    href: "mailto:sascon09@yahoo.com?subject=Inquiry&body=Hi%20SAS%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about...",
    label: "Email SAS Roofing",
    icon: <Mail size={24} />,
    text: "Email",
  },
];

const ContactBar: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Contact bar"
    className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-white bg-[#dc0000] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
  >
    {contactItems.map(({ href, label, icon, text, external }, index) => (
      <Link
        key={index}
        href={href}
        aria-label={label}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="flex flex-col items-center justify-center py-3 hover:bg-[#e63a27] transition-colors font-inter"
      >
        {icon}
        <span className="text-xs font-semibold mt-1">{text}</span>
      </Link>
    ))}
  </nav>
);

export default ContactBar;
