"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

function EmptyCart() {
  return (
    <div className="mt-16 flex flex-col items-center gap-3 text-center text-[#8fa8cc]">
      <svg viewBox="0 0 24 24" fill="none" className="h-14 w-14">
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
      <p className="text-base font-medium">Your cart is empty</p>
      <p className="text-sm">Add some products to get started.</p>
    </div>
  );
}

function CartItems() {
  const { items, totalCount, totalPrice, increment, decrement, closeCart } =
    useCart();

  return (
    <>
      <div className="border-b border-[#d5e4ff] px-3 py-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-[#5a6d90]">Subtotal</span>
          <span className="text-base font-bold text-[#1f6fff]">
            ${totalPrice.toLocaleString()}
          </span>
        </div>
        <Link
          href="/cart"
          onClick={closeCart}
          className="block w-full rounded-sm border border-[#c0c0c0] bg-white py-2 text-center text-sm font-semibold text-[#10203f] transition hover:bg-[#f5f5f5]"
        >
          Go to Cart
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <ul className="flex flex-col gap-5">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col items-center gap-2">
                <div className="relative h-36 w-full overflow-hidden rounded-sm bg-[#f0f6ff]">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>

                <p className="w-full text-center text-base font-bold text-[#10203f]">
                  ${(item.price * item.quantity).toLocaleString()}
                </p>

                <div className="flex w-full items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => decrement(item.id)}
                    aria-label="Remove one"
                    className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-[#f59e0b] text-[#f59e0b] transition hover:bg-[#fff8e7]"
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
                    className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-[#f59e0b] text-[#f59e0b] transition hover:bg-[#fff8e7]"
                  >
                    <span className="text-lg leading-none">+</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border-t border-[#d5e4ff] px-3 py-3 text-xs text-[#8fa8cc]">
        {totalCount > 0
          ? `${totalCount} item${totalCount === 1 ? "" : "s"} in cart`
          : "Cart ready for your first item"}
      </div>
    </>
  );
}

export default function CartSidebar() {
  const { isOpen, closeCart, items, totalCount } = useCart();
  const hasCartItems = items.length > 0;

  return (
    <>
      {hasCartItems && (
        <aside className="fixed top-0 right-0 z-30 hidden h-screen w-72 border-l border-[#d5e4ff] bg-white shadow-xl xl:flex xl:flex-col">
          <div className="border-b border-[#d5e4ff] px-3 pb-4 pt-24">
            <h2 className="text-lg font-bold text-[#10203f]">
              Your Cart
              {totalCount > 0 && (
                <span className="ml-2 rounded-sm bg-[#1f6fff] px-2 py-0.5 text-xs text-white">
                  {totalCount}
                </span>
              )}
            </h2>
          </div>
          <CartItems />
        </aside>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end xl:hidden">
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="absolute inset-0 bg-[#0a1730]/40"
          />

          <aside className="relative flex h-full w-full max-w-xs flex-col border-l border-[#d5e4ff] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#d5e4ff] px-3 py-4">
              <h2 className="text-lg font-bold text-[#10203f]">
                Your Cart
                {totalCount > 0 && (
                  <span className="ml-2 rounded-sm bg-[#1f6fff] px-2 py-0.5 text-xs text-white">
                    {totalCount}
                  </span>
                )}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close"
                className="rounded-sm p-1 text-[#5a6d90] transition hover:bg-[#f0f6ff]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <CartItems />
          </aside>
        </div>
      )}
    </>
  );
}
