"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { items, totalCount, totalPrice, increment, decrement } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto mb-4 h-20 w-20 text-[#8fa8cc]"
          >
            <path
              d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 10a4 4 0 01-8 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="mb-2 text-2xl font-bold text-[#10203f]">
            Your cart is empty
          </h1>
          <p className="mb-6 text-[#5a6d90]">
            Add some products to get started.
          </p>
          <Link
            href="/"
            className="inline-block rounded-xl bg-[#1f6fff] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#1558e0]"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold text-[#10203f]">
          Your Cart
          <span className="ml-3 rounded-full bg-[#1f6fff] px-3 py-0.5 text-base font-semibold text-white">
            {totalCount}
          </span>
        </h1>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Items list */}
          <section className="flex-1">
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl border border-[#d5e4ff] bg-white p-4 shadow-sm"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#f0f6ff]">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <p className="font-semibold text-[#10203f]">{item.name}</p>
                    <p className="text-sm text-[#5a6d90]">
                      ${item.price.toLocaleString()} each
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => decrement(item.id)}
                        aria-label="Remove one"
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f59e0b] text-[#f59e0b] transition hover:bg-[#fff8e7]"
                      >
                        {item.quantity === 1 ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <polyline
                              points="3 6 5 6 21 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19 6l-1 14H6L5 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 11v6M14 11v6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M9 6V4h6v2"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <span className="text-lg leading-none">−</span>
                        )}
                      </button>

                      <span className="w-8 text-center text-base font-bold text-[#10203f]">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increment(item.id)}
                        aria-label="Add one"
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f59e0b] text-[#f59e0b] transition hover:bg-[#fff8e7]"
                      >
                        <span className="text-lg leading-none">+</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-base font-bold text-[#1f6fff]">
                    ${(item.price * item.quantity).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <aside className="w-full lg:w-80">
            <div className="sticky top-24 rounded-2xl border border-[#d5e4ff] bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-[#10203f]">
                Order Summary
              </h2>

              <div className="mb-2 flex items-center justify-between text-sm text-[#5a6d90]">
                <span>Items ({totalCount})</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="mb-4 flex items-center justify-between text-sm text-[#5a6d90]">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="mb-6 flex items-center justify-between border-t border-[#d5e4ff] pt-4 text-base font-bold text-[#10203f]">
                <span>Total</span>
                <span className="text-[#1f6fff]">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>

              <Link
                href="/payment"
                className="block w-full rounded-xl bg-[#1f6fff] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1558e0]"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/"
                className="mt-3 block w-full rounded-xl border border-[#d5e4ff] py-3 text-center text-sm font-semibold text-[#10203f] transition hover:bg-[#f5f8ff]"
              >
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
