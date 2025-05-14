import AboutCompany from "@/components/AboutCompany";
import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import ContactBar from "@/components/ContactBar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import StickyNavbar from "@/components/StickyNavbar";
import React from "react";

const page = () => {
  const mvalue = [0, 0, 0];
  return (
    <>
      <Navbar />
      <ContactBar />
      <StickyNavbar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle={"About Us"}
        imageSrc={"/slider-1.jpg"}
      />
      <AboutCompany />
      <Features margin={mvalue} />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
