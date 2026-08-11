import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import PageBanner from "@/components/common/PageBanner";

export default function ContactPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Banner */}
      <PageBanner
        title="Contact Us"
        subtitle="We're here to answer your questions and help you book your next beauty experience."
      />

      {/* Contact + Appointment + Map */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}