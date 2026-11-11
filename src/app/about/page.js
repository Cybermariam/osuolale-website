import CallToAction from "../../../components/CallToAction";
import CustomerStories from "../../../components/CustomerStories";

export default function About() {
  return (
    <main className="w-full pt-12  bg-white ">
      <section className="pb-15">
        <div className=" mx-auto max-w-5xl px-6 text-center">
          <p className=" text-xs leading-4 tracking-[2.16px] font-bold text-[#A55E29]">
            ABOUT OSUOLALE
          </p>
          <h1 className="lg:text-6xl  lg:leading-[1.1] my-4 text-4xl font-semibold leading-10 tracking-[-1.8px] text-(--text-primary)">
            Helping Nigeria build with certainty.
          </h1>

          <p className="leading-7 text-[#6B6762]">
            We believe sourcing construction materials should feel clear,
            dependable, and professional—from the first quote to the final
            delivery.
          </p>
        </div>
      </section>
      <CustomerStories />
      <CallToAction />
    </main>
  );
}
