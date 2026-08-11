import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookAppointment from "@/components/sections/BookAppointment";
import PageBanner from "@/components/common/PageBanner";

export default function AppointmentPage() {
  return (
    <>
      <Navbar />
       <PageBanner
        title="Book Appointment"
        subtitle="Reserve your appointment with our professional beauty experts."
      />

      <BookAppointment />
      <Footer />
    </>
  );
}