// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Calendar,
//   Clock,
//   Mail,
//   Phone,
//   User,
// } from "lucide-react";

// export default function BookAppointment() {
//   return (
//     <section className="bg-[#FCF8F6] py-28">
//       <div className="mx-auto max-w-7xl px-6">

//         <div className="mb-16 text-center">

//           <p className="text-sm uppercase tracking-[0.3em] text-[#B76E79] font-semibold">
//             Book Appointment
//           </p>

//           <h2 className="mt-4 font-serif text-5xl">
//             Reserve Your Beauty Session
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-zinc-600">
//             Schedule your appointment with our beauty experts and
//             experience premium makeup, hairstyling and skincare services.
//           </p>

//         </div>

//         <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.08)]">

//           <div className="grid lg:grid-cols-2">

//             {/* Left */}

//             <div className="p-10 lg:p-14">

//               <div className="grid gap-6">

//                 <div className="relative">

//                   <User className="absolute left-5 top-4 h-5 w-5 text-zinc-400"/>

//                   <input
//                     placeholder="Full Name"
//                     className="h-14 w-full rounded-full border pl-14 pr-5 outline-none focus:border-[#B76E79]"
//                   />

//                 </div>

//                 <div className="relative">

//                   <Phone className="absolute left-5 top-4 h-5 w-5 text-zinc-400"/>

//                   <input
//                     placeholder="Phone Number"
//                     className="h-14 w-full rounded-full border pl-14 pr-5 outline-none focus:border-[#B76E79]"
//                   />

//                 </div>

//                 <div className="relative">

//                   <Mail className="absolute left-5 top-4 h-5 w-5 text-zinc-400"/>

//                   <input
//                     placeholder="Email"
//                     className="h-14 w-full rounded-full border pl-14 pr-5 outline-none focus:border-[#B76E79]"
//                   />

//                 </div>

//                 <select className="h-14 rounded-full border px-6 outline-none focus:border-[#B76E79]">

//                   <option>Select Service</option>

//                   <option>Bridal Makeup</option>

//                   <option>Hair Styling</option>

//                   <option>Facial</option>

//                   <option>Spa</option>

//                   <option>Hair Color</option>

//                 </select>

//                 <div className="grid gap-5 md:grid-cols-2">

//                   <div className="relative">

//                     <Calendar className="absolute left-5 top-4 h-5 w-5 text-zinc-400"/>

//                     <input
//                       type="date"
//                       className="h-14 w-full rounded-full border pl-14 pr-5 outline-none"
//                     />

//                   </div>

//                   <div className="relative">

//                     <Clock className="absolute left-5 top-4 h-5 w-5 text-zinc-400"/>

//                     <input
//                       type="time"
//                       className="h-14 w-full rounded-full border pl-14 pr-5 outline-none"
//                     />

//                   </div>

//                 </div>

//                 <textarea
//                   rows={5}
//                   placeholder="Tell us about your appointment..."
//                   className="rounded-3xl border p-5 outline-none focus:border-[#B76E79]"
//                 />

//                 <Button className="h-14 rounded-full bg-[#B76E79] hover:bg-[#a45d67]">
//                   Confirm Booking
//                 </Button>

//               </div>

//             </div>

//             {/* Right */}

//             <div className="relative hidden lg:block">

//               <Image
//                 src="/images/gallery/salon-2.jpg"
//                 alt="Appointment"
//                 fill
//                 className="object-cover"
//               />

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }




































"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "7bf39d33-e553-4ef5-be60-65bcf44618b2";

export default function BookAppointment() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      "New Beauty Appointment Request - Zehra Abbas Salon"
    );
    formData.append("from_name", "Zehra Abbas Salon Website");

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus(
          "Your appointment request has been sent successfully. We will contact you shortly."
        );

        form.reset();
      } else {
        setStatus(
          result.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);

      setStatus(
        "Unable to send your request right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#FCF8F6] px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
            Book Appointment
          </p>

          <h2 className="mt-4 font-serif text-4xl text-zinc-900 md:text-5xl lg:text-6xl">
            Reserve Your Beauty Session
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600">
            Schedule your appointment with our beauty experts and
            experience premium makeup, hairstyling and skincare
            services.
          </p>

        </div>

        {/* Appointment Card */}
        <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.08)]">

          <div className="grid lg:grid-cols-2">

            {/* LEFT: FORM */}
            <div className="p-8 md:p-10 lg:p-14">

              <form
                onSubmit={handleSubmit}
                className="grid gap-6"
              >

                {/* Full Name */}
                <div className="relative">

                  <User
                    className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="h-14 w-full rounded-full border border-zinc-200 bg-white pl-14 pr-5 text-zinc-800 outline-none transition focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/10"
                  />

                </div>

                {/* Phone */}
                <div className="relative">

                  <Phone
                    className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="h-14 w-full rounded-full border border-zinc-200 bg-white pl-14 pr-5 text-zinc-800 outline-none transition focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/10"
                  />

                </div>

                {/* Email */}
                <div className="relative">

                  <Mail
                    className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="h-14 w-full rounded-full border border-zinc-200 bg-white pl-14 pr-5 text-zinc-800 outline-none transition focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/10"
                  />

                </div>

                {/* Service */}
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="h-14 w-full rounded-full border border-zinc-200 bg-white px-6 text-zinc-700 outline-none transition focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/10"
                >
                  <option value="" disabled>
                    Select Service
                  </option>

                  <option value="Bridal Makeup">
                    Bridal Makeup
                  </option>

                  <option value="Party Makeup">
                    Party Makeup
                  </option>

                  <option value="Hair Styling">
                    Hair Styling
                  </option>

                  <option value="Facial">
                    Facial
                  </option>

                  <option value="Spa">
                    Spa
                  </option>

                  <option value="Hair Color">
                    Hair Color
                  </option>
                </select>

                {/* Date + Time */}
                <div className="grid gap-5 md:grid-cols-2">

                  {/* Date */}
                  <div className="relative">

                    <Calendar
                      className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      type="date"
                      name="date"
                      required
                      className="h-14 w-full rounded-full border border-zinc-200 bg-white pl-14 pr-5 text-zinc-700 outline-none transition focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/10"
                    />

                  </div>

                  {/* Time */}
                  <div className="relative">

                    <Clock
                      className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                    />

                    <input
                      type="time"
                      name="time"
                      required
                      className="h-14 w-full rounded-full border border-zinc-200 bg-white pl-14 pr-5 text-zinc-700 outline-none transition focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/10"
                    />

                  </div>

                </div>

                {/* Message */}
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your appointment..."
                  className="w-full resize-none rounded-[25px] border border-zinc-200 bg-white p-5 text-zinc-800 outline-none transition focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/10"
                />

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-14 w-full rounded-full bg-[#B76E79] text-white transition hover:bg-[#A45D67] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Sending Request..."
                    : "Confirm Booking"}
                </Button>

                {/* Status */}
                {status && (
                  <div
                    className={`rounded-2xl px-5 py-4 text-center text-sm ${
                      status.includes("successfully")
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {status}
                  </div>
                )}

              </form>

            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative hidden min-h-[650px] lg:block">

              <Image
                src="/images/gallery/salon-2.jpg"
                alt="Luxury beauty appointment"
                fill
                className="object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Image Text */}
              <div className="absolute bottom-10 left-10 right-10 text-white">

                <p className="text-sm uppercase tracking-[0.3em] text-[#F0C7CE]">
                  Zehra Abbas Beauty Salon
                </p>

                <h3 className="mt-3 font-serif text-4xl">
                  Your Beauty,
                  <br />
                  Our Passion.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                  Experience personalized beauty services crafted
                  with elegance, care and attention to every detail.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}