import React from "react";

const OurCommitment = () => {
  const commitments = [
    {
      number: "01",
      title: "Integrity first",
      description:
        "We communicate clearly about products, prices, and delivery.",
    },
    {
      number: "02",
      title: "Quality always",
      description: "We work with established brands and dependable suppliers.",
    },
    {
      number: "03",
      title: "Customer focus",
      description: "Every order gets thoughtful support, large or small.",
    },
  ];

  return (
    <section className="bg-white py-15 px-6 md:px-12 lg:px-16 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {commitments.map((commitment) => (
          <div
            key={commitment.number}
            className="border-l border-[#dad6cf] pl-6 "
          >
            <div className=" font-bold text-[#C87535] leading-5 text-sm">
              {commitment.number}
            </div>
            <h3 className="mt-6 font-semibold text-(--text-primary) leading-7 text-xl">
              {commitment.title}
            </h3>
            <p className="mt-3 text-[#716D68] leading-6 text-sm">
              {commitment.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCommitment;
