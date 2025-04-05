"use client";
import * as React from "react";

export default function PhotoBanner() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <section className="overflow-hidden relative w-full h-[495px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e099cae33bf99a8f879d4d89a5b96b081edb3e76"
          className="object-cover size-full"
          alt="Scientists working in agriculture"
        />
        <div className="absolute top-0 left-0 bg-sky-400 mix-blend-color size-full" />
        <div className="flex absolute top-2/4 left-2/4 flex-col gap-4 items-center w-full text-center -translate-x-2/4 -translate-y-2/4 max-w-[670px] max-sm:px-5 max-sm:py-0">
          <h1 className="text-5xl font-extrabold text-white uppercase leading-[67.2px] max-w-[522px] max-md:text-4xl max-sm:text-3xl">
            Automation engineers
          </h1>
          <h2 className="w-full text-2xl font-bold leading-8 text-white uppercase max-md:text-xl max-sm:text-lg">
            with 20+ years of experience
          </h2>
          <p className="text-base leading-8 text-white max-w-[375px] max-md:text-sm max-sm:text-xs max-sm:max-w-[300px]">
            and software engineers with cloud computing, machine learning, ai
          </p>
          <div className="mt-2">
            <button className="flex gap-2 items-center px-4 py-2 text-2xl leading-8 bg-white border-t-2 border-solid cursor-pointer border-t-sky-400 text-neutral-950 max-md:text-xl max-sm:px-3 max-sm:py-1.5 max-sm:text-lg">
              <span>Let&apos;s Talk</span>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg id="I679:1103;100:82" layer-name="Heromatics Icon/right" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon" style="width: 24px; height: 24px"> <path d="M7.05501 7.18537C6.09755 6.22791 6.09755 4.67556 7.05501 3.7181C8.01247 2.76064 9.56482 2.76063 10.5223 3.71809L17.0969 10.2927C18.0544 11.2502 18.0544 12.8025 17.0969 13.76C16.1395 14.7175 14.5871 14.7175 13.6296 13.76L7.05501 7.18537Z" fill="#0C0D0D"></path> <path d="M7.05501 16.8146C6.09755 17.7721 6.09755 19.3244 7.05501 20.2819C8.01247 21.2394 9.56482 21.2394 10.5223 20.2819L17.0969 13.7073C18.0544 12.7498 18.0544 11.1975 17.0969 10.24C16.1395 9.28254 14.5871 9.28254 13.6296 10.24L7.05501 16.8146Z" fill="#0C0D0D"></path> </svg>',
                }}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
