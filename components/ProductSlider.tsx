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
      <div className="relative rounded-sm border border-[#d5e4ff] bg-white p-5">
        <h2 className="mb-4 text-[1.85rem] font-semibold leading-tight text-[#10203f]">
          {title}
        </h2>

        <button
          type="button"
          onClick={() => handleSlide("left")}
          className="absolute top-1/2 left-0 z-10 grid h-24 w-10 -translate-y-1/2 place-items-center rounded-r-sm border border-[#d5e4ff] bg-[#f4f8ff] text-[#315997] transition hover:bg-[#ebf3ff]"
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
              className="w-[240px] shrink-0 snap-start rounded-sm border border-[#d5e4ff] bg-[#f9fbff] p-3"
            >
              <div
                className="relative h-44 overflow-hidden rounded-sm border border-[#dbe8ff]"
                style={{ background: product.background }}
              >
                <Image
                  src="/product-image/product.jpg"
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 15vw, 45vw"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-[#10203f]">
                {product.name}
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleSlide("right")}
          className="absolute top-1/2 right-0 z-10 grid h-24 w-10 -translate-y-1/2 place-items-center rounded-l-sm border border-[#d5e4ff] bg-[#f4f8ff] text-[#315997] transition hover:bg-[#ebf3ff]"
          aria-label="Next products"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
}
