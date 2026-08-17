import Image from "next/image";
import { services } from "@/app/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#B76E79] sm:text-sm">
          Our Services
        </p>

        <h2 className="mt-3 text-center font-serif text-4xl text-zinc-900 sm:mt-4 sm:text-5xl">
          Beauty Services
        </h2>

        {/* Services Grid */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-xl sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600 sm:mt-3 sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}