"use client";

import { useState } from "react";

export default function SupportPage() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto max-w-3xl rounded-sm border border-[#d5e4ff] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#10203f]">Support Center</h1>
        <p className="mt-2 text-sm text-[#5a6d90]">
          Need help? Send us a message and we will get back to you.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-sm border border-[#d5e4ff] bg-[#fbfdff] p-4 text-sm text-[#324b72]">
            <p className="font-semibold text-[#10203f]">Email</p>
            <p className="mt-1">support@bluecart.example</p>
          </div>
          <div className="rounded-sm border border-[#d5e4ff] bg-[#fbfdff] p-4 text-sm text-[#324b72]">
            <p className="font-semibold text-[#10203f]">Phone</p>
            <p className="mt-1">+1 (800) 555-0142</p>
          </div>
        </div>

        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault();
            if (!message.trim()) return;
            setSent(true);
            setMessage("");
          }}
        >
          <label className="block text-sm font-medium text-[#324b72]">
            Message
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={5}
              placeholder="Tell us what you need help with"
              className="mt-1 w-full rounded-sm border border-[#d5e4ff] px-3 py-2 text-[#10203f] outline-none focus:border-[#1f6fff]"
            />
          </label>
          <button
            type="submit"
            className="mt-3 h-11 rounded-sm bg-[#1f6fff] px-5 text-sm font-semibold text-white transition hover:bg-[#175de1]"
          >
            Send Message
          </button>
        </form>

        {sent && (
          <p className="mt-4 rounded-sm border border-[#b7e7ca] bg-[#f2fff7] px-3 py-2 text-sm text-[#0c6b38]">
            Your message has been sent. Our support team will contact you soon.
          </p>
        )}
      </div>
    </main>
  );
}
