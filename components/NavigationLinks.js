import Link from "next/link";

export default function NavigationLinks({ mobile, onLinkClick }) {
  return (
    <div
      className={
        mobile ? "flex flex-col gap-4 text-sm" : "hidden md:flex  gap-6 text-sm"
      }
    >
      <Link className=" text-(--brand-primary)" href="/" onClick={onLinkClick}>
        Home
      </Link>
      <Link href="/products" onClick={onLinkClick}>
        Products
      </Link>
      <Link href="/about" onClick={onLinkClick}>
        About Us
      </Link>
      <Link href="/contact" onClick={onLinkClick}>
        Contact
      </Link>
    </div>
  );
}
