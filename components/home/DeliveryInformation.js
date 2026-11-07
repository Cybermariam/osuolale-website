import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const deliveryFeatures = [
  {
    title: "Scheduled site delivery",
  },
  {
    title: "Bulk order support",
  },
  {
    title: "Order tracking updates",
  },
  {
    title: "Flexible time slots",
  },
];

const DeliveryInformation = () => {
  return (
    <section className="bg-white py-15 px-6 md:px-12 lg:px-16 md:flex md:flex-col lg:flex-row  lg:items-stretch">
      <div className="relative w-full h-72 lg:w-1/2 lg:h-auto border-2 border-[#E8E6E1] border-b-2 lg:border-r-0">
        <Image
          src="/images/truck.svg"
          alt="Delivery Truck"
          width={600}
          height={400}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 border-2 border-[#E8E6E1] border-t-0 p-6 lg:p-8 lg:border-t-2 lg:border-l-0  bg-(--page-background) ">
        <span className="inline-block tracking-[1.39px] leading-[16.1px] border text-[11px] font-bold border-[#E1DED8] text-[#696560] shadow-inner p-2 ">
          DELIVERY INFORMATION
        </span>
        <h2 className="my-6 font-semibold tracking-[-1.2px] text-(--text-primary) leading-9 text-[30px] lg:text-5xl lg:leading-13">
          From our yard to your site.
        </h2>
        <p className="leading-7 text-[#696560]">
          We coordinate delivery across Lagos and surrounding states, with clear
          updates and careful handling throughout.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-6 mt-6 ">
          {deliveryFeatures.map((feature) => (
            <li key={feature.title} className="flex items-center gap-4">
              <FaCheck
                aria-hidden="true"
                className="shrink-0 text-[#D98D52] text-xl "
              />
              <p className="text-(--text-primary) leading-5">{feature.title}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className=" mt-6 inline-flex items-center gap-2 py-3  text-[#9A5523]"
        >
          <span> Discuss Your Delivery</span>
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default DeliveryInformation;
