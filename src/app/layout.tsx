import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bevietnam",
});

export const metadata: Metadata = {
  title:
    "Trusted Roofing, Waterproofing & Masonry Services in Brooklyn, New York",
  description:
    "SAS Roofing & Waterproofing offers expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens. Call for quality construction solutions today!",
  keywords:
    "Roofing Contractors in Queens, Roofing Contractors Brooklyn, Roofing Contractors Manhattan, Waterproofing Services in Brooklyn, Masonry Services in Brooklyn, Roof Repair Manhattan, Roof Installation Brooklyn, Commercial Roofing in NYC, Foundation Waterproofing Manhattan",
  openGraph: {
    title: "Expert Roofing, Waterproofing & Masonry in Brooklyn & NYC",
    description:
      "SAS Roofing Waterproofing provides expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens.",
    url: "https://www.sasroofingwaterproofing.com/",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/og-image.jpg",
        width: 2500,
        height: 1330,
        alt: "SAS Roofing & Waterproofing",
      },
    ],
    siteName: "SAS Roofing & Waterproofing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Roofing, Waterproofing & Masonry in Brooklyn & NYC",
    description:
      "SAS Roofing Waterproofing provides expert roofing, waterproofing, and masonry services in Brooklyn, Manhattan, and Queens.",
    images: ["https://www.sasroofingwaterproofing.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bevietnam.variable}`}>
      <body className={`${inter.variable} ${bevietnam.variable}`}>
        {children}
      </body>
    </html>
  );
}
