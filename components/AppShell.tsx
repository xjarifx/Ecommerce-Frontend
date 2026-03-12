"use client";

import CartSidebar from "./CartSidebar";
import Navbar from "./Navbar";
import { useCart } from "../context/CartContext";

export default function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { items } = useCart();
  const hasCartItems = items.length > 0;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className={hasCartItems ? "xl:pr-72" : ""}>{children}</div>
      <CartSidebar />
    </div>
  );
}
