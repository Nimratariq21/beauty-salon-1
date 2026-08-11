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
    <section className="relative flex h-[460px] items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] bg-cover bg-center scale-110" />

        {/* Luxury Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1718]/95 via-[#2B1F23]/85 to-[#1A1718]/95" />

        {/* Rose Gold Glow */}
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#B76E79]/20 blur-[140px]" />

        {/* Golden Glow */}
        <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#D8B98A]/20 blur-[140px]" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
      <div className="absolute right-0 top-0 h-full w-px bg-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <span className="inline-flex rounded-full border border-[#B76E79]/40 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[#F4D2D8] backdrop-blur-md">
          Luxury Beauty Salon
        </span>

        <h1 className="mt-8 font-serif text-5xl font-semibold tracking-tight text-white md:text-7xl">
          {title}
        </h1>

        <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#B76E79] to-transparent" />

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          {subtitle}
        </p>

        {/* Breadcrumb */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-zinc-300">

          <Link
            href="/"
            className="transition duration-300 hover:text-[#F4D2D8]"
          >
            Home
          </Link>

          <ChevronRight
            size={16}
            className="text-[#B76E79]"
          />

          <span className="font-medium text-white">
            {title}
          </span>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-[#FCF8F6] to-transparent" />

    </section>
  );
}