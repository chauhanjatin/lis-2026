import React from "react";
import Navbar from "./Navbar";
import contactusgif from "../assets/contactus-gif.gif";
import contactemail from "../assets/contactemail-img.svg";
import contactlocation from "../assets/contactlocation-img.svg";
import Footer from "./Footer";

function Contactus() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-20 pb-32">
        <div className="containerX mx-auto">
          <div className="items-center">
            <div className="relative ">
              <h3 className="text-[20px] mb-3 font-light text-[#181818]">
                CONTACT US
              </h3>
              <h1 className="text-[45px] lg:text-[50px] xl:text-[70px] font-semibold text-[#181818] leading-[80px] lg:leading-[90px] xl:leading-[105px]">
                Tell Us{" "}
                <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block leading-none p-3">
                  About
                </span>{" "}
                Your <br /> Projects
              </h1>
              <p className="text-[16px] lg:text-[17px] xl:text-[24px] text-[#181818] my-[20px] xl:my-[30px] leading-[36px] font-normal w-[650px] xl:w-[845px] 2xl:w-[1011px]">
                Have an idea in mind? Let’s bring it to life. Whether you need
                <b>
                  UI/UX design, website development, mobile apps, or complete
                  end-to-end digital product solutions,
                </b>{" "}
                our team is here to help. Share your project details using the
                form, and we’ll get back to you shortly with the next steps.
              </p>
            </div>
          </div>

          <div
            className="relative 
    sm:relative md:absolute 
    right-[5%] xl:right-[4%] 2xl:right-[6%] 
    mt-10 md:mt-0 
    bottom-[40%] xl:bottom-[40%] 2xl:bottom-[25%] 
    flex justify-center md:block xl:"
          >
            <img
              src={contactusgif}
              alt="Hero section animation"
              className="w-[200px] md:w-[250px] lg:w-[275px] xl:w-[350px] 
        2xl:w-[435px] h-auto object-contain"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/*  */}
      <section className="containerX mx-auto">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-start">
            <div className="flex gap-[70px] xl:gap-[80px]">
              {/* Email */}
              <div className="flex flex-col items-start">
                <div className="py-[26px] px-[21px] xl:py-[30px] xl:px-[25px] 2xl:py-[32px] 2xl:px-[27px] rounded-full border border-[#D1D1D1] flex items-center justify-center mb-5">
                  <img src={contactemail} alt="" />
                </div>
                <h4 className="text-[25px] xl:text-[28px] 2xl:text-[30px] font-semibold mb-3 2xl:mb-5">
                  Email
                </h4>
                <p className="text-[14px] xl:text-[16px] 2xl:text-[20px]">
                  info@libertyinfoscience.com
                </p>
                <p className="text-[16px] xl:text-[20px] mt-3">
                  +91 70963 64801
                </p>
              </div>

              {/* Location */}
              <div className="flex flex-col items-start">
                <div className="py-[21px] px-[23px] xl:py-[25px] xl:px-[27px] 2xl:py-[27px] 2xl:px-[29px] rounded-full border border-[#D1D1D1] flex items-center justify-center mb-4">
                  <img src={contactlocation} alt="" />
                </div>
                <h4 className="text-[25px] xl:text-[28px] 2xl:text-[30px] font-semibold mb-3 2xl:mb-5">
                  Location
                </h4>
                <p className="text-[14px] xl:text-[16px] 2xl:text-[20px]">
                  424, Sumerru Business Corner , B/H <br /> Rajhans Multiplex ,
                  Pal Gam, Surat, <br /> Gujarat, India.
                </p>
              </div>
            </div>

            <form className="space-y-8 xl:space-y-9 2xl:space-y-10 mb-[120px]">
              {/* Name */}
              <input
                type="text"
                placeholder="What’s your name?"
                className="w-full border border-[#D1D1D1] rounded-lg px-5 py-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] outline-none"
              />

              {/* Email & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="What’s your email?"
                  className="w-full border border-[#D1D1D1] rounded-lg px-5 py-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] outline-none"
                />

                <input
                  type="tel"
                  placeholder="What’s your mobile number?"
                  className="w-full border border-[#D1D1D1] rounded-lg px-5 py-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] outline-none"
                />
              </div>

              {/* Message */}
              <textarea
                rows="3"
                placeholder="How we can help?"
                className="w-full border border-[#D1D1D1] rounded-lg px-5 py-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] outline-none resize-none"
              />

              {/* Button */}

              <a className="thames_btns m-0" href="#">
                <p>
                  <span>Send Request</span>
                </p>
              </a>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contactus;
