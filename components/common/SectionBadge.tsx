interface SectionBadgeProps {
  children: React.ReactNode;
}

export default function SectionBadge({
  children,
}: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-rose-600">
      {children}
    </span>
  );
}