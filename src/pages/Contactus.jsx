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
        <div className="container mx-auto">
          <div className="items-center">
            <div className="relative ">
              <h3 className="text-[20px] mb-3 font-light text-[#181818]">
                CONTACT US
              </h3>
              <h1 className="text-5xl md:text-[70px] font-semibold text-[#181818] leading-[105px]">
                Tell Us{" "}
                <span className="bg-[#1EB2BE] text-white rounded-[8px] inline-block leading-none p-3">
                  About
                </span>{" "}
                Your <br /> Projects
              </h1>
              <p className="text-[24px] text-[#181818] my-[30px] leading-[36px] font-normal">
                Have an idea in mind? Let’s bring it to life. Whether you need 
                <b>
                   UI/UX design, website <br /> development, mobile apps, or
                  complete end-to-end digital product solutions,
                </b>{" "}
                our team is <br /> here to help. Share your project details
                using the form, and we’ll get back to you shortly with <br />{" "}
                the next steps.
              </p>
            </div>
          </div>

          <div className="absolute right-[6%] bottom-[22%]">
            <img
              src={contactusgif}
              alt="Hero section animation"
              className="w-full h-auto max-w-lg object-contain"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-300 opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/*  */}
      <section className="container mx-auto">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="flex gap-[80px]">
              {/* Email */}
              <div className="flex flex-col items-start">
                <div className="py-[32px] px-[27px] rounded-full border border-[#D1D1D1] flex items-center justify-center mb-5">
                  <img src={contactemail} alt="" />
                </div>
                <h4 className="text-[30px] font-semibold mb-5">Email</h4>
                <p className="text-[20px]">info@libertyinfoscience.com</p>
                <p className="text-[20px] mt-3">+91 70963 64801</p>
              </div>

              {/* Location */}
              <div className="flex flex-col items-start">
                <div className="py-[27px] px-[29px] rounded-full border border-[#D1D1D1] flex items-center justify-center mb-4">
                  <img src={contactlocation} alt="" />
                </div>
                <h4 className="text-[30px] font-semibold mb-5">Location</h4>
                <p className="text-[20px]">
                  424, Sumerru Business Corner , B/H <br /> Rajhans Multiplex ,
                  Pal Gam, Surat, <br /> Gujarat, India.
                </p>
              </div>
            </div>

            <form className="space-y-10 mb-5">
              {/* Name */}
              <input
                type="text"
                placeholder="What’s your name?"
                className="w-full border border-[#D1D1D1] rounded-lg px-5 py-[14px] text-[20px] outline-none"
              />

              {/* Email & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="What’s your email?"
                  className="w-full border border-[#D1D1D1] rounded-lg px-5 py-[14px] text-[20px] outline-none"
                />

                <input
                  type="tel"
                  placeholder="What’s your mobile number?"
                  className="w-full border border-[#D1D1D1] rounded-lg px-5 py-[14px] text-[20px] outline-none"
                />
              </div>

              {/* Message */}
              <textarea
                rows="3"
                placeholder="How we can help?"
                className="w-full border border-[#D1D1D1] rounded-lg px-5 py-[14px] text-[20px] outline-none resize-none"
              />

              {/* Button */}
              {/* <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-500 hover:text-white transition-all"
              >
                Send Request
              </button> */}

              <button
                className="px-8 py-3 rounded-full bg-white text-[#0b4dbb] font-semibold
  border-2
  border-l-[#0b4dbb]
  border-t-[#0b4dbb]
  border-b-[#19b7c6]
  border-r-[#19b7c6]"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default Contactus;