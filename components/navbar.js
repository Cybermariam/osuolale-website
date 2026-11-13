"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import NavigationLinks from "./NavigationLinks";
import NavbarActions from "./NavbarActions";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-(--page-background) shadow px-6 md:px-12 lg:px-16">
      {/* Top navbar row */}
      <div className="py-4 flex justify-between items-center">
        <Link className="flex items-center gap-2" href="/">
          <div className="bg-(--brand-primary) flex justify-center items-center w-6 h-6">
            L
          </div>
          <div className="text-(--text-primary) font-bold">Osuolale</div>
        </Link>

        {/* Desktop navigation */}
        <NavigationLinks mobile={false} />
        <NavbarActions mobile={false} />

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-(--text-primary) text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown - separate row */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-4 pt-2">
          <NavigationLinks mobile={true} onLinkClick={closeMenu} />

          <NavbarActions mobile={true} onLinkClick={closeMenu} />
        </div>
      )}
    </nav>
  );
}
