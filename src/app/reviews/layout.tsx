export const metadata = {
  title:
    "Customer Reviews | SAS Roofing & Waterproofing in Brooklyn, Manhattan & Queens",
  description:
    "Read verified customer reviews for SAS Roofing & Waterproofing, proudly serving Brooklyn, Manhattan, and Queens. Discover why clients trust us for roofing and waterproofing projects.",
  keywords:
    "roofing reviews Brooklyn, waterproofing reviews Manhattan, Queens roofing contractors, SAS Roofing testimonials, best roofing company Brooklyn, trusted waterproofing Manhattan, customer reviews SAS Roofing, roofing services Queens NY, NYC waterproofing feedback, SAS Roofing client experiences",
  openGraph: {
    title:
      "Customer Reviews | SAS Roofing & Waterproofing in Brooklyn, Manhattan & Queens",
    description:
      "Read verified customer reviews for SAS Roofing & Waterproofing, proudly serving Brooklyn, Manhattan, and Queens. Discover why clients trust us for roofing and waterproofing projects.",
    url: "https://www.sasroofingwaterproofing.com/reviews.html",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
        alt: "SAS Roofing & Waterproofing",
      },
    ],
    type: "website",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
