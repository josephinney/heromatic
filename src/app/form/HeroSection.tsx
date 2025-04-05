"use client";
import * as React from "react";
import Navbar from "@/components/NavBar";
import { ContactForm } from "./ContactForm";
// import { ImageSection } from "./ImageSection";

export const Hero: React.FC = () => { 
  return (
    <section className="relative flex overflow-hidden flex-col bg-white mb-16">
      <Navbar/>

      <main className="relative self-end mt-14 w-full max-w-[1184px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="relative z-10 bg-white w-[59%] max-md:ml-0 max-md:w-full">
            <ContactForm />
          </div>
          
          <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    // className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    className="absolute w-auto min-w-full min-h-full max-w-none object-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/assets/heromainvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
          
        </div>
      </main>
    </section>
  );
};

export default Hero;
