import Image from "next/image";

const images = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-7.jpg",
];

export default function Instagram() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="mt-4 text-center text-5xl font-serif text-[#B76E79]">
          @NOIR Beauty Studio
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {images.map((image) => (
            <div
              key={image}
              className="relative h-80 overflow-hidden rounded-3xl group cursor-pointer"
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}