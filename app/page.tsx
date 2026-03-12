import HeroSlider, { type HeroSlide } from "../components/HeroSlider";
import CategoryGrid from "../components/CategoryGrid";
import BestSelling from "../components/BestSelling";
import Footer from "../components/Footer";

const heroSlides: HeroSlide[] = [
  {
    id: "hero-spring-fashion",
    eyebrow: "New identity",
    title: "Style that feels fresh and minimal",
    description:
      "Discover curated drops with cleaner visuals, easier browsing, and a storefront designed for modern shoppers.",
    ctaText: "Shop new arrivals",
    ctaHref: "/deals",
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
    ctaHref: "/best-selling",
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
    ctaHref: "/support",
    background:
      "linear-gradient(120deg, #0b49bd 0%, #1c63ea 52%, #78b3ff 100%)",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen pb-8">
      <HeroSlider slides={heroSlides} />

      <CategoryGrid />

      <BestSelling />

      <Footer />
    </main>
  );
}
