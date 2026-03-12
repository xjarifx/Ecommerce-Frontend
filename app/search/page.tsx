import Link from "next/link";
import { categories, toCategorySlug } from "../../data/catalog";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

const featureShortcuts = [
  { label: "Today Deals", href: "/deals" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Orders", href: "/orders" },
  { label: "Support Center", href: "/support" },
  { label: "Account", href: "/account" },
  { label: "Delivery Preferences", href: "/delivery" },
];

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const normalized = query.toLowerCase();

  const categoryResults = categories.filter((category) => {
    if (!normalized) return true;
    return category.label.toLowerCase().includes(normalized);
  });

  const featureResults = featureShortcuts.filter((item) => {
    if (!normalized) return true;
    return item.label.toLowerCase().includes(normalized);
  });

  const totalResults = categoryResults.length + featureResults.length;

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-[#10203f]">Search Results</h1>
        <p className="mt-2 text-sm text-[#5a6d90]">
          {query ? (
            <>
              {totalResults} result{totalResults === 1 ? "" : "s"} for "{query}"
            </>
          ) : (
            "Browse categories and features"
          )}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-sm border border-[#d5e4ff] bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-[#10203f]">Categories</h2>
            {categoryResults.length === 0 ? (
              <p className="mt-3 text-sm text-[#5a6d90]">
                No category matches found.
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {categoryResults.map((category) => (
                  <li key={category.label}>
                    <Link
                      href={`/category/${toCategorySlug(category.label)}`}
                      className="text-sm font-medium text-[#1f6fff] transition hover:text-[#1558e0]"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="rounded-sm border border-[#d5e4ff] bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-[#10203f]">
              Platform Features
            </h2>
            {featureResults.length === 0 ? (
              <p className="mt-3 text-sm text-[#5a6d90]">
                No feature matches found.
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {featureResults.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-[#1f6fff] transition hover:text-[#1558e0]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
