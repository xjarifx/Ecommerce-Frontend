"use client";

import { useMemo, useState } from "react";

const sampleOrders = [
  {
    id: "BC-10431",
    date: "Mar 10, 2026",
    status: "Out for delivery",
    total: 278,
  },
  {
    id: "BC-10312",
    date: "Mar 1, 2026",
    status: "Delivered",
    total: 92,
  },
  {
    id: "BC-10277",
    date: "Feb 24, 2026",
    status: "Delivered",
    total: 641,
  },
];

export default function OrdersPage() {
  const [query, setQuery] = useState("");

  const filteredOrders = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return sampleOrders;
    return sampleOrders.filter((order) =>
      order.id.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-[#10203f]">Your Orders</h1>
        <p className="mt-2 text-sm text-[#5a6d90]">
          Track and review your order history.
        </p>

        <div className="mt-6 rounded-sm border border-[#d5e4ff] bg-white p-5 shadow-sm">
          <label className="block text-sm font-medium text-[#324b72]">
            Search order by ID
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. BC-10431"
              className="mt-1 h-11 w-full rounded-sm border border-[#d5e4ff] px-3 text-[#10203f] outline-none focus:border-[#1f6fff]"
            />
          </label>

          <ul className="mt-5 space-y-3">
            {filteredOrders.map((order) => (
              <li
                key={order.id}
                className="rounded-sm border border-[#d5e4ff] bg-[#fbfdff] px-4 py-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[#10203f]">
                    {order.id}
                  </p>
                  <span className="text-xs font-semibold text-[#1f6fff]">
                    {order.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#5a6d90]">{order.date}</p>
                <p className="mt-1 text-sm font-semibold text-[#10203f]">
                  Total: ${order.total.toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
