import Link from "next/link";

type FooterColumn = {
  heading: string;
  links: string[];
};

type FooterMiniLink = {
  title: string;
  subtitle: string;
};

const topColumns: FooterColumn[] = [
  {
    heading: "Get to Know Us",
    links: [
      "Careers",
      "Blog",
      "About Amazon",
      "Investor Relations",
      "Amazon Devices",
      "Amazon Science",
    ],
  },
  {
    heading: "Make Money with Us",
    links: [
      "Sell products on Amazon",
      "Sell on Amazon Business",
      "Sell apps on Amazon",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
      "> See More Make Money with Us",
    ],
  },
  {
    heading: "Amazon Payment Products",
    links: [
      "Amazon Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Amazon Currency Converter",
    ],
  },
  {
    heading: "Let Us Help You",
    links: [
      "Amazon and COVID-19",
      "Your Account",
      "Your Orders",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Content and Devices",
      "Help",
    ],
  },
];

const miniLinks: FooterMiniLink[] = [
  { title: "Amazon Music", subtitle: "Stream millions of songs" },
  {
    title: "Amazon Ads",
    subtitle: "Reach customers wherever they spend their time",
  },
  { title: "6pm", subtitle: "Score deals on fashion brands" },
  { title: "AbeBooks", subtitle: "Books, art & collectibles" },
  { title: "ACX", subtitle: "Audiobook Publishing Made Easy" },
  { title: "Sell on Amazon", subtitle: "Start a Selling Account" },
  { title: "Veeqo", subtitle: "Shipping Software Inventory Management" },
  { title: "Amazon Business", subtitle: "Everything For Your Business" },
  { title: "AmazonGlobal", subtitle: "Ship Orders Internationally" },
  {
    title: "Amazon Web Services",
    subtitle: "Scalable Cloud Computing Services",
  },
  {
    title: "Audible",
    subtitle: "Listen to Books & Original Audio Performances",
  },
  { title: "Box Office Mojo", subtitle: "Find Movie Box Office Data" },
  { title: "Goodreads", subtitle: "Book reviews & recommendations" },
  { title: "IMDb", subtitle: "Movies, TV & Celebrities" },
  { title: "IMDbPro", subtitle: "Get Info Entertainment Professionals Need" },
  {
    title: "Kindle Direct Publishing",
    subtitle: "Indie Digital & Print Publishing Made Easy",
  },
  { title: "Prime Video Direct", subtitle: "Video Distribution Made Easy" },
  { title: "Shopbop", subtitle: "Designer Fashion Brands" },
  { title: "Woot!", subtitle: "Deals and Shenanigans" },
  { title: "Zappos", subtitle: "Shoes & Clothing" },
  { title: "Ring", subtitle: "Smart Home Security Systems" },
  { title: "eero WiFi", subtitle: "Stream 4K Video in Every Room" },
  { title: "Blink", subtitle: "Smart Security for Every Home" },
  { title: "Neighbors App", subtitle: "Real-Time Crime & Safety Alerts" },
  {
    title: "Amazon Subscription Boxes",
    subtitle: "Top subscription boxes right to your door",
  },
  { title: "PillPack", subtitle: "Pharmacy Simplified" },
];

function FooterColumnBlock({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h3 className="mb-2 text-[1.35rem] font-semibold text-white">
        {column.heading}
      </h3>
      <ul className="space-y-1.5">
        {column.links.map((link) => (
          <li key={link}>
            <Link
              href="/"
              className="text-[0.96rem] text-[#dde6f2] hover:underline"
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
    <footer className="mt-8 bg-[#232f3e] text-white">
      <a
        href="#top"
        className="flex h-11 items-center justify-center bg-[#37475a] text-[0.92rem] font-semibold hover:bg-[#41566f]"
      >
        Back to top
      </a>

      <div className="mx-auto max-w-[1600px] px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topColumns.map((column) => (
            <FooterColumnBlock key={column.heading} column={column} />
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-center gap-3 px-6">
          <Link
            href="/"
            className="mr-3 text-4xl font-bold leading-none tracking-tight text-white"
          >
            amazon
            <span className="ml-1 text-xl text-[#ff9900]">.in</span>
          </Link>

          <button
            type="button"
            className="rounded border border-[#8d96a0] px-4 py-2 text-sm text-[#dbe4ef]"
          >
            🌐 English
          </button>
          <button
            type="button"
            className="rounded border border-[#8d96a0] px-4 py-2 text-sm text-[#dbe4ef]"
          >
            $ USD - U.S. Dollar
          </button>
          <button
            type="button"
            className="rounded border border-[#8d96a0] px-4 py-2 text-sm text-[#dbe4ef]"
          >
            🇺🇸 United States
          </button>
        </div>
      </div>

      <div className="bg-[#131a22] py-8">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 gap-x-7 gap-y-4 sm:grid-cols-3 lg:grid-cols-7">
            {miniLinks.map((item) => (
              <Link
                key={item.title}
                href="/"
                className="block leading-tight text-[#d7dce2] hover:underline"
              >
                <p className="text-[0.8rem] font-semibold text-[#f1f3f5]">
                  {item.title}
                </p>
                <p className="text-[0.8rem] text-[#a9b3bf]">{item.subtitle}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-[#d3d7de]">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <Link href="/" className="hover:underline">
                Conditions of Use
              </Link>
              <Link href="/" className="hover:underline">
                Privacy Notice
              </Link>
              <Link href="/" className="hover:underline">
                Consumer Health Data Privacy Disclosure
              </Link>
              <Link href="/" className="hover:underline">
                Your Ads Privacy Choices
              </Link>
            </div>
            <p className="mt-1">
              © 1996-2026, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
