import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import PageBanner from "@/components/common/PageBanner";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
       <PageBanner
        title="Our Services"
        subtitle="Luxury beauty treatments designed to enhance your natural elegance."
      />

      <Services />
      <Footer />
    </>
  );
}