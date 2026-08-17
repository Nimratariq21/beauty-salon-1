"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  /* ----------------------------- */
  /* SCROLL DETECTION               */
  /* ----------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ----------------------------- */
  /* CLOSE MENU ON DESKTOP          */
  /* ----------------------------- */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ----------------------------- */
  /* LOCK BACKGROUND SCROLL         */
  /* ----------------------------- */

  useEffect(() => {
    if (menuOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ----------------------------- */
  /* CLOSE MENU                     */
  /* ----------------------------- */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E8D7DB] bg-white/95 shadow-md backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* ========================= */}
      {/* MAIN NAVBAR                */}
      {/* ========================= */}

      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-4 sm:h-[82px] sm:px-6 lg:h-[88px] lg:px-10">
        
        {/* LOGO */}

        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-[70] flex shrink-0 items-center"
        >
          <Logo />
        </Link>

        {/* ========================= */}
        {/* DESKTOP NAVIGATION         */}
        {/* ========================= */}

        <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`group relative whitespace-nowrap text-[15px] font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-[#2B2B2B] hover:text-[#B76E79]"
                  : "text-[#D79AA5] hover:text-[#F0C5CC]"
              }`}
            >
              {link.name}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled
                    ? "bg-[#B76E79]"
                    : "bg-[#E6B8C0]"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* ========================= */}
        {/* DESKTOP APPOINTMENT        */}
        {/* ========================= */}

        <Link
          href="/contact"
          className="hidden shrink-0 lg:block"
        >
          <Button
            className={`h-12 rounded-full px-6 font-medium transition-all duration-300 xl:px-7 ${
              scrolled
                ? "bg-[#BD5D6D] text-white hover:bg-[#A94F5F]"
                : "border border-[#D48B9B] bg-white/20 text-[#D48B9B] backdrop-blur-md hover:bg-white/40"
            }`}
          >
            Book Appointment
          </Button>
        </Link>

        {/* ========================= */}
        {/* MOBILE MENU BUTTON         */}
        {/* ========================= */}

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`relative z-[70] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
            scrolled
              ? "border-[#E8D7DB] bg-white text-[#B76E79]"
              : "border-[#D48B9B] bg-white/20 text-[#D48B9B] backdrop-blur-md"
          }`}
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* ========================= */}
      {/* MOBILE MENU                */}
      {/* ========================= */}

      <div
        className={`absolute inset-x-0 top-full z-[60] overflow-hidden border-b border-[#E8D7DB] bg-[#FFF9F7] shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[600px] opacity-100"
            : "invisible pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex w-full flex-col px-5 py-3 sm:px-6 sm:py-4">
          
          {/* MOBILE LINKS */}

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="flex min-h-[52px] w-full items-center border-b border-[#E8D7DB]/70 py-3 text-[16px] font-medium leading-none text-[#4A3035] transition-colors duration-200 hover:text-[#B76E79]"
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE BOOK APPOINTMENT */}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-5 block w-full"
          >
            <Button className="h-12 w-full rounded-full bg-[#BD5D6D] font-medium text-white hover:bg-[#A94F5F]">
              Book Appointment
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}