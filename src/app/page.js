import { FaArrowRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import Image from "next/image";
import ProductCatalogue from "../../components/ProductCatalogue";
import PopularProducts from "../../components/PopularProducts";
import ServiceBenefits from "../../components/home/ServiceBenefits";
import DeliveryInformation from "../../components/home/DeliveryInformation";
import CustomerStories from "../../components/CustomerStories";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <section className="bg-(--page-background) py-5 md:py-10 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <div className="flex gap-2 w-60 border border-[#cfcbc4] items-center p-3 mt-10">
              <div className="w-2 h-2 rounded-full  bg-(--brand-primary) "></div>

              <div className=" text-(--text-secondary) bg-white text-sm font-bold  leading-[1.39px]">
                BUILT FOR BETTER PROJECTS
              </div>
            </div>
            <div className="tracking-[-2.24px] text-4xl md:text-6xl font-bold mt-6 text-(--text-primary) max-w-xl ">
              Quality Building Materials,
              <br />
              <span className="text-[#8B5A35]">Delivered with Confidence.</span>
            </div>
            <div className="text-[#66635F] mt-6 text-lg font-medium md:text-xl max-w-lg">
              Reliable materials, fair pricing, and dependable delivery for
              builders, contractors, and homeowners across Nigeria.
            </div>
            <div className="flex flex-col  md:flex-row gap-4 mt-4 md:items-center  ">
              <a
                href="/products"
                className="flex gap-2 justify-center items-center mt-6 md:mt-0 bg-(--brand-primary) text-white p-3 md:w-50"
              >
                <div className="text-sm font-bold">Explore Products</div>
                <FaArrowRight />
              </a>
              <a
                href="https://wa.me/2349169146370"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white justify-center gap-2 border-[#cfcbc4] border 
                       p-4 w-full md:w-50 md:p-2"
              >
                <FaWhatsapp className="font-bold" />
                <div className="text-sm font-bold  ">Enquire on Whatsapp</div>
              </a>
            </div>

            <div className="w-full h-px bg-[#cfcbc4] mt-8 mb-7"></div>
            <div className="flex flex-row gap-4 mt-4 md:items-center flex-wrap">
              <div className="flex gap-3 items-center text-(--text-primary) text-sm">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F2E4D8] shrink-0">
                  <FaCheck className="text-[#A65C27] text-[10px]" />
                </span>
                <span>Quality assured</span>
              </div>

              <div className="flex gap-3 items-center text-(--text-primary) text-sm">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F2E4D8] shrink-0">
                  <FaCheck className="text-[#A65C27] text-[10px]" />
                </span>

                <span>Transparent pricing</span>
              </div>
              <div className="flex gap-3 items-center text-(--text-primary) text-sm">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F2E4D8] shrink-0">
                  <FaCheck className="text-[#A65C27] text-[10px] " />
                </span>

                <span>On-time delivery</span>
              </div>
            </div>
          </div>

          {/* ----image ------ */}
          <div className="relative flex flex-col items-center md:items-end mt-5">
            <div className=" relative w-full md:h-137.5 h-105 ">
              <Image
                src="/images/hero-image.svg"
                alt="Hero Image"
                className="w-full h-full object-cover rounded-sm"
                fill
              />

              <div className="flex gap-4 items-center mt-4 shadow bg-white p-3 absolute  md:bottom-15 left-12 md:-left-4 -bottom-5  transform -translate-x-1/8 w-70 ">
                <div className="flex justify-center items-center  w-12 h-12  bg-(--brand-primary)/20">
                  <FaTruck className="text-(--brand-primary)" />
                </div>
                <div className="flex flex-col gap-1 text-(--text-primary) text-sm ">
                  <div className="font-medium text-(--text-primary)">
                    Delivery you can count on
                  </div>
                  <div className="text-xs font-medium text-[#77736E]">
                    Site delivery available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductCatalogue />
      <PopularProducts />
      <ServiceBenefits />
      <DeliveryInformation />
      <CustomerStories />
      <CallToAction />
    </main>
  );
}
