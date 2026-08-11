// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
// } from "lucide-react";
// import Instagram from "./Instagram";

// export default function Contact() {
//   return (
//     <section id="contact" className="bg-white py-28">
//       <div className="mx-auto max-w-7xl px-6">

//         <div className="mb-16 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
//             Contact Us
//           </p>

//           <h2 className="mt-4 font-serif text-5xl text-zinc-900">
//             We'd Love To Hear From You
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-zinc-600">
//             Visit our salon, call us, or connect with us on social media.
//             We're here to help you look and feel your best.
//           </p>
//         </div>

//         <div className="grid gap-12 lg:grid-cols-2">

//           {/* Contact Info */}

//           <div className="rounded-[40px] bg-[#FCF8F6] p-10">

//             <div className="space-y-8">

//               <div className="flex items-start gap-5">
//                 <MapPin className="mt-1 h-7 w-7 text-[#B76E79]" />
//                 <div>
//                   <h3 className="text-xl font-semibold">Address</h3>
//                   <p className="mt-2 text-zinc-600">
//                     Z173, Block 2, P.E.C.H.S.<br />
//                     Karachi, Pakistan
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-5">
//                 <Phone className="mt-1 h-7 w-7 text-[#B76E79]" />
//                 <div>
//                   <h3 className="text-xl font-semibold">Phone</h3>
//                   <p className="mt-2 text-zinc-600">
//                     +92 321 3314177
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-5">
//                 <Mail className="mt-1 h-7 w-7 text-[#B76E79]" />
//                 <div>
//                   <h3 className="text-xl font-semibold">Email</h3>
//                   <p className="mt-2 text-zinc-600">
//                     zehraabbassalon@gmail.com
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-5">
//                 <Clock className="mt-1 h-7 w-7 text-[#B76E79]" />
//                 <div>
//                   <h3 className="text-xl font-semibold">
//                     Opening Hours
//                   </h3>
//                   <p className="mt-2 text-zinc-600">
//                     Monday - Sunday
//                     <br />
//                     11:00 AM - 7:00 PM
//                   </p>
//                 </div>
//               </div>

//             </div>

//             <div className="mt-10 flex gap-4">

//               <a
//                 href="#"
//                 className="rounded-full border p-4 transition hover:bg-[#B76E79] hover:text-white"
//               >
//                 <Instagram />
//               </a>

//               <a
//                 href="#"
//                 className="rounded-full border p-4 transition hover:bg-[#B76E79] hover:text-white"
//               >
//                 {/* <Facebook /> */}
//               </a>

//             </div>

//           </div>

//           {/* Google Map */}

//           <div className="overflow-hidden rounded-[40px] shadow-xl">

//             <iframe
//               src="https://www.google.com/maps?q=Zehra+Abbas+PECHS+Karachi&output=embed"
//               width="100%"
//               height="650"
//               loading="lazy"
//               className="border-0"
//             />

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }




























"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Calendar,
  Send,
} from "lucide-react";
import Instagram from "./Instagram";

export default function Contact() {
  return (
    <section className="bg-[#FCF8F6] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
            Contact Us
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#241C1D] md:text-5xl">
            We'd Love To Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#6F6264]">
            Visit our salon, call us, or send us a message.
            We're here to help you look and feel your best.
          </p>

        </div>


        {/* =========================
            CONTACT + APPOINTMENT
        ========================== */}

        <div className="grid gap-10 lg:grid-cols-2">


          {/* =========================
              LEFT: CONTACT INFO
          ========================== */}

          <div className="rounded-[35px] bg-white p-8 shadow-sm md:p-10">

            <h3 className="font-serif text-3xl text-[#241C1D]">
              Get In Touch
            </h3>

            <p className="mt-4 leading-7 text-[#6F6264]">
              Have a question about our services or want to schedule
              your beauty session? We'd love to hear from you.
            </p>


            {/* Address */}

            <div className="mt-10 flex gap-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8E9EC]">
                <MapPin className="h-5 w-5 text-[#B76E79]" />
              </div>

              <div>
                <h4 className="font-semibold text-[#241C1D]">
                  Address
                </h4>

                <p className="mt-2 leading-6 text-[#6F6264]">
                  Z849, Block 6, P.E.C.H.S.
                  <br />
                  Karachi, Pakistan
                </p>
              </div>

            </div>


            {/* Phone */}

            <div className="mt-8 flex gap-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8E9EC]">
                <Phone className="h-5 w-5 text-[#B76E79]" />
              </div>

              <div>
                <h4 className="font-semibold text-[#241C1D]">
                  Phone
                </h4>

                <p className="mt-2 text-[#6F6264]">
                  +92 3xx xxxxxxx
                </p>
              </div>

            </div>


            {/* Email */}

            <div className="mt-8 flex gap-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8E9EC]">
                <Mail className="h-5 w-5 text-[#B76E79]" />
              </div>

              <div>
                <h4 className="font-semibold text-[#241C1D]">
                  Email
                </h4>

                <p className="mt-2 break-all text-[#6F6264]">
                  NOIRBeautyStudio@gmail.com
                </p>
              </div>

            </div>


            {/* Opening Hours */}

            <div className="mt-8 flex gap-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8E9EC]">
                <Clock className="h-5 w-5 text-[#B76E79]" />
              </div>

              <div>
                <h4 className="font-semibold text-[#241C1D]">
                  Opening Hours
                </h4>

                <p className="mt-2 leading-6 text-[#6F6264]">
                  Monday - Sunday
                  <br />
                  11:00 AM - 7:00 PM
                </p>
              </div>

            </div>


            {/* Instagram */}

            <div className="mt-10 border-t border-[#EEE1E2] pt-8">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
                Follow Us
              </p>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 text-xl font-serif text-[#241C1D] transition hover:text-[#B76E79]"
              >
                <Instagram />
               
              </a>

            </div>

          </div>


          {/* =========================
              RIGHT: APPOINTMENT FORM
          ========================== */}

          <div className="rounded-[35px] border border-[#EBD8DC] bg-white p-8 shadow-sm md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
              Book Appointment
            </p>

            <h3 className="mt-4 font-serif text-4xl text-[#241C1D]">
              Reserve Your Beauty Session
            </h3>

            <p className="mt-4 leading-7 text-[#6F6264]">
              Fill out the form below and our team will get back to
              you shortly.
            </p>


            {/* =========================
                WEB3FORMS
            ========================== */}

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="mt-8 space-y-5"
            >

              {/* Web3Forms Access Key */}

              <input
                type="hidden"
                name="access_key"
                value="7bf39d33-e553-4ef5-be60-65bcf44618b2"
              />

              {/* Email Subject */}

              <input
                type="hidden"
                name="subject"
                value="New Appointment Request - Zehra Abbas Salon"
              />

              {/* From Name */}

              <input
                type="hidden"
                name="from_name"
                value="Zehra Abbas Salon Website"
              />


              {/* Full Name */}

              <div>

                <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                  Full Name
                </label>

                <div className="relative">

                  <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B76E79]" />

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="h-14 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] pl-14 pr-5 text-[#241C1D] outline-none transition focus:border-[#B76E79]"
                  />

                </div>

              </div>


              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                  Email Address
                </label>

                <div className="relative">

                  <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B76E79]" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="h-14 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] pl-14 pr-5 text-[#241C1D] outline-none transition focus:border-[#B76E79]"
                  />

                </div>

              </div>


              {/* Phone */}

              <div>

                <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                  Phone Number
                </label>

                <div className="relative">

                  <Phone className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B76E79]" />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    className="h-14 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] pl-14 pr-5 text-[#241C1D] outline-none transition focus:border-[#B76E79]"
                  />

                </div>

              </div>


              {/* Service */}

              <div>

                <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                  Select Service
                </label>

                <select
                  name="service"
                  required
                  className="h-14 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] px-5 text-[#6F6264] outline-none transition focus:border-[#B76E79]"
                >

                  <option value="">
                    Choose a service
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

              </div>


              {/* Date + Time */}

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                    Preferred Date
                  </label>

                  <div className="relative">

                    <Calendar className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B76E79]" />

                    <input
                      type="date"
                      name="date"
                      required
                      className="h-14 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] pl-14 pr-4 text-[#6F6264] outline-none focus:border-[#B76E79]"
                    />

                  </div>

                </div>


                <div>

                  <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                    Preferred Time
                  </label>

                  <input
                    type="time"
                    name="time"
                    required
                    className="h-14 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] px-5 text-[#6F6264] outline-none focus:border-[#B76E79]"
                  />

                </div>

              </div>


              {/* Message */}

              <div>

                <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your appointment..."
                  className="w-full resize-none rounded-[25px] border border-[#E5D9DB] bg-[#FCF8F6] p-5 text-[#241C1D] outline-none transition focus:border-[#B76E79]"
                />

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#B76E79] font-semibold text-white transition hover:bg-[#A85E69]"
              >
                Send Appointment Request

                <Send className="h-4 w-4" />

              </button>

            </form>

          </div>

        </div>


        {/* =========================
            GOOGLE MAP
        ========================== */}

        <div className="mt-12 overflow-hidden rounded-[35px] bg-white shadow-sm">

          <iframe
            src="https://www.google.com/maps?q=block+6+PECHS+Karachi&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />

        </div>

      </div>
    </section>
  );
}