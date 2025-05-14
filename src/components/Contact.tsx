"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";

const ContactCard = dynamic(() => import("./ContactCard"), { ssr: false });

const Contact = () => {
  const baseClass = `
    group bg-white p-6 pt-10 text-sm w-full lg:w-1/4
    flex flex-col gap-2 relative border border-gray-100
    hover:bg-black transition-colors duration-1000 ease-in-out
  `;

  const iconTab = `
    absolute top-[-16px] w-12 h-12 bg-[#e63a27] flex items-center justify-center
    before:content-[''] before:absolute before:top-0 before:right-0
    before:w-0 before:h-0 before:border-t-[16px] before:border-t-transparent
    before:border-l-[16px] before:border-l-red-900
    before:translate-x-[16px] before:-translate-y-[1px] font-inter
  `;

  const shadowStyle = {
    boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.1)",
    backgroundImage: "url(thm-pattern-5.png)",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
  };

  const contactItems = [
    {
      icon: <MapPin className="text-white w-6 h-6" />,
      title: "Visit Our Office",
      desc: "You are most welcome to visit our office.",
      content: "552 Rugby Rd\nBrooklyn NY 11230",
    },
    {
      icon: <Phone className="text-white w-6 h-6" />,
      title: "Make a Call",
      desc: "Keeping you always better connected.",
      content: "OFFICE: (347) 394-9384\nCELL: (347) 221-6549",
    },
    {
      icon: <Mail className="text-white w-6 h-6" />,
      title: "Send Email",
      desc: "Drop us a mail we will answer you asap.",
      content: "SUPPORT: sascon09@yahoo.com\nSUPPORT: amzadh78@gmail.com",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4 py-10 my-16 bg-white">
      {contactItems.map((item, index) => (
        <ContactCard
          key={index}
          item={item}
          index={index}
          cardStyle={baseClass}
          cardShadowStyle={shadowStyle}
          iconTab={iconTab}
        />
      ))}
    </section>
  );
};

export default Contact;
