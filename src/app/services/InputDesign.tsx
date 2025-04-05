"use client";

import * as React from "react";

interface TextSectionProps {
  text: string;
  backgroundColor: string;
}

const TextSection: React.FC<TextSectionProps> = ({ text, backgroundColor }) => {
  return (
    <section
      className={`flex-1 p-4 h-full text-6xl font-light text-center text-white uppercase ${backgroundColor} leading-[84px] max-md:px-5 max-md:py-10 max-md:text-5xl max-sm:px-4 max-sm:py-8 max-sm:text-4xl flex items-center justify-center`}
    >
      {text}
    </section>
  );
};

function InputDesign() {
  return (
    <main className="flex mx-auto w-full max-w-none h-[443px] max-md:flex-col max-md:h-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <TextSection text="PULSE" backgroundColor="bg-[#004494]" />
      <TextSection text="SENTINEL" backgroundColor="bg-[#3BA1E0]" />
      <TextSection text="ALCHEMY" backgroundColor="bg-[#0073FA]" />
    </main>
  );
}

export default InputDesign;
