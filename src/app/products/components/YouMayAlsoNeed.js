import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import products from "../../../../components/data/products";

const YouMayAlsoNeed = ({ product }) => {
  const remainingProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <section className="mt-16 bg-white py-10 px-6 md:px-12 lg:px-16">
      <div>
        <p className="text-[#A55E29] uppercase font-bold tracking-[2.16px] leading-4 text-xs">
          YOU MAY ALSO NEED
        </p>

        <h2 className="text-(--text-primary) text-3xl font-semibold leading-9 tracking-[-1.35px] mt-3">
          Complete Your Order
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-7">
        {remainingProducts.map((product) => (
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
                href={`https://wa.me/2349169146370?text=${encodeURIComponent(
                  `Hello, I'm interested in ${product.name}. Please provide more information.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border p-2 border-[#D8D5CF] bg-(--page-background)"
              >
                <FaWhatsapp aria-hidden="true" className="text-xl" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default YouMayAlsoNeed;
