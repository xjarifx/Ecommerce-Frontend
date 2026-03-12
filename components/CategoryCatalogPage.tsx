"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import type { CatalogProduct } from "../data/catalog";

type CategoryCatalogPageProps = {
  categoryLabel: string;
  products: CatalogProduct[];
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} viewBox="0 0 20 20" className="h-3.5 w-3.5">
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            fill={rating >= star ? "#f59e0b" : "#d1d5db"}
          />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: CatalogProduct }) {
  const { addItem, hasItem } = useCart();
  const inCart = hasItem(product.id);

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-[#d5e4ff] bg-white shadow-sm transition hover:border-[#93b8ff] hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden bg-[#f0f6ff]">
        <Image
          src={product.photo}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-[#1f6fff]">
          {product.brand}
        </p>
        <h3 className="line-clamp-2 text-sm font-semibold text-[#10203f]">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs font-semibold text-[#f59e0b]">
            {product.rating}
          </span>
          <span className="text-xs text-[#8fa8cc]">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="mt-auto flex items-end gap-2">
          <span className="text-lg font-bold text-[#10203f]">
            ${product.price.toLocaleString()}
          </span>
          <span className="text-sm text-[#8fa8cc] line-through">
            ${product.originalPrice.toLocaleString()}
          </span>
        </div>

        {product.freeShipping && (
          <p className="text-xs font-medium text-[#16a34a]">Free shipping</p>
        )}

        <button
          type="button"
          onClick={() =>
            addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              photo: product.photo,
            })
          }
          className={`mt-1 rounded-sm px-3 py-2 text-sm font-semibold transition ${
            inCart
              ? "bg-[#e8f5e9] text-[#16a34a] hover:bg-[#d4edda]"
              : "bg-[#1f6fff] text-white hover:bg-[#175de1]"
          }`}
        >
          {inCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

export default function CategoryCatalogPage({
  categoryLabel,
  products,
}: CategoryCatalogPageProps) {
  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))),
    [products],
  );
  const highestPrice = useMemo(
    () => Math.max(...products.map((p) => p.price)),
    [products],
  );

  const [query, setQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [onlyFreeShipping, setOnlyFreeShipping] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(highestPrice);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.brand.toLowerCase().includes(normalizedQuery);

      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      const matchesFreeShipping = !onlyFreeShipping || product.freeShipping;
      const matchesRating = product.rating >= minRating;
      const matchesPrice = product.price <= maxPrice;

      return (
        matchesQuery &&
        matchesBrand &&
        matchesFreeShipping &&
        matchesRating &&
        matchesPrice
      );
    });
  }, [maxPrice, minRating, onlyFreeShipping, products, query, selectedBrands]);

  return (
    <section className="mx-auto w-full max-w-350 px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#1f6fff]">
          Category
        </p>
        <h1 className="text-2xl font-bold text-[#10203f] sm:text-3xl">
          {categoryLabel}
        </h1>
        <p className="mt-1 text-sm text-[#5a6d90]">
          {filteredProducts.length} products found
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          {filteredProducts.length === 0 ? (
            <div className="rounded-sm border border-[#d5e4ff] bg-white p-8 text-center text-[#5a6d90]">
              No products match your current filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        <aside className="h-fit rounded-sm border border-[#d5e4ff] bg-white p-4 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-base font-bold text-[#10203f]">
            Filter products
          </h2>

          <div className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="search-filter"
                className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#5a6d90]"
              >
                Search
              </label>
              <input
                id="search-filter"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`Search in ${categoryLabel}`}
                className="w-full rounded-sm border border-[#c8d8f3] px-3 py-2 text-sm text-[#10203f] outline-none focus:border-[#1f6fff]"
              />
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#5a6d90]">
                Max price: ${maxPrice}
              </p>
              <input
                type="range"
                min={0}
                max={highestPrice}
                step={5}
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#5a6d90]">
                Minimum rating
              </p>
              <select
                value={minRating}
                onChange={(event) => setMinRating(Number(event.target.value))}
                className="w-full rounded-sm border border-[#c8d8f3] px-3 py-2 text-sm text-[#10203f] outline-none focus:border-[#1f6fff]"
              >
                <option value={0}>Any rating</option>
                <option value={4}>4 stars & up</option>
                <option value={4.3}>4.3 stars & up</option>
                <option value={4.5}>4.5 stars & up</option>
              </select>
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#5a6d90]">
                Brands
              </p>
              <div className="space-y-2">
                {brands.map((brand) => {
                  const checked = selectedBrands.includes(brand);
                  return (
                    <label
                      key={brand}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(event) => {
                          setSelectedBrands((previous) => {
                            if (event.target.checked) {
                              return [...previous, brand];
                            }
                            return previous.filter((item) => item !== brand);
                          });
                        }}
                      />
                      <span className="text-[#10203f]">{brand}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={onlyFreeShipping}
                onChange={(event) => setOnlyFreeShipping(event.target.checked)}
              />
              <span className="font-medium text-[#10203f]">
                Free shipping only
              </span>
            </label>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedBrands([]);
                setOnlyFreeShipping(false);
                setMinRating(0);
                setMaxPrice(highestPrice);
              }}
              className="w-full rounded-sm border border-[#d5e4ff] px-3 py-2 text-sm font-semibold text-[#1f6fff] transition hover:bg-[#eef5ff]"
            >
              Reset filters
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
