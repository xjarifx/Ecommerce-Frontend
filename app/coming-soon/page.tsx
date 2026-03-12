import Link from "next/link";

type ComingSoonPageProps = {
  searchParams: Promise<{ feature?: string }>;
};

const liveFeatures = [
  { label: "Search", href: "/search" },
  { label: "Today Deals", href: "/deals" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Account", href: "/account" },
  { label: "Orders", href: "/orders" },
  { label: "Delivery Preferences", href: "/delivery" },
  { label: "Support Center", href: "/support" },
  { label: "Best Selling", href: "/best-selling" },
];

function formatFeatureName(value: string): string {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function ComingSoonPage({
  searchParams,
}: ComingSoonPageProps) {
  const { feature } = await searchParams;
  const label = feature ? formatFeatureName(feature) : "This area";

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto max-w-3xl rounded-sm border border-[#d5e4ff] bg-white p-8 text-center shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold text-[#10203f] sm:text-4xl">
          Update Complete
        </h1>
        <p className="mt-3 text-base text-[#5a6d90]">
          {label} is now connected to a live feature page.
        </p>

        <div className="mt-8 border-t border-[#d5e4ff] pt-6 text-left">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#1f6fff]">
            Available functionalities
          </h2>
          <ul className="mt-3 space-y-2">
            {liveFeatures.map((item) => (
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
        </div>
      </div>
    </main>
  );
}
