import React from "react";
// import {AboutPic } form "src\assets\Images\About_pic.jpg";
// import AboutPic from "../assets/Images/About_pic.jpg";
import AboutPic from "../../assets/Images/About_pic.jpg";

export default function Abouts() {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white flex flex-col items-center py-10">
        <h1 className="relative text-4xl font-extrabold text-orange-400 mb-10 transition-all duration-500 ease-in-out group hover:text-orange-300">
          About Me
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 transition-all duration-500 group-hover:w-full blur-[1px]"></span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-[90%] md:w-[80%]">
          {/* <img
           src= {AboutPic}
            alt="Mangesh"
            className="w-40 h-40 rounded-full border-4 border-orange-400 shadow-[0_0_20px_rgba(255,165,0,0.6)] hover:scale-105 transition-all duration-500"
          /> */}

          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">
              Hi, I’m Mangesh Wagh 👋
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m a{" "}
              <span className="text-orange-300 font-semibold">
                Java Full Stack Developer
              </span>
              from Jalgaon, Maharashtra. I enjoy creating clean, responsive, and
              user-friendly web applications using
              <span className="text-orange-300 font-semibold">
                {" "}
                React, Spring Boot,
              </span>{" "}
              and
              <span className="text-orange-300 font-semibold"> MySQL.</span>
              <br />
              <br />I love exploring new technologies, solving problems through
              coding, and always look for opportunities to learn and grow as a
              developer.
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-orange-400 mt-16 mb-6">
          My Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-[90%] md:w-[60%]">
          <SkillCard name="Java" />
          <SkillCard name="Spring Boot" />
          <SkillCard name="MySQL" />
          <SkillCard name="React.js" />
          <SkillCard name="HTML" />
          <SkillCard name="CSS" />
          <SkillCard name="Tailwind CSS" />
          <SkillCard name="C / C++" />
        </div>
      </div>
    </>
  );
}

function SkillCard({ name }) {
  return (
    <div className="bg-gray-900 border border-orange-400 rounded-xl p-4 text-center text-orange-300 font-semibold shadow-[0_0_15px_rgba(255,165,0,0.4)] hover:shadow-[0_0_25px_rgba(255,180,50,0.7)] hover:scale-105 transition-all duration-300">
      {name}
    </div>
  );
}
