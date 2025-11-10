import React from "react";

export default function Contact() {
  return (
    <>
      <div className="w-full h-[90vh] bg-black flex flex-col justify-center items-center mt-2 text-white">
        <h1 className="relative text-4xl font-extrabold text-orange-400 mb-10 transition-all duration-500 ease-in-out group hover:text-orange-300 drop-shadow-[0_0_10px_rgba(255,165,0,0.6)]">
          Contact With Mangesh
          <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 transition-all duration-500 group-hover:w-full blur-[1px]"></span>
        </h1>

        <form className="bg-gray-900/80 backdrop-blur-md border border-orange-400/80 p-8 mb-1 rounded-2xl w-[90%] sm:w-[60%] md:w-[40%] flex flex-col gap-5 shadow-[0_0_25px_rgba(255,165,0,0.3)] hover:shadow-[0_0_40px_rgba(255,200,100,0.6)] transition-all duration-500">
          <div className="flex flex-col">
            <label className="mt-1.5 text-yellow-300 font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400 shadow-inner shadow-gray-800"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-yellow-300 font-semibold">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="p-3 rounded-md bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400 shadow-inner shadow-gray-800"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-yellow-300 font-semibold">
              Message
            </label>
            <textarea
              placeholder="Type your message here..."
              rows="4"
              className="p-3 rounded-md bg-black text-white border border-gray-700 focus:outline-none focus:border-yellow-400 resize-none shadow-inner shadow-gray-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-bold py-2 rounded-md hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,200,100,0.5)] hover:shadow-[0_0_25px_rgba(255,180,50,0.8)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
