import Image from "next/image";
import Link from "next/link";
import { categories, toCategorySlug } from "../data/catalog";

export default function CategoryGrid() {
  return (
    <section className="mt-8 w-full px-3 sm:px-4">
      <h2 className="mb-4 text-xl font-semibold text-[#10203f] sm:text-2xl">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={`/category/${toCategorySlug(cat.label)}`}
            className="group overflow-hidden rounded-sm border border-[#d5e4ff] bg-white text-left shadow-sm transition hover:border-[#93b8ff] hover:shadow-md"
          >
            <div
              className="relative h-44 w-full overflow-hidden sm:h-52"
              style={{ background: cat.bg }}
            >
              <Image
                src={cat.photo}
                alt={cat.label}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-[#10203f] sm:text-base">
                {cat.label}
              </p>
              <p className="mt-0.5 text-xs text-[#5a6d90]">Shop now →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
