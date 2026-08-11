import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#FCF8F6] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

          <div className="grid items-center lg:grid-cols-2">

            {/* Left Side */}

            <div className="p-10 lg:p-16">

              <span className="inline-block rounded-full bg-[#B76E79]/10 px-5 py-2 text-sm font-medium text-[#B76E79]">
                Luxury Beauty Experience
              </span>

              <h2 className="mt-8 font-serif text-5xl leading-tight text-zinc-900 lg:text-6xl">
                Ready For
                <br />
                Your Next
                <br />
                Gorgeous Look?
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">
                Whether you're preparing for your wedding, engagement,
                party or simply treating yourself, our beauty experts
                are here to create a look you'll absolutely love.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button className="h-14 rounded-full bg-[#B76E79] px-8 hover:bg-[#a75d68]">
                  Book Appointment
                </Button>

                <Button
                  variant="outline"
                  className="h-14 rounded-full px-8"
                >
                  WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>

              </div>

            </div>

            {/* Right Side */}

            <div className="relative h-[550px]">

              <Image
                src="/images/hero/Editorial-1.jpg"
                alt="Bride"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10"/>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}