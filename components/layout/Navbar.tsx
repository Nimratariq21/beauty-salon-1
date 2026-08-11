"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/common/logo";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-md border-b border-[#E8D7DB]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        <Logo />

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`group relative text-[15px] font-medium tracking-wide transition duration-300 ${
                scrolled
                  ? "text-[#2B2B2B] hover:text-[#77464d]"
                  : "text-[#daa0ab] hover:text-[#F3D8DE]"
              }`}
            >
              {link.name}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled
                    ? "bg-[#ca6171]"
                    : "bg-[#E6C3CA]"
                }`}
              />
            </Link>
          ))}
        </nav>
        <Link href= "/contact">
        <Button
          className={`hidden rounded-full px-7 py-6 transition-all duration-300 lg:flex ${
            scrolled
              ? "bg-[#bd5d6d] text-white hover:bg-[#bd6974]"
              : "bg-[#977682] backdrop-blur-md border border-[#d48b9b] text-[#d48b9b] hover:bg-white/30"
          }`}
        >
          Book Appointment
        </Button>
        </Link>

        <button
          className={`lg:hidden ${
            scrolled ? "text-[#2B2B2B]" : "text-[#d195a1]"
          }`}
        >
          <Menu />
        </button>

      </div>
    </header>
  );
}