import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (
        menuRef.current?.contains(event.target) ||
        menuButtonRef.current?.contains(event.target)
      ) {
        return;
      }
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);
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
    <div className="">
      <header className="fixed top-0 left-0 right-0 z-50 mx-auto pt-10 opacity-0 animate-fade-in [--animation-delay:200ms] containerX">
        <nav
          className={`flex items-center justify-between py-2 px-3 rounded-full transition-all duration-300 ps-4  ${
            scrolled
              ? " bg-[#ffffff99]"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center">
            <img src={logo} alt="LIS Logo" />
          </Link>

          <div className="flex justify-center relative">
            {/* NAVBAR */}
            <div className="flex items-center justify-between bg-[#111] text-white rounded-full  py-3 w-[455px] ps-10 pe-4">
              {/* CENTER LINKS */}
              <div className="flex gap-[30px] text-[18px]">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `transition ${isActive ? "text-[#1db0be]" : "text-white hover:text-gray-300"}`
                  }
                >
                  Portfolio
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `transition ${isActive ? "text-[#1db0be]" : "text-white hover:text-gray-300"}`
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/case-study"
                  className={({ isActive }) =>
                    `transition ${isActive ? "text-[#1db0be]" : "text-white hover:text-gray-300"}`
                  }
                >
                  Case Studies
                </NavLink>
              </div>

              {/* HAMBURGER */}
              <button
                ref={menuButtonRef}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center gap-2"
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-[2px] bg-black"></div>
                <div className="w-6 h-[2px] bg-black"></div>
              </button>
            </div>

            {/* BACKDROP - black overlay, click outside to close */}
            {menuOpen && (
              <div
                className="fixed inset-0 z-40 bg-black/60 transition-opacity duration-300"
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
              />
            )}

            {/* FULL MENU PANEL */}
            <div
              ref={menuRef}
              className={`fixed right-[12.5rem] top-10 z-50 w-[456px] h-[90vh] bg-[#111] rounded-[30px] p-8 text-white shadow-2xl transition-all duration-300 flex flex-col
              ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              {/* TOP */}
              <div className="flex justify-between items-center mb-8 shrink-0">
                <img src={logo} alt="LIS Logo" className="w-[120px]" />

                <button onClick={() => setMenuOpen(false)} className="text-2xl">
                  ✕
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-4 overflow-y-auto flex-1 min-h-0">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-[36px] leading-[1.15] font-semibold transition ${
                        isActive
                          ? "text-[#1db0be]"
                          : "text-white hover:text-gray-300"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* CONTACT + BUTTONS */}
              <div className="mt-8 shrink-0">
                <div className="text-[14px] text-[#9CA3AF] leading-[1.6]">
                  <p className="mb-2">info@libertyinfoscience.com</p>
                  <p>
                    424 Sumeru Business Corner,
                    <br />
                    Rajhans Cinema Palgam 22927,
                    <br />
                    Surat, India
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  {navigationButtons
                    .slice()
                    .reverse()
                    .map((button) => {
                      const isOutline = button.variant === "outline";

                      if (isOutline) {
                        return (
                          <button
                            key={button.label}
                            className="relative shadow-[0px_0px_20px_#0000001a] rounded-full p-[1px] hover:opacity-90 transition"
                            style={{ background: button.gradient }}
                          >
                            <div className="bg-white rounded-full flex items-center gap-2 px-5 py-3">
                              <span className="text-[#0b0c10] text-[16px] font-semibold">
                                {button.label}
                              </span>
                              <img
                                src={button.icon}
                                alt={button.label}
                                className="w-4 h-4 object-contain"
                              />
                            </div>
                          </button>
                        );
                      }

                      return (
                        <button
                          key={button.label}
                          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-b from-[#254A8C] to-[#1DB0BE] shadow-[0px_0px_20px_#0000001a] hover:opacity-90 transition"
                        >
                          <span className="text-white text-[16px] font-semibold">
                            {button.label}
                          </span>
                          <img
                            src={button.icon}
                            alt={button.label}
                            className="w-4 h-4 object-contain"
                          />
                        </button>
                      );
                    })}
                </div>
              </div>
              
            </div>
          </div>
        </nav>
      </header> 

      {/* prevents page content jumping under the fixed navbar */}
      <div className="h-[90px] sm:h-[100px] md:h-[110px]" />
    </div>
  );
}