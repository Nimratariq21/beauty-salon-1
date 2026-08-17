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
    <section className="bg-[#FCF8F6] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="mb-10 text-center sm:mb-12 lg:mb-16">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B76E79] sm:text-sm">
            Contact Us
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#241C1D] sm:mt-4 sm:text-5xl">
            We'd Love To Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6F6264] sm:mt-6 sm:text-base">
            Visit our salon, call us, or send us a message.
            We're here to help you look and feel your best.
          </p>

        </div>


        {/* =========================
            CONTACT + APPOINTMENT
        ========================== */}

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">


          {/* =========================
              LEFT: CONTACT INFO
          ========================== */}

          <div className="rounded-[28px] bg-white p-6 shadow-sm sm:rounded-[35px] sm:p-8 lg:p-10">

            <h3 className="font-serif text-2xl text-[#241C1D] sm:text-3xl">
              Get In Touch
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6F6264] sm:mt-4 sm:text-base">
              Have a question about our services or want to schedule
              your beauty session? We'd love to hear from you.
            </p>


            {/* Address */}

            <div className="mt-8 flex gap-4 sm:mt-10 sm:gap-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8E9EC] sm:h-12 sm:w-12">
                <MapPin className="h-5 w-5 text-[#B76E79]" />
              </div>

              <div>
                <h4 className="font-semibold text-[#241C1D]">
                  Address
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#6F6264] sm:text-base">
                  Z849, Block 6, P.E.C.H.S.
                  <br />
                  Karachi, Pakistan
                </p>
              </div>

            </div>


            {/* Phone */}

            <div className="mt-7 flex gap-4 sm:mt-8 sm:gap-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8E9EC] sm:h-12 sm:w-12">
                <Phone className="h-5 w-5 text-[#B76E79]" />
              </div>

              <div>
                <h4 className="font-semibold text-[#241C1D]">
                  Phone
                </h4>

                <p className="mt-2 text-sm text-[#6F6264] sm:text-base">
                  +92 3xx xxxxxxx
                </p>
              </div>

            </div>


            {/* Email */}

            <div className="mt-7 flex gap-4 sm:mt-8 sm:gap-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8E9EC] sm:h-12 sm:w-12">
                <Mail className="h-5 w-5 text-[#B76E79]" />
              </div>

              <div className="min-w-0">
                <h4 className="font-semibold text-[#241C1D]">
                  Email
                </h4>

                <p className="mt-2 break-all text-sm text-[#6F6264] sm:text-base">
                  NOIRBeautyStudio@gmail.com
                </p>
              </div>

            </div>


            {/* Opening Hours */}

            <div className="mt-7 flex gap-4 sm:mt-8 sm:gap-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8E9EC] sm:h-12 sm:w-12">
                <Clock className="h-5 w-5 text-[#B76E79]" />
              </div>

              <div>
                <h4 className="font-semibold text-[#241C1D]">
                  Opening Hours
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#6F6264] sm:text-base">
                  Monday - Sunday
                  <br />
                  11:00 AM - 7:00 PM
                </p>
              </div>

            </div>


            {/* Instagram */}

            <div className="mt-8 border-t border-[#EEE1E2] pt-7 sm:mt-10 sm:pt-8">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B76E79] sm:text-sm">
                Follow Us
              </p>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 text-lg font-serif text-[#241C1D] transition hover:text-[#B76E79] sm:text-xl"
              >
                <Instagram />
              </a>

            </div>

          </div>


          {/* =========================
              RIGHT: APPOINTMENT FORM
          ========================== */}

          <div className="rounded-[28px] border border-[#EBD8DC] bg-white p-6 shadow-sm sm:rounded-[35px] sm:p-8 lg:p-10">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B76E79] sm:text-sm">
              Book Appointment
            </p>

            <h3 className="mt-3 font-serif text-3xl text-[#241C1D] sm:mt-4 sm:text-4xl">
              Reserve Your Beauty Session
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6F6264] sm:mt-4 sm:text-base">
              Fill out the form below and our team will get back to
              you shortly.
            </p>


            {/* =========================
                WEB3FORMS
            ========================== */}

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="mt-7 space-y-5 sm:mt-8"
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

                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B76E79] sm:left-5" />

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="h-13 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] pl-12 pr-4 text-sm text-[#241C1D] outline-none transition focus:border-[#B76E79] sm:h-14 sm:pl-14 sm:pr-5 sm:text-base"
                  />

                </div>

              </div>


              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                  Email Address
                </label>

                <div className="relative">

                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B76E79] sm:left-5" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="h-13 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] pl-12 pr-4 text-sm text-[#241C1D] outline-none transition focus:border-[#B76E79] sm:h-14 sm:pl-14 sm:pr-5 sm:text-base"
                  />

                </div>

              </div>


              {/* Phone */}

              <div>

                <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                  Phone Number
                </label>

                <div className="relative">

                  <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B76E79] sm:left-5" />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    className="h-13 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] pl-12 pr-4 text-sm text-[#241C1D] outline-none transition focus:border-[#B76E79] sm:h-14 sm:pl-14 sm:pr-5 sm:text-base"
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
                  className="h-13 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] px-4 text-sm text-[#6F6264] outline-none transition focus:border-[#B76E79] sm:h-14 sm:px-5 sm:text-base"
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

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-medium text-[#241C1D]">
                    Preferred Date
                  </label>

                  <div className="relative">

                    <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B76E79] sm:left-5" />

                    <input
                      type="date"
                      name="date"
                      required
                      className="h-13 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] pl-12 pr-3 text-sm text-[#6F6264] outline-none focus:border-[#B76E79] sm:h-14 sm:pl-14 sm:pr-4 sm:text-base"
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
                    className="h-13 w-full rounded-full border border-[#E5D9DB] bg-[#FCF8F6] px-4 text-sm text-[#6F6264] outline-none focus:border-[#B76E79] sm:h-14 sm:px-5 sm:text-base"
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
                  className="w-full resize-none rounded-[22px] border border-[#E5D9DB] bg-[#FCF8F6] p-4 text-sm text-[#241C1D] outline-none transition focus:border-[#B76E79] sm:rounded-[25px] sm:p-5 sm:text-base"
                />

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="flex h-13 w-full items-center justify-center gap-3 rounded-full bg-[#B76E79] px-5 text-sm font-semibold text-white transition hover:bg-[#A85E69] sm:h-14 sm:text-base"
              >
                Send Appointment Request

                <Send className="h-4 w-4 shrink-0" />
              </button>

            </form>

          </div>

        </div>


        {/* =========================
            GOOGLE MAP
        ========================== */}

        <div className="mt-8 overflow-hidden rounded-[28px] bg-white shadow-sm sm:mt-10 sm:rounded-[35px] lg:mt-12">

          <iframe
            src="https://www.google.com/maps?q=block+6+PECHS+Karachi&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="h-[300px] w-full border-0 sm:h-[400px] lg:h-[450px]"
          />

        </div>

      </div>
    </section>
  );
}