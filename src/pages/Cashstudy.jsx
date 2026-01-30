import React from "react";
import Navbar from "./Navbar";
import casestudygif from "../assets/cashstudy-gif.gif";
import casestudyimg1 from "../assets/casestudy-img1.png";
import casestudyimg2 from "../assets/casestudy-img2.png";
import casestudyimg3 from "../assets/casestudy-img3.png";
import contactbtnarrow from "../assets/contactbtn-arrow.svg";
import ctagif from "../assets/cta-gif.gif";
import ctabggif from "../assets/ctabg-gif.gif";
import Footer from "./Footer";

function Cashstudy() {
  return (
    <div>
      <Navbar />

      {/* hero section */}
      <section className="relative bg-white overflow-hidden pt-20 pb-32">
        <div className="container mx-auto">
          <div className="items-center">
            <div className="relative ">
              <h3 className="text-[20px] mb-3 font-light text-[#181818]">
                CASH STUDIES
              </h3>
              <h1 className="text-5xl md:text-[70px] font-semibold text-[#181818] leading-[105px]">
                Behind Every{" "}
                <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block leading-none p-3">
                  Successful
                </span>{" "}
                Project <br /> Is A Story That Matters.
              </h1>
              <p className="text-[24px] text-[#181818] my-[30px] leading-[36px] font-normal">
                Great design, strong UX, and smart software engineering can
                transform complex challenges into meaningful <br /> results.
                Each case study highlights the{" "}
                <b>problem, the process, and the impact</b> — showing how
                thoughtful digital <br /> solutions create real value for users
                and businesses across multiple industries.
              </p>
            </div>
          </div>

          <div className="absolute right-[0%] bottom-[26%]">
            <img
              src={casestudygif}
              alt="Hero section animation"
              className="w-full h-auto max-w-lg object-contain opacity-40"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/*  */}
      <div className="container mx-auto">
        <div className="flex gap-[40px] mt-10">
          <div>
            <img src={casestudyimg1} alt="" />
          </div>

          <div>
            <img src={casestudyimg2} alt="" />
          </div>
        </div>

        <div className="mt-[40px]">
          <img src={casestudyimg3} alt="" />
        </div>
      </div>

      {/* CTA */}
      <section className="my-[130px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between p-[100px] bg-[linear-gradient(226deg,rgba(37,74,140,1)_0%,rgba(29,176,190,1)_100%)] rounded-[40px] relative overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-10"
              alt="Background pattern"
              src={ctabggif}
            />
            <p className="relative z-10 text-black text-[60px] font-bold">
              Your success{" "}
              <span className="text-white font-semibold italic">story</span> can
              be the next <br /> one we showcase.
            </p>
            <button className="relative z-10 flex gap-2.5 bg-[#ffffff21] border border-solid border-[#ffffff] shadow-[0px_4px_20px_#0000000d] px-[40px] py-[26px] rounded-[100px] hover:bg-[#ffffff31]">
              <span className="text-[#0b0c10] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[18px] text-center tracking-[0] leading-6 whitespace-nowrap">
                Build With Us
              </span>
              <img src={contactbtnarrow} alt="" />
            </button>
            <div className="absolute right-[8%] bottom-[4%] z-10">
              <img src={ctagif} alt="" className="w-[209px] h-[209px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Cashstudy;
