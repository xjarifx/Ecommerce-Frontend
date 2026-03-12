"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  photo: string;
  freeShipping?: boolean;
};

const products: Product[] = [
  {
    id: "p1",
    name: "Apple iPhone 17 Pro — 256 GB Natural Titanium",
    category: "Phones",
    price: 999,
    originalPrice: 1199,
    rating: 4.8,
    reviewCount: 2341,
    badge: "Best Seller",
    photo:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop&auto=format",
    freeShipping: true,
  },
  {
    id: "p2",
    name: "Sony WH-1000XM5 Wireless Noise-Cancelling Headphones",
    category: "Headphones",
    price: 279,
    originalPrice: 349,
    rating: 4.7,
    reviewCount: 5812,
    badge: "Top Rated",
    photo:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop&auto=format",
    freeShipping: true,
  },
  {
    id: "p3",
    name: "Nike Air Max 270 — Men's Running Shoes",
    category: "Shoes",
    price: 129,
    originalPrice: 160,
    rating: 4.6,
    reviewCount: 3204,
    badge: "Hot Deal",
    photo:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&auto=format",
    freeShipping: false,
  },
  {
    id: "p4",
    name: "MacBook Air M3 — 15-inch 8GB RAM 512GB SSD",
    category: "Laptops",
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviewCount: 1890,
    badge: "Editor's Pick",
    photo:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop&auto=format",
    freeShipping: true,
  },
  {
    id: "p5",
    name: "NVIDIA GeForce RTX 4070 Super Graphics Card",
    category: "GPUs",
    price: 599,
    originalPrice: 699,
    rating: 4.7,
    reviewCount: 987,
    badge: "Best Seller",
    photo:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop&auto=format",
    freeShipping: true,
  },
  {
    id: "p6",
    name: "Levi's 501 Original Fit Jeans — Classic Blue",
    category: "Clothing",
    price: 59,
    originalPrice: 79,
    rating: 4.5,
    reviewCount: 7230,
    photo:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop&auto=format",
    freeShipping: false,
  },
  {
    id: "p7",
    name: "Nespresso Vertuo Next Coffee and Espresso Machine",
    category: "Home & Living",
    price: 149,
    originalPrice: 199,
    rating: 4.6,
    reviewCount: 4451,
    badge: "Deal of the Day",
    photo:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&h=500&fit=crop&auto=format",
    freeShipping: true,
  },
  {
    id: "p8",
    name: "Canon EOS R50 Mirrorless Camera — Content Creator Kit",
    category: "Cameras",
    price: 799,
    originalPrice: 979,
    rating: 4.8,
    reviewCount: 1123,
    badge: "Top Rated",
    photo:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop&auto=format",
    freeShipping: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <svg
            key={star}
            viewBox="0 0 20 20"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${star}`}>
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="50%" stopColor="#d1d5db" />
                  </linearGradient>
                </defs>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill={`url(#half-${star})`}
                />
              </>
            ) : (
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                fill={filled ? "#f59e0b" : "#d1d5db"}
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 10a4 4 0 01-8 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addItem, hasItem } = useCart();
  const inCart = hasItem(product.id);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-sm border border-[#d5e4ff] bg-white shadow-sm transition hover:border-[#93b8ff] hover:shadow-lg">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 rounded-sm bg-[#1f6fff] px-2.5 py-0.5 text-[0.68rem] font-semibold text-white shadow">
          {product.badge}
        </span>
      )}

      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-[#f0f6ff]">
        <Image
          src={product.photo}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {discount > 0 && (
          <span className="absolute bottom-2 left-2 rounded-sm bg-[#ef4444] px-1.5 py-0.5 text-[0.7rem] font-bold text-white">
            -{discount}%
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-[0.7rem] font-medium uppercase tracking-wide text-[#1f6fff]">
          {product.category}
        </p>

        <p className="line-clamp-2 text-sm font-semibold leading-snug text-[#10203f]">
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs font-semibold text-[#f59e0b]">
            {product.rating}
          </span>
          <span className="text-xs text-[#8fa8cc]">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-end gap-2 pt-1">
          <span className="text-xl font-bold text-[#10203f]">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="mb-0.5 text-sm text-[#8fa8cc] line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Shipping */}
        {product.freeShipping && (
          <p className="text-xs font-medium text-[#16a34a]">✓ Free shipping</p>
        )}

        {/* Add to Cart */}
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
          className={`mt-1 flex w-full items-center justify-center gap-2 rounded-sm py-2.5 text-sm font-semibold transition ${
            inCart
              ? "bg-[#e8f5e9] text-[#16a34a] hover:bg-[#d4edda]"
              : "bg-[#1f6fff] text-white hover:bg-[#175de1]"
          }`}
        >
          <CartIcon />
          {inCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default function BestSelling() {
  return (
    <section className="mt-10 w-full px-3 sm:px-4">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1f6fff]">
            This Month
          </p>
          <h2 className="text-xl font-bold text-[#10203f] sm:text-2xl">
            Best Selling Products
          </h2>
        </div>
        <button
          type="button"
          className="rounded-sm border border-[#d5e4ff] bg-white px-4 py-2 text-sm font-semibold text-[#1f6fff] transition hover:bg-[#eef5ff]"
        >
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
