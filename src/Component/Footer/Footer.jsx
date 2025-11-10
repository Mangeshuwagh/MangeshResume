// import React from "react";

// function footer() {
//   return (
//     <>
//       <footer className="w-full border-2 h-[50%] border-amber-50 mt-3.5 p-3 flex justify-around text-amber-50">
//         <div className="flex flex-col justify-center items-center border-amber-50 border-2 w-[25%] mt-10 mb-10 h-[200px] text-center">
//           <span>Mangesh</span>
//           <span className="font-light text-lg mt-1">Developer</span>
//         </div>
//         <div className="flex flex-col justify-center items-center border-amber-50 border-2 w-[25%] mt-10 mb-10 h-[200px] text-center">
//           <h2 className="text-2xl font-semibold mb-2">About</h2>
//           <p className="text-sm font-light px-4">
//             Passionate developer creating modern web applications using React
//             and Spring Boot.
//           </p>
//         </div>

//         <div className=" flex flex-col justify-center items-center border-amber-50 border-2 w-[25%] mt-10 mb-10 h-[200px] text-center">
//           <h2 className="text-2xl font-semibold mb-2">Contact</h2>
//           <p className="text-sm font-light">📧 mangesh@example.com</p>
//           <p className="text-sm font-light">📞 +91 98765 43210</p>
//         </div>
//       </footer>
//     </>
//   );
// }
// export default footer;

import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full mt-5 bg-black text-amber-50 py-10 flex flex-col md:flex-row justify-around items-center border-t border-amber-500 shadow-[0_-2px_15px_rgba(255,191,0,0.3)]">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center text-center mb-8 md:mb-0 transition-transform duration-300 hover:scale-105">
          <h1 className="text-4xl font-bold text-amber-400 drop-shadow-[0_0_10px_rgba(255,191,0,0.7)]">
            Mangesh
          </h1>
          <p className="font-light text-lg mt-1 text-gray-300">Developer</p>
        </div>

        {/* About Section */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs transition-all duration-300 hover:text-amber-300">
          <h2 className="text-2xl font-semibold mb-2 text-amber-400 underline underline-offset-4">
            About
          </h2>
          <p className="text-sm font-light text-gray-400 leading-relaxed">
            I build simple and responsive web applications using React and
            Spring Boot.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col justify-center items-center text-center transition-all duration-300 hover:text-amber-300">
          <h2 className="text-2xl font-semibold mb-2 text-amber-400 underline underline-offset-4">
            Contact
          </h2>
          <p className="text-sm font-light hover:text-white cursor-pointer transition">
            📧 mangeshwagh6654@gmail.com
          </p>
          <p className="text-sm font-light hover:text-white cursor-pointer transition">
            📞 +91 9834303107
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="hover:text-white text-amber-300 transition-transform duration-300 hover:scale-110"
            >
              🌐
            </a>
            <a
              href="#"
              className="hover:text-white text-amber-300 transition-transform duration-300 hover:scale-110"
            >
              💼
            </a>
            <a
              href="#"
              className="hover:text-white text-amber-300 transition-transform duration-300 hover:scale-110"
            >
              📸
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
