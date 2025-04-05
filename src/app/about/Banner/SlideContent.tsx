import * as React from "react";

interface SlideContentProps {
  title: string;
  content: string;
}

export function SlideContent({ title, content }: SlideContentProps) {
  return (
    <article className="flex justify-center items-center w-[1007px] h-48 bg-[#296285] border border-white border-solid shadow-2xl max-md:px-4 max-md:py-8 max-md:h-auto max-sm:px-3 max-sm:py-6">
      <div className="flex flex-col gap-4 items-center p-6 max-w-[689px]">
        <h2 className="text-4xl font-bold leading-10 text-center text-blue-100 uppercase max-md:text-3xl max-sm:text-2xl">
          {title}
        </h2>
        <p className="text-base font-semibold leading-8 text-center text-blue-100 max-md:text-sm max-sm:text-sm max-sm:leading-6">
          {content}
        </p>
      </div>
    </article>
  );
}
