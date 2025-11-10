import React from "react";

function NameLogo() {
  return (
    <div className="flex items-center space-x-3">
      <div
        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 
                      text-white flex items-center justify-center 
                      rounded-full font-bold text-xl shadow-lg 
                      shadow-blue-500/50 animate-pulse"
      >
        M
      </div>

      <h1
        className="text-3xl font-bold tracking-wide 
                     bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 
                     text-transparent bg-clip-text drop-shadow-md"
      >
        Mangesh Wagh
      </h1>
    </div>
  );
}

export default NameLogo;
