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
  },
  {
    label: "Send CV",
    variant: "default",
    iconType: "image",
    icon: sendCvIcon,
    gradient:
      "linear-gradient(180deg, rgba(37,74,140,1) 0%, rgba(29,176,190,1) 100%)",
  },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Case Study", path: "/case-study" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "Career", path: "/career" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 0);

      // Hide on scroll down (past 120px), show on scroll up
      if (y > lastScrollY.current && y > 120) {
        setHideNav(true);
      } else if (y < lastScrollY.current) {
        setHideNav(false);
      }
      lastScrollY.current = y;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current?.contains(event.target)) return;
      setMenuOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <div>
      {/* No transform when visible: a transformed header would trap the
          fixed fullscreen backdrop inside it instead of covering the page */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 mx-auto pt-10 opacity-0 animate-fade-in [--animation-delay:200ms] containerX transition-transform duration-500 ease-in-out ${
          hideNav && !menuOpen ? "-translate-y-[130%]" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between py-2 px-3 rounded-full transition-all duration-300 ps-4 ${
            scrolled ? "bg-[#ffffff99]" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="LIS Logo" />
          </Link>

          {/* Keeps navbar layout stable while menu expands */}
          <div className="relative w-[455px] h-[72px] shrink-0">
            {/* Backdrop */}
            <div
              className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 ${
                menuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* ONE div: closed pill → open full menu (same as screenshot) */}
            <div
              ref={menuRef}
              className={`absolute top-0 right-0 z-50 bg-[#111] text-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                menuOpen
                  ? "w-[456px] h-[calc(100vh-5rem)] max-h-[700px] rounded-[30px] p-8 flex flex-col shadow-2xl"
                  : "w-[455px] h-[72px] rounded-[30px] py-3 ps-10 pe-4 flex items-center justify-between"
              }`}
            >
              {/* —— CLOSED: links + hamburger —— */}
              <div
                className={`flex items-center justify-between w-full transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0 absolute pointer-events-none scale-95"
                    : "opacity-100 relative scale-100"
                }`}
              >
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

                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  className="w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center gap-2 shrink-0"
                  aria-expanded={menuOpen}
                  aria-label="Open menu"
                >
                  <span className="w-6 h-[2px] bg-black block" />
                  <span className="w-6 h-[2px] bg-black block" />
                </button>
              </div>

              {/* —— OPEN: full menu (matches screenshot) —— */}
              <div
                className={`flex flex-col h-full w-full transition-all duration-300 ${
                  menuOpen
                    ? "opacity-100 translate-y-0 delay-150"
                    : "opacity-0 translate-y-4 pointer-events-none absolute inset-0 p-8"
                }`}
              >
                {/* Header: logo + close */}
                <div className="flex justify-between items-center shrink-0 mb-10">
                  <img src={logo} alt="LIS Logo" className="w-[110px]" />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-[28px] leading-none w-10 h-10 flex items-center justify-center hover:opacity-70 transition"
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-5 flex-1 min-h-0 overflow-y-auto">
                  {navLinks.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === "/"}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-[28px] leading-[1.1] font-semibold tracking-[-0.02em] transition ${
                          isActive
                            ? "text-[#1db0be]"
                            : "text-white hover:text-[#1db0be]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>

                {/* Contact + CTAs */}
                <div className="shrink-0 mt-10">
                  <div className="text-[14px] text-[#9CA3AF] leading-[1.65]">
                    <p className="mb-2">info@libertyinfoscience.com</p>
                    <p>
                      424 Sumeru Business Corner,
                      <br />
                      Rajhans Cinema Palgam 22927,
                      <br />
                      Surat, India
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-6 flex-wrap">
                    {navigationButtons
                      .slice()
                      .reverse()
                      .map((button) => {
                        const isOutline = button.variant === "outline";

                        if (isOutline) {
                          return (
                            <button
                              key={button.label}
                              type="button"
                              className="relative shadow-[0px_0px_20px_#0000001a] rounded-full p-[1px] hover:opacity-90 transition"
                              style={{ background: button.gradient }}
                            >
                              <div className="bg-white rounded-full flex items-center gap-2 px-5 py-3">
                                <span className="text-[#0b0c10] text-[16px] font-semibold whitespace-nowrap">
                                  {button.label}
                                </span>
                                <img
                                  src={button.icon}
                                  alt=""
                                  className="w-4 h-4 object-contain"
                                />
                              </div>
                            </button>
                          );
                        }

                        return (
                          <button
                            key={button.label}
                            type="button"
                            className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-b from-[#254A8C] to-[#1DB0BE] shadow-[0px_0px_20px_#0000001a] hover:opacity-90 transition"
                          >
                            <span className="text-white text-[16px] font-semibold whitespace-nowrap">
                              {button.label}
                            </span>
                            <img
                              src={button.icon}
                              alt=""
                              className="w-4 h-4 object-contain"
                            />
                          </button>
                        );
                      })}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="h-[90px] sm:h-[100px] md:h-[110px]" />
    </div>
  );
}
