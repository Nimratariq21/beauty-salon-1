import { Sparkles, HeartHandshake } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#FCF8F6] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
            Our Purpose
          </p>

          <h2 className="mt-4 font-serif text-5xl text-zinc-900">
            Mission & Vision
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Mission */}

          <div className="rounded-[35px] bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#B76E79]/10">
              <HeartHandshake className="h-8 w-8 text-[#B76E79]" />
            </div>

            <h3 className="text-3xl font-serif">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-zinc-600">
              To provide every client with a luxurious beauty experience,
              combining exceptional artistry, premium products and
              personalized care that enhances confidence and elegance.
            </p>

          </div>

          {/* Vision */}

          <div className="rounded-[35px] bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#B76E79]/10">
              <Sparkles className="h-8 w-8 text-[#B76E79]" />
            </div>

            <h3 className="text-3xl font-serif">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-zinc-600">
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