interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
      {subtitle && (
        <p className="uppercase tracking-[0.3em] text-sm text-rose-500 font-medium">
          {subtitle}
        </p>
      )}

      <h2 className="heading-font text-4xl md:text-5xl font-semibold text-zinc-900">
        {title}
      </h2>

      {description && (
        <p className="text-zinc-600 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}