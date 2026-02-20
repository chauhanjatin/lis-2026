import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroGif from "../assets/herosec-gif.gif";
import ourfraturesgif from "../assets/ourfeatures-gif.gif";
import data from "../data/projects.json";
import cardarrow from "../assets/card-arrow.svg";
import strongstrategy from "../assets/strong-strategy.svg";
import pixelperfect from "../assets/pixelperfect-design.svg";
import securearchitecture from "../assets/securearchitecture.svg";
import endtoend from "../assets/endtoend.svg";
import seamless from "../assets/seamless.svg";
import relaiablesupport from "../assets/relaiablesupport.svg";
import contactbtnarrow from "../assets/contactbtn-arrow.svg";
import ctagif from "../assets/cta-gif.gif";
import ctabggif from "../assets/ctabg-gif.gif";
import discover from "../assets/discover.png";
import build from "../assets/build.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const features = [
  {
    icon: strongstrategy,
    title: "Strong Strategy",
    desc: "We build every product on solid market research, business goals, and user needs.",
  },
  {
    icon: pixelperfect,
    title: "Pixel-Perfect Design",
    desc: "Our designers create modern interfaces that deliver seamless user experiences.",
  },
  {
    icon: securearchitecture,
    title: "Secure Architecture",
    desc: "We implement advanced security standards to protect user data and system integrity.",
  },
  {
    icon: endtoend,
    title: "End-to-End Execution",
    desc: "From idea to launch — we handle everything with transparent communication.",
  },
  {
    icon: seamless,
    title: "Seamless Collaboration",
    desc: "We work closely with your team to ensure smooth project execution and successful delivery.",
  },
  {
    icon: relaiablesupport,
    title: "Reliable Support",
    desc: "Our dedicated support ensures hassle-free maintenance and continuous improvements.",
  },
];

const toolsData = [
  [
    {
      title: "Photoshop (Ps)",
      description: "Professional image editing tool.",
    },
    {
      title: "Figma",
      description: "Collaborative UI/UX design made easy.",
    },
    {
      title: "Illustrator (Ai)",
      description: "Create stunning vector graphics.",
    },
    {
      title: "HTML5",
      description: "Build modern, responsive websites.",
    },
    {
      title: "CSS3",
      description: "Style and animate your web pages.",
    },
  ],
  [
    {
      title: "JavaScript",
      description: "Add interactivity to your site.",
    },
    {
      title: "Angular",
      description: "Powerful framework for web apps.",
    },
    {
      title: "React",
      description: "Fast, flexible UI library by Meta.",
    },
    {
      title: "Flutter",
      description: "Cross-platform mobile app toolkit.",
    },
  ],
  [
    {
      title: "Android",
      description: "Develop native Android applications.",
    },
    {
      title: "iOS (Apple)",
      description: "Build elegant iOS mobile apps.",
    },
    {
      title: "WordPress",
      description: "Create dynamic, content-driven sites.",
    },
    {
      title: "Laravel",
      description: "Modern PHP framework for web apps.",
    },
    {
      title: "MySQL",
      description: "Reliable relational database system.",
      cardBg: "bg-[#29292e]",
    },
  ],
];

export default function Home() {
  const { slug } = useParams();
  const project = data.find((item) => item.slug === slug) || data[0];

  const sectionRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = 1 - rect.top / windowHeight;

        const newScale = 1 + progress * 1;
        setScale(Math.min(newScale, 2));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="w-full">
        <section
          id="home"
          className="relative bg-white overflow-hidden pt-20 pb-32"
        >
          <div className="container mx-auto">
            <div className="items-center">
              <div className="relative ">
                <h1 className="text-5xl md:text-[90px] font-semibold text-[#181818] mb-6 leading-[120px]">
                  Custom Software & Product <br /> Development - Web, Mobile &
                  UI/UX
                </h1>
                <p className="text-[24px] text-[#181818] mb-[60px] leading-[36px] font-normal">
                  We build scalable websites, mobile applications, and software
                  solutions that transform your business vision into powerful
                  digital <br /> products. Partner with our expert team to
                  innovate faster, deliver smarter, and grow with confidence.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 px-5 py-3 bg-white border border-cyan-400 text-[#181818] text-[18px] rounded-full font-semibold hover:bg-cyan-50 transition">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 text-[#181818]" />
                  </button>
                  <a
                    href="#contact"
                    className="text-[#181818] text-[18px] font-semibold hover:text-cyan-600 transition"
                  >
                    Book a Free Consultation
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute right-[-5%] bottom-[63%]">
              <img
                src={heroGif}
                alt="Hero section animation"
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div>

          <div className="img-marquee">
            <div className="logos mb-[40px] mt-[100px]">
              {project?.gallery?.map((img, i) => (
                <div className="logo_items" key={i}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-[60px]">
            <button className="flex items-center gap-2 px-5 py-3 border border-cyan-400 text-[#181818] text-[18px] rounded-full font-semibold hover:bg-cyan-50 transition">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 text-[#181818]" />
            </button>
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto">
            <h2 className="text-[65px] font-semibold text-[#181818] mb-[50px] leading-[80px]">
              Every idea deserves precision. Every product deserves impact. Most
              agencies deliver code. We craft experiences. At LIS, we blend
              strategy, design, and engineering to build digital products that
              are fast, intuitive, and future-ready.
            </h2>

            <div className="container mx-auto mt-20">
              <div className="grid">
                <div className="text-[#181818]">
                  <p className="text-[18px] leading-[30px] max-w-[680px]">
                    <span className="font-semibold">
                      We transform complex business challenges into simple,
                      scalable solutions.
                    </span>{" "}
                    From UI/UX and web platforms to enterprise-grade mobile apps
                    — everything we create is designed to perform beautifully,
                    adapt effortlessly, and deliver measurable business results.
                  </p>
                </div>
                <div></div>
              </div>
            </div>

            <div className="container mx-auto">
              <div className="grid">
                <div></div>
                <div className="text-[#181818] flex justify-end">
                  <p className="text-[18px] leading-[30px] max-w-[680px]">
                    <span className="font-semibold">
                      We turn your vision into a digital product
                    </span>{" "}
                    that works in the real world — stable, secure, and built to
                    scale. Whether you’re validating an idea, redesigning an
                    existing system, or building a product from scratch, our
                    team ensures clarity at every step and excellence in every
                    pixel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* counters */}
        <section className="relative bg-[#f7f7f7] py-32 overflow-hidden">
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
                  Happy <br />
                  Clients
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
              <h1 className="[font-family:'Segoe_UI-Bold',Helvetica] font-bold text-[#ffffff] text-[220px] tracking-[4.40px] leading-[normal]">
                Services
                <br />
                We Provide
              </h1>
            </div>
          </div>
        </div>

        <div className="flex w-full items-start mt-10">
          <div className="flex h-[402px] items-center gap-[30px] pl-[200px] pr-[100px] py-[100px] flex-1 border-y border-[#18181833]">
            <div className="inline-flex items-start gap-[30px]">
              <div className="flex flex-col w-[576px] items-start gap-5">
                <h2 className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-5xl leading-[58px] text-[#181818] tracking-[0]">
                  Mobile App development
                </h2>
                <p className="self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#181818] text-[22px] tracking-[0] leading-[33px]">
                  We design and develop high-performance Android, iOS, and
                  cross-platform apps using the latest technologies. Our apps
                  are optimized for speed, security, and seamless user
                  experiences.
                </p>
              </div>
              <img
                className="border border-black rounded-full py-[20px] px-[17px]"
                alt="Carose"
                src={cardarrow}
              />
            </div>
          </div>

          <div className="flex h-[402px] items-center gap-[30px] pl-[100px] pr-[200px] py-[100px] flex-1 border-y border-l border-[#18181833]">
            <div className="inline-flex items-start gap-[30px]">
              <div className="flex flex-col w-[576px] items-start gap-5">
                <h2 className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-5xl leading-[58px] text-[#181818] tracking-[0]">
                  Business Services & Consulting
                </h2>
                <p className="self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#181818] text-[22px] tracking-[0] leading-[33px]">
                  We help companies identify growth opportunities, improve
                  workflows, automate operations, and build digital solutions
                  that support long-term scalability and success.
                </p>
              </div>
              <img
                className="border border-black rounded-full py-[20px] px-[17px]"
                alt="Carose"
                src={cardarrow}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full items-start">
          <div className="flex h-[402px] items-center gap-[30px] pl-[200px] pr-[100px] py-[100px] flex-1 border-b border-[#18181833]">
            <div className="inline-flex items-start gap-[30px]">
              <div className="flex flex-col w-[576px] items-start gap-5">
                <h2 className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-5xl leading-[58px] text-[#181818] tracking-[0]">
                  Mobile App development
                </h2>
                <p className="self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#181818] text-[22px] tracking-[0] leading-[33px]">
                  We design and develop high-performance Android, iOS, and
                  cross-platform apps using the latest technologies. Our apps
                  are optimized for speed, security, and seamless user
                  experiences.
                </p>
              </div>
              <img
                className="border border-black rounded-full py-[20px] px-[17px]"
                alt="Carose"
                src={cardarrow}
              />
            </div>
          </div>

          <div className="flex h-[402px] items-center gap-[30px] pl-[100px] pr-[200px] py-[100px] flex-1 border-b border-l border-[#18181833]">
            <div className="inline-flex items-start gap-[30px]">
              <div className="flex flex-col w-[576px] items-start gap-5">
                <h2 className="self-stretch [font-family:'Inter',Helvetica] font-semibold text-5xl leading-[58px] text-[#181818] tracking-[0]">
                  Business Services & Consulting
                </h2>
                <p className="self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#181818] text-[22px] tracking-[0] leading-[33px]">
                  We help companies identify growth opportunities, improve
                  workflows, automate operations, and build digital solutions
                  that support long-term scalability and success.
                </p>
              </div>
              <img
                className="border border-black rounded-full py-[20px] px-[17px]"
                alt="Carose"
                src={cardarrow}
              />
            </div>
          </div>
        </div>

        {/* Our process */}
        <section ref={sectionRef} className="w-full h-[200vh]">
          <div className="sticky top-0 flex items-center justify-center h-screen">
            <div className="flex justify-center">
              <p
                style={{ transform: `scale(${scale})` }}
                className="w-full px-[300px] py-[150px] bg-[#181818] text-white text-[90px] font-bold leading-[100px] text-center"
              >
                Our <br /> Process
              </p>
            </div>
          </div>
        </section>

        {/* Service we provide */}
        <div className="bg-[#181818] text-white">
          <div className="px-[40px]">
            <div className="py-[100px] space-y-[120px]">
              {/* 1 - Discover */}
              <div className="border-t border-white/10 pt-[80px] flex items-start justify-between">
                <div className="flex items-start gap-[100px]">
                  <span className="text-[40px]">[ 1 ]</span>
                  <h2 className="text-[158px] font-semibold leading-none">
                    Discover
                  </h2>
                </div>

                <p className="max-w-[591px] text-[22px]">
                  We analyze your business challenges, goals, and audience to
                  define the best technological approach.
                </p>
                <div>
                  <img src={discover} alt="" />
                </div>
              </div>

              {/* 2 - Design */}
              <div className="border-t border-white/10 pt-[80px] flex items-start justify-between">
                <div className="flex items-start gap-10 ml-[200px]">
                  <span className="text-[40px]">[ 2 ]</span>
                  <h2 className="text-[120px] font-semibold leading-none">
                    Design
                  </h2>
                </div>

                <p className="max-w-[420px] text-white/70 text-lg">
                  Our UI/UX team creates modern, intuitive, and user-centric
                  designs that elevate user experience across devices.
                </p>
              </div>

              {/* 3 - Build */}
              <div className="border-t border-white/10 pt-[80px] grid grid-cols-3 items-center">
                <div className="flex items-start gap-10">
                  <span className="text-[40px] text-white/60">[ 3 ]</span>
                  <h2 className="text-[120px] font-semibold leading-none">
                    Build
                  </h2>
                </div>

                <p className="max-w-[559px] text-lg">
                  We develop secure, scalable, and future-ready digital products
                  using clean code and industry best practices.
                </p>

                <div className="">
                  <img src={build} alt="" />
                </div>
              </div>

              {/* 4 - Deliver */}
              <div className="border-t border-b border-white/10 pt-[80px] pb-[80px] flex items-start justify-between">
                <p className="max-w-[420px] text-white/70 text-lg">
                  Your product is thoroughly tested and deployed with complete
                  support for maintenance and future updates.
                </p>

                <div className="flex items-start gap-10">
                  <h2 className="text-[120px] font-semibold leading-none">
                    Deliver
                  </h2>
                  <span className="text-[40px] mt-8">[ 4 ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key features */}
        <section className="container mx-auto bg-white py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-200">
            <div className="flex flex-col justify-between border-r border-gray-200">
              <div>
                <h2 className="text-[80px] font-bold leading-[100%] text-[#181818]">
                  Our <br /> Key Features
                </h2>
                <p className="mt-8 text-[22px] text-[#181818]">
                  The services we provide elevate us to the status of one of the
                  top software development companies.
                </p>
              </div>
              <div className="mt-16">
                <img
                  src={ourfraturesgif}
                  alt="3D Shape"
                  className="w-[400px]"
                />
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 border-r border-gray-200">
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

        {/* CTA */}
        <section className="mt-[60px] mb-[140px]">
          <div className="container mx-auto">
            <div className="flex items-center justify-between p-[100px] bg-[linear-gradient(226deg,rgba(37,74,140,1)_0%,rgba(29,176,190,1)_100%)] rounded-[40px] relative overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover opacity-10"
                alt="Background pattern"
                src={ctabggif}
              />
              <p className="relative z-10 text-black text-[95px] font-bold">
                We work with <br /> brands in{" "}
                <span className="text-white font-semibold italic">Tech.</span>
              </p>
              <button className="relative z-10 flex gap-2.5 bg-[#ffffff21] border border-solid border-[#ffffff] shadow-[0px_4px_20px_#0000000d] px-[40px] py-[26px] rounded-[100px] hover:bg-[#ffffff31]">
                <span className="text-[#0b0c10] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[18px] text-center tracking-[0] leading-6 whitespace-nowrap">
                  Contact Us
                </span>
                <img src={contactbtnarrow} alt="" />
              </button>
              <div className="absolute right-[1%] bottom-[16%] z-10">
                <img src={ctagif} alt="" className="w-[209px] h-[209px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="relative w-full bg-[#181818] py-20 overflow-hidden">
          <div className="relative max-w-[1520px] mx-auto px-5">
            <h2 className="[font-family:'Segoe_UI-Bold',Helvetica] font-bold text-[#ffffff] text-[80px] text-center tracking-[1.60px] leading-normal mb-20">
              Tools We Use To
              <br />
              create Your Products
            </h2>

            <div className="flex flex-col gap-[30px] items-center">
              <div className="flex items-center gap-[30px] justify-center flex-wrap">
                {toolsData[0].map((tool, index) => (
                  <div
                    key={`tool-row1-${index}`}
                    className={`${
                      tool.cardBg || "bg-[#ffffff08]"
                    } backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] border-0`}
                  >
                    <div className="flex items-center gap-5 p-5">
                      {/* <img
                      className={tool.imageClass}
                      alt={tool.title}
                      src={tool.image}
                    /> */}
                      <div className="flex flex-col gap-2.5">
                        <h3 className="[font-family:'Gantari',Helvetica] font-semibold text-[#ffffff] text-3xl tracking-[0] leading-[45px]">
                          {tool.title}
                        </h3>
                        <p className="[font-family:'Gantari',Helvetica] font-normal text-[#828282] text-xl tracking-[0] leading-[30px]">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-[30px] justify-center flex-wrap">
                {toolsData[1].map((tool, index) => (
                  <div
                    key={`tool-row2-${index}`}
                    className={`${
                      tool.cardBg || "bg-[#ffffff08]"
                    } backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] border-0`}
                  >
                    <div className="flex items-center gap-5 p-5">
                      {/* <img
                      className={tool.imageClass}
                      alt={tool.title}
                      src={tool.image}
                    /> */}
                      <div className="flex flex-col gap-2.5">
                        <h3 className="[font-family:'Gantari',Helvetica] font-semibold text-[#ffffff] text-3xl tracking-[0] leading-[45px]">
                          {tool.title}
                        </h3>
                        <p className="[font-family:'Gantari',Helvetica] font-normal text-[#828282] text-xl tracking-[0] leading-[30px]">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-[30px] justify-center flex-wrap">
                {toolsData[2].map((tool, index) => (
                  <div
                    key={`tool-row3-${index}`}
                    className={`${
                      tool.cardBg || "bg-[#ffffff08]"
                    } backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] border-0`}
                  >
                    <div className="flex items-center gap-5 p-5">
                      {/* <img
                      className={tool.imageClass}
                      alt={tool.title}
                      src={tool.image}
                    /> */}
                      <div className="flex flex-col gap-2.5">
                        <h3 className="[font-family:'Gantari',Helvetica] font-semibold text-[#ffffff] text-3xl tracking-[0] leading-[45px]">
                          {tool.title}
                        </h3>
                        <p className="[font-family:'Gantari',Helvetica] font-normal text-[#828282] text-xl tracking-[0] leading-[30px]">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-[353px] left-[-50px] w-[193px] h-[511px] bg-[#181818] blur-[22px]" />
          <div className="absolute top-[353px] right-[-50px] w-[212px] h-[511px] bg-[#181818] blur-[22px]" />
        </section>

        {/* Feedbacks */}
        <section id="testimonials" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
              Feedback from Our Customers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Enrique</h4>
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  "Outstanding service and exceptional results. The team
                  delivered exactly what we needed."
                </p>

                <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition">
                  View More
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Alisson</h4>
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  "Professional, reliable, and innovative. Highly recommend
                  their services."
                </p>
                <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition">
                  View More
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sarah</h4>
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  "The best decision we made for our digital transformation
                  journey."
                </p>
                <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition">
                  View More
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Michael</h4>
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  "Exceeded our expectations in every way. Truly exceptional
                  work."
                </p>
                <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition">
                  View More
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
