import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import contactbtnarrow from "../assets/contactbtn-arrow.svg";
import ctagif from "../assets/cta-gif.gif";
import ctabggif from "../assets/ctabg-gif.gif";
import portfoliogif from "../assets/portfolio-gif.gif";
import brownmonster from "../assets/brownmaster.png";
import arouzed from "../assets/arouzed.png";
import uniqlearn from "../assets/uniqlearn-portfolio.png";
import mortage from "../assets/mortage.png";
import salviali from "../assets/salviali.png";
import anypost from "../assets/anypost.png";
import overc from "../assets/overc.png";
import figmalink from "../assets/figma-link.png";
import link from "../assets/link.png";
import { Link } from "react-router-dom";

const tabs = ["UI/UX", "Graphics", "Website Development"];

const projects = {
  "UI/UX": [
    {
      id: "1",
      title: "BrownMonster",
      desc: "Step into the realm of streamlined efficiency with Brown Monster, your one-stop SaaS website...",
      image: brownmonster,
    },
    {
      id: "2",
      title: "Arouzed",
      desc: "Discover a whole new way to embrace your sensuality with Privet, where you can not only...",
      image: arouzed,
    },
    {
      id: "3",
      title: "UniqLearn",
      desc: "Introducing UniqLearn, A Cutting-Edge Platform Designed To Revolutionize Student-Teacher...",
      image: uniqlearn,
    },
    {
      id: "4",
      title: "Meet My Mortgage",
      desc: "Step into the realm of streamlined efficiency with Brown Monster, your one-stop SaaS website...",
      image: mortage,
    },
    {
      id: "5",
      title: "Salviali",
      desc: "Introducing UniqLearn, a cutting-edge platform designed to revolutionize student-teacher...",
      image: salviali,
    },
    {
      id: "6",
      title: "Anypost",
      desc: "Discover a whole new way to embrace your sensuality with Privet, where you can not only...",
      image: anypost,
    },
    {
      id: "7",
      title: "Overc360",
      desc: "Step into the realm of streamlined efficiency with Brown Monster, your one-stop SaaS website...",
      image: overc,
    },
  ],
  Graphics: [
    {
      id: "2",
      title: "Arouzed",
      desc: "Discover a whole new way to embrace your sensuality with Privet, where you can not only...",
      image: arouzed,
    },
  ],
  "Website Development": [
    {
      id: "5",
      title: "Salviali",
      desc: "Introducing UniqLearn, a cutting-edge platform designed to revolutionize student-teacher...",
      image: salviali,
    },
    {
      id: "6",
      title: "Anypost",
      desc: "Discover a whole new way to embrace your sensuality with Privet, where you can not only...",
      image: anypost,
    },
  ],
};

function Portfolio() {
  const [activeTab, setActiveTab] = useState("UI/UX");

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-20 pb-32">
        <div className="container mx-auto">
          <h3 className="text-[20px] mb-3 font-light text-[#181818]">
            PORTFOLIO
          </h3>

          <h1 className="text-5xl md:text-[70px] font-semibold leading-[105px]">
            Where{" "}
            <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block p-3">
              Creativity
            </span>{" "}
            Meets Success <br /> In Our Work
          </h1>

          <p className="text-[24px] my-[30px] leading-[36px]">
            LIS is a leading UI/UX design, mobile app development, and custom
            software development company.
          </p>

          <div className="absolute right-[-2%] bottom-[22%]">
            <img src={portfoliogif} alt="" className="max-w-lg" />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border transition ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((item) => (
            <div
              key={item.id}
              className="bg-[#f3f3f3] rounded-2xl overflow-hidden"
            >
              <div className="bg-white flex items-center justify-center">
                <img src={item.image} alt={item.title} />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <span className="text-[20px] text-[#181818]">
                    [ {item.id} ]
                  </span>
                  <div className="flex items-center gap-5">
                    <Link to="" target="_blank" className="link-items">
                      <div>
                        <img src={figmalink} alt="" />
                      </div>
                    </Link>
                    <Link to="" target="_blank" className="link-items">
                      <div>
                        <img src={link} alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
                <h3 className="text-[40px] font-semibold mt-2">{item.title}</h3>
                <p className="text-[#181818] text-[20px] font-light mt-[20px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
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
            <p className="relative  text-black text-[60px] font-bold">
              Your{" "}
              <span className="text-white font-semibold italic">
                success story{" "}
              </span>
              can be the <br /> next one we showcase.
            </p>
            <button className="relative  flex gap-2.5 bg-[#ffffff21] border border-solid border-[#ffffff] shadow-[0px_4px_20px_#0000000d] px-[40px] py-[26px] rounded-[100px] hover:bg-[#ffffff31]">
              <span className="text-[#0b0c10] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[18px] text-center tracking-[0] leading-6 whitespace-nowrap">
                Work WIth LIS
              </span>
              <img src={contactbtnarrow} alt="" />
            </button>
            <div className="absolute right-[6%] bottom-[4%] z-10">
              <img src={ctagif} alt="" className="w-[209px] h-[209px]" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;
