import { FaWhatsapp } from "react-icons/fa";

export default function NavbarActions({ mobile, onLinkClick }) {
  return (
    <div
      className={`flex gap-4 ${mobile ? "flex-col items-stretch" : "hidden md:flex flex-row items-center"} text-sm `}
    >
      <button
        onClick={onLinkClick}
        className="flex items-center gap-2 border-[#cfcbc4] border  
                 p-2 justify-center"
      >
        <FaWhatsapp />
        <div>Whatsapp</div>
      </button>
      <button
        onClick={onLinkClick}
        className="  bg-(--brand-primary) text-white p-2 items-center justify-center"
      >
        Request a Quote
      </button>
    </div>
  );
}
