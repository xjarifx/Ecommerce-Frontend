import Image from "next/image";

type Category = {
  label: string;
  photo: string;
  bg: string;
};

const categories: Category[] = [
  {
    label: "Food & Grocery",
    photo:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&auto=format",
    bg: "#e8f5e9",
  },
  {
    label: "Clothing",
    photo:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop&auto=format",
    bg: "#fce4ec",
  },
  {
    label: "Medicine",
    photo:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&auto=format",
    bg: "#e8eaf6",
  },
  {
    label: "Phones",
    photo:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&auto=format",
    bg: "#e3f2fd",
  },
  {
    label: "Laptops",
    photo:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format",
    bg: "#ede7f6",
  },
  {
    label: "GPUs",
    photo:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format",
    bg: "#fff3e0",
  },
  {
    label: "Books",
    photo:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop&auto=format",
    bg: "#f9fbe7",
  },
  {
    label: "Sports",
    photo:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop&auto=format",
    bg: "#e0f7fa",
  },
  {
    label: "Home & Living",
    photo:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop&auto=format",
    bg: "#fff8e1",
  },
  {
    label: "Beauty",
    photo:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop&auto=format",
    bg: "#fce4ec",
  },
  {
    label: "Toys",
    photo:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=300&fit=crop&auto=format",
    bg: "#fff3e0",
  },
  {
    label: "Automotive",
    photo:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop&auto=format",
    bg: "#eceff1",
  },
  {
    label: "Furniture",
    photo:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop&auto=format",
    bg: "#fdf6ec",
  },
  {
    label: "Watches",
    photo:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&auto=format",
    bg: "#f3e5f5",
  },
  {
    label: "Cameras",
    photo:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&auto=format",
    bg: "#e8eaf6",
  },
  {
    label: "Headphones",
    photo:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&auto=format",
    bg: "#e3f2fd",
  },
  {
    label: "Shoes",
    photo:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&auto=format",
    bg: "#fce4ec",
  },
  {
    label: "Bags",
    photo:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop&auto=format",
    bg: "#fff8e1",
  },
  {
    label: "Jewellery",
    photo:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&auto=format",
    bg: "#fce4ec",
  },
  {
    label: "Pet Supplies",
    photo:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop&auto=format",
    bg: "#e8f5e9",
  },
  {
    label: "Garden",
    photo:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format",
    bg: "#f1f8e9",
  },
  {
    label: "Office",
    photo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&auto=format",
    bg: "#e3f2fd",
  },
  {
    label: "Musical Instruments",
    photo:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop&auto=format",
    bg: "#fff3e0",
  },
];

export default function CategoryGrid() {
  return (
    <section className="mt-8 w-full px-3 sm:px-4">
      <h2 className="mb-4 text-xl font-semibold text-[#10203f] sm:text-2xl">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat) => (
          <button
            key={cat.label}
            type="button"
            className="group overflow-hidden rounded-2xl border border-[#d5e4ff] bg-white text-left shadow-sm transition hover:border-[#93b8ff] hover:shadow-md"
          >
            <div
              className="relative h-44 w-full overflow-hidden sm:h-52"
              style={{ background: cat.bg }}
            >
              <Image
                src={cat.photo}
                alt={cat.label}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-[#10203f] sm:text-base">
                {cat.label}
              </p>
              <p className="mt-0.5 text-xs text-[#5a6d90]">Shop now →</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
