import React from "react";
import Navbar from "./Navbar";
import servicesgif from "../assets/services-gif.gif";
import webdevgif from "../assets/webdev-gif.gif";
import uxuigif from "../assets/uxui-gif.gif";
import mobiledevgif from "../assets/mobiledev-gif.gif";
import Footer from "./Footer";
import CTA from "./CTA";

function Service() {
  return (
    <div>
      <Navbar />

      <div className="w-full">
        {/* hero section */}
        <section
          id="home"
          className="relative bg-white overflow-hidden pt-16 md:pt-20 pb-20 lg:pb-14 xl:pb-28"
        >
          <div className="containerX mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
            <div className="items-center w-full lg:w-[70%]">
              <div className="relative">
                <h3 className="text-[16px] md:text-[18px] lg:text-[20px] mb-3 font-light text-[#181818]">
                  SERVICES
                </h3>

                <h1 className="text-[36px] md:text-[40px] lg:text-[45px] xl:text-[60px] 2xl:text-[70px] font-semibold text-[#181818] leading-[80px] xl:leading-[120%] mb-[50px]">
                  Services For{" "}
                  <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block leading-none px-3 py-2 md:p-3">
                    Developing
                  </span>{" "}
                  Custom  Software
                </h1>

                <p className="md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#181818] my-[20px] lg:my-[25px] xl:my-[30px] leading-[160%] ">
                  Let us take care of the technology while you focus on growth.
                  As a full-service <b>custom software development company</b>,
                  we turn your ideas into scalable digital products built with
                  precision, innovation, and long-term reliability.
                </p>

                <p className="md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#181818] leading-[160%] ">
                  Whether you need{" "}
                  <b>
                    UI/UX design, high-performance websites, mobile apps, or
                    business-focused technical consulting
                  </b>
                  , our team delivers modern solutions that elevate your brand,
                  improve processes, and enhance user experience.
                </p>
              </div>
            </div>

            {/* Right GIF */}
            <div className=" w-full lg:w-[30%]">
              <img
                src={servicesgif}
                alt="Hero section animation"
                className="h-auto w-[200px] lg:w-[255px] xl:w-[315px] 2xl:w-[400px] object-contain"
              />
            </div>
            </div>
          </div>

          {/* Decorative Blur Shapes */}
          <div className="absolute top-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 md:w-96 h-60 md:h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        </section>

        {/* contents */}
        <section className="bg-white py-16 lg:py-20 xl:py-24">
          <div className="containerX mx-auto">
            <div className="flex gap-4 md:gap-6">
              <span className="text-[18px] md:text-[22px] lg:text-[24px] block mb-4 md:mb-6 w-14 md:w-20">
                [ 01 ]
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] md:gap-[60px] lg:gap-[68px] xl:gap-[55px] 2xl:gap-[85px] mb-16 lg:mb-20 xl:mb-24 w-full">
                <div>
                  <img
                    src={webdevgif}
                    alt="Web preview"
                    className="rounded-xl shadow-md w-full h-auto object-cover"
                  />
                </div>

                <div className="flex items-start">
                  <h2 className="text-[40px] md:text-[60px] lg:text-[62px] xl:text-[90px] 2xl:text-[110px] font-bold leading-[110%] text-[#181818] midxl:!text-[80px]">
                    Web <br className="hidden sm:block" /> Development
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
              <p className="text-[18px] lg:text-[25px] xl:text-[35px] 2xl:text-[40px] leading-[150%] lg:leading-[40px] xl:leading-[60px] font-light">
                Modern, High-Performance Websites Optimized for speed, security,
                and seamless user experience. Designed to rank better, load
                faster, and convert more effectively across all devices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-4 md:gap-y-6 text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[30px] font-semibold midxl:!text-[20px] ">
                <ul className="space-y-3 md:space-y-4">
                  <li>Next.Js / React.Js</li>
                  <li>Full-Stack Development</li>
                  <li>Progressive Web Apps (PWA)</li>
                  <li>Performance Optimization</li>
                </ul>

                <ul className="space-y-3 md:space-y-4">
                  <li>E-Commerce</li>
                  <li>Cloud Hosting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20 xl:py-24">
          <div className="containerX mx-auto">
            <div className="flex gap-4 md:gap-6">
              <span className="text-[18px] md:text-[22px] lg:text-[24px] block mb-4 md:mb-6 w-14 md:w-20">
                [ 02 ]
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] md:gap-[60px] lg:gap-[68px] xl:gap-[55px] 2xl:gap-[85px] mb-16 lg:mb-20 xl:mb-24 w-full">
                <div>
                  <img
                    src={uxuigif}
                    alt="UX UI preview"
                    className="rounded-xl shadow-md w-full h-auto object-cover"
                  />
                </div>

                {/* RIGHT : HEADING */}
                <div className="flex items-start">
                  <h2 className="text-[40px] md:text-[60px] lg:text-[62px] xl:text-[90px] 2xl:text-[110px] font-bold leading-[110%] text-[#181818] midxl:!text-[80px]">
                    UX/UI Design
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
              {/* LEFT : DESCRIPTION */}
              <p className="text-[18px] lg:text-[25px] xl:text-[35px] 2xl:text-[40px] leading-[150%] lg:leading-[40px] xl:leading-[60px] font-light">
                Human-centered interface design focused on clarity, usability,
                and visual impact. Every screen is optimized to improve user
                flow, engagement, and overall digital experience.
              </p>

              {/* RIGHT : SERVICES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-4 md:gap-y-6 text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[30px] font-semibold midxl:!text-[20px] ">
                <ul className="space-y-3 md:space-y-4">
                  <li>User Flows & Journeys</li>
                  <li>Wireframe & Prototyping</li>
                  <li>Web & Mobile UI/UX</li>
                  <li>Dashboard & SaaS Design</li>
                </ul>

                <ul className="space-y-3 md:space-y-4">
                  <li>Landing Pages</li>
                  <li>UX Audit</li>
                  <li>Usability Testing</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-white py-16 lg:py-20 xl:py-24">
          <div className="containerX mx-auto">
            <div className="flex gap-4 md:gap-6">
              <span className="text-[18px] md:text-[22px] lg:text-[24px] block mb-4 md:mb-6 w-14 md:w-20">
                [ 03 ]
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] md:gap-[60px] lg:gap-[68px] xl:gap-[55px] 2xl:gap-[85px] mb-16 md:mb-24 w-full">
                <div>
                  <img
                    src={mobiledevgif}
                    alt="Mobile preview"  
                    className="rounded-xl shadow-md w-full h-auto object-cover"
                  />
                </div>

                {/* RIGHT : HEADING */}
                <div className="flex items-start">
                  <h2 className="text-[40px] md:text-[60px] lg:text-[62px] xl:text-[90px] 2xl:text-[110px] font-bold leading-[110%] text-[#181818] midxl:!text-[80px]">
                    Mobile Development
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
              {/* LEFT : DESCRIPTION */}
              <p className="text-[18px] lg:text-[25px] xl:text-[35px] 2xl:text-[40px] leading-[150%] lg:leading-[40px] xl:leading-[60px] font-light">
                Seamless mobile app experiences engineered for speed,
                responsiveness, and everyday usability. Polished visuals and
                intuitive interactions deliver strong performance and real
                business results.
              </p>

              {/* RIGHT : SERVICES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-4 md:gap-y-6 text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[30px] font-semibold midxl:!text-[20px] ">
                <ul className="space-y-3 md:space-y-4">
                  <li>IOS & Android Apps</li>
                  <li>Flutter / React Native</li>
                  <li>AI-Enabled Apps</li>
                  <li>Wearable Apps</li>
                </ul>

                <ul className="space-y-3 md:space-y-4">
                  <li>API Integration</li>
                  <li>Testing & QA</li>
                  <li>App Maintenance</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-white py-16 lg:py-20 xl:py-24">
          <div className="containerX mx-auto">
            <div className="flex gap-4 md:gap-6">
              <span className="text-[18px] md:text-[22px] lg:text-[24px] block mb-4 md:mb-6 w-14 md:w-20">
                [ 04 ]
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] md:gap-[60px] lg:gap-[68px] xl:gap-[55px] 2xl:gap-[85px] mb-16 md:mb-24 w-full">
                <div>
                  <img
                    src={uxuigif}
                    alt="Business services preview"
                    className="rounded-xl shadow-md w-full h-auto object-cover"
                  />
                </div>

                {/* RIGHT : HEADING */}
                <div className="flex items-start">
                  <h2 className="text-[40px] md:text-[60px] lg:text-[62px] xl:text-[90px] 2xl:text-[110px] font-bold leading-[110%] text-[#181818] midxl:!text-[80px]">
                    Business Services
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
              {/* LEFT : DESCRIPTION */}
              <p className="text-[18px] lg:text-[25px] xl:text-[35px] 2xl:text-[40px] leading-[150%] lg:leading-[40px] xl:leading-[60px] font-light">
                Strategic technology solutions that enhance operations,
                streamline workflows, and support long-term growth. Business
                processes become smarter, faster, and more efficient with the
                right digital approach.
              </p>

              {/* RIGHT : SERVICES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-4 md:gap-y-6 text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[30px] font-semibold midxl:!text-[20px] ">
                <ul className="space-y-3 md:space-y-4">
                  <li>IT Consulting</li>
                  <li>Digital Transformation</li>
                  <li>AI Automation</li>
                  <li>Cloud Architecture</li>
                </ul>

                <ul className="space-y-3 md:space-y-4">
                  <li>Technical Support</li>
                  <li>Product Strategy</li>
                  <li>Process Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTA/>

        <Footer />
      </div>
    </div>
  );
}

export default Service;
