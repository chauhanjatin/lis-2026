import React from "react";
import Navbar from "./Navbar";
import servicesgif from "../assets/services-gif.gif";
import webdevgif from "../assets/webdev-gif.gif";
import uxuigif from "../assets/uxui-gif.gif";
import mobiledevgif from "../assets/mobiledev-gif.gif";
import contactbtnarrow from "../assets/contactbtn-arrow.svg";
import ctagif from "../assets/cta-gif.gif";
import ctabggif from "../assets/ctabg-gif.gif";
import Footer from "./Footer";

function Service() {
  return (
    <div>
      <Navbar />

      <div className="w-full">
        {/* hero section */}
        <section
          id="home"
          className="relative bg-white overflow-hidden pt-20 pb-32"
        >
          <div className="container mx-auto">
            <div className="items-center">
              <div className="relative ">
                <h3 className="text-[20px] mb-3 font-light text-[#181818]">
                  SERVICES
                </h3>
                <h1 className="text-5xl md:text-[70px] font-semibold text-[#181818] leading-[105px]">
                  Services For{" "}
                  <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block leading-none p-3">
                    Developing
                  </span>{" "}
                  Custom <br /> Software
                </h1>
                <p className="text-[24px] text-[#181818] my-[30px] leading-[36px] font-normal">
                  Let us take care of the technology while you focus on growth.
                  As a full-service custom software development <br /> company,
                  we turn your ideas into scalable digital products built with
                  precision, innovation, and long-term <br /> reliability.
                </p>

                <p className="text-[24px] text-[#181818] leading-[36px] font-normal">
                  Whether you need{" "}
                  <b>
                    UI/UX design, high-performance websites, mobile apps, or
                    business-focused technical <br /> consulting
                  </b>
                  , our team delivers modern solutions that elevate your brand,
                  improve processes, and enhance user <br /> experience.
                </p>
              </div>
            </div>

            <div className="absolute right-[0%] bottom-[26%]">
              <img
                src={servicesgif}
                alt="Hero section animation"
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        </section>

        {/* contents */}
        <section className="bg-white py-24">
          <div className="container mx-auto">
            <div className="flex gap-6">
              <span className="text-[24px] block mb-6 w-20">[ 01 ]</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[100px] mb-24 w-full ">
                <div className="">
                  <img
                    src={webdevgif}
                    alt="Web preview"
                    className="rounded-xl shadow-md"
                  />
                </div>

                <div className="flex items-start">
                  <h2 className="text-[120px] font-bold leading-tight text-[#181818]">
                    Web <br /> Development
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <p className="text-[40px] leading-[60px] font-light">
                Modern, High-Performance Websites Optimized for speed, security,
                and seamless user experience. Designed to rank better, load
                faster, and convert more effectively across all devices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 text-[30px] font-semibold">
                <ul className="space-y-4">
                  <li>Next.Js / React.Js</li>
                  <li>Full-Stack Development</li>
                  <li>Progressive Web Apps (PWA)</li>
                  <li>Performance Optimization</li>
                </ul>

                <ul className="space-y-4">
                  <li>E-Commerce</li>
                  <li>Cloud Hosting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container mx-auto">
            <div className="flex gap-6">
              <span className="text-[24px] block mb-6 w-20">[ 02 ]</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[100px] mb-24 w-full ">
                <div className="">
                  <img
                    src={uxuigif}
                    alt="Web preview"
                    className="rounded-xl shadow-md"
                  />
                </div>

                {/* RIGHT : HEADING */}
                <div className="flex items-start">
                  <h2 className="text-[120px] font-bold leading-tight text-[#181818]">
                    UX/UI Design
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* LEFT : DESCRIPTION */}
              <p className="text-[40px] leading-[60px] font-light">
                Human-centered interface design focused on clarity, usability,
                and visual impact. Every screen is optimized to improve user
                flow, engagement, and overall digital experience.
              </p>

              {/* RIGHT : SERVICES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 text-[30px] font-semibold">
                <ul className="space-y-4">
                  <li>User Flows & Journeys</li>
                  <li>Wireframe & Prototyping</li>
                  <li>Web & Mobile UI/UX</li>
                  <li>Dashboard & SaaS Design</li>
                </ul>

                <ul className="space-y-4">
                  <li>Landing Pages</li>
                  <li>UX Audit</li>
                  <li>Usability Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container mx-auto">
            <div className="flex gap-6">
              <span className="text-[24px] block mb-6 w-20">[ 03 ]</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[100px] mb-24 w-full ">
                <div className="">
                  <img
                    src={mobiledevgif}
                    alt="Web preview"
                    className="rounded-xl shadow-md"
                  />
                </div>

                {/* RIGHT : HEADING */}
                <div className="flex items-start">
                  <h2 className="text-[120px] font-bold leading-tight text-[#181818]">
                    Mobile Development
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* LEFT : DESCRIPTION */}
              <p className="text-[40px] leading-[60px] font-light">
                Seamless mobile app experiences engineered for speed,
                responsiveness, and everyday usability. Polished visuals and
                intuitive interactions deliver strong performance and real
                business results.
              </p>

              {/* RIGHT : SERVICES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 text-[30px] font-semibold">
                <ul className="space-y-4">
                  <li>IOS & Android Apps</li>
                  <li>Flutter / React Native</li>
                  <li>AI-Enabled Apps</li>
                  <li>Wearable Apps</li>
                </ul>

                <ul className="space-y-4">
                  <li>API Integration</li>
                  <li>Testing & QA</li>
                  <li>App Maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container mx-auto">
            <div className="flex gap-6">
              <span className="text-[24px] block mb-6 w-20">[ 04 ]</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[100px] mb-24 w-full ">
                <div className="">
                  <img
                    src={uxuigif}
                    alt="Web preview"
                    className="rounded-xl shadow-md"
                  />
                </div>

                {/* RIGHT : HEADING */}
                <div className="flex items-start">
                  <h2 className="text-[120px] font-bold leading-tight text-[#181818]">
                    Business Services
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* LEFT : DESCRIPTION */}
              <p className="text-[40px] leading-[60px] font-light">
                Strategic technology solutions that enhance operations,
                streamline workflows, and support long-term growth. Business
                processes become smarter, faster, and more efficient with the
                right digital approach.
              </p>

              {/* RIGHT : SERVICES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6 text-[30px] font-semibold">
                <ul className="space-y-4">
                  <li>IT Consulting</li>
                  <li>Digital Transformation</li>
                  <li>AI Automation</li>
                  <li>Cloud Architecture</li>
                </ul>

                <ul className="space-y-4">
                  <li>Technical Support</li>
                  <li>Product Strategy</li>
                  <li>Process Automation</li>
                </ul>
              </div>
            </div>
          </div>
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
              <p className="relative z-10 text-black text-[60px] font-bold">
                Let’s turn your{" "}
                <span className="text-white font-semibold italic">
                  idea
                </span>{" "}
                into a <br /> powerful digital product.
              </p>
              <button className="relative z-10 flex gap-2.5 bg-[#ffffff21] border border-solid border-[#ffffff] shadow-[0px_4px_20px_#0000000d] px-[40px] py-[26px] rounded-[100px] hover:bg-[#ffffff31]">
                <span className="text-[#0b0c10] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[18px] text-center tracking-[0] leading-6 whitespace-nowrap">
                  Start a Conversation
                </span>
                <img src={contactbtnarrow} alt="" />
              </button>
              <div className="absolute right-[8%] bottom-[4%] z-10">
                <img src={ctagif} alt="" className="w-[209px] h-[209px]" />
              </div>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export default Service;
