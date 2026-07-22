import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import portfoliogif from "../assets/portfolio-gif.gif";
import CTA from "./CTA";
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
      <section className="relative bg-white overflow-hidden pt-20 pb-16 xl:pb-32">
        <div className="containerX mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
            <div className="items-center w-full lg:w-[70%]">
              <h3 className="text-[20px] mb-3 font-light text-[#181818]">
                PORTFOLIO
              </h3>

              <h1 className="text-[45px] xl:text-[62px] 2xl:text-[70px] font-semibold leading-[88px] xl:leading-[105px] midxl:!text-[52px] ">
                Where{" "}
                <span className="bg-[#1EB2BE] text-white rounded-[8px] 2xl:inline-block p-3 leading-[normal]">
                  Creativity
                </span>{" "}
                Meets Success <br /> In Our Work
              </h1>

              <p className="text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] my-[20px] lg:my-[30px] leading-[36px] w-[635px] xl:w-[930px] 2xl:w-[989px]">
                LIS is a leading UI/UX design, mobile app development, and
                custom software development company. Our multidisciplinary team
                of designers, developers, and digital strategists collaborates
                to build impactful digital products.
              </p>
            </div>

            <div className=" w-full lg:w-[30%]">
              <img
                src={portfoliogif}
                alt=""
                className="w-[18rem] lg:w-[21rem] xl:w-[23rem] 2xl:w-[32rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="containerX mx-auto px-4 py-16">
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
              <div className="p-5 xl:p-6">
                <div className="flex justify-between items-center">
                  <span className="text-[20px] text-[#181818]">
                    [ {item.id} ]
                  </span>
                  <div className="flex items-center xl:gap-3 2xl:gap-5">
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
                <h3 className="text-[25px] xl:text-[33px] 2xl:text-[40px] font-semibold mt-2">
                  {item.title}
                </h3>
                <p className="text-[#181818] text-[16px] font-light xl:mt-[15px] 2xl:mt-[20px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
}

export default Portfolio;
