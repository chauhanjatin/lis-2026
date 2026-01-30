import React, { useState } from "react";
import callfooter from "../assets/call-footer.svg";
import emailfooter from "../assets/email-footer.svg";
import locationfooter from "../assets/location-footer.svg";
import logo from "../assets/lis-logo.svg";

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
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
    <footer className="relative flex flex-col w-full items-center  gap-10 pt-20 pb-[50px] px-[200px] bg-[#181818]">
      <div className="flex items-start justify-between w-full">
        <div className="inline-flex flex-col items-start gap-10">
          <div className="relative w-[180px] h-[60px]">
            <img className=" " alt="Group" src={logo} />
          </div>

          <p className="w-[458px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-6">
            LIS is a leading global software development company offering custom
            web development, mobile app development, UI/UX design, and digital
            product consulting. We help businesses innovate faster with secure,
            scalable, and future-ready solutions.
          </p>
        </div>

        <div className="inline-flex items-start gap-[100px]">
          <nav className="flex flex-col w-[150px] items-start gap-5">
            <h3 className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
              Company
            </h3>

            <ul className="inline-flex flex-col items-start gap-5">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#ffffffb2] text-base tracking-[0] leading-[normal] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col w-[150px] items-start gap-5">
            <h3 className="[font-family:'Segoe_UI-Semibold', Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
              Help{" "}
            </h3>

            <ul className="inline-flex flex-col items-start gap-5">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#ffffffb2] text-base tracking-[0] leading-[normal] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="inline-flex flex-col items-start gap-[25px]">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-5 w-full">
                <img
                  className={`${index === 1 ? "w-[21px] h-[21px]" : "w-6 h-6"}`}
                  alt={info.title}
                  src={info.icon}
                />

                <div className={index === 2 ? "w-[317px]" : ""}>
                  <div className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-[normal]">
                    {info.title}
                  </div>

                  <div className="mt-[13px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#ffffffb2] text-sm tracking-[0] leading-[normal]">
                    {info.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="w-full h-px bg-[#464646] border-0" />

      <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[0] leading-[normal]">
        Copyright © 2026. All Rights Reserved by LIS.
      </p>
    </footer>
  );
}
