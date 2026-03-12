"use client";

import { useMemo, useState } from "react";

const amountOptions = [25, 50, 100, 200];

export default function GiftCardsPage() {
  const [amount, setAmount] = useState(50);
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [isPurchased, setIsPurchased] = useState(false);

  const canSubmit = useMemo(
    () => recipient.trim().length > 0 && sender.trim().length > 0,
    [recipient, sender],
  );

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto max-w-3xl rounded-sm border border-[#d5e4ff] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#10203f]">Gift Cards</h1>
        <p className="mt-2 text-sm text-[#5a6d90]">
          Send a digital BlueCart gift card instantly.
        </p>

        {isPurchased ? (
          <div className="mt-6 rounded-sm border border-[#b7e7ca] bg-[#f2fff7] p-4">
            <p className="text-sm font-semibold text-[#0c6b38]">
              Gift card purchased successfully.
            </p>
            <p className="mt-1 text-sm text-[#2f6d4e]">
              ${amount} gift card will be sent to {recipient} from {sender}.
            </p>
          </div>
        ) : (
          <form
            className="mt-6 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              if (!canSubmit) return;
              setIsPurchased(true);
            }}
          >
            <div>
              <p className="mb-2 text-sm font-semibold text-[#10203f]">
                Choose amount
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {amountOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAmount(option)}
                    className={`rounded-sm border px-3 py-2 text-sm font-semibold transition ${
                      amount === option
                        ? "border-[#1f6fff] bg-[#eaf2ff] text-[#1f6fff]"
                        : "border-[#d5e4ff] text-[#10203f] hover:bg-[#f5f8ff]"
                    }`}
                  >
                    ${option}
                  </button>
                ))}
              </div>
            </div>

            <label className="block text-sm font-medium text-[#324b72]">
              Recipient Email
              <input
                type="email"
                required
                value={recipient}
                onChange={(event) => setRecipient(event.target.value)}
                className="mt-1 h-11 w-full rounded-sm border border-[#d5e4ff] px-3 text-[#10203f] outline-none focus:border-[#1f6fff]"
                placeholder="friend@example.com"
              />
            </label>

            <label className="block text-sm font-medium text-[#324b72]">
              Your Name
              <input
                type="text"
                required
                value={sender}
                onChange={(event) => setSender(event.target.value)}
                className="mt-1 h-11 w-full rounded-sm border border-[#d5e4ff] px-3 text-[#10203f] outline-none focus:border-[#1f6fff]"
                placeholder="Your name"
              />
            </label>

            <button
              type="submit"
              disabled={!canSubmit}
              className="h-11 rounded-sm bg-[#1f6fff] px-5 text-sm font-semibold text-white transition hover:bg-[#175de1] disabled:cursor-not-allowed disabled:bg-[#8ab1ff]"
            >
              Buy Gift Card
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
