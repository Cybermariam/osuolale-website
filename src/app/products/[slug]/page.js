import products from "../../../../components/data/products";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import YouMayAlsoNeed from "../components/YouMayAlsoNeed";

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

  return (
    <main>
      <section className="bg-(--page-background) py-10 px-6 md:px-12 lg:px-16">
        <Link
          href="/products"
          className="flex items-center gap-2 py-4 text-[#716D68] leading-6"
        >
          <FaArrowLeft />
          <span>Back to catalogue</span>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <p className="text-[#77736E] leading-5 text-sm border-b py-4 border-[#E2DFD9]">
                  {product.unit}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {productFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 items-center text-(--text-primary) mb-4  text-sm "
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

              <a
                href={`https://wa.me/2349169146370?text=${encodeURIComponent(
                  `Hello, I'm interested in ${product.name}. Please provide more information.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white inline-flex items-center justify-center gap-3 border border-[#cfcbc4] text-(--text-primary) font-semibold px-6 py-4"
              >
                <FaWhatsapp aria-hidden="true" className="text-xl" />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
        <p className="text-[#89857F] text-xs leading-5 mt-3">
          Final pricing depends on quantity, brand availability, and delivery
          location.
        </p>
      </section>
      <YouMayAlsoNeed product={product} />
    </main>
  );
};

export default ProductDetails;
