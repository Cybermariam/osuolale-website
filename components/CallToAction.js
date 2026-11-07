import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="bg-(--page-background) py-16 lg:py-24 px-6 md:px-12 lg:px-16 lg:flex lg:items-center lg:justify-between lg:gap-8">
      <div className="lg:max-w-4xl">
        <p className="text-xs font-bold text-[#A55E29] leading-4 tracking-[2.16px]">
          READY TO ORDER?
        </p>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-9 lg:leading-[1.1] tracking-[-1.35px] text-(--text-primary) my-4">
          Get a clear quote for your next project.
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0 shrink-0 mb-5">
        <button
          type="button"
          className="bg-white inline-flex items-center justify-center gap-3 border border-[#cfcbc4] text-(--text-primary) font-semibold px-6 py-4"
        >
          <FaWhatsapp aria-hidden="true" className="text-xl" />
          WhatsApp Us
        </button>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 bg-(--brand-primary) text-white font-semibold px-6 py-5 hover:bg-[#af622c] transition-colors"
        >
          Request a Quote
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
