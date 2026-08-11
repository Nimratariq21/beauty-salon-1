import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div>
        <h2 className="font-serif text-4xl text-[#be5b71]">
          NOIR
        </h2>

        <p className="mt-1 text-[11px] uppercase tracking-[0.45em] text-[#be5b71]">
          Beauty Studio
        </p>
      </div>
    </Link>
  );
}