import { Award, HeartHandshake, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Experts",
    description:
      "Our experienced beauty specialists deliver exceptional results with precision and care.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "We use high-quality international beauty products for flawless and long-lasting results.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Experience",
    description:
      "Every service is tailored to your unique style, skin, and beauty goals.",
  },
  {
    icon: Users,
    title: "Trusted by 1000+ Clients",
    description:
      "A reputation built on trust, excellence, and unforgettable beauty experiences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-[#FCF8F6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#B76E79]">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-center font-serif text-5xl text-zinc-900">
          Experience Beauty Like Never Before
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B76E79]/10">
                  <Icon className="h-8 w-8 text-[#B76E79]" />
                </div>

                <h3 className="font-serif text-2xl text-zinc-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}