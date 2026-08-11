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
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
          Our Gallery
        </p>

        <h2 className="mt-4 text-center font-serif text-5xl text-zinc-900">
          Our Recent Work
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-[280px] overflow-hidden rounded-3xl"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}