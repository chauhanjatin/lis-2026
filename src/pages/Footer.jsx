import React, { useState } from "react";
import { Link } from "react-router-dom";
import callfooter from "../assets/call-footer.svg";
import emailfooter from "../assets/email-footer.svg";
import locationfooter from "../assets/location-footer.svg";
import logo from "../assets/lis-logo.svg";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const helpLinks = [
  { label: "Tems & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const contactInfo = [
  {
    icon: callfooter,
    title: "Phone",
    content: "+91 70963 64801",
  },
  {
    icon: emailfooter,
    title: "Email",
    content: "info@libertyinfoscience.com",
  },
  {
    icon: locationfooter,
    title: "Address",
    content:
      "424 Sumeru Business Corner, Rajhans Cinema Palgam 22927, Surat, India",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#181818]">
      <div className="containerX mx-auto relative flex flex-col items-center gap-10 pt-16 md:pt-20 pb-[40px] md:pb-[50px]">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-12">
          {/* LEFT */}
          <div className="inline-flex flex-col items-start gap-6 md:gap-10">
            <div className="relative w-[128px] xl:w-[155px] 2xl:w-[180px] h-auto">
              <img alt="Group" src={logo} />
            </div>

            <p className="w-full md:w-[420px] lg:w-[335px] 2xl:w-[458px] font-normal text-white text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-6">
              LIS is a leading global software development company offering
              custom web development, mobile app development, UI/UX design, and
              digital product consulting. We help businesses innovate faster
              with secure, scalable, and future-ready solutions.
            </p>
          </div>

          {/* RIGHT */}
          <div className="inline-flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-start gap-10 md:gap-[85px] lg:gap-[30px] xl:gap-[90px] 2xl:gap-[100px]">
            {/* Company */}
            <nav className="flex flex-col w-[140px] md:w-[150px] items-start gap-4 md:gap-5">
              <h3 className="font-normal text-white text-[16px] md:text-lg">
                Company
              </h3>

              <ul className="inline-flex flex-col items-start gap-3 md:gap-5">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-normal text-[#ffffffb2] text-[14px] xl:text-[16px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Help */}
            <nav className="flex flex-col w-[140px] md:w-[150px] items-start gap-4 md:gap-5">
              <h3 className="font-normal text-white text-[14px] xl:text-[16px] md:text-lg">
                Help
              </h3>

              <ul className="inline-flex flex-col items-start gap-3 md:gap-5">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-normal text-[#ffffffb2] text-[14px] xl:text-[16px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div className="inline-flex flex-col items-start gap-[20px] md:gap-[25px]">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 xl:gap-5 w-full"
                >
                  <img
                    className={`${index === 1 ? "w-[18px] h-[18px]" : "w-5 h-5 md:w-6 md:h-6"}`}
                    alt={info.title}
                    src={info.icon}
                  />

                  <div className="max-w-[260px] md:max-w-[317px]">
                    <div className="font-normal text-[#ffffff] text-[14px] md:text-base">
                      {info.title}
                    </div>

                    <div className="mt-2 md:mt-[13px] font-normal text-[#ffffffb2] text-[13px] md:text-sm">
                      {info.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="w-full h-px bg-[#464646] border-0" />

        <p className="font-normal text-[#ffffff99] text-[12px] md:text-sm text-center">
          Copyright © 2026. All Rights Reserved by LIS.
        </p>
      </div>
    </footer>
  );
}
