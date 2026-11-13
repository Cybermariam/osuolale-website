"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavigationLinks from "./NavigationLinks";
import NavbarActions from "./NavbarActions";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  return (
    <div className=" md:hidden w-full">
      <div className="flex justify-end ">
        <button
          className=" text-(--text-primary) text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="w-full flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-4">
            <NavigationLinks mobile={true} onLinkClick={closeMenu} />
            <NavbarActions mobile={true} onLinkClick={closeMenu} />
          </div>
        </div>
      )}
    </div>
  );
}
