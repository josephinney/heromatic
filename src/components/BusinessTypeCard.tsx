"use client";
import * as React from "react";

interface BusinessTypeCardProps {
  icon: string;
  title: string;
  description: string;
}

export const BusinessTypeCard: React.FC<BusinessTypeCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col items-center px-4 py-8 text-center bg-white border border-sky-400 border-solid w-[178px] h-[275px] overflow-hidden">
      <div className="mb-4 flex-shrink-0">
        <div
          className="w-[62px] h-[62px] mx-auto"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      </div>
      <h3 className="text-[#0073FA] font-barlow text-l font-bold leading-[33.6px] flex-grow-0">{title}</h3>
      <p className="text-[#2C3959] text-center font-barlow text-sm font-normal leading-[25.2px] flex-grow-0">{description}</p>
    </article>
  );
};
