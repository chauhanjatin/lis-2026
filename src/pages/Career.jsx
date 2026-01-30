import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import careergif from "../assets/career-gif.gif";
import contactbtnarrow from "../assets/contactbtn-arrow.svg";
import ctagif from "../assets/cta-gif.gif";
import ctabggif from "../assets/ctabg-gif.gif";

function Career() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-20 pb-32">
        <div className="container mx-auto">
          <div className="items-center">
            <div className="relative ">
              <h3 className="text-[20px] mb-3 font-light text-[#181818]">
                CAREER
              </h3>
              <h1 className="text-5xl md:text-[70px] font-semibold text-[#181818] leading-[105px]">
                Build, Grow & <br />{" "}
                <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block leading-none p-3">
                  Innovate
                </span>{" "}
                With Us
              </h1>
              <p className="text-[24px] text-[#181818] my-[30px] leading-[36px] font-normal">
                At LIS, we don’t just build digital products—we build careers.
                Join a team where creativity, <br /> ownership, and continuous
                learning shape every project.
              </p>
            </div>
          </div>

          <div className="absolute right-[6%] bottom-[12%]">
            <img
              src={careergif}
              alt="Hero section animation"
              className="w-full h-auto max-w-lg object-contain"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* Openings */}
      <section className="container mx-auto text-center">
        <p className="text-[50px] font-semibold text-[#181818]">No openings now</p>
      </section>

      {/* CTA */}
      <section className="mt-[60px] mb-[130px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between p-[100px] bg-[linear-gradient(226deg,rgba(37,74,140,1)_0%,rgba(29,176,190,1)_100%)] rounded-[40px] relative overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-10"
              alt="Background pattern"
              src={ctabggif}
            />
            <p className="relative  text-black text-[60px] font-bold">
              No openings? Send your{" "}
              <span className="text-white font-semibold italic">CV</span> —
              we’ll <br /> contact you when something opens.
            </p>
            <button className="relative  flex gap-2.5 bg-[#ffffff21] border border-solid border-[#ffffff] shadow-[0px_4px_20px_#0000000d] px-[40px] py-[26px] rounded-[100px] hover:bg-[#ffffff31]">
              <span className="text-[#0b0c10] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[18px] text-center tracking-[0] leading-6 whitespace-nowrap">
                Send Your CV
              </span>
              <img src={contactbtnarrow} alt="" />
            </button>
            <div className="absolute right-[8%] bottom-[4%] z-10">
              <img src={ctagif} alt="" className="w-[209px] h-[209px]" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Career;
