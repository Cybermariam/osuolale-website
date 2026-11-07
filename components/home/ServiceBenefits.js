import React from "react";
import { FaShield, FaCube, FaTruck, FaHeadset } from "react-icons/fa6";

const benefits = [
  {
    title: "Verified quality",
    description: "We source trusted brands and inspect every order.",
    icon: FaShield,
  },
  {
    title: "Complete Selection",
    description: "Core materials for every stage of your build.",
    icon: FaCube,
  },
  {
    title: "Dependable Delivery",
    description: "Careful handling and clear delivery timelines.",
    icon: FaTruck,
  },
  {
    title: "Helpful Support",
    description: "Real guidance from quotation to fulfilment.",
    icon: FaHeadset,
  },
];

const ServiceBenefits = () => {
  return (
    <section className="bg-(--text-primary) py-10 px-6 md:px-12 lg:px-16 lg:flex lg:gap-8 lg:items-center ">
      <div className="max-w-2xl">
        <span className="inline-block text-white/70 tracking-[1.39px] leading-[16.1px] border p-2 text-[11px] font-bold border-white/15 shadow-inner">
          WHY OSUOLALE
        </span>
        <h2 className="my-6 font-bold tracking-[-1.2px]  text-white leading-[37.5px] text-[30px] lg:text-5xl lg:leading-13">
          Materials you trust. Service you remember.
        </h2>
        <p className="  leading-7 text-white/60">
          We make sourcing straightforward, from your first enquiry to final
          delivery at your site.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:mt-0 border border-white/10 ">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className={`p-8 border-white/10 
                ${index > 0 ? "border-t " : ""}
                ${index >= 2 ? "md:border-t" : ""}
                ${index % 2 === 0 ? "md:border-r" : ""}`}
          >
            <benefit.icon
              aria-hidden="true"
              className="text-[#D98D52] text-2xl mb-4"
            />
            <h3 className="text-white font-bold text-lg mb-2 leading-7 ">
              {benefit.title}
            </h3>
            <p className="text-white/55 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceBenefits;
