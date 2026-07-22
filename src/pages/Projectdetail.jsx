import React from "react";
import Navbar from "./Navbar";
import heroImg from "../assets/portfolio-detailimg.png";
import figmalink from "../assets/figma-link.png";
import visitlinkicon from "../assets/visit-linkicon.svg";
import uniqlearn from "../assets/uniqlearn/uniqlearn-heroimg.png";
import starimg from "../assets/star-listimg.svg";
import Footer from "./Footer";
import CTA from "./CTA";

const navigationButtons = [
  {
    label: "View Figma",
    variant: "outline",
    iconType: "image",
    icon: figmalink,
    gradient:
      "linear-gradient(180deg, rgba(37,74,140,1) 0%, rgba(29,176,190,1) 100%)",
    textColor: "text-[#0b0c10]",
    bgColor: "bg-[#ffffff]",
  },
  {
    label: "Visit Website",
    variant: "default",
    iconType: "image",
    icon: visitlinkicon,
    gradient:
      "linear-gradient(180deg, rgba(37,74,140,1) 0%, rgba(29,176,190,1) 100%)",
    textColor: "text-[#ffffff]",
    bgColor: "bg-gradient-to-b from-[#254a8c] to-[#1db0be]",
  },
];


function Projectdetail() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="containerX mx-auto mt-[90px] mb-[200px]">
        <div className="relative">
          <div className="mt-[100px]">
            <h1 className="text-[42px] lg:text-[90px] font-bold leading-[130px] midxl:!text-[70px] midxl:!leading-[90px]">
              UniqLearn – AI- <br />
              Powered E-Learning <br />& LMS Platform
            </h1>

            <div className="flex items-center gap-4 mt-8">
              {navigationButtons.map((button) => {
                const isOutline = button.variant === "outline";
                const isImageIcon = button.iconType === "image";

                if (isOutline) {
                  return (
                    <button
                      key={button.label}
                      className="relative w-[151px] shadow-[0px_0px_20px_#0000001a] rounded-full p-[1px] hover:opacity-90 transition"
                      style={{ background: button.gradient }}>
                      <div className="bg-white rounded-full flex items-center gap-[10px] px-[15px] py-[14px]">
                        <span className="text-[#0b0c10] text-lg">
                          {button.label}
                        </span>
                        <img
                          src={button.icon}
                          alt={button.label}
                          className=""
                        />
                      </div>
                    </button>
                  );
                }

                return (
                  <button
                    key={button.label}
                    className="w-[151px] flex items-center gap-2 px-[10px] py-[14px]      rounded-full bg-gradient-to-b from-[#254A8C] to-[#1DB0BE] shadow-[0px_0px_20px_#0000001a]">
                    <span className="text-white text-lg">{button.label}</span>
                    <img src={button.icon} alt={button.label} className="" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute top-[0] right-[-12%]">
            <img src={heroImg} alt="UniqLearn Dashboard" className="" />
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section className="containerX mx-auto">
        <div className="mt-[200px]">
          <p className="text-[40px] font-semibold">
            Introducing UniqLearn, an advanced AI-driven E-Learning Platform
            (LMS) designed to enhance student engagement, simplify assignment
            management, and streamline academic communication. With an intuitive
            dashboard and powerful analytics system, UniqLearn helps teachers,
            students, and administrators manage tasks efficiently while
            improving overall learning productivity. Equipped with AI-based
            insights, performance tracking, gamification features, automated
            workflows, and role-based dashboards, the platform ensures smart
            decision-making and personalized learning experiences.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="containerX mx-auto">
        <div className="mt-[120px] mb-[92px]">
          <img src={uniqlearn} alt="" />
        </div>
        <div className="mb-[80px]">
          <p className="text-[40px] font-semibold">Our Challenge</p>
          <p className="my-[30px] text-[20px]">
            Designing UniqLearn required overcoming several UI/UX and structural
            challenges to ensure a smooth user experience for Students,
            Teachers, and Admins. Our main challenges included:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-24">
            <div className="space-y-6">
              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Lack of a unified and consistent brand identity
                </p>
              </div>

              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Multiple complex user flows across three different user types
                </p>
              </div>

              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Integrating gamification without affecting usability
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Unstructured information architecture
                </p>
              </div>

              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Responsive inconsistencies across screen sizes
                </p>
              </div>

              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Need for an intuitive dashboard with clear navigation
                </p>
              </div>              
            </div>            
          </div>

          {/* Divider */}
          <div className="mt-[30px] border-t border-[#1a1a1a]" />
          </div>

        <div className="mb-[80px]">
          <p className="text-[40px] font-semibold">Solution & Result</p>
          <p className="my-[30px] text-[20px]">
            With a user-first approach and modern design principles, we
            transformed UniqLearn into a clean, efficient, and highly engaging
            LMS platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-24">
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Developed a fresh, professional, and consistent brand identity
                </p>
              </div>

              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Built intuitive, role-specific interfaces for students,
                  teachers, and admins
                </p>
              </div>

              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Seamlessly integrated gamification elements to boost
                  engagement
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Reorganized content into a clear information hierarchy
                </p>
              </div>

              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Designed fully responsive UI layouts for all screen sizes
                </p>
              </div>

              <div className="flex gap-4">
                <img src={starimg} alt="" className="mt-1" />
                <p className="text-[20px] font-bold text-[#111]">
                  Improved accessibility to ensure smooth navigation and
                  usability
                </p>
              </div>

            </div>

          </div>

          <p className="my-[30px] text-[20px]">
            A modern, intelligent, and user-friendly learning management system
            that improves student motivation, supports teachers, and enhances
            overall academic productivity—while establishing a strong visual
            brand presence.
          </p>

          {/* Divider */}
          <div className="mt-[30px] border-t border-[#1a1a1a]" />
        </div>

        <p className="text-[40px] mb-[30px]">Service</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Column 1 */}
          <div>
            <h3 className="text-[24px] font-medium mb-6">
              Branding & Identity
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img src={starimg} alt="" />
                <p className="font-bold text-[20px]">Logo Design</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={starimg} alt="" />
                <p className="font-bold text-[20px]">Dashboard Design</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[24px] font-medium mb-6">
              Digital Product Design
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img src={starimg} alt="" />
                <p className="font-bold text-[20px]">Dashboard Design</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={starimg} alt="" />
                <p className="font-bold text-[20px]">UI/UX Design</p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[24px] font-medium mb-6">Technology</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img src={starimg} alt="" />
                <p className="font-bold text-[20px]">IT Consultation</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={starimg} alt="" />
                <p className="font-bold text-[20px]">Dashboard Design</p>
              </div>
            </div>
          </div>

        </div>
      </section>  

      {/* Marquee */}

      <CTA/>

      <Footer />
    </div>
  );
}

export default Projectdetail;
