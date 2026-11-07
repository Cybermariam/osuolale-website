import Link from "next/link";

const exploreLinks = [
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const productLinks = [
  "Cement & Blocks",
  "Iron Rods",
  "Roofing Materials",
  "Plumbing Materials",
];

const Footer = () => {
  return (
    <footer className="bg-(--text-primary)">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-12 h-12 bg-(--brand-primary) text-white text-2xl font-bold">
              L
            </span>
            <span className="text-2xl   text-white font-bold">Osuolale</span>
          </Link>

          <p className="text-[#B5B3B0] leading-7 max-w-sm">
            Quality building materials and dependable delivery for projects
            across Nigeria.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-bold tracking-[2px] text-[#85807B] mb-6">
            EXPLORE
          </h3>

          <ul className="flex flex-col gap-5">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-sm font-bold tracking-[2px] text-[#85807B] mb-6">
            PRODUCTS
          </h3>

          <ul className="flex flex-col gap-5">
            {productLinks.map((product) => (
              <li key={product}>
                <Link
                  href="/products"
                  className="text-white/70 hover:text-white transition-colors leading-5 text-sm"
                >
                  {product}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold tracking-[2px] text-[#85807B] mb-6">
            CONTACT
          </h3>

          <p className="text-[#B5B3B0] leading-7 mb-5">
            18 Industrial Avenue, Ikeja, Lagos
          </p>

          <a
            href="tel:+2349169146370"
            className="inline-flex items-center text-white hover:text-(--brand-primary) transition-colors"
          >
            +2349169146370
          </a>

          <a
            href="mailto:Osuolalesodiq4@gmail.com"
            className="flex items-center gap-2 mt-5 text-[#B5B3B0] hover:text-white transition-colors"
          >
            Osuolalesodiq4@gmail.com
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#454545] px-6 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row gap-3 justify-between text-sm text-[#85807B]">
        <p>
          © {new Date().getFullYear()} Osuolale Building Materials. All rights
          reserved.
        </p>

        <p>Building quality. Delivering reliability.</p>
      </div>
    </footer>
  );
};

export default Footer;
