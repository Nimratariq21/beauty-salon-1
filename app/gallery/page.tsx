import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";
import PageBanner from "@/components/common/PageBanner";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Our Gallery"
        subtitle="A collection of our finest bridal, makeup and beauty transformations."
      />

      <Gallery />
      <Footer />
    </>
  );
}