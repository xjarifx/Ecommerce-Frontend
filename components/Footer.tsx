import Link from "next/link";

type FooterColumn = {
  heading: string;
  links: string[];
};

const topColumns: FooterColumn[] = [
  {
    heading: "Shop",
    links: [
      "New Arrivals",
      "Trending",
      "Gift Cards",
      "Clearance",
      "Seasonal Picks",
    ],
  },
  {
    heading: "Company",
    links: ["About BlueCart", "Careers", "Press", "Partners", "Affiliates"],
  },
  {
    heading: "Support",
    links: [
      "Help Center",
      "Track Order",
      "Returns",
      "Shipping Policy",
      "Contact Support",
    ],
  },
  {
    heading: "Community",
    links: ["Blog", "Style Guide", "Newsletters", "Events", "Reviews"],
  },
];

function FooterColumnBlock({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h3 className="mb-2 text-[1.15rem] font-semibold text-[#10203f]">
        {column.heading}
      </h3>
      <ul className="space-y-1.5">
        {column.links.map((link) => (
          <li key={link}>
            <Link
              href="/"
              className="text-[0.95rem] text-[#4f638a] transition hover:text-[#1f6fff]"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-8 w-full px-3 sm:px-4">
      <div className="rounded-sm border border-[#d5e4ff] bg-white">
        <a
          href="#top"
          className="flex h-12 items-center justify-center rounded-sm border-b border-[#d5e4ff] bg-[#edf4ff] text-[0.92rem] font-semibold text-[#1f6fff] transition hover:bg-[#e2edff]"
        >
          Back to top
        </a>

        <div className="px-6 py-10 md:px-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {topColumns.map((column) => (
              <FooterColumnBlock key={column.heading} column={column} />
            ))}
          </div>

          <div className="mt-10 rounded-sm border border-[#d5e4ff] bg-[#f6f9ff] px-5 py-4">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
              <p className="text-sm text-[#4f638a]">
                Need help with your order? Support actions are highlighted in
                blue.
              </p>
              <button
                type="button"
                className="rounded-sm border border-[#b8d2ff] bg-[#1f6fff] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#175de1]"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d5e4ff] bg-[#f8fbff] px-6 py-6 text-center md:px-12">
          <Link
            href="/"
            className="text-3xl font-semibold leading-none tracking-tight text-[#0d57df]"
          >
            Blue
            <span className="text-[#6da7ff]">Cart</span>
          </Link>
          <p className="mt-3 text-xs text-[#607396]">
            Copyright 2026 BlueCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
