import products from "../../../../components/data/products";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProductDetails = async ({ params }) => {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-7 ">
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
      </div>
    </main>
  );
};

export default ProductDetails;
