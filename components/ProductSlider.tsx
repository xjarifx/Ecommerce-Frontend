"use client";

import { useRef } from "react";
import Image from "next/image";

export type SliderProduct = {
  id: string;
  name: string;
  emoji: string;
  background: string;
};

type ProductSliderProps = {
  title: string;
  products: SliderProduct[];
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path
          d="M14.5 5L7.5 12L14.5 19"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9.5 5L16.5 12L9.5 19"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function ProductSlider({ title, products }: ProductSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: "left" | "right") => {
    if (!trackRef.current) {
      return;
    }

    const amount = direction === "left" ? -700 : 700;
    trackRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="mx-auto mt-4 w-full max-w-[1600px] px-3 sm:px-4">
      <div className="relative bg-[#eaeded] p-5">
        <h2 className="mb-4 text-[2.05rem] font-semibold leading-tight text-[#111]">
          {title}
        </h2>

        <button
          type="button"
          onClick={() => handleSlide("left")}
          className="absolute top-1/2 left-0 z-10 grid h-24 w-10 -translate-y-1/2 place-items-center border border-black/10 bg-white/95 text-[#7d7d7d] shadow-sm transition hover:bg-white"
          aria-label="Previous products"
        >
          <ArrowIcon direction="left" />
        </button>

        <div
          ref={trackRef}
          className="hover-scroll-x flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth"
        >
          {products.map((product) => (
            <article
              key={product.id}
              className="w-[240px] shrink-0 snap-start bg-white p-3"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src="/product-image/product.jpg"
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 15vw, 45vw"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-[#111]">
                {product.name}
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleSlide("right")}
          className="absolute top-1/2 right-0 z-10 grid h-24 w-10 -translate-y-1/2 place-items-center border border-black/10 bg-white/95 text-[#7d7d7d] shadow-sm transition hover:bg-white"
          aria-label="Next products"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
