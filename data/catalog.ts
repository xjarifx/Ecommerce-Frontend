export type Category = {
  label: string;
  photo: string;
  bg: string;
};

export type CatalogProduct = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  photo: string;
  freeShipping: boolean;
};

export const categories: Category[] = [
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

type CategoryTemplate = {
  basePrice: number;
  brands: string[];
  names: string[];
  photos: string[];
};

const categoryTemplates: Record<string, CategoryTemplate> = {
  Phones: {
    basePrice: 420,
    brands: ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"],
    names: [
      "Pro Smartphone",
      "Ultra 5G Phone",
      "Compact Flagship",
      "Gaming Edition",
      "Camera Focus Model",
    ],
    photos: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop&auto=format",
    ],
  },
  Laptops: {
    basePrice: 780,
    brands: ["Apple", "Dell", "Lenovo", "ASUS", "HP"],
    names: [
      "Slim Laptop",
      "Creator Workstation",
      "Gaming Laptop",
      "Business Notebook",
      "Everyday Ultrabook",
    ],
    photos: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=600&fit=crop&auto=format",
    ],
  },
  Shoes: {
    basePrice: 48,
    brands: ["Nike", "Adidas", "Puma", "New Balance", "Reebok"],
    names: [
      "Running Shoes",
      "Lifestyle Sneakers",
      "Training Shoes",
      "Streetwear Pair",
      "Trail Runner",
    ],
    photos: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&h=600&fit=crop&auto=format",
    ],
  },
  Clothing: {
    basePrice: 24,
    brands: ["Levi's", "H&M", "Zara", "Uniqlo", "Gap"],
    names: [
      "Classic Fit Shirt",
      "Relaxed Jeans",
      "Casual Hoodie",
      "Cotton Polo",
      "Daily Wear Jacket",
    ],
    photos: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop&auto=format",
    ],
  },
  Headphones: {
    basePrice: 85,
    brands: ["Sony", "Bose", "JBL", "Sennheiser", "Anker"],
    names: [
      "Noise Cancelling Headphones",
      "Studio Wireless Headphones",
      "Sport Earbuds",
      "Travel ANC Headset",
      "Bass Boost Headphones",
    ],
    photos: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=600&h=600&fit=crop&auto=format",
    ],
  },
};

const fallbackTemplate: CategoryTemplate = {
  basePrice: 32,
  brands: ["BlueCart", "PrimeCo", "Everyday", "Urban", "Core"],
  names: [
    "Popular Choice",
    "Customer Favorite",
    "Everyday Essential",
    "Premium Pick",
    "Budget Value",
  ],
  photos: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop&auto=format",
  ],
};

export function toCategorySlug(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => toCategorySlug(category.label) === slug);
}

export function getProductsForCategory(
  categoryLabel: string,
  count = 16,
): CatalogProduct[] {
  const template = categoryTemplates[categoryLabel] ?? fallbackTemplate;

  return Array.from({ length: count }, (_, index) => {
    const brand = template.brands[index % template.brands.length];
    const seedName = template.names[index % template.names.length];
    const model = 100 + (index + 1) * 7;
    const price = Math.round(template.basePrice * (1 + (index % 5) * 0.18));
    const originalPrice = Math.round(price * 1.18);
    const rating = Number((4 + (index % 10) * 0.08).toFixed(1));
    const reviewCount = 140 + index * 63;

    return {
      id: `${toCategorySlug(categoryLabel)}-${index + 1}`,
      name:
        template === fallbackTemplate
          ? `${brand} ${categoryLabel} ${seedName} ${model}`
          : `${brand} ${seedName} ${model}`,
      category: categoryLabel,
      brand,
      price,
      originalPrice,
      rating,
      reviewCount,
      photo: template.photos[index % template.photos.length],
      freeShipping: index % 3 !== 0,
    };
  });
}
