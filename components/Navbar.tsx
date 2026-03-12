"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        d="M2.5 4H5L6.7 13.2C6.9 14.1 7.7 14.8 8.7 14.8H18.2C19.1 14.8 19.8 14.2 20 13.4L21.3 7.8H6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="18.2" r="1.6" fill="currentColor" />
      <circle cx="17.7" cy="18.2" r="1.6" fill="currentColor" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RightChevronIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M7.2 4.5L12.8 10L7.2 15.5"
        stroke={muted ? "#879395" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownChevronIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserCircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="9" r="3" fill="currentColor" />
      <path
        d="M6.5 17.2C7.8 15 9.7 13.9 12 13.9C14.3 13.9 16.2 15 17.5 17.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavAction({ top, bottom }: { top: string; bottom: string }) {
  return (
    <button
      type="button"
      className="group rounded-sm border border-transparent px-2 py-1 text-left text-white hover:border-white/70"
    >
      <p className="text-xs leading-none text-[#d6e2ee]">{top}</p>
      <p className="text-sm font-semibold leading-tight text-white">{bottom}</p>
    </button>
  );
}

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const secondaryLinks = [
    "Today's Deals",
    "Gift Cards",
    "Registry",
    "Sell",
    "Prime Video",
    "Customer Service",
  ];

  const digitalItems = [
    "Prime Video",
    "Amazon Music",
    "Kindle E-readers & Books",
    "Amazon Appstore",
  ];

  const departmentItems = [
    "Electronics",
    "Computers",
    "Smart Home",
    "Arts & Crafts",
  ];

  const programItems = [
    "Gift Cards",
    "Shop By Interest",
    "Amazon Live",
    "International Shopping",
  ];

  useEffect(() => {
    if (!isSidebarOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isSidebarOpen]);

  return (
    <header className="w-full bg-[#131a22] text-white">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-3 py-2 sm:px-4 lg:flex-row lg:items-center lg:gap-4">
        <div className="flex items-center gap-2 lg:gap-3">
          <Link
            href="/"
            className="rounded-sm border border-transparent px-2 py-1 text-[2.05rem] font-bold leading-none tracking-tight hover:border-white/70"
          >
            local
            <span className="ml-1 text-lg text-[#ff9900]">.in</span>
          </Link>

          <button
            type="button"
            className="hidden items-end gap-1 rounded-sm border border-transparent px-2 py-1 text-left hover:border-white/70 sm:flex"
          >
            <LocationIcon />
            <span>
              <span className="block text-[0.68rem] leading-none text-[#d6e2ee]">
                Deliver to
              </span>
              <span className="block text-sm font-semibold leading-tight">
                Bangladesh
              </span>
            </span>
          </button>
        </div>

        <form className="flex min-w-0 flex-1 overflow-hidden rounded-lg border-2 border-transparent focus-within:border-[#ff9900]">
          <label htmlFor="search-department" className="sr-only">
            Search department
          </label>
          <select
            id="search-department"
            className="w-16 shrink-0 border-r border-[#c8c8c8] bg-[#e6e6e6] px-2 text-xs text-[#404040] outline-none sm:w-20"
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
            placeholder="Search Amazon"
            className="h-11 min-w-0 flex-1 bg-white px-3 text-[0.95rem] text-black outline-none"
          />

          <button
            type="submit"
            className="grid h-11 w-12 shrink-0 place-items-center bg-[#febd69] text-[#1b1b1b] transition hover:bg-[#f3a847]"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </form>

        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 lg:justify-end lg:overflow-visible lg:pb-0">
          <button
            type="button"
            className="hidden items-center gap-1 rounded-sm border border-transparent px-2 py-1 text-sm font-semibold hover:border-white/70 sm:flex"
          >
            <span className="text-lg">🇺🇸</span>
            EN
            <ChevronDownIcon className="h-4 w-4 text-[#d6e2ee]" />
          </button>

          <NavAction top="Hello, sign in" bottom="Account & Lists" />
          <NavAction top="Returns" bottom="& Orders" />

          <button
            type="button"
            className="relative flex items-end gap-1 rounded-sm border border-transparent px-2 py-1 text-white hover:border-white/70"
          >
            <span className="absolute left-[22px] top-0 text-sm font-bold leading-none text-[#ff9900]">
              0
            </span>
            <CartIcon />
            <span className="text-lg font-bold leading-none">Cart</span>
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#232f3e]">
        <nav className="mx-auto flex w-full max-w-[1600px] items-center gap-2 overflow-x-auto px-3 py-1.5 sm:px-4">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="inline-flex items-center gap-1 rounded-sm border border-transparent px-2 py-1 text-sm font-bold whitespace-nowrap hover:border-white/70"
          >
            <MenuIcon />
            All
          </button>

          {secondaryLinks.map((item) => (
            <button
              key={item}
              type="button"
              className="rounded-sm border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap hover:border-white/70"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {isSidebarOpen ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu overlay"
          />

          <aside className="absolute top-0 left-0 h-full w-[365px] max-w-[92vw] bg-[#f4f4f4] text-[#111] shadow-2xl">
            <div className="flex h-13 items-center gap-3 bg-[#232f3e] px-5 text-white">
              <UserCircleIcon />
              <p className="text-[2rem] font-bold leading-none">
                Hello, sign in
              </p>
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                className="ml-auto text-white"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="h-[calc(100%-52px)] overflow-y-auto border-r border-[#d4d7d9] bg-[#f4f4f4]">
              <section className="border-b border-[#d4d7d9] px-6 py-5">
                <h3 className="mb-3 text-[2rem] font-bold leading-tight">
                  Digital Content & Devices
                </h3>
                <ul>
                  {digitalItems.map((item, index) => (
                    <li key={item}>
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between px-0 py-3 text-left text-[1.72rem] ${index === 3 ? "bg-[#e2e5e7] px-4 text-[1.68rem]" : ""}`}
                      >
                        <span>{item}</span>
                        <RightChevronIcon muted={index !== 3} />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border-b border-[#d4d7d9] px-6 py-5">
                <h3 className="mb-3 text-[2rem] font-bold leading-tight">
                  Shop by Department
                </h3>
                <ul>
                  {departmentItems.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-left text-[1.72rem]"
                      >
                        <span>{item}</span>
                        <RightChevronIcon muted />
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-1 flex items-center gap-1 text-[1.72rem] text-[#222]"
                >
                  See all
                  <DownChevronIcon />
                </button>
              </section>

              <section className="border-b border-[#d4d7d9] px-6 py-5">
                <h3 className="mb-3 text-[2rem] font-bold leading-tight">
                  Programs & Features
                </h3>
                <ul>
                  {programItems.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-left text-[1.72rem]"
                      >
                        <span>{item}</span>
                        <RightChevronIcon muted />
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-1 flex items-center gap-1 text-[1.72rem] text-[#222]"
                >
                  See all
                  <DownChevronIcon />
                </button>
              </section>

              <section className="px-6 py-5">
                <h3 className="text-[2rem] font-bold leading-tight">
                  Help & Settings
                </h3>

                <ul className="mt-3">
                  <li>
                    <button
                      type="button"
                      className="py-3 text-left text-[1.72rem] text-[#222]"
                    >
                      Your Account
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="flex items-center gap-2 py-3 text-left text-[1.72rem] text-[#222]"
                    >
                      <span className="text-[1.45rem] text-[#8a9499]">🌐</span>
                      English
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="flex items-center gap-2 py-3 text-left text-[1.72rem] text-[#222]"
                    >
                      <span className="text-[1.45rem]">🇺🇸</span>
                      United States
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="py-3 text-left text-[1.72rem] text-[#222]"
                    >
                      Customer Service
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="py-3 text-left text-[1.72rem] text-[#222]"
                    >
                      Sign in
                    </button>
                  </li>
                </ul>
              </section>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
