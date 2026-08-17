import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-10">

        {/* Image */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-[30px] sm:h-[520px] sm:rounded-[35px] lg:h-[600px] lg:rounded-[40px]">
          <Image
            src="/images/hero/Editorial-1.jpg"
            alt="Zehra Abbas Salon"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
            Our Story
          </p>

          <h2 className="font-serif text-4xl leading-tight text-zinc-900 sm:text-5xl">
            Where Beauty Meets Elegance
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-9 lg:mx-0">
            NOIR Beauty Studio was founded with a passion for creating
            unforgettable beauty experiences. Every client is treated with
            personalized care, premium products, and exceptional artistry.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-9 lg:mx-0">
            From bridal transformations to luxurious hair and skincare
            treatments, our mission is to make every woman feel confident,
            beautiful and celebrated.
          </p>

        </div>

      </div>
    </section>
  );
}