import Image from "next/image";

const images = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.jpg",
  "/images/gallery/gallery-9.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#B76E79] sm:text-sm">
          Our Gallery
        </p>

        <h2 className="mt-3 text-center font-serif text-4xl text-zinc-900 sm:mt-4 sm:text-5xl">
          Our Recent Work
        </h2>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-[300px] overflow-hidden rounded-2xl sm:h-[280px] sm:rounded-3xl lg:h-[320px]"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}