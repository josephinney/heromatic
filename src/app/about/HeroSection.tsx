"use client";
import * as React from "react";
import Navbar from "@/components/NavBar";
import Banner from "./Banner/Banner";


export function HeroSection() {
    return (
        <section style={{ backgroundImage: 'url(/assets/background3.png)' }} className="overflow-hidden relative w-full h-[1034px] bg-cover bg-center bg-no-repeat">

            <Navbar />

            <div className="mt-32 mb-64">
                <h1 className="text-6xl font-extrabold text-center uppercase leading-[84px] text-slate-900 max-md:text-5xl max-sm:text-4xl">
                    OUR VALUES
                </h1>
                <h2 className="mt-8 text-4xl font-bold leading-10 text-center uppercase text-slate-900 max-md:text-3xl max-sm:text-2xl">
                    ARE THE CORE OF OUR MISSION
                </h2>
            </div>

            <div>
                <Banner/>
            </div>


            {/* <div className="absolute inset-0 z-[-1] overflow-hidden">
                <video
                    // className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    className="absolute w-auto min-w-full min-h-full max-w-none object-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-60"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/assets/video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}

        </section>

    );
}

export default HeroSection;
