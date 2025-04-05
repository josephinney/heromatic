"use client";
import * as React from "react";

export default function OurGoal() {
  return (
    <section className="flex flex-col items-center w-full bg-white">
      <div className="flex gap-12 items-start py-10 w-full max-w-[1032px] max-md:flex-col max-md:px-5 max-sm:px-4">
        <div className="flex flex-col gap-16 items-start w-[488px] max-md:w-full">
          <header className="relative h-[116px] w-[469px] max-md:w-full max-md:h-auto">
            <svg
              width="479"
              height="128"
              viewBox="0 0 479 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[469px] h-[116px] max-lg:w-full"
            >
              <text
                fill="#363636"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Panchang Variable"
                fontSize="60"
                letterSpacing="0em"
              >
                <tspan x="2.88379" y="63.5422">
                  OUR GOAL
                </tspan>
              </text>
              <path
                d="M2.88379 114.242C1.77922 114.242 0.883789 115.138 0.883789 116.242C0.883789 117.347 1.77922 118.242 2.88379 118.242V114.242ZM309.431 116.242L297.884 104.695L286.337 116.242L297.884 127.789L309.431 116.242ZM2.88379 118.242H297.884V114.242H2.88379V118.242Z"
                fill="#3BA1E0"
              />
            </svg>
          </header>
          <div className="flex flex-col gap-16 items-start w-full">
            <article className="flex flex-col gap-8 items-start w-full">
              <h2 className="text-4xl font-bold leading-10 uppercase text-neutral-700 max-sm:text-3xl">
                Leading the Path in Automation
              </h2>
              <p className="text-base leading-8 text-neutral-950">
                To be a global leader in engineering solutions, shaping the
                future of automation, IoT, and electronics. We strive to empower
                our clients with scalable and comprehensive solutions that drive
                innovation and sustainable growth
              </p>
            </article>
            <button className="flex gap-2 items-center px-4 py-2 bg-white border-2 border-sky-400 duration-200 cursor-pointer">
              <span className="text-2xl leading-8 capitalize text-neutral-950">
                Let&apos;s Work Together
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
                  d="M7.86263 7.42755C6.90517 6.47009 6.90517 4.91774 7.86263 3.96028C8.82009 3.00282 10.3724 3.00282 11.3299 3.96028L17.9045 10.5349C18.862 11.4924 18.862 13.0447 17.9045 14.0022C16.9471 14.9596 15.3947 14.9596 14.4373 14.0022L7.86263 7.42755Z"
                  fill="#0C0D0D"
                />
                <path
                  d="M7.86263 17.0568C6.90517 18.0143 6.90517 19.5666 7.86263 20.5241C8.82009 21.4816 10.3724 21.4816 11.3299 20.5241L17.9045 13.9495C18.862 12.992 18.862 11.4396 17.9045 10.4822C16.9471 9.52473 15.3947 9.52473 14.4373 10.4822L7.86263 17.0568Z"
                  fill="#0C0D0D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative h-[440.9px] w-[494px] max-md:w-full max-md:h-auto">
          <div className="absolute top-0 bg-blue-600 h-[235px] left-[284px] w-[210px] max-md:relative max-md:top-auto max-md:left-auto max-md:w-full" />
          <div className="absolute left-0 h-[403px] top-[38px] w-[409px] max-md:relative max-md:top-auto max-md:left-auto max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffa77387a56ff4ba92fc340e2d3b3af298d06c61"
              alt=""
              className="absolute left-[3px] top-[0px] w-[406px] h-[403px] max-lg:relative max-lg:left-auto max-lg:top-auto max-lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
