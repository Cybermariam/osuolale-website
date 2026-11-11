"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCategories from "./components/ProductCategories";
import ProductGrid from "./components/ProductGrid";
import CallToAction from "../../../components/CallToAction";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams.get("category") || "All products";

  const setSelectedCategory = (category) => {
    if (category === "All products") {
      router.push("/products");
    } else {
      router.push(`/products?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <main className="w-full pt-12  bg-white ">
      <section className="pb-15">
        <div className=" mx-auto max-w-5xl px-6 text-center">
          <p className=" text-xs leading-4 tracking-[2.16px] font-bold text-[#A55E29]">
            PRODUCT CATALOGUE
          </p>
          <h1 className="lg:text-6xl  lg:leading-[1.1] my-4 text-4xl font-semibold leading-10 tracking-[-1.8px] text-(--text-primary)">
            Materials for every stage of your build.
          </h1>

          <p className="leading-7 text-[#6B6762]">
            Explore dependable essentials sourced from trusted manufacturers.
            Contact us for current prices and volume discounts.
          </p>
        </div>
      </section>
      <ProductCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid selectedCategory={selectedCategory} />
      <CallToAction />
    </main>
  );
}
export default function Products() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}
