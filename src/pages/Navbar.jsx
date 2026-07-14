import { useState } from "react";
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const navLinks = [
  //   "Home",
  //   "About",
  //   "Case Studies",
  //   "Portfolio",
  //   "Services",
  //   "Career",
  //   "Contact Us",
  // ];

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Case Study", path: "/case-study" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Services", path: "/services" },
    { label: "Career", path: "/career" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="containerX">
      <header className="relative z-10 mx-auto pt-10 opacity-0 animate-fade-in [--animation-delay:200ms]">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="LIS Logo" />
          </Link>

          <div className="flex justify-center relative">
            {/* NAVBAR */}
            <div className="flex items-center justify-between bg-[#111] text-white rounded-full  py-4 w-[455px] ps-10 pe-4">
              {/* CENTER LINKS */}
              <div className="flex gap-[30px] text-[18px]">
                <span>Portfolio</span>
                <span>Services</span>
                <span>Case Studies</span>
              </div>

              {/* HAMBURGER */}
              <button
                onClick={() => setMenuOpen(true)}
                className="w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center gap-2"
              >
                <div className="w-6 h-[2px] bg-black"></div>
                <div className="w-6 h-[2px] bg-black"></div>
              </button>
            </div>

            {/* FULL MENU PANEL */}
            <div
              className={`fixed right-[12.5rem] top-10 w-[456px] h-[90vh] bg-[#111] rounded-[30px] p-8 text-white shadow-2xl transition-all duration-300
  ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              {/* TOP */}
              <div className="flex justify-between items-center mb-10">
                <img src={logo} alt="LIS Logo" className="w-[120px]" />

                <button onClick={() => setMenuOpen(false)} className="text-2xl">
                  ✕
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-5">
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-[40px] font-semibold hover:text-gray-300 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CONTACT INFO */}
              <div className="text-sm text-gray-400 mt-[50px]">
                <p className="mb-3">info@libertyinfoscience.com</p>

                <p>
                  424 Sumeru Business Corner,
                  <br />
                  Rajhans Cinema
                  <br />
                  Palgam 22927, Surat, India
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-[#2a9df4] to-[#2bc0e4] px-6 py-3 rounded-full text-white">
                  Send CV ✈
                </button>

                <button className="bg-white text-black px-6 py-3 rounded-full">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
