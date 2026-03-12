"use client";

import { useEffect, useState } from "react";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  background: string;
};

type HeroSliderProps = {
  slides: HeroSlide[];
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
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

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  if (!slides.length) {
    return null;
  }

  return (
    <section className="mx-auto mt-4 w-full max-w-[1600px] px-3 sm:px-4">
      <div className="relative overflow-hidden rounded-sm border border-black/5 shadow-[0_14px_35px_rgba(0,0,0,0.18)]">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <article
              key={slide.id}
              className="relative min-h-[360px] w-full min-w-full overflow-hidden md:min-h-[460px]"
              style={{ background: slide.background }}
            >
              <div className="absolute top-[-90px] right-[-60px] h-56 w-56 rounded-full bg-white/20 blur-[1px]" />
              <div className="absolute bottom-[-120px] left-[-90px] h-64 w-64 rounded-full bg-black/10" />

              <div className="relative z-10 flex h-full max-w-[760px] flex-col justify-center gap-4 px-6 py-10 sm:px-10 md:px-14">
                <p className="text-sm font-semibold tracking-[0.2em] text-white/90 uppercase">
                  {slide.eyebrow}
                </p>
                <h1 className="max-w-[14ch] text-4xl leading-[1.05] font-bold text-white sm:text-5xl md:text-6xl">
                  {slide.title}
                </h1>
                <p className="max-w-[48ch] text-base leading-relaxed text-white/90 sm:text-lg">
                  {slide.description}
                </p>
                <button
                  type="button"
                  className="mt-2 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#f0f0f0]"
                >
                  {slide.ctaText}
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute top-1/2 left-3 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:grid"
          aria-label="Show previous slide"
        >
          <ArrowIcon direction="left" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="absolute top-1/2 right-3 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:grid"
          aria-label="Show next slide"
        >
          <ArrowIcon direction="right" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-sm">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition ${
                activeIndex === index
                  ? "w-7 bg-white"
                  : "w-2.5 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
