"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.12l3.71-3.89a.75.75 0 1 1 1.08 1.04l-4.25 4.45a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 21C12 21 19 14.5 19 9.5C19 5.35786 15.866 2 12 2C8.13401 2 5 5.35786 5 9.5C5 14.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9.5" r="2.4" fill="currentColor" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6.7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 20L16.2 16.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavAction({
  top,
  bottom,
  className,
}: {
  top: string;
  bottom: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`group h-11 rounded-sm border border-[#d6e5ff] bg-white px-2 py-1.5 text-left text-[#0f2247] transition hover:border-[#9fc2ff] hover:bg-[#eef5ff] ${className ?? ""}`}
    >
      <p className="whitespace-nowrap text-[0.68rem] leading-none text-[#5b6b8a]">
        {top}
      </p>
      <p className="whitespace-nowrap text-[0.82rem] font-semibold leading-tight text-[#10203f] sm:text-sm">
        {bottom}
      </p>
    </button>
  );
}

const languages = [
  { code: "EN", label: "English" },
  { code: "BN", label: "বাংলা" },
  { code: "AR", label: "العربية" },
  { code: "FR", label: "Français" },
  { code: "ZH", label: "中文" },
  { code: "ES", label: "Español" },
  { code: "DE", label: "Deutsch" },
  { code: "HI", label: "हिन्दी" },
  { code: "JA", label: "日本語" },
  { code: "PT", label: "Português" },
];

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const langRef = useRef<HTMLDivElement>(null);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    if (!isLangOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#d5e4ff] bg-[#f8fbff] text-[#10203f]">
      <div className="flex w-full flex-col gap-2 px-3 py-2 sm:px-4 lg:flex-row lg:items-center lg:gap-3">
        {/* Row 1: Logo, mobile actions, Cart — lg+ handled by right-side actions div */}
        <div className="flex w-full items-center justify-between gap-2 lg:w-auto lg:justify-start lg:gap-3">
          <Link
            href="/"
            className="rounded-sm border border-[#d5e4ff] bg-white px-2.5 py-1.5 text-[1.45rem] font-semibold leading-none tracking-tight text-[#0d57df] sm:text-[1.65rem]"
          >
            Blue
            <span className="text-[#6da7ff]">Cart</span>
          </Link>

          {/* Location — desktop only */}
          <button
            type="button"
            className="hidden items-center gap-1 rounded-sm border border-[#d5e4ff] bg-white px-2.5 py-1.5 text-left text-[#11305f] lg:flex"
          >
            <LocationIcon />
            <span>
              <span className="block text-[0.68rem] leading-none text-[#5a6d90]">
                Deliver to
              </span>
              <span className="block text-sm font-semibold leading-tight">
                New York
              </span>
            </span>
          </button>

          {/* Mobile/tablet: Location + Hello + Orders + Cart all in one row */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              type="button"
              className="flex h-11 shrink-0 items-center gap-1 rounded-sm border border-[#d5e4ff] bg-white px-2 py-1.5 text-left text-[#11305f]"
            >
              <LocationIcon />
              <span>
                <span className="block text-[0.68rem] leading-none text-[#5a6d90]">
                  Deliver to
                </span>
                <span className="block text-sm font-semibold leading-tight">
                  New York
                </span>
              </span>
            </button>
            <NavAction top="Hello" bottom="Guest" className="shrink-0" />
            <NavAction top="Returns &" bottom="Orders" className="shrink-0" />
            <button
              type="button"
              aria-label="Cart"
              onClick={openCart}
              className="flex h-11 shrink-0 items-center gap-1 rounded-sm border border-[#d6e5ff] bg-white px-2 py-1.5 text-[#0f2349]"
            >
              <Image
                src="/icons/cart.png"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
              {totalCount > 0 && (
                <span className="text-xs font-bold leading-none text-[#1f6fff]">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <form className="flex min-w-0 flex-1 overflow-hidden rounded-sm border border-[#b8d2ff] bg-white focus-within:border-[#1f6fff]">
          <label htmlFor="search-department" className="sr-only">
            Search department
          </label>
          <select
            id="search-department"
            className="w-14 shrink-0 border-r border-[#d5e4ff] bg-[#f3f8ff] px-1.5 text-xs text-[#3f5477] outline-none sm:w-20 sm:px-2"
            defaultValue="all"
          >
            <option value="all">All</option>
            <option value="deals">Deals</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
          </select>

          <label htmlFor="search-input" className="sr-only">
            Search products
          </label>
          <input
            id="search-input"
            type="search"
            placeholder="Search products"
            className="h-10 min-w-0 flex-1 bg-white px-2.5 text-[0.9rem] text-[#10203f] outline-none sm:h-11 sm:px-3 sm:text-[0.95rem]"
          />

          <button
            type="submit"
            className="grid h-10 w-11 shrink-0 place-items-center bg-[#1f6fff] text-white transition hover:bg-[#175de1] sm:h-11 sm:w-12"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </form>

        <div className="hidden items-center gap-1 lg:flex lg:justify-end">
          <div ref={langRef} className="relative hidden lg:flex">
            <button
              type="button"
              onClick={() => setIsLangOpen((o) => !o)}
              className="flex items-center gap-1 rounded-sm border border-[#d6e5ff] bg-white px-2.5 py-2.5 text-sm font-semibold text-[#18376b] transition hover:border-[#9fc2ff] hover:bg-[#eef5ff]"
            >
              {selectedLang}
              <ChevronDownIcon className="h-4 w-4 text-[#6d82a5]" />
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-full z-50 mt-1 w-44 rounded-sm border border-[#d5e4ff] bg-white shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm text-left transition hover:bg-[#eef5ff] ${
                      selectedLang === lang.code
                        ? "font-semibold text-[#1f6fff]"
                        : "text-[#344f78]"
                    }`}
                  >
                    <span className="w-7 font-semibold">{lang.code}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <NavAction top="Hello" bottom="Guest" />
          <NavAction
            top="Returns &"
            bottom="Orders"
            className="hidden md:block"
          />

          <button
            type="button"
            aria-label="Cart"
            onClick={openCart}
            className="flex items-center gap-1 rounded-sm border border-[#d6e5ff] bg-white px-2.5 py-1.5 text-[#0f2349]"
          >
            <Image
              src="/icons/cart.png"
              alt=""
              width={28}
              height={28}
              aria-hidden="true"
            />
            <span className="text-xl font-bold leading-none text-[#1f6fff]">
              {totalCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
