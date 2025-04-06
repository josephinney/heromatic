// "use client";
// import * as React from "react";
// import Image from "next/image";
// import Navbar from "../components/NavBar"; // Asegúrate de que Navbar esté importado correctamente
// import right from '../../public/assets/right.svg'

// export const HeroSection: React.FC = () => {
//     return (
//         <section className="relative w-screen h-screen overflow-hidden bg-white">

//             {/* <Image className="home-hero-circle" src={Circle} alt={"Circle"} /> */}

//             <Navbar />

//             <div className="flex flex-col items-start gap-6 mt-[117px] mb-[119px] ml-[248px] max-w-[645px] z-2 relative 
//                   md:ml-[248px] md:items-start
//                   sm:ml-4 sm:mt-20 sm:mb-10 sm:items-center sm:text-center">

//                 <div className="flex flex-col items-start">
//                     <div className="w-[645px] max-w-full">
//                         <h1 className="text-5xl font-bold text-black text-left">AUTOMATE</h1>
//                     </div>
//                     <div className="w-[645px] max-w-full">
//                         <h2 className="text-3xl font-semibold text-black text-left uppercase">and Optimize Your Business</h2>
//                     </div>
//                 </div>

//                 <div className="text-[#04162B] text-sm font-normal leading-[200%] w-[241px] sm:w-full max-w-[240px] text-left">
//                     <p>
//                         We offer a complete service from software to equipment installation to simplify processes,
//                         automate growth, and control efficiency.
//                     </p>
//                 </div>

//                 <button className="bg-[#3BA1E0] flex items-center gap-2 px-4 py-2 self-start">
//                     <p className="text-white text-[24px] font-normal leading-[140%] capitalize">
//                         Let's Talk
//                     </p>
//                     <Image className="w-6 h-6" src={right} alt="right" />
//                 </button>

//             </div>

//             <div className="absolute inset-0 z-0 overflow-hidden">
//                 <video
//                     // className="absolute inset-0 w-full h-full object-cover pointer-events-none"
//                     className="absolute w-auto min-w-full min-h-full max-w-none object-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125"
//                     autoPlay
//                     muted
//                     loop
//                 >
//                     <source src="/assets/heromainvideo.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>


//         </section>

//     );
// };

"use client"

import React from "react";
import { useIsMobile } from "../../src/hooks/useIsMobile";
import NavBar from "./NavBar";

export const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-white">
      <NavBar />

      <div className={`
        flex flex-col
        ${isMobile ? 
          "items-center text-center mt-20 px-6" : 
          "items-start gap-6 mt-[117px] mb-[119px] ml-[248px] max-w-[645px]"
        }
        z-10 relative
      `}>
        <div className={`flex flex-col ${isMobile ? "items-center" : "items-start"}`}>
          <div className={`${isMobile ? "w-full" : "w-[645px] max-w-full"}`}>
            <h1 className={`text-5xl font-bold text-black ${isMobile ? "text-center" : "text-left"}`}>
              AUTOMATE
            </h1>
          </div>
          <div className={`${isMobile ? "w-full" : "w-[645px] max-w-full"}`}>
            <h2 className={`text-3xl font-semibold text-black ${isMobile ? "text-center" : "text-left"} uppercase`}>
              AND OPTIMIZE YOUR BUSINESS
            </h2>
          </div>
        </div>

        <div className={`
          text-[#04162B] text-sm font-normal leading-[200%]
          ${isMobile ? "w-full max-w-[80%] text-center mt-4" : "w-[241px] max-w-[240px] text-left"}
        `}>
          <p>
            We offer a complete service from software to equipment installation to simplify processes,
            automate growth, and control efficiency.
          </p>
        </div>

        <button className={`
          bg-[#3BA1E0] flex items-center gap-2 px-4 py-2 mt-4
          ${isMobile ? "self-center" : "self-start"}
        `}>
          <p className="text-white text-[24px] font-normal leading-[140%] capitalize">
            Let's Talk
          </p>
          <img className="w-6 h-6" src="/assets/right.svg" alt="right" />
        </button>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute w-auto min-w-full min-h-full max-w-none object-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125"
          autoPlay
          muted
          loop
        >
          <source src="/assets/heromainvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

