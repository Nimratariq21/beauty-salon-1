import { testimonials } from "@/app/data/testimonials";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#FCF8F6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
          Testimonials
        </p>

        <h2 className="mt-4 text-center font-serif text-5xl text-zinc-900">
          What Our Clients Say
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex">
                {[...Array(item.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-zinc-600">
                {item.review}
              </p>

              <h3 className="mt-8 font-semibold text-zinc-900">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}