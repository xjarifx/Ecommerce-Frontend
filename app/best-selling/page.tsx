import BestSelling from "../../components/BestSelling";

export default function BestSellingPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] px-4 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1f6fff]">
            All picks
          </p>
          <h1 className="text-3xl font-bold text-[#10203f] sm:text-4xl">
            Best Selling Collection
          </h1>
          <p className="mt-1 text-sm text-[#5a6d90] sm:text-base">
            Explore more top-performing products across categories.
          </p>
        </div>

        <BestSelling limit={16} showViewAll={false} />
      </div>
    </main>
  );
}
