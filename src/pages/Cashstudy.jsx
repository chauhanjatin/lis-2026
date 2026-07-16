import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import casestudygif from "../assets/cashstudy-gif.gif";
import casestudyimg1 from "../assets/casestudy-img1.png";
import casestudyimg2 from "../assets/casestudy-img2.png";
import casestudyimg3 from "../assets/casestudy-img3.png";
import contactbtnarrow from "../assets/contactbtn-arrow.svg";
import ctagif from "../assets/cta-gif.gif";
import ctabggif from "../assets/ctabg-gif.gif";
import viewgif from "../assets/card-viewgif.gif";
import Footer from "./Footer";

function Cashstudy() {
  return (
    <div>
      <Navbar />

      {/* hero section */}
      <section className="relative bg-white overflow-hidden pt-20 xl:pb-20 2xl:pb-32">
        <div className="containerX mx-auto">
          <div className="items-center">
            <div className="relative">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] mb-3 font-light text-[#181818]">
                CASE STUDIES
              </h3>
              <h1 className="text-[36px] md:text-[32px] lg:text-[40px] xl:text-[60px] 2xl:text-[70px] font-semibold text-[#181818] lg:leading-[170%] 2xl:leading-[120%] 2xl:mb-[50px]">
                Behind Every{" "}
                <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block leading-none p-3">
                  Successful
                </span>{" "}
                Project <br /> Is A Story That Matters.
              </h1>
              <p className="text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#181818] my-[30px] leading-[32px] lg:leading-[36px] font-normal w-[715px] xl:w-[990px] 2xl:w-[1189px]">
                Great design, strong UX, and smart software engineering can
                transform complex challenges into meaningful results.
                Each case study highlights the{" "}
                <b>problem, the process, and the impact</b> — showing how
                thoughtful digital solutions create real value for users
                and businesses across multiple industries.
              </p>
            </div>
          </div>

          <div className="absolute right-[-4%] bottom-[34%] lg:right-[-5%] lg:bottom-[30%] xl:right-[-1%] xl:bottom-[37%] 2xl:right-[2%]">
            <img
              src={casestudygif}
              alt="Hero section animation"
              className="h-auto 2xl:w-[32rem] xl:w-[26rem] lg:w-[24rem] md:w-[20rem] object-contain grayscale"
            />
          </div>       
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* Cards */}
      <div className="containerX mx-auto">
        <div className="flex gap-[40px] mt-10">
          {/* Card 1 */}
          <div className="relative group rounded-2xl overflow-hidden">
            <img
              src={casestudyimg1}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-white text-[38px] xl:text-[46px] 2xl:text-[50px] font-semibold leading-none">
                  BrownMonster
                </h3>

                {/* Divider */}
                <div className="my-[20px] w-[200px] xl:w-[220px] border-t-8 border-[#FFFFFF]" />

                <p className="text-white text-[24px]">SaaS</p>
              </div>

              {/* View button */}
              <Link to="/project/uniqlearn">
                <div className="absolute bottom-6 right-6 flex items-center justify-center cursor-pointer">
                  <img
                    src={viewgif}
                    alt="view"
                    className="lg:w-[150px] lg:h-[150px] xl:w-[165px] xl:h-[165px] 2xl:w-[172px] 2xl:h-[172px]"
                  />
                  <span className="absolute text-black text-[30px] font-medium">
                    View
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group rounded-2xl overflow-hidden">
            <img
              src={casestudyimg2}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-white text-[38px] xl:text-[46px] 2xl:text-[50px] font-semibold leading-none">
                  BrownMonster
                </h3>

                {/* Divider */}
                <div className="my-[20px] w-[200px] xl:w-[220px] border-t-8 border-[#FFFFFF]" />

                <p className="text-white text-[24px]">SaaS</p>
              </div>

              {/* View button */}
              <div className="absolute bottom-6 right-6 flex items-center justify-center">
                <img
                  src={viewgif}
                  alt="view"
                  className="lg:w-[150px] lg:h-[150px] xl:w-[165px] xl:h-[165px] 2xl:w-[172px] 2xl:h-[172px]"
                />
                <span className="absolute text-black text-[30px] font-medium">
                  View
                </span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Full width image */}
        <div className="mt-[40px] relative group rounded-2xl overflow-hidden">
          <img src={casestudyimg3} alt="" className="w-full object-cover" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8">
              <h3 className="text-white text-[50px] font-semibold leading-none">
                BrownMonster
              </h3>

              {/* Divider */}
              <div className="my-[20px] w-[220px] border-t-8 border-[#FFFFFF]" />

              <p className="text-white text-[24px]">SaaS</p>
            </div>

            {/* View button */}
            <div className="absolute bottom-6 right-6 flex items-center justify-center">
              <img src={viewgif} alt="view" className="w-[172px] h-[172px]" />
              <span className="absolute text-black text-[30px] font-medium">
                View
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="my-[130px]">
        <div className="containerX mx-auto">
          <div className="flex items-center justify-between p-[65px] lg:p-[72px] 2xl:p-[100px] bg-[linear-gradient(226deg,rgba(37,74,140,1)_0%,rgba(29,176,190,1)_100%)] rounded-[40px] relative overflow-hidden">
           
            <p className="relative z-10 text-black text-[28px] lg:text-[32px] xl:text-[45px] 2xl:text-[60px] font-bold">
              Your success{" "}
              <span className="text-white font-semibold italic">story</span> can
              be the next <br /> one we showcase.
            </p>
            <button className="relative z-10 flex gap-2.5 bg-[#ffffff21] border border-solid border-[#ffffff] shadow-[0px_4px_20px_#0000000d] px-[30px] py-[20px] xl:px-[40px] xl:py-[26px] rounded-[100px] hover:bg-[#ffffff31]">
              <span className="text-[#0b0c10] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[16px] xl:text-[18px] text-center tracking-[0] leading-6 whitespace-nowrap">
                Build With Us
              </span>
              <img src={contactbtnarrow} alt="" />
            </button>
            <div className="absolute right-[4%] bottom-[-20%] xl:right-[5%] xl:bottom-[-9%] 2xl:right-[5%] 2xl:bottom-[4%] z-10">
              <img
                src={ctagif}
                alt=""
                className="w-[120px] md:w-[170px] lg:w-[209px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    
  );
}

export default Cashstudy;
