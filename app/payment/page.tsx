"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useCart } from "../../context/CartContext";

const SHIPPING_FEE = 0;
const TAX_RATE = 0.08;

export default function PaymentPage() {
  const { items, totalCount, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const taxAmount = useMemo(() => totalPrice * TAX_RATE, [totalPrice]);
  const finalTotal = useMemo(
    () => totalPrice + SHIPPING_FEE + taxAmount,
    [taxAmount, totalPrice],
  );

  const hasItems = items.length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!hasItems) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      setIsSuccess(true);
    }, 1100);
  }

  if (!hasItems && !isSuccess) {
    return (
      <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#d5e4ff] bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-[#10203f]">Payment</h1>
          <p className="mt-3 text-[#5a6d90]">
            Your cart is empty. Add products before continuing to payment.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/cart"
              className="rounded-xl border border-[#d5e4ff] px-6 py-3 text-sm font-semibold text-[#10203f] transition hover:bg-[#f5f8ff]"
            >
              Back to Cart
            </Link>
            <Link
              href="/"
              className="rounded-xl bg-[#1f6fff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1558e0]"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#10203f]">Secure Payment</h1>
          <p className="mt-2 text-sm text-[#5a6d90]">
            Complete your order in one final step.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="rounded-3xl border border-[#d5e4ff] bg-white p-6 shadow-sm sm:p-8">
            {isSuccess ? (
              <div className="rounded-2xl border border-[#a7e6c2] bg-[#f0fff6] p-6">
                <h2 className="text-2xl font-bold text-[#0c6b38]">
                  Payment confirmed
                </h2>
                <p className="mt-3 text-sm text-[#2f6d4e]">
                  Thank you for your order. A confirmation email is on the way.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-xl bg-[#1f6fff] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1558e0]"
                  >
                    Back to Home
                  </Link>
                  <Link
                    href="/cart"
                    className="rounded-xl border border-[#d5e4ff] px-5 py-2.5 text-sm font-semibold text-[#10203f] transition hover:bg-[#f5f8ff]"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            ) : (
              <form className="space-y-7" onSubmit={handleSubmit}>
                <div>
                  <h2 className="mb-4 text-lg font-bold text-[#10203f]">
                    Billing Details
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      First Name
                      <input
                        type="text"
                        required
                        autoComplete="given-name"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="John"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      Last Name
                      <input
                        type="text"
                        required
                        autoComplete="family-name"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="Doe"
                      />
                    </label>
                    <label className="sm:col-span-2 flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      Email Address
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="john@example.com"
                      />
                    </label>
                    <label className="sm:col-span-2 flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      Street Address
                      <input
                        type="text"
                        required
                        autoComplete="street-address"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="123 Main Street"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      City
                      <input
                        type="text"
                        required
                        autoComplete="address-level2"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="New York"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      ZIP Code
                      <input
                        type="text"
                        required
                        autoComplete="postal-code"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="10001"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-bold text-[#10203f]">
                    Payment Method
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="sm:col-span-2 flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      Card Number
                      <input
                        type="text"
                        required
                        inputMode="numeric"
                        autoComplete="cc-number"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="4242 4242 4242 4242"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      Expiration Date
                      <input
                        type="text"
                        required
                        autoComplete="cc-exp"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="MM/YY"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      CVV
                      <input
                        type="password"
                        required
                        autoComplete="cc-csc"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="123"
                      />
                    </label>
                    <label className="sm:col-span-2 flex flex-col gap-1.5 text-sm font-medium text-[#324b72]">
                      Name on Card
                      <input
                        type="text"
                        required
                        autoComplete="cc-name"
                        className="h-11 rounded-xl border border-[#d5e4ff] px-3 text-[#10203f] outline-none transition focus:border-[#1f6fff]"
                        placeholder="John Doe"
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#1f6fff] px-7 text-sm font-semibold text-white transition hover:bg-[#1558e0] disabled:cursor-not-allowed disabled:bg-[#8ab1ff]"
                >
                  {isSubmitting
                    ? "Processing..."
                    : `Pay $${finalTotal.toFixed(2)}`}
                </button>
              </form>
            )}
          </section>

          <aside className="h-fit rounded-3xl border border-[#d5e4ff] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#10203f]">Order Summary</h2>
            <p className="mt-1 text-xs text-[#5a6d90]">{totalCount} items</p>

            <ul className="mt-5 space-y-3 border-b border-[#d5e4ff] pb-5">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#10203f]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#5a6d90]">
                      Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[#1f6fff]">
                    ${(item.price * item.quantity).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-2 text-sm text-[#4f648a]">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>{SHIPPING_FEE === 0 ? "Free" : `$${SHIPPING_FEE}`}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax (8%)</span>
                <span>${taxAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4 border-t border-[#d5e4ff] pt-4">
              <div className="flex items-center justify-between text-base font-bold text-[#10203f]">
                <span>Total</span>
                <span className="text-[#1f6fff]">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/cart"
              className="mt-5 inline-block text-sm font-semibold text-[#1f6fff] hover:text-[#1558e0]"
            >
              Edit cart
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
