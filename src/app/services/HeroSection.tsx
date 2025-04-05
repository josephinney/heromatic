"use client";
import * as React from "react";
import Navbar from "@/components/NavBar";


export function HeroSection() {
    return (
        <section className="overflow-hidden relative w-full h-[598px] bg-cover bg-center bg-no-repeat">

            <Navbar />

            <article className="flex absolute flex-col gap-6 items-end right-[242px] top-[128px] w-[645px] max-md:right-[50px] max-md:w-[500px] max-sm:right-5 max-sm:px-5 max-sm:w-full">
                <header className="relative z-2 flex flex-col justify-center items-end w-full">
                    <h1 className="w-full text-5xl font-extrabold text-right uppercase leading-[67.2px] text-slate-900 max-md:text-4xl max-sm:text-3xl">
                        modulars
                    </h1>
                    <h2 className="w-full text-4xl font-bold leading-10 text-right uppercase text-slate-900 max-md:text-3xl max-sm:text-2xl">
                        Solutions for Every Need
                    </h2>
                </header>
                <p className="relative z-2 text-sm leading-7 text-right text-slate-900 w-[435px] max-md:w-full max-sm:text-xs">
                    Equipped with customizable software and seamless equipment
                    integration, we ensure that your operational needs are met with
                    precision and efficiency.
                </p>
            </article>

            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    // className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    className="absolute w-auto min-w-full min-h-full max-w-none object-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-60"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/assets/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </section>

    );
}

export default HeroSection;
