import Link from "next/link";

type ComingSoonPageProps = {
  searchParams: Promise<{ feature?: string }>;
};

const unfinishedFeatures = [
  { label: "Search Experience", href: "/coming-soon?feature=search" },
  { label: "Today Deals", href: "/coming-soon?feature=today-deals" },
  { label: "Gift Cards", href: "/coming-soon?feature=gift-cards" },
  { label: "Account", href: "/coming-soon?feature=account" },
  { label: "Orders", href: "/coming-soon?feature=orders" },
  {
    label: "Delivery Location Preferences",
    href: "/coming-soon?feature=delivery-location",
  },
  {
    label: "Support Center",
    href: "/coming-soon?feature=support-center",
  },
  {
    label: "Hero Campaign Landing",
    href: "/coming-soon?feature=hero-campaign",
  },
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
  const label = feature ? formatFeatureName(feature) : "This feature";

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto max-w-3xl rounded-sm border border-[#d5e4ff] bg-white p-8 text-center shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold text-[#10203f] sm:text-4xl">
          Coming Soon
        </h1>
        <p className="mt-3 text-base text-[#5a6d90]">{label} is coming soon.</p>

        <div className="mt-8 border-t border-[#d5e4ff] pt-6 text-left">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#1f6fff]">
            Unfinished functionalities
          </h2>
          <ul className="mt-3 space-y-2">
            {unfinishedFeatures.map((item) => (
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
