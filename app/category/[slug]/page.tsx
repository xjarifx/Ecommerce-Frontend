import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryCatalogPage from "../../../components/CategoryCatalogPage";
import {
  getCategoryBySlug,
  getProductsForCategory,
} from "../../../data/catalog";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsForCategory(category.label, 24);

  return (
    <main className="pb-8">
      <div className="mx-auto w-full max-w-350 px-3 pt-4 sm:px-4">
        <Link
          href="/"
          className="text-sm font-semibold text-[#1f6fff] transition hover:text-[#175de1]"
        >
          ← Back to all categories
        </Link>
      </div>

      <CategoryCatalogPage categoryLabel={category.label} products={products} />
    </main>
  );
}
