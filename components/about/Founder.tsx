import Image from "next/image";
import { Award, Sparkles, Star } from "lucide-react";

export default function Founder() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-10">

        {/* Image */}
        <div className="relative mx-auto h-[460px] w-full max-w-[420px] overflow-hidden rounded-[30px] sm:h-[560px] sm:max-w-[500px] sm:rounded-[35px] lg:h-[650px] lg:rounded-[40px]">
          <Image
            src="/images/hero/makeup-1.jpg"
            alt="Zehra Abbas"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 500px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
            Meet The Founder
          </p>

          <h2 className="mt-3 font-serif text-4xl leading-tight text-zinc-900 sm:mt-4 sm:text-5xl">
            Natalia
          </h2>

          <p className="mt-2 text-lg text-[#B76E79] sm:text-xl">
            Founder & Creative Director
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">
            Natalia has built one of Karachi's most admired beauty
            destinations by combining creativity, precision and luxury.
            Every makeover is designed to highlight natural beauty while
            giving every client an unforgettable experience.
          </p>

          {/* Quote */}
          <blockquote className="mx-auto mt-7 max-w-2xl border-l-4 border-[#B76E79] pl-5 text-left text-xl font-serif italic text-zinc-800 sm:mt-8 sm:pl-6 sm:text-2xl lg:mx-0">
            "Beauty isn't about changing yourself. It's about revealing
            the confidence that already exists within you."
          </blockquote>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:mt-12 sm:gap-6">

            {/* Years */}
            <div className="text-center">
              <Award className="mx-auto mb-2 h-7 w-7 text-[#B76E79] sm:mb-3 sm:h-8 sm:w-8" />

              <h3 className="text-2xl font-bold sm:text-3xl">
                10+
              </h3>

              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Years
              </p>
            </div>

            {/* Clients */}
            <div className="text-center">
              <Star className="mx-auto mb-2 h-7 w-7 text-[#B76E79] sm:mb-3 sm:h-8 sm:w-8" />

              <h3 className="text-2xl font-bold sm:text-3xl">
                1000+
              </h3>

              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Happy Clients
              </p>
            </div>

            {/* Rating */}
            <div className="text-center">
              <Sparkles className="mx-auto mb-2 h-7 w-7 text-[#B76E79] sm:mb-3 sm:h-8 sm:w-8" />

              <h3 className="text-2xl font-bold sm:text-3xl">
                4.8★
              </h3>

              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Google Rating
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}