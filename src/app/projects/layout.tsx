export const metadata = {
  title: "Roofing & Waterproofing Projects | SAS Roofing & Waterproofing",
  description:
    "Explore completed roofing and waterproofing projects by SAS Roofing & Waterproofing in New York. View our expert work in residential and commercial buildings.",
  keywords:
    "roofing projects Brooklyn, waterproofing contractors Brooklyn, roof repair Manhattan, commercial roofing Manhattan, residential roofing Queens, waterproofing services Queens, flat roof repair Brooklyn, roof waterproofing Manhattan, Queens roofing contractors, Brooklyn Manhattan Queens roofing projects",
  openGraph: {
    title: "Roofing & Waterproofing Projects | SAS Roofing & Waterproofing",
    description:
      "Explore completed roofing and waterproofing projects by SAS Roofing & Waterproofing in New York. View our expert work in residential and commercial buildings.",
    url: "https://www.sasroofingwaterproofing.com/projects.html",
    images: [
      {
        url: "https://www.sasroofingwaterproofing.com/assets/images/resources/Logo-SAS.png",
        alt: "SAS Roofing & Waterproofing",
      },
    ],
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
