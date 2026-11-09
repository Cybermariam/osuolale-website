import products from "../../../../components/data/products";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const ProductGrid = ({ selectedCategory }) => {
  const filteredProducts =
    selectedCategory === "All products"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <section className="bg-(--page-background) py-10 px-6 md:px-12 lg:px-16">
      <div className="flex justify-between items-center">
        <div className="text-sm leading-5 text-[#706C67]">
          Showing{" "}
          <span className="font-bold text-(--text-primary) text-sm leading-5">
            {filteredProducts.length}
          </span>{" "}
          products
        </div>

        <div className="leading-4 tracking-[1.44px] text-xs text-[#8B8781] font-medium">
          PRICES UPDATED ON ENQUIRY
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-7 ">
        {filteredProducts.map((product) => (
          <article
            key={product.slug}
            className="flex flex-col border justify-between p-4 bg-white border-[#E8E6E1]"
          >
            <Link href={`/products/${product.slug}`}>
              <Image
                src={product.image}
                alt={product.name}
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

export default ProductGrid;
