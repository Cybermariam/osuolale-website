import { FaQuoteLeft } from "react-icons/fa6";

const CustomerStories = () => {
  const reviews = [
    {
      id: 1,
      name: "Chinedu Okafor",
      role: "Building Contractor",
      location: "Lekki",
      rating: 5,
      review:
        "The communication was excellent. Our cement and rods arrived exactly when promised, and every item was accounted for.",
    },
    {
      id: 2,
      name: "Amaka Bello",
      role: "Homeowner",
      location: "Ikeja",
      rating: 5,
      review:
        "Osuolale made sourcing for our renovation straightforward. Clear prices, helpful advice, and no last-minute surprises.",
    },
    {
      id: 3,
      name: "Tunde Afolayan",
      role: "Project Manager",
      location: "Ajah",
      rating: 5,
      review:
        "We use them for repeat site orders because the quality stays consistent and their delivery team understands construction timelines.",
    },
  ];

  return (
    <section className="py-10 px-6 md:px-12 lg:px-16 bg-(--page-background) ">
      <p className="text-xs font-bold text-[#A55E29] leading-4 tracking-[2.16px]">
        CUSTOMER STORIES
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-9 tracking-[-1.35px] text-(--text-primary) my-4">
        Trusted on sites across Lagos.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="border bg-white border-[#E2DFD9] p-6">
            <FaQuoteLeft
              aria-hidden="true"
              className="text-[#C87535] text-2xl my-4"
            />
            <p className="text-[#55514D] leading-7 mb-6">
              &ldquo;{review.review}&rdquo;
            </p>
            <h3 className="border-[#E8E6E1] font-bold mb-3 border-t text-(--text-primary)  pt-6">
              {review.name}
            </h3>
            <p className="text-[#85807B] leading-4 text-xs">
              {review.role},<span>{review.location}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerStories;
