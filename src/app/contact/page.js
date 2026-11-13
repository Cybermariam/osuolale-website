import ContactForm from "./components/ContactForm";
import GetInTouch from "./components/GetInTouch";

export default function Contact() {
  return (
    <main className="w-full pt-12 bg-white ">
      <section className="pb-15 lg:pb-20">
        <div className=" mx-auto max-w-5xl px-6 text-center">
          <p className=" text-xs leading-4 tracking-[2.16px] font-bold text-[#A55E29]">
            CONTACT US
          </p>
          <h1 className="lg:text-6xl  lg:leading-[1.1] my-4 text-4xl font-semibold leading-10 tracking-[-1.8px] text-(--text-primary)">
            Let’s talk about your project.
          </h1>

          <p className="leading-7 text-[#6B6762]">
            Tell us what you need and our team will help with availability,
            pricing, and delivery planning.
          </p>
        </div>
      </section>
      <GetInTouch />
    </main>
  );
}
