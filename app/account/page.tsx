import Link from "next/link";

const quickActions = [
  { label: "View Orders", href: "/orders" },
  { label: "Delivery Preferences", href: "/delivery" },
  { label: "Support Center", href: "/support" },
  { label: "Gift Cards", href: "/gift-cards" },
];

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-[#10203f]">Your Account</h1>
        <p className="mt-2 text-sm text-[#5a6d90]">
          Manage your shopping profile and shortcuts.
        </p>

        <section className="mt-6 rounded-sm border border-[#d5e4ff] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-[#10203f]">Quick Actions</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="rounded-sm border border-[#d5e4ff] px-4 py-3 text-sm font-semibold text-[#1f6fff] transition hover:bg-[#eef5ff]"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
