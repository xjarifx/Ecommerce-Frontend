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
      <div className={`relative overflow-hidden ${featured ? "h-76" : "h-28"}`}>
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
      <p className={`mt-1 ${featured ? "text-lg font-medium" : "text-sm"}`}>
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
    <article className="h-full bg-[#eaeded] p-5">
      <h2 className="mb-3 text-[2rem] font-semibold leading-tight text-[#111]">
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
        className="mt-4 text-[1.05rem] text-[#2162a1] hover:underline"
      >
        {ctaText}
      </button>
    </article>
  );
}
