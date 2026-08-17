import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle: string;
}

export default function PageBanner({
  title,
  subtitle,
}: PageBannerProps) {
  return (
    <section
      className="
        relative isolate flex min-h-[460px] w-full
        items-center justify-center
        overflow-hidden
        pt-[76px]
        sm:pt-[82px]
        lg:min-h-[500px]
        lg:pt-[88px]
      "
    >
      {/* ============================= */}
      {/* BACKGROUND IMAGE               */}
      {/* ============================= */}

      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute inset-0
            scale-105
            bg-[url('/images/hero/hero-1.jpg')]
            bg-cover
            bg-center
          "
        />

        {/* Luxury Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1718]/95 via-[#2B1F23]/85 to-[#1A1718]/95" />

        {/* Rose Gold Glow */}
        <div
          className="
            absolute
            -left-40
            top-10
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#B76E79]/20
            blur-[120px]
            sm:h-[420px]
            sm:w-[420px]
          "
        />

        {/* Golden Glow */}
        <div
          className="
            absolute
            -right-32
            bottom-0
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#D8B98A]/20
            blur-[120px]
            sm:h-[380px]
            sm:w-[380px]
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* ============================= */}
      {/* DECORATIVE LINES               */}
      {/* ============================= */}

      <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
      <div className="absolute right-0 top-0 h-full w-px bg-white/10" />

      {/* ============================= */}
      {/* CONTENT                        */}
      {/* ============================= */}

      <div
        className="
          relative z-10
          mx-auto
          w-full
          max-w-4xl
          px-5
          py-14
          text-center
          sm:px-6
          sm:py-16
        "
      >
        {/* Luxury Beauty Salon */}

        <span
          className="
            inline-flex
            max-w-full
            items-center
            justify-center
            rounded-full
            border
            border-[#B76E79]/40
            bg-white/10
            px-4
            py-2
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#F4D2D8]
            backdrop-blur-md
            sm:px-5
            sm:text-xs
            sm:tracking-[0.35em]
          "
        >
          Luxury Beauty Salon
        </span>

        {/* Page Title */}

        <h1
          className="
            mt-6
            font-serif
            text-4xl
            font-semibold
            leading-tight
            tracking-tight
            text-white
            sm:mt-8
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          {title}
        </h1>

        {/* Decorative Line */}

        <div
          className="
            mx-auto
            mt-5
            h-[2px]
            w-20
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#B76E79]
            to-transparent
            sm:mt-6
            sm:w-24
          "
        />

        {/* Subtitle */}

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            px-2
            text-sm
            leading-7
            text-zinc-300
            sm:mt-8
            sm:px-0
            sm:text-base
            sm:leading-8
            lg:text-lg
          "
        >
          {subtitle}
        </p>

        {/* ============================= */}
        {/* BREADCRUMB                     */}
        {/* ============================= */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            text-xs
            text-zinc-300
            sm:mt-10
            sm:text-sm
          "
        >
          <Link
            href="/"
            className="transition duration-300 hover:text-[#F4D2D8]"
          >
            Home
          </Link>

          <ChevronRight
            size={15}
            className="shrink-0 text-[#B76E79]"
          />

          <span className="max-w-[70vw] truncate font-medium text-white sm:max-w-none">
            {title}
          </span>
        </div>
      </div>

      {/* ============================= */}
      {/* BOTTOM FADE                    */}
      {/* ============================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-20
          w-full
          bg-gradient-to-t
          from-[#FCF8F6]
          to-transparent
          sm:h-28
        "
      />
    </section>
  );
}