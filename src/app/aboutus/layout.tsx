export const metadata = {
  title: "Emergency Roofing Contractor Available 24/7 in Brooklyn, NY",
  description:
    "SAS Roofing & Waterproofing – Your 24/7 roofing and waterproofing contractor serving Brooklyn, Manhattan, and Queens. We offer emergency roof repair, leak repair, and flat roof services anytime.",
  keywords:
    "24/7 roofing contractor Brooklyn, emergency roof repair Manhattan, waterproofing services Queens NY, licensed roofer Brooklyn NY, flat roof waterproofing Manhattan, roof leak repair Queens, commercial roofing contractor NYC, residential roof repair Brooklyn, basement waterproofing Queens, 24/7 emergency roofing NYC",
  openGraph: {
    title: "Emergency Roofing Contractor Available 24/7 in Brooklyn, NY",
    description:
      "SAS Roofing & Waterproofing – Your 24/7 roofing and waterproofing contractor serving Brooklyn, Manhattan, and Queens. We offer emergency roof repair, leak repair, and flat roof services anytime.",
    url: "https://www.sasroofingwaterproofing.com/aboutus.html",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
        alt: "SAS Roofing & Waterproofing",
      },
    ],
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Optional: Add a wrapper div or styling here */}
      {children}
    </div>
  );
}
