import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const OurStory = () => {
  return (
    <div>
      <section className="bg-(--page-background) py-15 px-6 md:px-12 lg:px-16 md:flex md:flex-col lg:flex-row  lg:items-stretch">
        <div className="relative w-full h-72 lg:w-1/2 lg:h-auto">
          <Image
            src="/images/truck.svg"
            alt="Delivery Truck"
            width={600}
            height={400}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 lg:p-8 bg-(--page-background) ">
          <span className="inline-block tracking-[2.16px] leading-4 text-xs font-bold text-[#A55E29] p-2 ">
            OUR STORY
          </span>
          <h2 className="my-6 font-semibold tracking-[-1.2px] text-(--text-primary) leading-9 text-[30px] lg:text-5xl lg:leading-13">
            Built on honest service.
          </h2>
          <p className="leading-7 text-[#6C6863] mb-3">
            Osuolale was created to close the trust gap in building material
            supply. We bring together quality products, transparent
            communication, and dependable logistics so every customer can plan
            with confidence.
          </p>
          <p className="leading-7 text-[#6C6863]">
            Whether you are building your first home or managing multiple sites,
            our team helps you make informed choices and keeps your order
            moving.
          </p>

          <Link
            href="/contact"
            className=" mt-6 inline-flex items-center text-white gap-2 py-3  px-6 leading-3.5 font-bold  bg-[#C87535]"
          >
            <span> Get Started</span>
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
