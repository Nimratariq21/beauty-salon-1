import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div className="relative h-[600px] overflow-hidden rounded-[40px]">
          <Image
            src="/images/hero/Editorial-1.jpg"
            alt="Zehra Abbas Salon"
            fill
            className="object-cover"
          />
        </div>

        <div>

          <p className="mb-3 uppercase tracking-[0.3em] text-[#B76E79] font-semibold">
            Our Story
          </p>

          <h2 className="font-serif text-5xl leading-tight text-zinc-900">
            Where Beauty Meets Elegance
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-600">
            NOIR Beauty Studio was founded with a passion for creating
            unforgettable beauty experiences. Every client is treated with
            personalized care, premium products, and exceptional artistry.
          </p>

          <p className="mt-6 text-lg leading-9 text-zinc-600">
            From bridal transformations to luxurious hair and skincare
            treatments, our mission is to make every woman feel confident,
            beautiful and celebrated.
          </p>

        </div>

      </div>
    </section>
  );
}