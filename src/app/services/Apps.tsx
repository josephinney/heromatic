"use client";
import * as React from "react";
import { useState } from "react";

const Apps: React.FC = () => {

  const [hovered, setHovered] = useState(false);

  return (
    <main className="overflow-hidden pt-16 pb-44 max-md:pb-24">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <header className="flex flex-col max-w-full text-center w-[572px]">
          <h1 className="self-center text-4xl font-bold leading-10 bg-clip-text gradient-title max-md:max-w-full">
            Control Your Operations from Anywhere
          </h1>
          <h2 className="mt-4 text-base font-semibold leading-loose text-neutral-950 max-md:max-w-full">
            Ready to control remotely your IoT Devices?
          </h2>
        </header>

        <section className="flex relative items-start px-60 mt-10 w-full max-md:px-5 max-md:max-w-full">
          <article className="flex z-0 flex-col h-[435px] min-w-60 w-[488px] max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <h2 className="text-4xl leading-10 uppercase text-neutral-700 max-md:max-w-full">
                <span className="font-bold text-[#363636]">
                  Shaping the future{" "}
                </span>
                <span className="font-normal text-[#363636]">
                  of automation
                </span>
              </h2>
              <p className="mt-8 text-base leading-8 text-neutral-950 max-md:max-w-full">
                Our software integrates seamlessly with existing or new IoT
                devices, channeling data through a secure cloud database. With
                our web and mobile apps, developed using Angular, CEOs and
                managers can monitor and control environmental conditions,
                activate devices, and set automated routines—all remotely.
                Whether it's adjusting temperatures, opening doors, or managing
                systems in real-time, Heromatic provides the tools to keep you
                connected and in control from anywhere in the world.
                <br />
              </p>
            </div>
            <button
              className="flex gap-2 items-center self-start px-4 py-2 mt-16 text-2xl leading-snug text-center capitalize bg-white border-t-2 border-solid border-t-[#3BA1E0] text-neutral-950 hover:bg-gray-50 transition-colors max-md:mt-10"
            >
              <span className="self-stretch my-auto">Contact Us</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/cc725807c14044218a044f65b2af1b69/5d372f28c760df22286a26f3dcebb235a121549e?placeholderIfAbsent=true"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </button>
          </article>
          <img onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            src={
              !hovered 
              ? "https://cdn.builder.io/api/v1/image/assets/cc725807c14044218a044f65b2af1b69/95bf5ef7bd84b5412b4426ce9db79c296c3e2690?placeholderIfAbsent=true" 
              : "/assets/imagen.svg"
            } 
            alt="IoT devices control illustration"
            className="object-contain absolute right-18 z-0 aspect-[1.73] bottom-[-5px] h-[441px] min-w-60 w-[763px] max-md:max-w-full"
          />
          
        </section>
      </div>
    </main>
  );
};

export default Apps;



{/* <div
            className="relative group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            
            <img
              src={
                !hovered
                  ? "https://cdn.builder.io/api/v1/image/assets/cc725807c14044218a044f65b2af1b69/95bf5ef7bd84b5412b4426ce9db79c296c3e2690?placeholderIfAbsent=true"
                  : "https://cdn.builder.io/api/v1/image/assets/cc725807c14044218a044f65b2af1b69/95bf5ef7bd84b5412b4426ce9db79c296c3e2690?placeholderIfAbsent=true"
              }
              alt="IoT devices control illustration"
              className="object-contain absolute right-18 z-0 aspect-[1.73] bottom-[-5px] h-[441px] min-w-60 w-[763px] max-md:max-w-full transition-all duration-300"
            />
          </div> */}