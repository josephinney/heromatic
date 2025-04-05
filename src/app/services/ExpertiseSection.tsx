"use client";
import * as React from "react";

export default function ExpertiseSection() {
  return (
    <section className="flex flex-col items-center px-16 w-full mt-64 mb-16">
      <div className="flex gap-16 items-start max-md:flex-col max-md:gap-10 max-sm:gap-8">
        <div className="relative h-[571px] w-[406px] max-md:w-full max-md:h-auto">
          {/* Top image with overlay */}
          <div className="flex flex-col justify-end items-center w-[415px] h-[403px] absolute left-px top-0 border-t-[14px] border-sky-400 max-md:relative max-md:left-0 max-md:w-full z-1">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9ad07582e7f116a3adc015579d462e14d444ecb" alt="" className="w-full h-auto" />
          </div>

          {/* Bottom image with overlay */}
          <div className="flex flex-col justify-center items-center w-[210px] absolute left-0 top-[336px] bg-[#3BA1E0] h-[235px] max-md:relative max-md:top-0 left-[2.5px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1fb52f8225cb300f447230583d3c3004646a71" alt="" className="w-full h-auto" />
          </div>
        </div>

        <article className="flex flex-col gap-8 items-start w-[488px] max-md:w-full">
          <h2 className="w-full text-4xl font-bold leading-10 uppercase text-neutral-700 max-md:text-3xl max-sm:text-2xl">
            Expertise in Automation and IoT
          </h2>
          <p className="w-full text-base leading-8 text-neutral-950 max-md:text-sm max-sm:leading-[180%]">
            At Heromatic, our seasoned engineers bring over 20 years of
            experience in precision engineering to deliver bespoke automation
            solutions. Our flexible software platforms can utilize your existing
            IoT infrastructure or integrate new devices seamlessly, ensuring
            that your systems are always on the cutting edge. 
            <br/>
            <br/>
            We specialize in
            environmental control systems, including cloud-based irrigation
            control, productivity tracking solutions, and advanced dosification
            systems that significantly enhance plant utilization efficiency
          </p>
        </article>
      </div>

      <div className="flex gap-16 items-end mt-16 max-md:gap-10 max-md:flex-[col] max-sm:gap-8">
        <div className="flex flex-col gap-16 items-start w-[488px] max-md:w-full">
          <article className="flex flex-col gap-8 items-start w-full">
            <h2 className="w-full text-4xl font-bold leading-10 uppercase text-neutral-700 max-md:text-3xl max-sm:text-2xl">
              Innovative Engineering Solutions
            </h2>
            <p className="w-full text-base leading-8 text-neutral-950 max-md:text-sm max-sm:leading-[180%]">
              We provide engineering solutions for automation, iot and
              electronics. out main customers are in the agricultural industry,
              and we develop for them enviromental control cloud based that
              includes irrigation control, and all kind of custom solutions,
              also productivity tracking, by monitoring the performance of the
              team, and measuring the downtime, also we provide one of the best
              dosification system in the market that signifant increase the
              utilization of the plant.
            </p>
          </article>

          <button className="flex gap-2 items-center px-4 py-2 bg-white border-2 border-sky-400 cursor-pointer">
            <span className="text-2xl leading-8 capitalize text-neutral-950">
              Contact Us
            </span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
            >
              <path
                d="M7.54207 7.88507C6.58461 6.92761 6.58461 5.37526 7.54207 4.4178C8.49953 3.46034 10.0519 3.46034 11.0093 4.4178L17.584 10.9924C18.5414 11.9499 18.5414 13.5022 17.584 14.4597C16.6265 15.4172 15.0742 15.4172 14.1167 14.4597L7.54207 7.88507Z"
                fill="#0C0D0D"
              />
              <path
                d="M7.54207 17.5143C6.58461 18.4718 6.58461 20.0241 7.54207 20.9816C8.49953 21.9391 10.0519 21.9391 11.0093 20.9816L17.584 14.407C18.5414 13.4495 18.5414 11.8972 17.584 10.9397C16.6265 9.98224 15.0742 9.98224 14.1167 10.9397L7.54207 17.5143Z"
                fill="#0C0D0D"
              />
            </svg>
          </button>
        </div>

        <div className="relative h-[467px] w-[391px] max-md:w-full max-md:h-auto">
          {/* Top colored overlay */}
          <div className="absolute top-0 right-0 bg-[#004494] h-[235px] w-[210px] max-md:relative" />

          {/* Main image with border */}
          <div className="flex flex-col justify-end items-center absolute left-0 top-[90px] w-[377px] h-[377px] max-lg:relative max-lg:top-0 max-lg:w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ae1ff05f710ab945d225fbfbfae4bbc6a0b197" alt="Rectangle 59" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
