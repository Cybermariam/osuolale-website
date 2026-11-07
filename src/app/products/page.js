import { CgProductHunt } from "react-icons/cg";
import ProductCategories from "./components/ProductCategories";

export default function Products() {
  return (
    <main className="w-full py-12  bg-white ">
      <section className="pb-15">
        <div className=" mx-auto max-w-5xl px-6 text-center">
          <p className=" text-xs leading-4 tracking-[2.16px] font-bold text-[#A55E29]">
            PRODUCT CATALOGUE
          </p>
          <h2 className="lg:text-6xl  lg:leading-[1.1] my-4 text-4xl font-semibold leading-10 tracking-[-1.8px] text-(--text-primary)">
            Materials for every stage of your build.
          </h2>

          <p className="leading-7 text-[#6B6762]">
            Explore dependable essentials sourced from trusted manufacturers.
            Contact us for current prices and volume discounts.
          </p>
        </div>
      </section>
      <ProductCategories />
    </main>
  );
}
