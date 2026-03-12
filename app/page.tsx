import Navbar from "../components/Navbar";
import HeroSlider, { type HeroSlide } from "../components/HeroSlider";
import ProductCard, { type ProductCardItem } from "../components/ProductCard";
import ProductSlider, { type SliderProduct } from "../components/ProductSlider";
import Footer from "../components/Footer";

type ProductCardData = {
  title: string;
  ctaText: string;
  featured?: boolean;
  items: ProductCardItem[];
};

const productCards: ProductCardData[] = [
  {
    title: "Design your smart workspace",
    ctaText: "Explore desk tech",
    featured: true,
    items: [
      {
        title: "Creative studio setup",
        emoji: "🖥️",
        background: "linear-gradient(135deg, #deebff 0%, #b9d2ff 100%)",
      },
    ],
  },
  {
    title: "Home essentials, refreshed",
    ctaText: "See home collection",
    items: [
      {
        title: "Cleaning tools",
        emoji: "🧼",
        background: "linear-gradient(135deg, #e9f3ff 0%, #d4e6ff 100%)",
      },
      {
        title: "Storage solutions",
        emoji: "🗄️",
        background: "linear-gradient(135deg, #f3f8ff 0%, #dce8ff 100%)",
      },
      {
        title: "Decor accents",
        emoji: "🪴",
        background: "linear-gradient(135deg, #eaf6ff 0%, #cfe6ff 100%)",
      },
      {
        title: "Bedding",
        emoji: "🛏️",
        background: "linear-gradient(135deg, #f6faff 0%, #d7e4ff 100%)",
      },
    ],
  },
  {
    title: "New arrivals under $50",
    ctaText: "Browse new picks",
    items: [
      {
        title: "Kitchen and dining",
        emoji: "🍲",
        background: "linear-gradient(135deg, #edf5ff 0%, #cfdeff 100%)",
      },
      {
        title: "DIY upgrades",
        emoji: "🧰",
        background: "linear-gradient(135deg, #eff6ff 0%, #cedfff 100%)",
      },
      {
        title: "Minimal decor",
        emoji: "🪞",
        background: "linear-gradient(135deg, #f7fbff 0%, #deebff 100%)",
      },
      {
        title: "Bath and comfort",
        emoji: "🛁",
        background: "linear-gradient(135deg, #eaf3ff 0%, #cedfff 100%)",
      },
    ],
  },
  {
    title: "Style under budget",
    ctaText: "See fashion edits",
    items: [
      {
        title: "Jeans under $50",
        emoji: "👖",
        background: "linear-gradient(135deg, #edf6ff 0%, #cfdef7 100%)",
      },
      {
        title: "Tops under $25",
        emoji: "👕",
        background: "linear-gradient(135deg, #f2f8ff 0%, #d8e4ff 100%)",
      },
      {
        title: "Dresses under $30",
        emoji: "👗",
        background: "linear-gradient(135deg, #edf4ff 0%, #d2e2ff 100%)",
      },
      {
        title: "Shoes under $50",
        emoji: "👢",
        background: "linear-gradient(135deg, #f5f9ff 0%, #dbe7ff 100%)",
      },
    ],
  },
];

const sliderProducts: SliderProduct[] = [
  {
    id: "tees-pack",
    name: "Classic black t-shirts",
    emoji: "👕",
    background: "linear-gradient(135deg, #f5f9ff 0%, #dce8ff 100%)",
  },
  {
    id: "clog-black",
    name: "Comfort clogs - black",
    emoji: "🩴",
    background: "linear-gradient(135deg, #edf5ff 0%, #d3e2ff 100%)",
  },
  {
    id: "clog-lavender",
    name: "Comfort clogs - lavender",
    emoji: "🩴",
    background: "linear-gradient(135deg, #f3f8ff 0%, #deebff 100%)",
  },
  {
    id: "oversized-tee",
    name: "Oversized casual tee",
    emoji: "👚",
    background: "linear-gradient(135deg, #eff6ff 0%, #d7e5ff 100%)",
  },
  {
    id: "white-tee-pack",
    name: "White tees pack",
    emoji: "👕",
    background: "linear-gradient(135deg, #f7fbff 0%, #e2ecff 100%)",
  },
  {
    id: "black-pocket-tee",
    name: "Pocket t-shirt",
    emoji: "👕",
    background: "linear-gradient(135deg, #eef6ff 0%, #d5e4ff 100%)",
  },
  {
    id: "white-shirt",
    name: "Formal white shirt",
    emoji: "👔",
    background: "linear-gradient(135deg, #f8fbff 0%, #e1ecff 100%)",
  },
  {
    id: "shoes",
    name: "Street sneakers",
    emoji: "👟",
    background: "linear-gradient(135deg, #eff5ff 0%, #d6e2ff 100%)",
  },
];

const heroSlides: HeroSlide[] = [
  {
    id: "hero-spring-fashion",
    eyebrow: "New identity",
    title: "Style that feels fresh and minimal",
    description:
      "Discover curated drops with cleaner visuals, easier browsing, and a storefront designed for modern shoppers.",
    ctaText: "Shop new arrivals",
    background:
      "linear-gradient(120deg, #0a4fd1 0%, #1f6fff 48%, #6cb3ff 100%)",
  },
  {
    id: "hero-home-refresh",
    eyebrow: "BlueCart picks",
    title: "Everyday essentials, cleaner interface",
    description:
      "Browse top products with soft rounded surfaces, calm light tones, and reliable value across categories.",
    ctaText: "Explore essentials",
    background:
      "linear-gradient(120deg, #0d57df 0%, #3a80ff 40%, #9ec8ff 100%)",
  },
  {
    id: "hero-tech-week",
    eyebrow: "Support in blue",
    title: "Shopping help when you need it",
    description:
      "From tracking to returns, support actions are highlighted in blue so they are always easy to find.",
    ctaText: "Visit support center",
    background:
      "linear-gradient(120deg, #0b49bd 0%, #1c63ea 52%, #78b3ff 100%)",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen pb-8">
      <Navbar />

      <HeroSlider slides={heroSlides} />

      <section className="mx-auto mt-4 grid w-full max-w-[1600px] grid-cols-1 gap-4 px-3 sm:px-4 lg:grid-cols-2 xl:grid-cols-4">
        {productCards.map((card) => (
          <ProductCard
            key={card.title}
            title={card.title}
            items={card.items}
            ctaText={card.ctaText}
            featured={card.featured}
          />
        ))}
      </section>

      <ProductSlider
        title="Trending Now in Fashion, Home and Lifestyle"
        products={sliderProducts}
      />

      <Footer />
    </main>
  );
}
