import React from "react";
import ProfilerImg from "../../assets/Images/MangeshProfileEdit.jpg";
// public/resume/Mangesh_Wagh_Resume.pdf

function HeroSection() {
  return (
    <>
      <section className="bg-gradient-to-r mt-2.5 from-gray-900 via-green-900 to to-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 md:py-24 ">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-green-400 ">
            {/* Hi, I am Mangesh Wagh 👋 */}
            Hi, I am .......... 👋
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500  text-transparent bg-clip-text drop-shadow-md ">
            Java Full Stack Devloper
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Passionate about building modern web applications using
            <span className="text-green-400"> React, Spring Boot,</span> and
            <span className="text-green-400"> MySQL.</span> I love solving
            real-world problems through clean and efficient code.
          </p>
          <div className="flext space-x-4 pt-4">
            <a
              href="/resume/Mangesh_Wagh_Resume.pdf"
              download="Mangesh_Wagh_Resume.pdf"
              className="border border-green-400 hover:bg-green-500 hover:text-white text-green-400 px-6 py-3 rounded-2xl font-medium transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="bg-gradient-to-br from-green-400/10 to-green-900/20 p-2 rounded-3xl shadow-2xl hover:shadow-green-500/30 transition-all duration-500 hover:-translate-y-2">
            <img
              src={ProfilerImg}
              alt="Profile"
              className="w-64 md:w-80 rounded-3xl border-4 border-green-400 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
