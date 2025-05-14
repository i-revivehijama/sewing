import Link from "next/link";
import { FiExternalLink, FiHeart, FiFolder, FiShare2 } from "react-icons/fi";

interface Slide {
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function BlogSlideCard({ slide }: { slide: Slide }) {
  // const [day, month] = slide.date.split(" ");

  return (
    <div className="relative w-full h-[400px] rounded-sm shadow-md overflow-hidden flex flex-col font-inter">
      {/* Background image with overlay */}
      <div className="relative flex-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        {/* Date Badge
        <div className="absolute top-3 right-3 bg-[#ef4423] text-white px-2 py-1 rounded-sm text-center leading-none">
          <div className="text-2xl font-extrabold">{day}</div>
          <div className="text-xs font-semibold uppercase">{month}</div>
        </div> */}

        {/* Title & Category */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 text-left text-white">
          <div className="flex items-center gap-2 text-[#e63a27] text-xs font-semibold uppercase tracking-wide">
            <FiFolder className="w-4 h-4" />
            {slide.description}
          </div>
          <div className="font-bold text-base sm:text-lg md:text-xl leading-tight drop-shadow-md">
            {slide.title}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="bg-white px-4 py-3 flex justify-between items-center border-t border-gray-200 text-sm">
        <Link
          href="/"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-bold text-[#003269] text-sm"
        >
          <FiExternalLink className="w-4 h-4" />
          MORE DETAILS
        </Link>
        <div className="flex items-center gap-4 text-gray-500">
          <button className="flex items-center gap-1 hover:text-[#e63a27] transition-colors">
            <FiHeart className="w-4 h-4" />
            <span>10</span>
          </button>
          <button className="hover:text-[#e63a27] transition-colors">
            <FiShare2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
