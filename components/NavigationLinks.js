import Link from "next/link";

export default function NavigationLinks({ mobile, onLinkClick }) {
  return (
    <div
      className={
        mobile ? "flex flex-col gap-4 text-sm" : "hidden md:flex  gap-6 text-sm"
      }
    >
      <Link
        className=" text-(--brand-primary)  border-b pb-5 border-[#E1DED8] md:border-none md:pb-0"
        href="/"
        onClick={onLinkClick}
      >
        Home
      </Link>
      <Link
        href="/products"
        className=" border-b pb-5 border-[#E1DED8] md:border-none md:pb-0"
        onClick={onLinkClick}
      >
        Products
      </Link>
      <Link
        href="/about"
        className=" border-b pb-5 border-[#E1DED8] md:border-none md:pb-0"
        onClick={onLinkClick}
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className=" border-b pb-5 border-[#E1DED8] md:border-none md:pb-0"
        onClick={onLinkClick}
      >
        Contact
      </Link>
    </div>
  );
}
