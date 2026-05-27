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
import upworkgif from "../assets/upwork-gif.gif";
import everyanimation from "../assets/every-animation.gif";
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

export default function Home() {
  const { slug } = useParams();
  const project = data.find((item) => item.slug === slug) || data[0];

  const sectionRef = useRef(null);
  const [scale, setScale] = useState(1);

  const sliderRef = useRef(null);

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
        <section
          id="home"
          className="relative bg-white overflow-hidden pt-16 md:pt-20 pb-20 md:pb-32 lg:pb-24"
        >
          <div className="containerX mx-auto">
            <div className="items-center">
              <div className="relative">
                {/* HEADING */}

                <h1 className="text-[34px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-semibold text-[#181818] leading-[42px] sm:leading-[52px] md:leading-[80px] lg:leading-[120px] mb-[30px]">
                  <div className="border border-[#828282] rounded-full me-3 w-[177px] h-[94px] inline-flex overflow-hidden relative top-4">
                    <img
                      src={upworkgif}
                      alt="upwork"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  Custom Software & Product <br className="hidden md:block" />
                  Development - Web, Mobile & UI/UX
                </h1>

                {/* PARAGRAPH */}
                <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] text-[#181818] mb-[40px] md:mb-[60px] leading-[26px] sm:leading-[30px] md:leading-[36px] font-normal">
                  We build scalable websites, mobile applications, and software
                  solutions that transform your business vision into powerful
                  digital
                  <br className="hidden lg:block" /> products. Partner with our
                  expert team to innovate faster, deliver smarter, and grow with
                  confidence.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 px-5 py-3 bg-white border border-cyan-400 text-[#181818] text-[16px] md:text-[18px] rounded-full font-semibold hover:bg-cyan-50 transition">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 text-[#181818]" />
                  </button>

                  <a
                    href="#contact"
                    className="text-[#181818] text-[16px] md:text-[18px] font-semibold hover:text-cyan-600 transition"
                  >
                    Book a Free Consultation
                  </a>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="absolute lg:right-[-5%] right-[-10%] bottom-[55%] md:bottom-[60%] lg:bottom-[63%] w-[180px] sm:w-[240px] md:w-[300px] lg:w-auto">
              <img
                src={heroGif}
                alt="Hero section animation"
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div>

          {/* MARQUEE */}
          <div className="img-marquee">
            <div className="logos mb-[30px] md:mb-[40px] mt-[60px] md:mt-[100px]">
              {project?.gallery?.map((img, i) => (
                <div className="logo_items" key={i}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* VIEW PROJECT BUTTON */}
          <div className="flex justify-center mt-[40px] md:mt-[60px]">
            <button className="flex items-center gap-2 px-5 py-3 border border-cyan-400 text-[#181818] text-[16px] md:text-[18px] rounded-full font-semibold hover:bg-cyan-50 transition">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 text-[#181818]" />
            </button>
          </div>

          {/* BACKGROUND BLUR SHAPES */}
          {/* <div className="absolute top-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div> */}
          {/* <div className="absolute bottom-0 right-0 w-60 md:w-96 h-60 md:h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div> */}
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
                  alt="" className="w-[70px] h-[96px] object-cover"/>
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
              <div className="relative text-center top-[30px]">
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
              <div className="relative text-center top-[60px]">
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
              <div className="relative text-center top-[90px]">
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
          <div className="pl-40 mx-auto flex flex-col lg:flex-row w-full items-start mt-10">
            {/* LEFT CARD */}
            <div className="flex min-h-[300px] lg:h-[402px] items-center gap-[20px] md:gap-[30px] pr-0 lg:pr-[100px] py-[60px] md:py-[80px] lg:py-[100px] flex-1">
              <div className="inline-flex items-start gap-[20px] md:gap-[30px]">
                <div className="flex flex-col w-full md:w-[480px] lg:w-[576px] items-start gap-4 md:gap-5">
                  <h2 className="self-stretch font-semibold text-[28px] md:text-[36px] lg:text-5xl leading-[36px] md:leading-[46px] lg:leading-[58px] text-[#181818]">
                    Mobile App development
                  </h2>

                  <p className="self-stretch font-normal text-[#181818] text-[16px] md:text-[18px] lg:text-[22px] leading-[26px] md:leading-[30px] lg:leading-[33px]">
                    We design and develop high-performance Android, iOS, and
                    cross-platform apps using the latest technologies. Our apps
                    are optimized for speed, security, and seamless user
                    experiences.
                  </p>
                </div>

                <img
                  className="border border-black rounded-full py-[14px] px-[14px] md:py-[20px] md:px-[17px]"
                  alt="Carose"
                  src={cardarrow}
                />
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex min-h-[300px] lg:h-[402px] items-center gap-[20px] md:gap-[30px] pl-0 lg:pl-[100px] pr-0 lg:pr-  [200px] py-[60px] md:py-[80px] lg:py-[100px] flex-1 border-l-0 lg:border-l border-[#18181833]">
              <div className="inline-flex items-start gap-[20px] md:gap-[30px]">
                <div className="flex flex-col w-full md:w-[480px] lg:w-[576px] items-start gap-4 md:gap-5">
                  <h2 className="self-stretch font-semibold text-[28px] md:text-[36px] lg:text-5xl leading-[36px] md:leading-[46px] lg:leading-[58px] text-[#181818]">
                    Business Services & Consulting
                  </h2>

                  <p className="self-stretch font-normal text-[#181818] text-[16px] md:text-[18px] lg:text-[22px] leading-[26px] md:leading-[30px] lg:leading-[33px]">
                    We help companies identify growth opportunities, improve
                    workflows, automate operations, and build digital solutions
                    that support long-term scalability and success.
                  </p>
                </div>

                <img
                  className="border border-black rounded-full py-[14px] px-[14px] md:py-[20px] md:px-[17px]"
                  alt="Carose"
                  src={cardarrow}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-[#18181833]">
          <div className="pl-40 mx-auto flex w-full items-start">
            <div className="flex h-[402px] items-center gap-[30px] pr-[100px] py-[100px] flex-1">
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

            <div className="flex h-[402px] items-center gap-[30px] pl-[100px] pr-[200px] py-[100px] flex-1 border-l border-[#18181833]">
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
        {/* <div className="bg-[#181818] text-white">
          <div className="px-[40px]">
            <div className="py-[100px] space-y-[120px]">
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
            </div>
          </div>
        </div> */}

        <div className="Discover_section">
          <div className="Discover_items text-white">
            <div className="Discover_content">
              <span className="text-[40px]">[ 1 ]</span>
              <h2 className="text-[158px] font-semibold leading-none">
                Discover
              </h2>
              <p className="max-w-[591px] text-[22px]">
                We analyze your business challenges, goals, and audience to
                define the best technological approach.
              </p>
            </div>
            <div className="Discover_img">
              <img src={discover} alt="" />
            </div>
          </div>

          <div className="leftDiscover_items text-white">
            <div className="leftDiscover_img">
              <img src={discover} alt="" />
            </div>

            <div className="Discover_content">
              <span className="text-[40px]">[ 2 ]</span>
              <h2 className="text-[158px] font-semibold leading-none">
                Design
              </h2>
              <p className="max-w-[591px] text-[22px]">
                Our UI/UX team creates modern, intuitive, and user-centric
                designs that elevate user experience across devices.
              </p>
            </div>
          </div>

          <div className="Discover_items text-white">
            <div className="Discover_content">
              <span className="text-[40px]">[ 3 ]</span>
              <h2 className="text-[158px] font-semibold leading-none">Build</h2>
              <p className="max-w-[591px] text-[22px]">
                We develop secure, scalable, and future-ready digital products
                using clean code and industry best practices.
              </p>
            </div>
            <div className="Discover_img">
              <img src={discover} alt="" />
            </div>
          </div>

          <div className="leftDiscover_items text-white">
            <div className="leftDiscover_img">
              <img src={discover} alt="" />
            </div>

            <div className="Discover_content">
              <p className="max-w-[591px] text-[22px]">
                Your product is thoroughly tested and deployed with complete
                support for maintenance and future updates.
              </p>
              <h2 className="text-[158px] font-semibold leading-none">
                Deliver
              </h2>
              <span className="text-[40px]">[ 4 ]</span>
            </div>
          </div>
        </div>

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

        {/* CTA */}
        <section className="mt-[40px] md:mt-[60px] mb-[80px] md:mb-[120px] lg:mb-[140px]">
          <div className="containerX mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-0 p-[30px] sm:p-[50px] md:p-[70px] lg:p-[100px] bg-[linear-gradient(226deg,rgba(37,74,140,1)_0%,rgba(29,176,190,1)_100%)] rounded-[25px] md:rounded-[30px] lg:rounded-[40px] relative overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover opacity-[5%]"
                alt="Background pattern"
                src={ctabggif}
              />

              <p className="relative z-10 text-black text-[36px] sm:text-[48px] md:text-[64px] lg:text-[95px] leading-[120%] font-bold">
                We work with <br />
                brands in{" "}
                <span className="text-white font-semibold italic">Tech.</span>
              </p>

              <button className="relative z-10 flex items-center gap-2.5 bg-[#ffffff21] border border-solid border-[#ffffff] shadow-[0px_4px_20px_#0000000d] px-[24px] py-[14px] sm:px-[30px] sm:py-[18px] md:px-[35px] md:py-[22px] lg:px-[40px] lg:py-[26px] rounded-[100px] hover:bg-[#ffffff31] transition">
                <span className="text-[#0b0c10] font-normal text-[14px] sm:text-[16px] md:text-[18px] text-center leading-6 whitespace-nowrap">
                  Contact Us
                </span>
                <img src={contactbtnarrow} alt="" />
              </button>

              <div className="absolute right-[3%] bottom-[10%] md:right-[2%] md:bottom-[12%] lg:right-[5%] lg:bottom-[10%] z-10">
                <img
                  src={ctagif}
                  alt=""
                  className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[190px] md:h-[190px] lg:w-[209px] lg:h-[209px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="relative w-full bg-[#181818] py-12 md:py-16 lg:py-20 overflow-hidden  ">
          <div className="relative">
            <h2 className="font-bold text-white text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px] text-center tracking-[1.2px] md:tracking-[1.4px] lg:tracking-[1.60px] leading-[120%] mb-12 md:mb-16 lg:mb-20">
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
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-[4%]"
            alt="Background pattern"
            src={ctabggif}
          />

          <div className="mx-auto">
            {/* Heading */}
            <h2 className="text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-bold text-[#1C1C1C] mb-12 md:mb-16 lg:mb-20 text-center leading-[120%]">
              Feedback from Our <br /> Customers
            </h2>

            {/* Slider Wrapper */}
            <div className="relative">
              {/* Cards Row */}
              <div ref={sliderRef} className="flex gap-5 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[280px] sm:min-w-[360px] md:min-w-[450px] lg:min-w-[592px] bg-[#F7F7F7] rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-10 shadow-sm">
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-4">
                        <img
                          src={profileimg}
                          alt="Profile"
                          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover"/>

                        <div>
                          <h4 className="font-normal text-[16px] md:text-[18px] text-[#1C1C1C]">
                            Harry Maguire
                          </h4>

                          <p className="text-[#18181866] text-[14px] md:text-[16px]">CEO, company</p>
                        </div>
                      </div>

                      <img src={feedbackstars} alt="rating" className="w-[80px] md:w-[100px] lg:w-[110px]"/>

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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}