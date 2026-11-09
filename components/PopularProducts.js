import products from "./data/products";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const PopularProducts = () => {
  const popularProducts = products.filter((product) => product.isPopular);
  return (
    <section className="bg-(--page-background) py-10 px-6 md:px-12 lg:px-16">
      <p className="text-xs font-bold text-[#A55E29] leading-4 tracking-[2.16px]">
        POPULAR PRODUCTS
      </p>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-9 tracking-[-1.35px] text-(--text-primary) mt-4">
          Chosen by professionals.
        </h2>

        <Link
          href="/products"
          className="hidden md:flex gap-4 items-center mt-4 border-b  border-[#292929]/70 pb-2"
        >
          <p>Browse catalogue</p>
          <FaArrowRight className="text-[#292929]" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-7 ">
        {popularProducts.map((product) => (
          <article
            key={product.slug}
            className="flex flex-col border justify-between p-4 bg-white border-[#E8E6E1]"
          >
            <Link href={`/products/${product.slug}`}>
              <Image
                src={product.image}
                alt={product.category}
                width={300}
                height={300}
                className="w-full h-auto object-contain"
              />

              <div className="flex flex-col  gap-4 mt-4">
                <p className="text-[#9B622F] uppercase font-extrabold tracking-[1.8px] leading-4 text-xs">
                  {product.category}
                </p>
                <h3 className="text-(--text-primary) tracking-[-0.32px] leading-6 ">
                  {product.name}
                </h3>
                <p className="text-[#76716C]">{product.description}</p>
              </div>
            </Link>

            <div className="flex items-center justify-between gap-4 mt-4 border-t pt-4 border-[#E8E6E1]">
              <div>
                <h3 className="text-(--text-primary) font-semibold leading-6">
                  {product.price}
                </h3>
                <p className="text-[#85817C]">{product.unit}</p>
              </div>

              <a
                href="https://wa.me/2349169146370"
                rel="noopener noreferrer"
                target="_blank"
                className="border p-2 border-[#D8D5CF] bg-(--page-background)"
              >
                <FaWhatsapp />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
