import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FCF8F6] pt-32">
      {/* Background Effects */}
      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-[#B76E79]/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D8B98A]/15 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div className="max-w-xl">
          <span className="inline-flex rounded-full border border-[#E8D7DB] bg-white px-5 py-2 text-sm font-medium text-[#B76E79] shadow-sm">
            Luxury Beauty Studio • Karachi
          </span>

          <h1 className="mt-8 font-serif text-[70px] font-medium leading-[0.95] tracking-tight text-[#1F1F1F]">
            Beauty
            <br />
            Beyond
            <br />
            Expectations
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            Discover timeless elegance through luxury bridal makeup,
            flawless hairstyling, rejuvenating skin treatments and
            personalized beauty experiences crafted just for you.
          </p>

          {/* Buttons */}
         <div className="mt-10 flex flex-wrap gap-4">
  <Link href="/appointment">
    <Button className="h-14 rounded-full bg-[#B76E79] px-8 text-white transition-all duration-300 hover:scale-105 hover:bg-[#a95e69]">
      Book Appointment
    </Button>
  </Link>

  <Link href="/services">
    <Button
      variant="outline"
      className="h-14 rounded-full border-zinc-300 bg-white px-8 transition-all duration-300 hover:scale-105 hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white"
    >
      Explore Services
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </Link>
</div>

          {/* Stats */}
          <div className="mt-14 flex gap-12">
            <div>
              <h3 className="text-4xl font-bold">4.8</h3>
              <p className="text-zinc-500">Google Rating</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-zinc-500">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-zinc-500">Beauty Services</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[760px] w-[560px] overflow-hidden rounded-[45px]">
            <Image
              src="/images/hero/hero-main.jpg"
              alt="Luxury Beauty"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          {/* Rating Card */}
          <div className="absolute left-6 top-10 rounded-3xl bg-white/95 p-5 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Star
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                strokeWidth={1.5}
              />
              <span className="text-xl font-bold">4.8</span>
            </div>

            <p className="mt-1 text-sm text-zinc-500">
              1,000+ Google Reviews
            </p>
          </div>

          {/* Experience Card */}
          <div className="absolute bottom-10 right-6 rounded-3xl bg-white/95 p-5 shadow-2xl backdrop-blur-md">
            <h3 className="text-3xl font-bold text-[#B76E79]">10+</h3>

            <p className="mt-1 text-sm text-zinc-500">
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}