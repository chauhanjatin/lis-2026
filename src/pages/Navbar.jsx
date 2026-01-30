import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lis-logo.svg";
import hireMeIcon from "../assets/hireme-icon.svg";
import sendCvIcon from "../assets/sendcv-icon.svg";

const navigationButtons = [
  {
    label: "Hire Me",
    variant: "outline",
    iconType: "image",
    icon: hireMeIcon,
    gradient:
      "linear-gradient(180deg, rgba(37,74,140,1) 0%, rgba(29,176,190,1) 100%)",
    textColor: "text-[#0b0c10]",
    bgColor: "bg-[#ffffff]",
  },
  {
    label: "Send CV",
    variant: "default",
    iconType: "image",
    icon: sendCvIcon,
    gradient:
      "linear-gradient(180deg, rgba(37,74,140,1) 0%, rgba(29,176,190,1) 100%)",
    textColor: "text-[#ffffff]",
    bgColor: "bg-gradient-to-b from-[#254a8c] to-[#1db0be]",
  },
];
 
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Case Study", path: "/case-study" },
  { label: "Contact", path: "/contact" },
  { label: "Career", path: "/career" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full mx-auto container pt-10 opacity-0 animate-fade-in [--animation-delay:200ms]">
      <nav className="flex items-center justify-between">
        
        <Link to="/" className="flex items-center">
          <img src={logo} alt="LIS Logo" />
        </Link>

        <div className="inline-flex items-center gap-[30px]">
          {navigationButtons.map((button) => {
            const isOutline = button.variant === "outline";
            const isImageIcon = button.iconType === "image";

            if (isOutline) {
              return (
                <button
                  key={button.label}
                  className="relative w-[151px] shadow-[0px_0px_20px_#0000001a] rounded-full p-[1px] hover:opacity-90 transition"
                  style={{ background: button.gradient }}
                >
                  <div className="bg-white rounded-full flex items-center gap-2 px-6 py-3">
                    <span className="text-[#0b0c10] text-lg">
                      {button.label}
                    </span>
                    <img
                      src={button.icon}
                      alt={button.label}
                      className="w-4 h-4"
                    />
                  </div>
                </button>
              );
            }

            return (
              <button
                key={button.label}
                className="w-[151px] flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-b from-[#254a8c] to-[#1db0be] shadow-[0px_0px_20px_#0000001a]"
              >
                <span className="text-white text-lg">{button.label}</span>
                <img src={button.icon} alt={button.label} className="w-4 h-4" />
              </button>
            );
          })}

          <div className="flex items-center gap-6">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-11 h-11 flex flex-col items-center justify-center gap-2 hover:opacity-70 transition"
            >
              <div className="w-[25px] h-0.5 bg-[#0b0c10]" />
              <div className="w-[25px] h-0.5 bg-[#0b0c10]" />
            </button>
          </div>

          <div
            className={`absolute right-0 top-[80px] z-[9999] mt-6 w-[240px] rounded-2xl bg-white shadow-xl transition-all duration-300
        ${
          menuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
          >
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 text-[#0b0c10] text-lg hover:bg-gray-100 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </nav>
    </header>
  );
}
