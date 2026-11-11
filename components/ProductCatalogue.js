import products from "./data/products";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const ProductCatalogue = () => {
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <section className="bg-white py-10 px-6 md:px-12 lg:px-16">
      <p className="text-xs font-bold text-[#A55E29] leading-4 tracking-[2.16px]">
        OUR CATALOGUE
      </p>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-9 tracking-[-1.35px] text-(--text-primary) mt-4">
          Everything your project needs.
        </h2>
        <Link
          href="/products"
          className="hidden md:flex gap-4 items-center mt-4 border-b  border-[#292929]/70 pb-2"
        >
          <p>View all products</p>
          <FaArrowRight className="text-[#292929]" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-7 ">
        {categories.map((category) => {
          const categoryProduct = products.find(
            (product) => product.category === category,
          );
          return (
            <Link
              href={`/products/${categoryProduct.slug}`}
              key={category}
              className="flex flex-col border justify-between p-4 bg-(--page-background) border-[#E8E6E1]"
            >
              <Image
                src={categoryProduct.image}
                alt={categoryProduct.category}
                width={300}
                height={300}
                className="w-full h-auto object-contain"
              />
              <div className="flex items-center justify-between gap-4 mt-4">
                <h3>{categoryProduct.category}</h3>
                <div>
                  <FaArrowRight className="text-[#292929]" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCatalogue;
