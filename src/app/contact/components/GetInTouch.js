import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

const getInTouch = [
  {
    type: "phone",
    label: "CALL US",
    value: " +2349169146370",
    icon: FaPhoneAlt,
  },
  {
    type: "email",
    label: "EMAIL US",
    value: " Osuolalesodiq4@gmail.com",
    icon: FaEnvelope,
  },
  {
    type: "address",
    label: "VISIT US",
    value: "18 Industrial Avenue, Ikeja, Lagos",
    icon: FaMapMarkerAlt,
  },
  {
    type: "hours",
    label: "OPENING HOURS",
    value: "Monday–Saturday, 8:00am–6:00pm",
    icon: FaClock,
  },
];
const GetInTouch = () => {
  return (
    <section className="min-h-screen bg-(--page-background) py-15 px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold tracking-[-0.72px] leading-8 text-(--text-primary) ">
          Get in touch
        </h2>
        <p className="mt-3 max-w-md leading-7 text-[#6d6964]">
          For the quickest response, message us on WhatsApp. You can also call,
          email, or visit our Lagos office.
        </p>

        <div className="mt-8 divide-y divide-[#dedad4] border-y border-[#dedad4]  ">
          {getInTouch.map((intouch) => {
            const Icon = intouch.icon;
            return (
              <div key={intouch.type} className="flex py-5 items-center gap-4">
                <span>
                  {" "}
                  <Icon className="text-[#C87535]" />
                </span>
                <div className="flex flex-col  ">
                  <div className="text-xs font-bold uppercase tracking-[1.56px] leading-4 text-[#8B8781]">
                    {intouch.label}
                  </div>
                  <div className="mt-1.5 text-sm font-medium">
                    {intouch.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default GetInTouch;
