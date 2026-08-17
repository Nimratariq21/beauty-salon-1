import { Sparkles, HeartHandshake } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#FCF8F6] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B76E79] sm:text-sm">
            Our Purpose
          </p>

          <h2 className="mt-3 font-serif text-4xl text-zinc-900 sm:mt-4 sm:text-5xl">
            Mission & Vision
          </h2>

        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">

          {/* Mission */}
          <div className="rounded-[28px] bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[35px] sm:p-8 lg:p-10">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#B76E79]/10 sm:mb-6 sm:h-16 sm:w-16">
              <HeartHandshake className="h-7 w-7 text-[#B76E79] sm:h-8 sm:w-8" />
            </div>

            <h3 className="font-serif text-2xl text-zinc-900 sm:text-3xl">
              Our Mission
            </h3>

            <p className="mt-4 text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">
              To provide every client with a luxurious beauty experience,
              combining exceptional artistry, premium products and
              personalized care that enhances confidence and elegance.
            </p>

          </div>

          {/* Vision */}
          <div className="rounded-[28px] bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[35px] sm:p-8 lg:p-10">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#B76E79]/10 sm:mb-6 sm:h-16 sm:w-16">
              <Sparkles className="h-7 w-7 text-[#B76E79] sm:h-8 sm:w-8" />
            </div>

            <h3 className="font-serif text-2xl text-zinc-900 sm:text-3xl">
              Our Vision
            </h3>

            <p className="mt-4 text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">
              To become Karachi's most trusted luxury beauty destination,
              known for creativity, innovation and unforgettable client
              experiences.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}