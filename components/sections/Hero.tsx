import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FCF8F6] pt-28 sm:pt-32 lg:pt-36">
      {/* Background Effects */}

      <div className="absolute -left-32 top-0 h-[250px] w-[250px] rounded-full bg-[#B76E79]/10 blur-[90px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]" />

      <div className="absolute -right-24 bottom-0 h-[280px] w-[280px] rounded-full bg-[#D8B98A]/15 blur-[90px] sm:h-[450px] sm:w-[450px] lg:h-[500px] lg:w-[500px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-14 sm:gap-12 sm:px-8 sm:pb-20 lg:min-h-[90vh] lg:grid-cols-2 lg:gap-20 lg:px-10 lg:pb-0">

        {/* ============================= */}
        {/* LEFT CONTENT */}
        {/* ============================= */}

        <div className="mx-auto w-full max-w-xl min-w-0 text-center lg:mx-0 lg:text-left">

          {/* Badge */}

          <span className="inline-flex max-w-full items-center justify-center rounded-full border border-[#E8D7DB] bg-white px-3 py-2 text-[10px] font-medium leading-tight text-[#B76E79] shadow-sm sm:px-5 sm:text-sm">
            Luxury Beauty Studio • Karachi
          </span>

          {/* Heading */}

          <h1
            className="
              mt-5
              w-full
              max-w-full
              break-words
              font-serif
              text-[34px]
              font-medium
              leading-[1.02]
              tracking-tight
              text-[#1F1F1F]
              sm:mt-8
              sm:text-[58px]
              lg:text-[70px]
            "
          >
            Beauty
            <br />
            Beyond
            <br />
            Expectations
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              w-full
              max-w-[245px]
              break-words
              text-sm
              leading-6
              text-zinc-600
              sm:mt-8
              sm:max-w-lg
              sm:text-lg
              sm:leading-8
              lg:mx-0
            "
          >
            Discover timeless elegance through luxury bridal makeup,
            flawless hairstyling, rejuvenating skin treatments and
            personalized beauty experiences crafted just for you.
          </p>

          {/* ============================= */}
          {/* BUTTONS */}
          {/* ============================= */}

          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">

            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                className="
                  h-13
                  w-full
                  rounded-full
                  bg-[#B76E79]
                  px-6
                  text-white
                  hover:bg-[#a95e69]
                  sm:h-14
                  sm:w-auto
                  sm:px-8
                "
              >
                Book Appointment
              </Button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="
                  h-13
                  w-full
                  rounded-full
                  border-zinc-300
                  bg-white
                  px-6
                  sm:h-14
                  sm:w-auto
                  sm:px-8
                "
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </div>

          {/* ============================= */}
          {/* STATS */}
          {/* ============================= */}

          <div className="mt-10 grid w-full grid-cols-3 gap-2 sm:mt-14 sm:gap-8 lg:flex lg:gap-12">

            <div className="min-w-0">
              <h3 className="text-xl font-bold sm:text-4xl">
                4.8
              </h3>

              <p className="mt-1 text-[9px] leading-4 text-zinc-500 sm:text-sm">
                Google Rating
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-xl font-bold sm:text-4xl">
                1000+
              </h3>

              <p className="mt-1 text-[9px] leading-4 text-zinc-500 sm:text-sm">
                Happy Clients
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-xl font-bold sm:text-4xl">
                10+
              </h3>

              <p className="mt-1 text-[9px] leading-4 text-zinc-500 sm:text-sm">
                Beauty Services
              </p>
            </div>

          </div>

        </div>

        {/* ============================= */}
        {/* RIGHT IMAGE */}
        {/* ============================= */}

        <div className="relative flex w-full min-w-0 justify-center lg:justify-end">

          <div
            className="
              relative
              h-[420px]
              w-full
              max-w-[360px]
              overflow-hidden
              rounded-[28px]
              sm:h-[620px]
              sm:max-w-[500px]
              sm:rounded-[40px]
              lg:h-[760px]
              lg:w-[560px]
              lg:max-w-none
              lg:rounded-[45px]
            "
          >

            <Image
              src="/images/hero/hero-main.jpg"
              alt="Luxury Beauty"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 560px"
              className="object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

          </div>

          {/* ============================= */}
          {/* RATING CARD */}
          {/* ============================= */}

          <div
            className="
              absolute
              left-1
              top-4
              rounded-xl
              bg-white/95
              p-3
              shadow-2xl
              backdrop-blur-md
              sm:left-4
              sm:top-8
              sm:rounded-3xl
              sm:p-5
              lg:left-6
              lg:top-10
            "
          >

            <div className="flex items-center gap-1.5 sm:gap-2">

              <Star
                className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5"
                strokeWidth={1.5}
              />

              <span className="text-base font-bold sm:text-xl">
                4.8
              </span>

            </div>

            <p className="mt-1 text-[9px] text-zinc-500 sm:text-sm">
              1,000+ Google Reviews
            </p>

          </div>

          {/* ============================= */}
          {/* EXPERIENCE CARD */}
          {/* ============================= */}

          <div
            className="
              absolute
              bottom-4
              right-1
              rounded-xl
              bg-white/95
              p-3
              shadow-2xl
              backdrop-blur-md
              sm:bottom-8
              sm:right-4
              sm:rounded-3xl
              sm:p-5
              lg:bottom-10
              lg:right-6
            "
          >

            <h3 className="text-xl font-bold text-[#B76E79] sm:text-3xl">
              10+
            </h3>

            <p className="mt-1 text-[9px] text-zinc-500 sm:text-sm">
              Years of Excellence
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}