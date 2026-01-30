import React from "react";
import Navbar from "./Navbar";
import { ArrowRight } from "lucide-react";
import eyesGif from "../assets/eyes-gif.gif";
import Marquee from "react-fast-marquee";
import marquee1 from "../assets/marquee1.png";
import marquee2 from "../assets/marquee2.png";
import marquee3 from "../assets/marquee3.png";
import marquee4 from "../assets/marquee4.png";
import marquee5 from "../assets/marquee5.png";
import marquee6 from "../assets/marquee6.png";
import marquee7 from "../assets/marquee7.png";
import marquee8 from "../assets/marquee8.png";
import marquee9 from "../assets/marquee9.png";
import marquee10 from "../assets/marquee10.png";
import marquee11 from "../assets/marquee11.png";
import contactbtnarrow from "../assets/contactbtn-arrow.svg";
import ctagif from "../assets/cta-gif.gif";
import ctabggif from "../assets/ctabg-gif.gif";
import commitment from "../assets/commitment.svg";
import clarity from "../assets/clarity.svg";
import excellence from "../assets/excellence.svg";
import passion from "../assets/passion.svg";

const features = [
  {
    icon: commitment,
    title: "Commitment",
    desc: "We stay dedicated to every project we take on. Our team works with focus, ownership, and accountability — ensuring every client receives dependable service and reliable delivery.",
  },
  {
    icon: clarity,
    title: "Clarity",
    desc: "We communicate openly and honestly. Clear processes, transparent timelines, and straightforward decisions ensure clients always know what to expect.",
  },
  {
    icon: excellence,
    title: "Excellence",
    desc: "We push ourselves to deliver the highest quality — from pixel-perfect design to clean, scalable code. Our attention to detail helps brands stand out and succeed.",
  },
  {
    icon: passion,
    title: "Passion",
    desc: "We’re passionate about building products that matter. Our energy, creativity, and love for innovation drive excellence into every project we work on.",
  },
];

function About() {
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
                  ABOUT US
                </h3>
                <h1 className="text-5xl md:text-[70px] font-semibold text-[#181818] leading-[105px]">
                  We Are{" "}
                  <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block leading-none p-1">
                    LIS
                  </span>{" "}
                  A Digital Design <br /> And Development Company
                </h1>
                <p className="text-[24px] text-[#181818] my-[30px] leading-[36px] font-normal">
                  We create digital experiences that are simple, human-centered,
                  and built for long-term success.
                </p>

                <p className="text-[24px] text-[#181818] leading-[36px] font-normal">
                  LIS is a{" "}
                  <b>
                    UI/UX design, mobile app development, and custom software
                    development company
                  </b>{" "}
                  helping brands transform <br /> ideas into high-value digital
                  products. Our expert team of designers, developers, and
                  strategists works with a shared mission - <br />
                  to build solutions that are meaningful, intuitive, and
                  engineered for scale. From user-centered interfaces to modern
                  web and <br /> mobile applications, we blend creativity with
                  advanced technology to help businesses innovate, automate, and
                  grow in <br /> today’s fast-changing digital world.
                </p>
              </div>
            </div>

            <div className="absolute right-[-5%] bottom-[40%]">
              <img
                src={eyesGif}
                alt="Hero section animation"
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        </section>

        {/* counters */}
        <section className="relative py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-20 items-start text-center md:text-left">
              <div className="relative">
                <h3 className="text-[56px] font-bold text-black">10+</h3>
                <p className="mt-4 text-[18px] text-black leading-relaxed">
                  Years of <br /> experience
                </p>
                <span className="absolute -bottom-14 left-0 flex items-center gap-2 bg-[#C7ECFA] text-black text-sm px-3 py-1 rounded">
                  Ui/Ux Design
                  <span className="w-2 h-2 bg-[#7BC9E8] rotate-45 inline-block"></span>
                </span>
              </div>
              <div className="relative text-center">
                <h3 className="text-[56px] font-bold text-black">55+</h3>
                <p className="mt-4 text-[18px] text-black leading-relaxed">
                  Successful <br /> Projects
                </p>
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#CFF3D2] text-black text-sm px-3 py-1 rounded">
                  Web Development
                  <span className="w-2 h-2 bg-[#7EDC8C] rotate-45 inline-block"></span>
                </span>
                <span className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#F3D2FA] text-black text-sm px-3 py-1 rounded">
                  Web Design
                  <span className="w-2 h-2 bg-[#D78AE8] rotate-45 inline-block"></span>
                </span>
              </div>

              <div className="relative text-center">
                <h3 className="text-[56px] font-bold text-black">27+</h3>
                <p className="mt-4 text-[18px] text-black leading-relaxed">
                  Happy <br /> Clients
                </p>

                <span className="absolute -top-12 right-0 flex items-center gap-2 bg-[#F9C5C5] text-black text-sm px-3 py-1 rounded">
                  Mobile development
                  <span className="w-2 h-2 bg-[#F28C8C] rotate-45 inline-block"></span>
                </span>
              </div>

              <div className="text-center md:text-right">
                <h3 className="text-[56px] font-bold text-black">15+</h3>
                <p className="mt-4 text-[18px] text-black leading-relaxed">
                  Expert Developers <br /> & Designers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service we provide */}
        <div className="bg-[#181818]">
          <div className="container mx-auto">
            <div className="w-full flex py-[100px]">
              <h1 className="[font-family:'Segoe_UI-Bold',Helvetica] font-bold text-[#ffffff] text-[200px] tracking-[4.40px] leading-[normal]">
                Make It Simple But Significant
              </h1>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="my-[110px]">
          <p className="text-center text-[40px] font-bold text-[#181818]">
            Trusted By Industry Giants
          </p>

          <div className="mt-[40px]">
            <Marquee speed={100} delay={0}>
              <div className="image_wrapper">
                <img src={marquee1} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee2} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee3} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee4} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee5} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee6} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee7} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee8} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee9} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee10} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={marquee11} alt="" />
              </div>
            </Marquee>
          </div>
        </div>

        {/* CTA */}
        <section className="mt-[60px] mb-[30px]">
          <div className="container mx-auto">
            <div className="flex items-center justify-between p-[100px] bg-[linear-gradient(226deg,rgba(37,74,140,1)_0%,rgba(29,176,190,1)_100%)] rounded-[40px] relative overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover opacity-10"
                alt="Background pattern"
                src={ctabggif}
              />
              <p className="relative z-10 text-black text-[60px] font-bold">
                Ready to{" "}
                <span className="text-white font-semibold italic">
                  collaborate
                </span>{" "}
                with a <br /> trusted, experienced tech team?
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

        {/* Key features */}
        <section className="container mx-auto bg-white py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center border-t border-gray-200">
            <div className="flex flex-col justify-between border-gray-200">
              <div>
                <h2 className="text-[80px] font-bold leading-[100%] text-[#181818]">
                  Our Core Values
                </h2>
                <p className="mt-8 text-[22px] text-[#181818]">
                  We follow principles that guide our culture, our work, and
                  every decision we make. These values help us build meaningful
                  relationships and deliver impactful digital products.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 border-r border-l border-gray-200">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`p-10 border-gray-200 ${
                    index % 2 === 0 ? "border-r" : ""
                  } ${index < 4 ? "border-b" : ""}`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-6 object-contain"
                  />
                  <h4
                    className={`font-semibold text-[24px] mb-2 text-[#181818] ${
                      item.highlight ? "text-blue-600" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[16px] text-[#181818] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
