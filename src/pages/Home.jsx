import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import ourfraturesgif from "../assets/ourfeatures-gif.gif";
import data from "../data/projects.json";
import cardarrow from "../assets/card-arrow.svg";
import strongstrategy from "../assets/strong-strategy.svg";
import pixelperfect from "../assets/pixelperfect-design.svg";
import securearchitecture from "../assets/securearchitecture.svg";
import endtoend from "../assets/endtoend.svg";
import seamless from "../assets/seamless.svg";
import relaiablesupport from "../assets/relaiablesupport.svg";
import CTA from "./CTA";
import Navbar from "./Navbar";
import psmarquee from "../assets/ps-marquee.svg";
import figmamarquee from "../assets/figma-marquee.svg";
import aimarquee from "../assets/ai-marquee.svg";
import htmlmarquee from "../assets/html-marquee.svg";
import cssmarquee from "../assets/css-marquee.svg";
import jsmarquee from "../assets/js-marquee.svg";
import angularmarquee from "../assets/angular-marquee.svg";
import reactmarquee from "../assets/react-marquee.svg";
import fluttermarquee from "../assets/flutter-marquee.svg";
import androidmarquee from "../assets/android-marquee.svg";
import iosmarquee from "../assets/ios-marquee.svg";
import wordpressmarquee from "../assets/wordpress-marquee.svg";
import laravelmarquee from "../assets/laravel-marquee.svg";
import sqlmarquee from "../assets/sql-marquee.svg";
import profileimg from "../assets/feedback-img.png";
import feedbackicon from "../assets/feedback-icon.png";
import feedbackstars from "../assets/feedback-stars.png";
import everyanimation from "../assets/every-animation.gif";
import upworkgif from "../assets/upwork-gif.gif";
import arrowblue from "../assets/arrow-blue.png";
import arrowgreen from "../assets/arrow-green.png";
import arrowred from "../assets/arrow-red.png";
import arrowpink from "../assets/arrow-pink.png";
import Footer from "./Footer";

const reviewsone = [
  {
    name: "Photoshop (Ps)",
    img: psmarquee,
    desp: "Professional image editing tool.",
  },
  {
    name: "Figma",
    img: figmamarquee,
    desp: "Collaborative UI/UX design made easy.",
  },
  {
    name: "Illustrator (Ai)",
    img: aimarquee,
    desp: "Create stunning vector graphics.",
  },
  {
    name: "HTML5",
    img: htmlmarquee,
    desp: "Build modern, responsive websites.",
  },
  { name: "CSS3", img: cssmarquee, desp: "Style and animate your web pages." },
  {
    name: "Photoshop (Ps)",
    img: psmarquee,
    desp: "Professional image editing tool.",
  },
  {
    name: "Figma",
    img: figmamarquee,
    desp: "Collaborative UI/UX design made easy.",
  },
  {
    name: "Illustrator (Ai)",
    img: aimarquee,
    desp: "Create stunning vector graphics.",
  },
  {
    name: "HTML5",
    img: htmlmarquee,
    desp: "Build modern, responsive websites.",
  },
  { name: "CSS3", img: cssmarquee, desp: "Style and animate your web pages." },
  {
    name: "Photoshop (Ps)",
    img: psmarquee,
    desp: "Professional image editing tool.",
  },
  {
    name: "Figma",
    img: figmamarquee,
    desp: "Collaborative UI/UX design made easy.",
  },
  {
    name: "Illustrator (Ai)",
    img: aimarquee,
    desp: "Create stunning vector graphics.",
  },
  {
    name: "HTML5",
    img: htmlmarquee,
    desp: "Build modern, responsive websites.",
  },
  { name: "CSS3", img: cssmarquee, desp: "Style and animate your web pages." },
];

const reviewstwo = [
  {
    name: "JavaScript",
    img: jsmarquee,
    desp: "Add interactivity to your site.",
  },
  {
    name: "Angular",
    img: angularmarquee,
    desp: "Powerful framework for web apps.",
  },
  {
    name: "React",
    img: reactmarquee,
    desp: "Fast, flexible UI library by Meta.",
  },
  {
    name: "Flutter",
    img: fluttermarquee,
    desp: "Cross-platform mobile app toolkit.",
  },
  {
    name: "JavaScript",
    img: jsmarquee,
    desp: "Add interactivity to your site.",
  },
  {
    name: "Angular",
    img: angularmarquee,
    desp: "Powerful framework for web apps.",
  },
  {
    name: "React",
    img: reactmarquee,
    desp: "Fast, flexible UI library by Meta.",
  },
  {
    name: "Flutter",
    img: fluttermarquee,
    desp: "Cross-platform mobile app toolkit.",
  },
  {
    name: "JavaScript",
    img: jsmarquee,
    desp: "Add interactivity to your site.",
  },
  {
    name: "Angular",
    img: angularmarquee,
    desp: "Powerful framework for web apps.",
  },
  {
    name: "React",
    img: reactmarquee,
    desp: "Fast, flexible UI library by Meta.",
  },
  {
    name: "Flutter",
    img: fluttermarquee,
    desp: "Cross-platform mobile app toolkit.",
  },
  {
    name: "JavaScript",
    img: jsmarquee,
    desp: "Add interactivity to your site.",
  },
  {
    name: "Angular",
    img: angularmarquee,
    desp: "Powerful framework for web apps.",
  },
  {
    name: "React",
    img: reactmarquee,
    desp: "Fast, flexible UI library by Meta.",
  },
  {
    name: "Flutter",
    img: fluttermarquee,
    desp: "Cross-platform mobile app toolkit.",
  },
  {
    name: "JavaScript",
    img: jsmarquee,
    desp: "Add interactivity to your site.",
  },
  {
    name: "Angular",
    img: angularmarquee,
    desp: "Powerful framework for web apps.",
  },
  {
    name: "React",
    img: reactmarquee,
    desp: "Fast, flexible UI library by Meta.",
  },
  {
    name: "Flutter",
    img: fluttermarquee,
    desp: "Cross-platform mobile app toolkit.",
  },
  {
    name: "JavaScript",
    img: jsmarquee,
    desp: "Add interactivity to your site.",
  },
  {
    name: "Angular",
    img: angularmarquee,
    desp: "Powerful framework for web apps.",
  },
  {
    name: "React",
    img: reactmarquee,
    desp: "Fast, flexible UI library by Meta.",
  },
  {
    name: "Flutter",
    img: fluttermarquee,
    desp: "Cross-platform mobile app toolkit.",
  },
  {
    name: "JavaScript",
    img: jsmarquee,
    desp: "Add interactivity to your site.",
  },
  {
    name: "Angular",
    img: angularmarquee,
    desp: "Powerful framework for web apps.",
  },
  {
    name: "React",
    img: reactmarquee,
    desp: "Fast, flexible UI library by Meta.",
  },
  {
    name: "Flutter",
    img: fluttermarquee,
    desp: "Cross-platform mobile app toolkit.",
  },
  {
    name: "JavaScript",
    img: jsmarquee,
    desp: "Add interactivity to your site.",
  },
  {
    name: "Angular",
    img: angularmarquee,
    desp: "Powerful framework for web apps.",
  },
  {
    name: "React",
    img: reactmarquee,
    desp: "Fast, flexible UI library by Meta.",
  },
  {
    name: "Flutter",
    img: fluttermarquee,
    desp: "Cross-platform mobile app toolkit.",
  },
];

const reviewsthree = [
  {
    name: "Android",
    img: androidmarquee,
    desp: "Develop native Android applications.",
  },
  {
    name: "iOS (Apple)",
    img: iosmarquee,
    desp: "Build elegant iOS mobile apps.",
  },
  {
    name: "WordPress",
    img: wordpressmarquee,
    desp: "Create dynamic, content-driven sites.",
  },
  {
    name: "Laravel",
    img: laravelmarquee,
    desp: "Modern PHP framework for web apps.",
  },
  {
    name: "MySQL",
    img: sqlmarquee,
    desp: "Reliable relational database system.",
  },
  {
    name: "Android",
    img: androidmarquee,
    desp: "Develop native Android applications.",
  },
  {
    name: "iOS (Apple)",
    img: iosmarquee,
    desp: "Build elegant iOS mobile apps.",
  },
  {
    name: "WordPress",
    img: wordpressmarquee,
    desp: "Create dynamic, content-driven sites.",
  },
  {
    name: "Laravel",
    img: laravelmarquee,
    desp: "Modern PHP framework for web apps.",
  },
  {
    name: "MySQL",
    img: sqlmarquee,
    desp: "Reliable relational database system.",
  },
];

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

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We analyze your business challenges, goals, and audience to define the best technological approach.",
    imageIndex: 0,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our UI/UX team creates modern, intuitive, and user-centric designs that elevate user experience across devices.",
    imageIndex: 2,
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop secure, scalable, and future-ready digital products using clean code and industry best practices.",
    imageIndex: 5,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Your product is thoroughly tested and deployed with complete support for maintenance and future updates.",
    imageIndex: 8,
  },
];

const heroSlides = [
  {
    image: "/slider/slider-img1.png",
    label: "UI UX Design",
    bg: "linear-gradient(145deg, #EDE7F6 0%, #F3EEFF 50%, #E8E0F5 100%)",
    stackTone: "#F5E6C8",
    border: "#FF5C35",
  },
  {
    image: "/slider/slider-img3.png",
    label: "Web Development",
    bg: "linear-gradient(145deg, #E3F2FD 0%, #E8F5E9 50%, #E0F7FA 100%)",
    stackTone: "#FFE0D6",
    border: "#2a9df4",
  },
  {
    image: "/slider/slider-img5.png",
    label: "Mobile Apps",
    bg: "linear-gradient(145deg, #FFF3E0 0%, #FCE4EC 50%, #F3E5F5 100%)",
    stackTone: "#D4E8F7",
    border: "#68BD99",
  },
  {
    image: "/slider/slider-img7.png",
    label: "Product Design",
    bg: "linear-gradient(145deg, #E8EAF6 0%, #FCE4EC 50%, #FFF8E1 100%)",
    stackTone: "#E8D5F5",
    border: "#7C4DFF",
  },
];

export default function Home() {
  const { slug } = useParams();
  const project = data.find((item) => item.slug === slug) || data[0];

  const processRef = useRef(null);
  const [activeProcess, setActiveProcess] = useState(0);
  const [heroCardIndex, setHeroCardIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const heroTimerRef = useRef(null);

  const sliderRef = useRef(null);

  useEffect(() => {
    if (heroPaused) return;
    heroTimerRef.current = setInterval(() => {
      setHeroCardIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(heroTimerRef.current);
  }, [heroPaused]);

  useEffect(() => {
    const handleScroll = () => {
      if (!processRef.current) return;

      const rect = processRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Leave one extra viewport as an end buffer so the last slide
        // becomes active well before the sticky card releases
        const scrollableDistance = Math.max(rect.height - windowHeight * 2, 1);
        const progress = Math.min(
          Math.max(-rect.top / scrollableDistance, 0),
          1,
        );
        // +1 slide for the "Our process" intro card
        const totalSlides = processSteps.length + 1;
        setActiveProcess(
          Math.min(Math.floor(progress * totalSlides), totalSlides - 1),
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector("[data-feedback-card]");
      const amount = card ? card.offsetWidth + 24 : 480;
      sliderRef.current.scrollBy({
        left: -amount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector("[data-feedback-card]");
      const amount = card ? card.offsetWidth + 24 : 480;
      sliderRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  const goToHeroSlide = (index) => {
    setHeroCardIndex(index);
  };

  const getHeroStackPos = (index) => {
    const len = heroSlides.length;
    return (index - heroCardIndex + len) % len;
  };

  return (
    <div>
      <Navbar />

      <div className="w-full">
        <section
          id="home"
          className="relative overflow-hidden midxl:!pt-[200px] md:pt-[250px] pb-16 md:pb-24"
          style={{
            backgroundColor: "#FAFAFA",
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        >
          {/* Soft filled grid cells */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage: `
                linear-gradient(#ececef 56px, transparent 56px),
                linear-gradient(90deg, #ececef 56px, transparent 56px)
              `,
              backgroundSize: "112px 112px",
              backgroundPosition: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
            }}
          />

          <div className="containerX mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10 xl:gap-16">
              {/* LEFT CONTENT */}
              <div className="w-full lg:w-[52%] xl:w-[66%]">
                {/* <div className="inline-flex items-center gap-2 rounded-full bg-[#FF5C35]/10 px-3.5 py-1.5 mb-6 md:mb-8">
                  <Star className="w-3.5 h-3.5 fill-[#FF5C35] text-[#FF5C35]" />
                  <span className="text-[#FF5C35] text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase">
                    100% Trusted Platform
                  </span>
                </div> */}

                <h1 className="text-[36px] midxl:!text-[48px] sm:text-[44px] md:text-[56px] xl:text-[54px] font-bold text-[#1A1A1A] leading-[1.45] tracking-[-0.02em] mb-5 md:mb-7">
                  <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-2">
                    Custom Software & Product
                    <span className="inline-flex w-[88px] sm:w-[110px] md:w-[140px] h-[40px] sm:h-[48px] md:h-[58px] rounded-full overflow-hidden border border-[#E5E5E5] shadow-sm shrink-0 align-middle">
                      <img
                        src={upworkgif}
                        alt="upwork"
                        className="w-full h-full object-cover"
                      />
                    </span>
                  </span>
                  <br />
                  Development - Web, Mobile {" "}
                  <span className="text-[#1db0be]">& UI/UX</span>
                </h1>

                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#6B6B6B] max-w-[540px] leading-[1.7] mb-8 md:mb-10">
                  We build scalable websites, mobile applications, and software solutions that transform your business vision into powerful digital products. Partner with our expert team to innovate faster, deliver smarter, and grow with confidence.
                </p>

                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-4 pl-6 pr-2 py-2 bg-white border border-[#E0E0E0] rounded-full text-[#1A1A1A] text-[15px] md:text-[16px] font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-[#1db0be]/40 hover:shadow-[0_8px_24px_rgba(255,92,53,0.12)] transition-all duration-300"
                >
                  <span>Start Your Project</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1db0be] text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-12">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </span>
                </Link>
              </div>

              {/* RIGHT — STACKED IMAGE SLIDER */}
              <div className="w-full lg:w-[48%] xl:w-[34%] flex justify-center lg:justify-end">
                <div
                  className="hero-card-stack relative w-full max-w-[340px] sm:max-w-[400px] aspect-[3/4] mt-4 lg:mt-0 mb-12"
                  onMouseEnter={() => setHeroPaused(true)}
                  onMouseLeave={() => setHeroPaused(false)}
                >
                  {heroSlides.map((slide, index) => {
                    const pos = getHeroStackPos(index);
                    const isVisible = pos < 3;
                    const isFront = pos === 0;

                    return (
                      <div
                        key={slide.image}
                        className="hero-deck-card absolute left-0 right-0 mx-auto rounded-[28px] overflow-hidden flex flex-col"
                        style={{
                          top: 0,
                          bottom: 0,
                          width: `${100 - pos * 4}%`,
                          zIndex: isVisible ? 30 - pos : 0,
                          opacity: isVisible ? 1 : 0,
                          pointerEvents: isFront ? "auto" : "none",
                          background: isFront ? slide.bg : slide.stackTone,
                          border: isFront
                            ? "1px solid rgba(45,30,75,0.08)"
                            : `2px solid ${slide.border}`,
                          transform: isVisible
                            ? `translateY(${-pos * 16}px) scale(${1 - pos * 0.02})`
                            : "translateY(48px) scale(0.88)",
                          boxShadow: isFront
                            ? "0 20px 50px rgba(45,30,75,0.22)"
                            : "0 8px 24px rgba(45,30,75,0.1)",
                        }}
                      >
                        {isFront ? (
                          <>
                            <div className="relative flex-1 min-h-0 p-4 pb-3">
                              <div className="hero-slide-img-wrap h-full w-full rounded-[20px] overflow-hidden bg-white/40">
                                <img
                                  src={slide.image}
                                  alt={slide.label}
                                  className="w-full h-full object-cover"
                                  draggable={false}
                                />
                              </div>
                            </div>
                            <div className="bg-[#1db0be] px-5 py-4 flex items-center gap-3 shrink-0">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#68BD99] to-[#1DB5C1] flex items-center justify-center text-white text-[11px] font-bold tracking-wide shrink-0">
                                LIS
                              </div>
                              <span
                                key={slide.label}
                                className="hero-card-label text-white text-[15px] md:text-[16px] font-medium tracking-wide truncate"
                              >
                                {slide.label}
                              </span>
                            </div>
                          </>
                        ) : null}
                      </div>
                    );
                  })}

                  {/* Progress dots */}
                  {/* <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Show slide ${i + 1}`}
                        onClick={() => goToHeroSlide(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === heroCardIndex
                          ? "w-6 bg-[#FF5C35]"
                          : "w-2 bg-[#D0D0D0] hover:bg-[#FF5C35]/50"
                          }`}
                      />
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* MARQUEE */}
          <div className="img-marquee relative z-10">
            <div className="logos mb-[30px] md:mb-[40px] mt-[60px] md:mt-[80px]">
              {project?.gallery?.map((img, i) => (
                <div className="logo_items" key={i}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* VIEW PROJECT BUTTON */}
          <div className="flex justify-center mt-[40px] md:mt-[60px] relative z-10">
            <Link
              to="/portfolio"
              className="group bg-gradient-to-r from-[#2a9df4] to-[#2bc0e4] flex items-center gap-2 px-5 py-3 border border-cyan-400 text-[#181818] text-[16px] md:text-[18px] rounded-full font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(42,157,244,0.35)] hover:scale-[1.03]"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16 lg:py-20">
          <div className="containerX mx-auto">
            {/* HEADING */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[65px] font-semibold text-[#181818] mb-[30px] md:mb-[40px] lg:mb-[50px] leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[80px]">
              <div className="inline-flex relative top-6">
                <img
                  src={everyanimation}
                  alt=""
                  className="w-[70px] h-[96px] object-cover"
                />
                <img
                  src={everyanimation}
                  alt=""
                  className="w-[70px] h-[96px] object-cover"
                />
                <img
                  src={everyanimation}
                  alt=""
                  className="w-[70px] h-[96px] object-cover"
                />
                <img
                  src={everyanimation}
                  alt=""
                  className="w-[70px] h-[96px] object-cover"
                />
              </div>
              Every idea deserves precision. Every product deserves impact. Most
              agencies deliver code. We craft experiences. At LIS, we blend
              strategy, design, and engineering to build digital products that
              are fast, intuitive, and future-ready.
            </h2>

            <div className=" mx-auto mt-10 md:mt-16 lg:mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                {/* LEFT TEXT */}
                <div className="text-[#181818]">
                  <p className="text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[30px] max-w-[680px]">
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

            <div className=" mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div></div>
                {/* RIGHT TEXT */}
                <div className="text-[#181818] flex md:justify-end">
                  <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] max-w-[680px]">
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
        <section className="relative bg-[#f7f7f7] py-36 overflow-hidden">
          <div className="containerX">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-20 items-start text-center md:text-left">
              {/* 10+ */}
              <div className="relative text-center">
                <h3 className="text-[56px] font-bold text-black">10+</h3>
                <p className="mt-4 text-[18px] text-black leading-relaxed">
                  Years of <br /> experience
                </p>
                {/* UI/UX tag */}
                <div className="relative -bottom-20 left-20 animate-floatY">
                  <span className="bg-[#C7ECFA] text-black text-sm px-3 py-1 shadow-[0px_4px_10px_0px_#0000001A]">
                    Ui/Ux Design
                  </span>
                  <img
                    src={arrowblue}
                    alt=""
                    className="absolute right-[70px] top-[-40px]"
                  />
                </div>
              </div>

              {/* 55+ */}
              <div className="relative text-center ">
                <h3 className="text-[56px] font-bold text-black">55+</h3>
                <p className="mt-4 text-[18px] text-black leading-relaxed">
                  Successful <br /> Projects
                </p>

                {/*Web Development tag */}
                <div className="relative top-[-190px] left-20 animate-floatYReverse">
                  <span className="bg-[#BBF5AB] text-black text-sm px-3 py-1 shadow-[0px_4px_10px_0px_#0000001A]">
                    Web Development
                  </span>
                  <img
                    src={arrowgreen}
                    alt=""
                    className="absolute right-[60px] top-[-40px]"
                  />
                </div>
              </div>

              {/* 27+ */}
              <div className="relative text-center ">
                <h3 className="text-[56px] font-bold text-black">27+</h3>
                <p className="mt-4 text-[18px] text-black leading-relaxed">
                  Happy <br />
                  Clients
                </p>

                {/*Web Development tag */}
                <div className="relative left-[-200px] animate-floatY">
                  <span className="bg-[#F2CAF8] text-black text-sm px-3 py-1 shadow-[0px_4px_10px_0px_#0000001A]">
                    Web Design
                  </span>
                  <img
                    src={arrowpink}
                    alt=""
                    className="absolute left-[70px] top-[-50px]"
                  />
                </div>
              </div>

              {/* 15+ */}
              <div className="relative text-center ">
                <h3 className="text-[56px] font-bold text-black">15+</h3>
                <p className="mt-4 text-[18px] text-black leading-relaxed">
                  Expert Developers <br /> & Designers
                </p>

                {/*Web Development tag */}
                <div className="relative top-[-190px] left-[-150px] animate-floatYReverse">
                  <span className="bg-[#F8A1A1] text-black text-sm px-3 py-1 shadow-[0px_4px_10px_0px_#0000001A]">
                    Mobile development
                  </span>
                  <img
                    src={arrowred}
                    alt=""
                    className="absolute left-[50px] top-[-40px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service we provide */}
        {/* <div className="bg-[#181818]">
          <div className="containerX mx-auto">
            <div className="w-full flex py-[60px] md:py-[80px] lg:py-[100px]">
              <h1
                className="[font-family:'Segoe_UI-Bold',Helvetica] font-bold text-white 
      text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] xl:text-[220px] 
      tracking-[1px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[4.40px] 
      leading-[70px] sm:leading-[100px] md:leading-[150px] lg:leading-[190px] xl:leading-[220px]"
              >
                Services
                <br />
                We Provide
              </h1>
            </div>
          </div>
        </div> */}

        <div className="border-y border-[#18181833]">
          <div className="mx-auto flex w-full flex-col items-start px-6 sm:px-10 lg:px-16 xl:flex-row xl:pr-0 xl:pl-40 midxl:!pl-16 midxl:!pr-0">
            {/* LEFT CARD */}
            <div className="flex min-h-[300px] items-center gap-[20px] py-[60px] md:py-[80px] xl:h-[402px] xl:py-[100px] xl:pr-[100px] midxl:!h-auto midxl:!py-[80px] midxl:!pr-[40px] flex-1">
              <div className="inline-flex items-start gap-[20px] md:gap-[30px] midxl:!gap-[20px] w-full">
                <div className="flex flex-col w-full items-start gap-4 md:w-[480px] xl:w-[576px] midxl:!w-full md:gap-5">
                  <h2 className="self-stretch font-semibold text-[28px] md:text-[36px] xl:text-5xl midxl:!text-[36px] leading-[36px] md:leading-[46px] xl:leading-[58px] midxl:!leading-[46px] text-[#181818]">
                    Mobile App development
                  </h2>

                  <p className="self-stretch font-normal text-[#181818] text-[16px] md:text-[18px] xl:text-[22px] midxl:!text-[18px] leading-[26px] md:leading-[30px] xl:leading-[33px] midxl:!leading-[30px]">
                    We design and develop high-performance Android, iOS, and
                    cross-platform apps using the latest technologies. Our apps
                    are optimized for speed, security, and seamless user
                    experiences.
                  </p>
                </div>

                <Link
                  to="/services"
                  aria-label="View service details"
                  className="group border border-black rounded-full py-[14px] px-[14px] md:py-[20px] md:px-[17px] midxl:!py-[14px] midxl:!px-[14px] shrink-0 overflow-hidden transition-all duration-300 hover:bg-[#181818] hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
                >
                  <img
                    className="transition-all duration-300 group-hover:invert group-hover:-rotate-45"
                    alt="Arrow"
                    src={cardarrow}
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex min-h-[300px] items-center gap-[20px] py-[60px] md:py-[80px] xl:h-[402px] xl:py-[100px] xl:pl-[100px] xl:pr-[200px] midxl:!h-auto midxl:!py-[80px] midxl:!pl-[40px] midxl:!pr-[40px] flex-1 border-t xl:border-t-0 xl:border-l border-[#18181833]">
              <div className="inline-flex items-start gap-[20px] md:gap-[30px] midxl:!gap-[20px] w-full">
                <div className="flex flex-col w-full items-start gap-4 md:w-[480px] xl:w-[576px] midxl:!w-full md:gap-5">
                  <h2 className="self-stretch font-semibold text-[28px] md:text-[36px] xl:text-5xl midxl:!text-[36px] leading-[36px] md:leading-[46px] xl:leading-[58px] midxl:!leading-[46px] text-[#181818]">
                    Business Services & Consulting
                  </h2>

                  <p className="self-stretch font-normal text-[#181818] text-[16px] md:text-[18px] xl:text-[22px] midxl:!text-[18px] leading-[26px] md:leading-[30px] xl:leading-[33px] midxl:!leading-[30px]">
                    We help companies identify growth opportunities, improve
                    workflows, automate operations, and build digital solutions
                    that support long-term scalability and success.
                  </p>
                </div>

                <Link
                  to="/services"
                  aria-label="View service details"
                  className="group border border-black rounded-full py-[14px] px-[14px] md:py-[20px] md:px-[17px] midxl:!py-[14px] midxl:!px-[14px] shrink-0 overflow-hidden transition-all duration-300 hover:bg-[#181818] hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
                >
                  <img
                    className="transition-all duration-300 group-hover:invert group-hover:-rotate-45"
                    alt="Arrow"
                    src={cardarrow}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full flex-col items-start px-6 sm:px-10 lg:px-16 xl:flex-row xl:pr-0 xl:pl-40 midxl:!pl-16 midxl:!pr-0 border-t border-[#18181833]">
            {/* LEFT CARD */}
            <div className="flex min-h-[300px] items-center gap-[20px] py-[60px] md:py-[80px] xl:h-[402px] xl:py-[100px] xl:pr-[100px] midxl:!h-auto midxl:!py-[80px] midxl:!pr-[40px] flex-1">
              <div className="inline-flex items-start gap-[20px] md:gap-[30px] midxl:!gap-[20px] w-full">
                <div className="flex flex-col w-full items-start gap-4 md:w-[480px] xl:w-[576px] midxl:!w-full md:gap-5">
                  <h2 className="self-stretch font-semibold text-[28px] md:text-[36px] xl:text-5xl midxl:!text-[36px] leading-[36px] md:leading-[46px] xl:leading-[58px] midxl:!leading-[46px] text-[#181818]">
                    Mobile App development
                  </h2>
                  <p className="self-stretch font-normal text-[#181818] text-[16px] md:text-[18px] xl:text-[22px] midxl:!text-[18px] leading-[26px] md:leading-[30px] xl:leading-[33px] midxl:!leading-[30px]">
                    We design and develop high-performance Android, iOS, and
                    cross-platform apps using the latest technologies. Our apps
                    are optimized for speed, security, and seamless user
                    experiences.
                  </p>
                </div>
                <Link
                  to="/services"
                  aria-label="View service details"
                  className="group border border-black rounded-full py-[14px] px-[14px] md:py-[20px] md:px-[17px] midxl:!py-[14px] midxl:!px-[14px] shrink-0 overflow-hidden transition-all duration-300 hover:bg-[#181818] hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
                >
                  <img
                    className="transition-all duration-300 group-hover:invert group-hover:-rotate-45"
                    alt="Arrow"
                    src={cardarrow}
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex min-h-[300px] items-center gap-[20px] py-[60px] md:py-[80px] xl:h-[402px] xl:py-[100px] xl:pl-[100px] xl:pr-[200px] midxl:!h-auto midxl:!py-[80px] midxl:!pl-[40px] midxl:!pr-[40px] flex-1 border-t xl:border-t-0 xl:border-l border-[#18181833]">
              <div className="inline-flex items-start gap-[20px] md:gap-[30px] midxl:!gap-[20px] w-full">
                <div className="flex flex-col w-full items-start gap-4 md:w-[480px] xl:w-[576px] midxl:!w-full md:gap-5">
                  <h2 className="self-stretch font-semibold text-[28px] md:text-[36px] xl:text-5xl midxl:!text-[36px] leading-[36px] md:leading-[46px] xl:leading-[58px] midxl:!leading-[46px] text-[#181818]">
                    Business Services & Consulting
                  </h2>

                  <p className="self-stretch font-normal text-[#181818] text-[16px] md:text-[18px] xl:text-[22px] midxl:!text-[18px] leading-[26px] md:leading-[30px] xl:leading-[33px] midxl:!leading-[30px]">
                    We help companies identify growth opportunities, improve
                    workflows, automate operations, and build digital solutions
                    that support long-term scalability and success.
                  </p>
                </div>

                <Link
                  to="/services"
                  aria-label="View service details"
                  className="group border border-black rounded-full py-[14px] px-[14px] md:py-[20px] md:px-[17px] midxl:!py-[14px] midxl:!px-[14px] shrink-0 overflow-hidden transition-all duration-300 hover:bg-[#181818] hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
                >
                  <img
                    className="transition-all duration-300 group-hover:invert group-hover:-rotate-45"
                    alt="Arrow"
                    src={cardarrow}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mb-6 flex items-center justify-between text-white/70">
          <p className="text-sm font-medium uppercase tracking-[0.2em]">
            Our process
          </p>
          <p className="text-sm font-medium">0{activeProcess + 1} / 04</p>
        </div> */}

        {/* Our process */}
        <section
          ref={processRef}
          className="relative h-[500vh] pt-8">
          <div className="sticky top-[20px] flex h-screen items-center py-8">
            <div className="mx-auto w-full  overflow-hidden  border border-white/70 bg-[#111111] px-36 py-16 ">
              <div className="relative min-h-[500px] lg:min-h-[600px]">
                {/* Intro card */}
                <article
                  aria-hidden={activeProcess !== 0}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${activeProcess === 0
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-[1.6] opacity-0"
                    }`}
                >
                  <h2 className="text-center text-[clamp(3.5rem,9vw,10rem)] font-semibold leading-[0.95] text-white">
                    Our process
                  </h2>
                </article>

                {processSteps.map((step, index) => {
                  const slideIndex = index + 1;
                  const isActive = slideIndex === activeProcess;
                  const isPast = slideIndex < activeProcess;
                  const image = project?.gallery?.[step.imageIndex];

                  return (
                    <article
                      key={step.number}
                      aria-hidden={!isActive}
                      className={`absolute inset-0 grid grid-cols-1 gap-8 transition-all duration-700 ease-out lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14 ${isActive
                        ? "scale-100 opacity-100"
                        : isPast
                          ? "pointer-events-none scale-110 opacity-0"
                          : "pointer-events-none scale-90 opacity-0"
                        }`}
                    >
                      <div className="max-w-[460px] text-white">
                        <span className="inline-flex rounded-full border border-white/70 px-4 py-2 text-sm font-medium tracking-wide">
                          [ {step.number} ]
                        </span>
                        <h2 className="mt-10 text-[clamp(3.5rem,7vw,6.75rem)] font-semibold leading-[0.95]">
                          {step.title}
                        </h2>
                        <p className="mt-6 max-w-[420px] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                          {step.description}
                        </p>

                      </div>

                      <div className="relative h-[240px] overflow-hidden rounded-[22px] bg-[#f0eef5] sm:h-[320px] lg:h-[500px]">
                        {image && (
                          <img
                            src={image}
                            alt={`${step.title} project preview`}
                            className="h-full w-full object-cover object-center transition-transform duration-700"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-2" aria-label="Process progress">
                {processSteps.map((step, index) => (
                  <span
                    key={step.number}
                    className={`h-1 flex-1 rounded-full transition-colors duration-500 ${index < activeProcess ? "bg-white" : "bg-white/20"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key features */}
        <section className="containerX mx-auto bg-white py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-200">
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-between lg:border-r border-gray-200 pb-10 lg:pb-0">
              <div>
                <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-bold leading-[110%] text-[#181818]">
                  Our <br /> Key Features
                </h2>

                <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] lg:text-[22px] text-[#181818]">
                  The services we provide elevate us to the status of one of the
                  top software development companies.
                </p>
              </div>

              <div className="mt-10 md:mt-16 flex justify-center lg:justify-start">
                <img
                  src={ourfraturesgif}
                  alt="3D Shape"
                  className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[400px]"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 border-t lg:border-t-0 lg:border-r border-gray-200">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`group p-6 md:p-8 lg:p-10 border-gray-200
                 ${index % 2 === 0 ? "sm:border-r" : ""}
                 ${index < 4 ? "border-b" : ""}`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-4 md:mb-6 object-contain w-[40px] md:w-auto"
                  />

                  <h4
                    className={`font-semibold text-[20px] md:text-[22px] lg:text-[24px] mb-2 text-[#181818]
                  group-hover:text-[#254A8C]`}
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

        <CTA />

        {/* Tools */}
        <section className="relative w-full bg-[#181818] py-12 md:py-16 lg:py-20 overflow-hidden  ">
          <div className="relative">
            <h2 className="font-bold text-[#F1F2F4] text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px] text-center tracking-[1.2px] md:tracking-[1.4px] lg:tracking-[1.60px] leading-[120%] mb-12 md:mb-16 lg:mb-20">
              Tools We Use To
              <br />
              Create Your Products
            </h2>

            <div className="tools_marquee">
              {/* Row 1 */}
              <div className="overflow-hidden w-full mb-6 md:mb-8">
                <div className="marquee gap-5 md:gap-8 lg:gap-10">
                  {[...reviewsone, ...reviewsone].map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#1F1F1F] flex items-center p-4 md:p-5 gap-3 md:gap-5 rounded-lg"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="object-contain w-[32px] md:w-[40px] lg:w-auto"
                      />

                      <div>
                        <h4 className="text-white font-semibold text-[18px] md:text-[22px] lg:text-[30px]">
                          {item.name}
                        </h4>

                        <p className="text-[#828282] text-[14px] md:text-[16px] lg:text-[20px] mt-1 md:mt-2">
                          {item.desp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="overflow-hidden w-full">
                <div className="marquee reverse gap-5 md:gap-8 lg:gap-10">
                  {[...reviewstwo, ...reviewstwo].map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#1F1F1F] flex items-center p-4 md:p-5 gap-3 md:gap-5 rounded-lg"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="object-contain w-[32px] md:w-[40px] lg:w-auto"
                      />

                      <div>
                        <h4 className="text-white font-semibold text-[18px] md:text-[22px] lg:text-[30px]">
                          {item.name}
                        </h4>

                        <p className="text-[#828282] text-[14px] md:text-[16px] lg:text-[20px] mt-1 md:mt-2">
                          {item.desp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3 */}
              <div className="overflow-hidden w-full mt-6 md:mt-8">
                <div className="marquee gap-5 md:gap-8 lg:gap-10">
                  {[...reviewsthree, ...reviewsthree].map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#1F1F1F] flex items-center p-4 md:p-5 gap-3 md:gap-5 rounded-lg"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="object-contain w-[32px] md:w-[40px] lg:w-auto"
                      />

                      <div>
                        <h4 className="text-white font-semibold text-[18px] md:text-[22px] lg:text-[30px]">
                          {item.name}
                        </h4>

                        <p className="text-[#828282] text-[14px] md:text-[16px] lg:text-[20px] mt-1 md:mt-2">
                          {item.desp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedbacks */}
        <section
          id="testimonials"
          className="bg-[#F5F5F5] py-14 md:py-20 lg:py-24 overflow-hidden relative"
        >
          <div className="mx-auto">
            {/* Heading */}
            <h2 className="containerX mx-auto text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-bold text-[#1C1C1C] mb-12 md:mb-16 lg:mb-20 text-center leading-[120%]">
              Feedback from Our <br /> Customers
            </h2>

            {/* Slider Wrapper */}
            <div className="relative">
              {/* Cards Row */}
              <div
                ref={sliderRef}
                className="flex gap-5 md:gap-6 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-[16px] sm:px-[24px] md:px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[200px] mt-10"
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div
                    key={index}
                    data-feedback-card
                    className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[500px] bg-white rounded-[20px] md:rounded-[28px] p-5 sm:p-6 md:p-8 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#ECECEC]"
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 md:gap-4 min-w-0">
                        <img
                          src={profileimg}
                          alt="Profile"
                          className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="font-semibold text-[15px] md:text-[17px] lg:text-[18px] text-[#1C1C1C] truncate">
                            Harry Maguire
                          </h4>
                          <p className="text-[#18181866] text-[13px] md:text-[15px] truncate">
                            CEO, company
                          </p>
                        </div>
                      </div>
                      <img
                        src={feedbackstars}
                        alt="rating"
                        className="w-[72px] md:w-[90px] lg:w-[100px] shrink-0 mt-1"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-center font-semibold text-[16px] md:text-[18px] mt-6 md:mt-8 text-[#1C1C1C]">
                      Top-Notch Quality
                    </h3>

                    {/* Description */}
                    <p className="text-center text-[#18181899] text-[14px] md:text-[15px] lg:text-[16px] mt-3 md:mt-4 leading-[160%] flex-1">
                      UI Wiki transformed our design process! The templates are
                      modern, user-friendly, and saved us countless hours
                    </p>

                    {/* Bottom */}
                    <div className="flex justify-between items-center mt-6 md:mt-8 pt-2">
                      <img
                        src={feedbackicon}
                        alt="logo"
                        className="w-8 h-8 md:w-9 md:h-9 object-contain"
                      />
                      <p className="text-[13px] md:text-[15px] text-[#181818] font-semibold">
                        21.05.2024
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex justify-center items-center gap-4 md:gap-5 mt-10 md:mt-14">
                <button
                  onClick={scrollLeft}
                  aria-label="Previous feedback"
                  className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#D0D0D0] bg-transparent text-[#1C1C1C] hover:bg-white hover:border-[#1C1C1C] transition duration-300"
                >
                  ←
                </button>

                <button
                  onClick={scrollRight}
                  aria-label="Next feedback"
                  className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#D0D0D0] bg-transparent text-[#1C1C1C] hover:bg-white hover:border-[#1C1C1C] transition duration-300"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
