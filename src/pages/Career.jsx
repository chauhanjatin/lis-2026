import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import careergif from "../assets/career-gif.gif";
import contactbtnarrow from "../assets/contactbtn-arrow.svg";
import ctagif from "../assets/cta-gif.gif";
import ctabggif from "../assets/ctabg-gif.gif";
import data from "../data/projects.json";

function Career() {
  const { slug } = useParams();
  const project = data.find((item) => item.slug === slug) || data[0];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-20 pb-20 2xl:pb-32">
        <div className="containerX mx-auto">
          <div className="items-center">
            <div className="relative">
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] mb-3 font-light text-[#181818]">
                CAREER
              </h3>
              <h1 className="text-5xl md:text-[45px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-semibold text-[#181818] leading-[88px] lg:leading-[105px]">
                Build, Grow & <br />{" "}
                <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block leading-none p-3">
                  Innovate
                </span>{" "}
                With Us
              </h1>
              <p className="text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#181818] mt-[30px] lg:mt-[35px] xl:mt-[50px] leading-[36px] font-normal w-[655px] xl:w-[885px] 2xl:w-[1011px]">
                At LIS, we don’t just build digital products—we build careers.
                Join a team where creativity, ownership, and continuous
                learning shape every project.
              </p>
            </div>
          </div>

          <div className="absolute right-[4%] bottom-[28%] lg:right-[4%] lg:bottom-[25%] 2xl:right-[6%] 2xl:bottom-[12%]">
            <img
              src={careergif}
              alt="Hero section animation"
              className="h-auto 2xl:w-[32rem] lg:w-[25rem] w-[20rem] object-contain"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* MARQUEE */}
      <div className="img-album overflow-hidden">
        <div className="album_section flex animate-marquee gap-6 mb-[30px] md:mb-[40px] xl:mb-[150px] mt-[60px] md:mt-[60px]">
          {[...project?.album, ...project?.album].map((img, i) => (
            <div className="album_items flex-shrink-0" key={i}>
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Openings */}
      <section className="containerX mx-auto text-center">
        <p className="text-[50px] font-semibold text-[#181818]">
          No openings now
        </p>
      </section>

      {/* CTA */}
      <section className="mt-[60px] mb-[130px]">
        <div className="containerX mx-auto">
          <div className="flex items-center justify-between p-[66px] lg:p-[70px] 2xl:p-[100px] bg-[linear-gradient(226deg,rgba(37,74,140,1)_0%,rgba(29,176,190,1)_100%)] rounded-[40px] relative overflow-hidden">
          
            <p className="relative text-black text-[26px] lg:text-[30px] 2xl:text-[60px] font-bold">
              No openings? Send your{" "}
              <span className="text-white font-semibold italic">CV</span> —
              we’ll <br /> contact you when something opens.
            </p>
            <button className="relative flex gap-2.5 bg-[#ffffff21] border border-solid border-[#ffffff] shadow-[0px_4px_20px_#0000000d] px-[30px] py-[20px] xl:px-[40px] xl:py-[26px] rounded-[100px] hover:bg-[#ffffff31]">
              <span className="text-[#0b0c10] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[16px] xl:text-[18px] text-center tracking-[0] leading-6 whitespace-nowrap">
                Send Your CV
              </span>
              <img src={contactbtnarrow} alt="" />
            </button>
            <div className="absolute right-[5%] bottom-[-28%] lg:right-[4%] lg:bottom-[-21%] 2xl:right-[5%] 2xl:bottom-[4%] z-10">
              <img
                src={ctagif}
                alt=""
                className="w-[200px] h-[200px] 2xl:w-[209px] 2xl:h-[209px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Career;
