import Image from "next/image";
import { Award, Sparkles, Star } from "lucide-react";

export default function Founder() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div className="relative mx-auto h-[650px] w-full max-w-[500px] overflow-hidden rounded-[40px]">

          <Image
            src="/images/hero/makeup-1.jpg"
            alt="Zehra Abbas"
            fill
            className="object-cover"
          />

        </div>

        {/* Content */}

        <div>

          <p className="uppercase tracking-[0.3em] text-[#B76E79] font-semibold">
            Meet The Founder
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight text-zinc-900">
            Natalia
          </h2>

          <p className="mt-2 text-xl text-[#B76E79]">
            Founder & Creative Director
          </p>

          <p className="mt-8 leading-8 text-zinc-600">
            Natalia has built one of Karachi's most admired beauty
            destinations by combining creativity, precision and luxury.
            Every makeover is designed to highlight natural beauty while
            giving every client an unforgettable experience.
          </p>

          <blockquote className="mt-8 border-l-4 border-[#B76E79] pl-6 italic text-2xl font-serif text-zinc-800">
            "Beauty isn't about changing yourself. It's about revealing
            the confidence that already exists within you."
          </blockquote>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-3 gap-6">

            <div className="text-center">
              <Award className="mx-auto mb-3 h-8 w-8 text-[#B76E79]" />
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm text-zinc-500">
                Years
              </p>
            </div>

            <div className="text-center">
              <Star className="mx-auto mb-3 h-8 w-8 text-[#B76E79]" />
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-sm text-zinc-500">
                Happy Clients
              </p>
            </div>

            <div className="text-center">
              <Sparkles className="mx-auto mb-3 h-8 w-8 text-[#B76E79]" />
              <h3 className="text-3xl font-bold">4.8★</h3>
              <p className="text-sm text-zinc-500">
                Google Rating
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}