import { FaWhatsapp } from "react-icons/fa";

export default function NavbarActions({ mobile, onLinkClick }) {
  return (
    <div
      className={`flex gap-4 ${mobile ? "flex-col items-stretch" : "hidden md:flex flex-row items-center"} text-sm `}
    >
      <a
        href="https://wa.me/2349169146370"
        rel="noopener noreferrer"
        onClick={onLinkClick}
        className="flex items-center gap-2 border-[#cfcbc4] border bg-white 
                 p-2 justify-center"
      >
        <FaWhatsapp />
        <span>Whatsapp</span>
      </a>
      <a
        href="https://wa.me/2349169146370?text=Hello%20Osuolale%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20building%20materials."
        target="_blank"
        rel="noopener noreferrer"
        onClick={onLinkClick}
        className="  bg-(--brand-primary) text-white p-2 items-center justify-center"
      >
        Request a Quote
      </a>
    </div>
  );
}
