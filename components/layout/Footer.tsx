import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Bridal Makeup",
  "Hair Styling",
  "Hair Color",
  "Facial",
  "Spa",
];

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="font-serif text-4xl">
             NOIR
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Luxury Beauty Salon in Karachi offering premium bridal makeup,
              hairstyling, skincare and spa services.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://www.instagram.com"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all hover:border-[#B76E79] hover:bg-[#B76E79]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all hover:border-[#B76E79] hover:bg-[#B76E79]"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://wa.me"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all hover:border-[#25D366] hover:bg-[#25D366]"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-zinc-400 transition hover:text-[#B76E79]"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Services
            </h3>

            <div className="space-y-4 text-zinc-400">

              {services.map((service) => (
                <p key={service}>
                  {service}
                </p>
              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-3">

                <MapPin className="mt-1 h-5 w-5 text-[#B76E79]" />

                <p className="text-zinc-400">
                  Z849 Block 6 PECHS,
                  <br />
                  Karachi, Pakistan
                </p>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="h-5 w-5 text-[#B76E79]" />

                <p className="text-zinc-400">
                  +92 3xxxxxxxxx
                </p>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="h-5 w-5 text-[#B76E79]" />

                <p className="text-zinc-400">
                  NOIRBeautyStudio@gmail.com
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <p className="text-center text-sm text-zinc-500">
            © 2026 NOIR Beauty Salon. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}