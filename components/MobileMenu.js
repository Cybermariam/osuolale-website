"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavigationLinks from "./NavigationLinks";
import NavbarActions from "./NavbarActions";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  return (
    <div className=" md:hidden flex items-center">
      <button
        className="md:hidden text-(--text-primary) text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div className="w-full shadow z-50 absolute top-full left-0 md:hidden flex flex-col gap-4 p-4 bg-(--page-background)">
          <div className="flex flex-col gap-4">
            <NavigationLinks mobile={true} onLinkClick={closeMenu} />
            <NavbarActions mobile={true} onLinkClick={closeMenu} />
          </div>
        </div>
      )}
    </div>
  );
}
