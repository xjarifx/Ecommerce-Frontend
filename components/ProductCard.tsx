import Image from "next/image";

export type ProductCardItem = {
  title: string;
  emoji: string;
  background: string;
};

type ProductCardProps = {
  title: string;
  items: ProductCardItem[];
  ctaText: string;
  featured?: boolean;
};

function ProductTile({
  item,
  featured = false,
}: {
  item: ProductCardItem;
  featured?: boolean;
}) {
  return (
    <div>
      <div
        className={`relative overflow-hidden rounded-sm border border-[#d5e4ff] ${featured ? "h-76" : "h-28"}`}
        style={{ background: item.background }}
      >
        <Image
          src="/product-image/product.jpg"
          alt={item.title}
          fill
          className="object-cover"
          sizes={
            featured
              ? "(min-width: 1024px) 25vw, 100vw"
              : "(min-width: 1024px) 12vw, 45vw"
          }
        />
      </div>
      <p
        className={`mt-2 text-[#11264f] ${featured ? "text-lg font-medium" : "text-sm"}`}
      >
        {item.title}
      </p>
    </div>
  );
}

export default function ProductCard({
  title,
  items,
  ctaText,
  featured = false,
}: ProductCardProps) {
  return (
    <article className="h-full rounded-sm border border-[#d5e4ff] bg-white p-5">
      <h2 className="mb-3 text-[1.6rem] font-semibold leading-tight text-[#10203f]">
        {title}
      </h2>

      {featured ? (
        <ProductTile item={items[0]} featured />
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {items.slice(0, 4).map((item) => (
            <ProductTile key={item.title} item={item} />
          ))}
        </div>
      )}

      <button
        type="button"
        className="mt-4 rounded-sm border border-[#d1e1ff] bg-[#edf4ff] px-4 py-2 text-[0.95rem] font-medium text-[#1f6fff] transition hover:bg-[#e1edff]"
      >
        {ctaText}
      </button>
    </article>
  );
}
