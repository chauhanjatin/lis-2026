import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
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
import data from "../data/projects.json";
import profileimg from "../assets/feedback-img.png";
import feedbackicon from "../assets/feedback-icon.png";
import feedbackstars from "../assets/feedback-stars.png";
import Footer from "./Footer";

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
  const { slug } = useParams();
  const project = data.find((item) => item.slug === slug) || data[0];
  const [shrink, setShrink] = useState(false);

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      title: "Our Mission",
      desc: "To simplify technology and empower businesses through modern, user-focused digital solutions. We aim to help companies grow faster by adopting innovation, not waiting for it.",
    },
    {
      title: "Our Vision",
      desc: "To become a global leader in digital design and software development—known for creating intuitive products and delivering exceptional value to clients around the world.",
    },
    {
      title: "Quality Management",
      desc: "We follow a strict, quality-driven development process. Every product is built with precision, tested for reliability, and aligned with industry standards to ensure top-tier performance, security, and long-term stability.",
    },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -620,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 620,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar />

      <div className="w-full">
        {/* hero section */}
        <section
          id="home"
          className="relative bg-white overflow-hidden pt-16 md:pt-20 pb-20 md:pb-28 lg:pb-32"
        >
          <div className="containerX mx-auto">
            <div className="items-center">
              <div className="relative">
                <h3 className="text-[14px] md:text-[16px] lg:text-[20px] mb-2 md:mb-3 font-light text-[#181818]">
                  ABOUT US
                </h3>

                <h1 className="text-[32px] sm:text-[42px] md:text-[40px] lg:text-[45px] xl:text-[60px] 2xl:text-[70px] font-semibold text-[#181818] leading-[120%] md:leading-[70px] lg:leading-[80px] xl:leading-[95px]">
                  We Are{" "}
                  <span className="bg-[#1EB2BE] text-white rounded-[6px] md:rounded-[8px] inline-block leading-none px-2 py-1">
                    LIS
                  </span>{" "}
                  A Digital Design <br /> And Development Company
                </h1>

                <p className="md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#181818] my-[18px] lg:my-[25px] xl:my-[30px] leading-[26px] md:leading-[32px] lg:leading-[36px] font-normal">
                  We create digital experiences that are simple, human-centered,
                  and built for long-term success.
                </p>

                <p className="text-[15px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#181818] leading-[26px] md:leading-[30px] lg:leading-[36px] font-normal lg:w-[814px] xl:w-[1088px] 2xl:w-[1338px]">
                  LIS is a{" "}
                  <b>
                    UI/UX design, mobile app development, and custom software
                    development company
                  </b>{" "}
                  helping brands transform ideas into high-value digital
                  products. Our expert team of designers, developers, and
                  strategists works with a shared mission - to build solutions
                  that are meaningful, intuitive, and engineered for scale. From
                  user-centered interfaces to modern web and mobile
                  applications, we blend creativity with advanced technology to
                  help businesses innovate, automate, and grow in today’s
                  fast-changing digital world.
                </p>
              </div>
            </div>

            <div className="absolute md:right-[-10%] xl:right-[-8%] 2xl:right-[-2%] bottom-[10%] md:bottom-[41%] lg:bottom-[48%] xl:bottom-[40%]">
              <img
                src={eyesGif}
                alt="Hero section animation"
                className="w-[160px] sm:w-[220px] md:w-[435px] lg:w-[475px] xl:w-[530px] h-auto object-contain"
              />
            </div>
          </div>

          <div className="absolute top-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 md:w-96 h-60 md:h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        </section>

        {/* counters */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="containerX mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 lg:gap-20 items-start text-center md:text-left">
              {/* 1 */}
              <div className="relative">
                <h3 className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[56px] font-bold text-black">
                  10+
                </h3>

                <p className="mt-3 md:mt-4 text-[14px] md:text-[16px] lg:text-[18px] text-black leading-relaxed">
                  Years of <br /> experience
                </p>

                <span className="absolute md:-bottom-14 bottom-[-40px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 flex items-center gap-2 bg-[#C7ECFA] text-black text-[12px] md:text-sm px-3 py-1 rounded">
                  Ui/Ux Design
                  <span className="w-2 h-2 bg-[#7BC9E8] rotate-45 inline-block"></span>
                </span>
              </div>

              {/* 2 */}
              <div className="relative text-center">
                <h3 className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[56px] font-bold text-black">
                  55+
                </h3>

                <p className="mt-3 md:mt-4 text-[14px] md:text-[16px] lg:text-[18px] text-black leading-relaxed">
                  Successful <br /> Projects
                </p>

                <span className="absolute md:-top-14 top-[-36px] left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#CFF3D2] text-black text-[12px] md:text-sm px-3 py-1 rounded">
                  Web Development
                  <span className="w-2 h-2 bg-[#7EDC8C] rotate-45 inline-block"></span>
                </span>

                <span className="absolute md:-bottom-16 bottom-[-40px] left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#F3D2FA] text-black text-[12px] md:text-sm px-3 py-1 rounded">
                  Web Design
                  <span className="w-2 h-2 bg-[#D78AE8] rotate-45 inline-block"></span>
                </span>
              </div>

              {/* 3 */}
              <div className="relative text-center">
                <h3 className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[56px] font-bold text-black">
                  27+
                </h3>

                <p className="mt-3 md:mt-4 text-[14px] md:text-[16px] lg:text-[18px] text-black leading-relaxed">
                  Happy <br /> Clients
                </p>

                <span className="absolute md:-top-12 top-[-32px] right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 flex items-center gap-2 bg-[#F9C5C5] text-black text-[12px] md:text-sm px-3 py-1 rounded">
                  Mobile development
                  <span className="w-2 h-2 bg-[#F28C8C] rotate-45 inline-block"></span>
                </span>
              </div>

              {/* 4 */}
              <div className="text-center md:text-right">
                <h3 className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[56px] font-bold text-black">
                  15+
                </h3>

                <p className="mt-3 md:mt-4 text-[14px] md:text-[16px] lg:text-[18px] text-black leading-relaxed">
                  Expert Developers <br /> & Designers
                </p>
              </div>
            </div>
          </div>
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

        {/* Service we provide */}
        <section className="bg-[#181818] text-white">
          {/* HERO TEXT */}
          <div
            className={`flex items-center justify-center text-center transition-all duration-700 ${
              shrink ? "py-[120px]" : "h-screen"
            }`}
          >
            <h1
              className={`font-bold transition-all duration-700 leading-[1.1]
          ${shrink ? "text-[70px]" : "text-[160px]"}`}
            >
              Make It Simple
              <br />
              But Significant
            </h1>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-[#2a2a2a]" />

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`text-center px-[40px] py-[56px] lg:px-[45px] lg:py-[65px] 2xl:px-[60px] 2xl:py-[80px] border-[#2a2a2a]
            ${index !== 2 ? "md:border-r" : ""}`}
              >
                <h3 className="text-[26px] lg:text-[30px] 2xl:text-[34px] font-semibold lg:mb-[25px] mb-[20px]">
                  {item.title}
                </h3>

                <p className="text-[#a0a0a0] text-[16px] 2xl:text-[18px] leading-[32px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Marquee */}
        <div className="my-[60px] md:my-[90px] lg:my-[110px]">
          <p className="text-center text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#181818]">
            Trusted By Industry Giants
          </p>

          <div className="mt-[30px] md:mt-[40px]">
            <Marquee speed={80} pauseOnHover gradient={false}>
              <div className="image_wrapper">
                <img src={marquee1} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee2} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee3} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee4} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee5} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee6} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee7} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee8} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee9} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee10} alt="client logo" />
              </div>

              <div className="image_wrapper">
                <img src={marquee11} alt="client logo" />
              </div>
            </Marquee>
          </div>
        </div>

        {/* CTA */}
        <section className="mt-[40px] md:mt-[60px] mb-[30px]">
          <div className="containerX mx-auto">
            <div
              className="flex lg:flex-row items-center justify-between 
                     gap-8 p-[40px] md:p-[55px] lg:[76px] xl:p-[85px]
                     2xl:p-[100px] 
                     bg-[linear-gradient(226deg,rgba(37,74,140,1)_0%,rgba(29,176,190,1)_100%)] 
                     rounded-[30px] md:rounded-[40px] relative overflow-hidden"
            >
              {/* Background Pattern */}
              <img
                className="absolute inset-0 h-full w-full object-cover opacity-10"
                alt="Background pattern"
                src={ctabggif}
              />

              {/* Text */}
              <p
                className="relative z-10 text-black 
                 text-[28px] sm:text-[36px] md:text-[29px] lg:text-[32px] xl:text-[42px] 2xl:text-[60px] 
                 font-bold 2xl:leading-[90px]"
              >
                Ready to{" "}
                <span className="text-white font-semibold italic">
                  collaborate
                </span>{" "}
                with a <br className="hidden sm:block" /> trusted, experienced
                tech team?
              </p>

              {/* Button */}
              <button
                className="relative z-10 flex items-center gap-3 
                          bg-[#ffffff21] border border-white 
                          shadow-[0px_4px_20px_#0000000d] 
                          px-[26px] py-[16px] md:px-[28px] md:py-[16px] lg:px-[30px] lg:py-[20px] 
                          rounded-[100px] hover:bg-[#ffffff31] transition">
                     <span className="text-[#0b0c10] font-normal text-[14px] lg:text-[16px] xl:text-[18px] whitespace-nowrap">
                       Start a Conversation
                     </span>
                <img src={contactbtnarrow} alt="" className="w-4 md:w-5" />
              </button>

              {/* Decorative GIF */}
              <div className="absolute md:right-[9%] md:bottom-[-16%] lg:right-[7%] lg:bottom-[-20%] xl:right-[8%] xl:bottom-[-8%] 2xl:bottom-[4%]  2xl:right-[7%] z-10 hidden md:block">
                <img
                  src={ctagif}
                  alt=""
                  className="w-[120px] md:w-[160px] lg:w-[175px] xl:w-[209px]"/>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="containerX mx-auto bg-white py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-baseline xl:items-center border-t border-gray-200">
            {/* Left Content */}
            <div className="flex flex-col justify-between border-gray-200 lg:pr-10 mb-10 lg:mb-0 mt-5 xl:mt-0">
              <div>
                <h2 className="text-[36px] md:text-[48px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-bold leading-[110%] text-[#181818]">
                  Our Core Values
                </h2>

                <p className="mt-6 md:mt-8 text-[16px] lg:text-[18px] xl:text-[21px] text-[#181818] leading-[160%] max-w-[520px]">
                  We follow principles that guide our culture, our work, and
                  every decision we make. These values help us build meaningful
                  relationships and deliver impactful digital products.
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 border-gray-200 lg:border-r lg:border-l">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 lg:p-8 xl:p-10 border-gray-200
                          ${index % 2 === 0 ? "sm:border-r" : ""}
                          ${index < 4 ? "border-b" : ""}`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-5 md:mb-6 object-contain w-10 md:w-auto"
                  />

                  <h4
                    className={`font-semibold text-[18px] md:text-[20px] lg:text-[24px] mb-2 ${
                      item.highlight ? "text-blue-600" : "text-[#181818]"
                    }`}
                  >
                    {item.title}
                  </h4>

                  <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#181818] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Feedbacks */}
        <section
          id="testimonials" className="bg-[#F5F5F5] py-14 md:py-20 lg:py-24 overflow-hidden relative">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-10"
            alt="Background pattern"
            src={ctabggif}
          />
          <div className="mx-auto">
            {/* Heading */}
            <h2 className="text-[36px] sm:text-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#1C1C1C] mb-12 md:mb-16 lg:mb-20 text-center leading-[120%]">
              Feedback from Our <br /> Customers
            </h2>
            {/* Slider Wrapper */}
            <div className="relative">
              {/* Cards Row */}
              <div
                ref={sliderRef} className="flex gap-5 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[280px] sm:min-w-[360px] md:min-w-[450px] lg:min-w-[592px] bg-[#F7F7F7] rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-10 shadow-sm"
                  >
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-4">
                        <img
                          src={profileimg}
                          alt="Profile"
                          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-normal text-[16px] md:text-[18px] text-[#1C1C1C]">
                            Harry Maguire
                          </h4>
                          <p className="text-[#18181866] text-[14px] md:text-[16px]">
                            CEO, company
                          </p>
                        </div>
                      </div>
                      <img
                        src={feedbackstars}
                        alt="rating"
                        className="w-[80px] md:w-[100px] lg:w-[110px]"
                      />
                    </div>
                    {/* Title */}
                    <h3 className="text-center font-semibold text-[16px] md:text-[18px] mt-6 md:mt-8 text-[#1C1C1C]">
                      Top-Notch Quality
                    </h3>
                    {/* Description */}
                    <p className="text-center text-[#18181866] text-[14px] md:text-[16px] lg:text-[18px] mt-3 md:mt-4 leading-relaxed">
                      UI Wiki transformed our design process! The templates are
                      modern, user-friendly, and saved us countless hours
                    </p>
                    {/* Bottom */}
                    <div className="flex justify-between items-center mt-6 md:mt-8 lg:mt-10">
                      <img src={feedbackicon} alt="logo" />
                      <p className="text-[14px] md:text-[16px] text-[#181818] font-semibold">
                        21.05.2024
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex justify-center items-center gap-4 md:gap-6 mt-10 md:mt-14">
                <button
                  onClick={scrollLeft}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300"
                >
                  ←
                </button>
                <button
                  onClick={scrollRight}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}

export default About;