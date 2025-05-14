"use client";
import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

interface ContactItem {
  icon: ReactNode;
  title: string;
  desc: string;
  content: string;
}

interface ContactCardProps {
  item: ContactItem;
  index: number;
  cardStyle: string;
  cardShadowStyle: CSSProperties;
  iconTab: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  item,
  index,
  cardStyle,
  cardShadowStyle,
  iconTab,
}) => {
  return (
    <motion.div
      className={cardStyle}
      style={cardShadowStyle}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className={iconTab}>{item.icon}</div>

      <div className="mt-2 space-y-1">
        <h3 className="text-[#003269] font-semibold text-xl group-hover:text-white font-inter">
          {item.title}
        </h3>

        <p className="italic text-gray-600 group-hover:text-gray-300 font-bevietnam">
          {item.desc}
        </p>

        <p className="text-gray-500 font-medium whitespace-pre-line group-hover:text-gray-300 font-bevietnam">
          {item.content}
        </p>
      </div>
    </motion.div>
  );
};

export default ContactCard;
