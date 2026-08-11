import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/common/PageBanner";
import AboutStory from "@/components/about/AboutStory";
import MissionVision from "@/components/about/MissionVision";
import Founder from "@/components/about/Founder";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="About Us"
        subtitle="Discover the passion, artistry and dedication behind NOIR Beauty Studio."
      />
       <AboutStory />
       <MissionVision />
       <Founder />

      <Footer />
    </>
  );
}