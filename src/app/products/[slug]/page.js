import products from "../../../../components/data/products";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const productFeatures = [
  "Quality checked",
  "Trusted suppliers",
  "Bulk orders welcome",
  "Site delivery available",
];

const ProductDetails = async ({ params }) => {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const remainingProducts = products.filter(
    (item) => item.slug !== product.slug,
  );

  return (
    <main className="bg-(--page-background) py-10 px-6 md:px-12 lg:px-16">
      <Link
        href="/products"
        className="flex items-center gap-2 py-4 text-[#716D68] leading-6"
      >
        <FaArrowLeft />
        <span>Back to catalogue</span>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-auto object-contain"
        />
        <div>
          <div className="flex flex-col  gap-4 mt-4">
            <p className="text-[#A55E29] uppercase font-bold tracking-[2.16px] leading-4 text-xs">
              {product.category}
            </p>
            <h3 className="text-(--text-primary) tracking-[-1.8px] font-semibold leading-10 text-4xl ">
              {product.name}
            </h3>
            <p className="text-[#68645F] leading-8 font-medium">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 mt-4 border-t pt-4 border-[#E2DFD9]">
            <div>
              <h3 className="text-(--text-primary) font-semibold leading-8">
                {product.price}
              </h3>
              <p className="text-[#77736E] leading-5 text-sm">{product.unit}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {productFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 items-center text-(--text-primary) text-sm "
                >
                  <span className="flex items-center justify-center ">
                    <FaCheck className="text-[#C87535] text-[10px]" />
                  </span>

                  <span className="text-[#514E4A] leading-5 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-(--brand-primary) text-white  px-6 py-5 hover:bg-[#af622c] leading-3.5 text-sm font-bold transition-colors"
            >
              Request a Quote
            </Link>

            <button
              type="button"
              className="bg-white inline-flex items-center justify-center gap-3 border border-[#cfcbc4] text-(--text-primary) font-semibold px-6 py-4"
            >
              <FaWhatsapp aria-hidden="true" className="text-xl" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
      <p className="text-[#89857F] text-xs leading-5">
        Final pricing depends on quantity, brand availability, and delivery
        location.
      </p>
      <section className="mt-16 border-t border-[#E8E6E1] pt-10">
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
                  href={`https://wa.me/2349169146370?text=${encodeURIComponent(
                    `Hello, I'm interested in ${product.name}. Please provide more information.`,
                  )}`}
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
    </main>
  );
};

export default ProductDetails;
