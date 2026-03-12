"use client";

import { useMemo, useState } from "react";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Miami",
  "Seattle",
];

export default function DeliveryPage() {
  const [selectedCity, setSelectedCity] = useState("New York");
  const [zipCode, setZipCode] = useState("");

  const estimatedDays = useMemo(() => {
    if (!zipCode.trim()) return "2-5";
    return zipCode.trim().startsWith("9") ? "3-6" : "1-4";
  }, [zipCode]);

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto max-w-3xl rounded-sm border border-[#d5e4ff] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#10203f]">
          Delivery Preferences
        </h1>
        <p className="mt-2 text-sm text-[#5a6d90]">
          Set your city and estimate shipping speed.
        </p>

        <div className="mt-6 space-y-5">
          <label className="block text-sm font-medium text-[#324b72]">
            Delivery city
            <select
              value={selectedCity}
              onChange={(event) => setSelectedCity(event.target.value)}
              className="mt-1 h-11 w-full rounded-sm border border-[#d5e4ff] px-3 text-[#10203f] outline-none focus:border-[#1f6fff]"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-[#324b72]">
            ZIP code
            <input
              type="text"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
              placeholder="10001"
              className="mt-1 h-11 w-full rounded-sm border border-[#d5e4ff] px-3 text-[#10203f] outline-none focus:border-[#1f6fff]"
            />
          </label>

          <div className="rounded-sm border border-[#d5e4ff] bg-[#f8fbff] p-4">
            <p className="text-sm font-semibold text-[#10203f]">
              Current selection
            </p>
            <p className="mt-1 text-sm text-[#5a6d90]">City: {selectedCity}</p>
            <p className="mt-1 text-sm text-[#5a6d90]">
              Estimated shipping window: {estimatedDays} business days
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
