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
    title: "Get your game on",
    ctaText: "Shop gaming",
    featured: true,
    items: [
      {
        title: "Gaming setup",
        emoji: "🖥️",
        background:
          "linear-gradient(135deg, #0f315d 0%, #a92f75 55%, #ec6f39 100%)",
      },
    ],
  },
  {
    title: "Shop for your home essentials",
    ctaText: "Discover more in Home",
    items: [
      {
        title: "Cleaning Tools",
        emoji: "🧼",
        background: "linear-gradient(135deg, #edf7f8 0%, #b6e4ee 100%)",
      },
      {
        title: "Home Storage",
        emoji: "🗄️",
        background: "linear-gradient(135deg, #f6f1ea 0%, #d8d2ca 100%)",
      },
      {
        title: "Home Decor",
        emoji: "🪴",
        background: "linear-gradient(135deg, #edf4ef 0%, #bfd9c7 100%)",
      },
      {
        title: "Bedding",
        emoji: "🛏️",
        background: "linear-gradient(135deg, #f5f4f1 0%, #d8d0bf 100%)",
      },
    ],
  },
  {
    title: "New home arrivals under $50",
    ctaText: "Shop the latest from Home",
    items: [
      {
        title: "Kitchen & Dining",
        emoji: "🍲",
        background: "linear-gradient(135deg, #eef3f4 0%, #c5d5dc 100%)",
      },
      {
        title: "Home Improvement",
        emoji: "🧰",
        background: "linear-gradient(135deg, #fef2e9 0%, #f0ceb7 100%)",
      },
      {
        title: "Decor",
        emoji: "🪞",
        background: "linear-gradient(135deg, #fff4e9 0%, #f1d8bf 100%)",
      },
      {
        title: "Bedding & Bath",
        emoji: "🛁",
        background: "linear-gradient(135deg, #ebeffa 0%, #c4cee7 100%)",
      },
    ],
  },
  {
    title: "Shop Fashion for less",
    ctaText: "See all deals",
    items: [
      {
        title: "Jeans under $50",
        emoji: "👖",
        background: "linear-gradient(135deg, #eaf1f4 0%, #bfcfda 100%)",
      },
      {
        title: "Tops under $25",
        emoji: "👕",
        background: "linear-gradient(135deg, #edf4e9 0%, #c9ddc0 100%)",
      },
      {
        title: "Dresses under $30",
        emoji: "👗",
        background: "linear-gradient(135deg, #fce8d8 0%, #e5c1a1 100%)",
      },
      {
        title: "Shoes under $50",
        emoji: "👢",
        background: "linear-gradient(135deg, #f8f0e7 0%, #dbc6af 100%)",
      },
    ],
  },
];

const sliderProducts: SliderProduct[] = [
  {
    id: "tees-pack",
    name: "Classic black t-shirts",
    emoji: "👕",
    background: "linear-gradient(135deg, #f5f5f5 0%, #d8d8d8 100%)",
  },
  {
    id: "clog-black",
    name: "Comfort clogs - black",
    emoji: "🩴",
    background: "linear-gradient(135deg, #e8eaed 0%, #c9ced4 100%)",
  },
  {
    id: "clog-lavender",
    name: "Comfort clogs - lavender",
    emoji: "🩴",
    background: "linear-gradient(135deg, #efeafd 0%, #c9bff2 100%)",
  },
  {
    id: "oversized-tee",
    name: "Oversized casual tee",
    emoji: "👚",
    background: "linear-gradient(135deg, #f6f7f8 0%, #dfe4e8 100%)",
  },
  {
    id: "white-tee-pack",
    name: "White tees pack",
    emoji: "👕",
    background: "linear-gradient(135deg, #ffffff 0%, #e8ebf1 100%)",
  },
  {
    id: "black-pocket-tee",
    name: "Pocket t-shirt",
    emoji: "👕",
    background: "linear-gradient(135deg, #f2f2f2 0%, #d0d0d0 100%)",
  },
  {
    id: "white-shirt",
    name: "Formal white shirt",
    emoji: "👔",
    background: "linear-gradient(135deg, #fcfcfc 0%, #e6e9ed 100%)",
  },
  {
    id: "shoes",
    name: "Street sneakers",
    emoji: "👟",
    background: "linear-gradient(135deg, #f4f6f8 0%, #d7dee7 100%)",
  },
];

const heroSlides: HeroSlide[] = [
  {
    id: "hero-spring-fashion",
    eyebrow: "Fresh arrivals",
    title: "Big spring style drop",
    description:
      "Discover bold looks for every day comfort and weekend plans, with new picks landing this week.",
    ctaText: "Shop new fashion",
    background:
      "linear-gradient(120deg, #0f4c81 0%, #2484a8 48%, #50b8a2 100%)",
  },
  {
    id: "hero-home-refresh",
    eyebrow: "Home upgrades",
    title: "Refresh your space for less",
    description:
      "From cozy corners to smart storage, find everything to transform your rooms without overspending.",
    ctaText: "Explore home deals",
    background:
      "linear-gradient(120deg, #2f2f7f 0%, #5954b8 40%, #f08f5f 100%)",
  },
  {
    id: "hero-tech-week",
    eyebrow: "Limited offer",
    title: "Tech week mega savings",
    description:
      "Save on accessories, audio gear, and daily gadgets while these hot picks are still in stock.",
    ctaText: "Grab tech deals",
    background:
      "linear-gradient(120deg, #0f172a 0%, #1d4ed8 52%, #0ea5e9 100%)",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#d48ef4]">
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
        title="Best Sellers in Clothing, Shoes & Jewelry"
        products={sliderProducts}
      />

      <Footer />
    </main>
  );
}
