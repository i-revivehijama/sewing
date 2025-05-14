import BackToTop from "@/components/BackToTop";
import BreadCrum2 from "@/components/BreadCrum2";
import Footer from "@/components/Footer";
import FooterTopCTA from "@/components/FooterTopCTA";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact";
import React from "react";
import StickyNavbar from "@/components/StickyNavbar";
import ContactBar from "@/components/ContactBar";

const page = () => {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <ContactBar />
      <BreadCrum2
        breadcrumbItems={[]}
        pageTitle={"Contact"}
        imageSrc={"/slider-1.jpg"}
      />
      <Contact />
      <FooterTopCTA />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
