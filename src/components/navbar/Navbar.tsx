// src/components/navbar/Navbar.tsx
import { useState } from "react";
import NavItem from "./NavItem";
import Button from "../ui/Button";
import logo from "/images/craftsman-logo.png";
import cart from "/icons/cart-icon.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-center bg-white">
      <div className="navbar-shell container-fixed flex items-center relative">
        
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Nav Links (hidden ≤980px) */}
        <div className="navbar-links max-[980px]:hidden">
          <NavItem label="Home" to="/" />
          <NavItem label="Shop" to="/shop" />
          <NavItem label="About" to="/about" />
          <NavItem label="Contact" to="/contact" />
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <img src={cart} alt="Cart" className="w-5 h-5 grayscale" />
          <div className="navbar-separator max-[980px]:hidden" />
          <Button to="/" className="max-[620px]:hidden">Login</Button>

          {/* Hamburger (≤980px only) */}
          <button
            onClick={() => setOpen(!open)}
            className="hidden max-[980px]:flex items-center justify-center w-10 h-10 ml-2"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              /* Cross icon */
              <span className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-black rotate-45" />
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-black -rotate-45" />
              </span>
            ) : (
              /* Hamburger icon */
              <span className="relative w-6 h-[2px] bg-black before:absolute before:top-[-8px] before:left-0 before:w-6 before:h-[2px] before:bg-black after:absolute after:top-[8px] after:left-0 after:w-6 after:h-[2px] after:bg-black" />
            )}
          </button>
        </div>
        {/* Mobile Menu (≤980px) */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-6 max-[980px]:flex min-[981px]:hidden">
            <NavItem label="Home" to="/" />
            <NavItem label="Shop" to="/shop" />
            <NavItem label="About" to="/about" />
            <NavItem label="Contact" to="/contact" />
            {/* Login button ONLY for ≤620px */}
            <div className="hidden max-[620px]:block pt-4">
              <Button to="/">Login</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
