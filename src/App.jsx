// import { useState } from "react";
// import Header from "./Component/Header/Header";
// import HeroSection from "./Component/HeroSection/HeroSection";
// import Footer from "./Component/Footer/Footer";
// // import {BroweserRouter} from "react-router-dom"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from "./Component/Routss/Contact";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />

//         <Routes>
//           {/* <Route path="/" element={<HeroSection />} /> */}
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <HeroSection />
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import Header from "./Component/Header/Header";
import HeroSection from "./Component/HeroSection/HeroSection";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Component/Routss/Contact";
import Abouts from "./Component/Routss/Abouts";
// import About from "./Component/Routss/About"; // if you want later

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HeroSection />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* About Page (optional) */}
          <Route path="/about" element={<Abouts />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
