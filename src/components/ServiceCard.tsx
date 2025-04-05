"use client";
import * as React from "react";

interface ServiceCardProps {
    image: string;
    altText: string;
    title: string;
    subtitle: string;
    description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    image,
    altText,
    title,
    subtitle,
    description,
}) => {
    return (
        <article className="group w-[316.8px] border border-zinc-300 bg-slate-100 shadow-[0_5px_6px_rgba(0,0,0,0.1)] hover:shadow-lg cursor-pointer ">
            <div className="overflow-hidden h-[150px]">
                <img src={image} alt={altText} className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
                <header className="mb-6">
                    <h3 className="text-[20px] leading-[140%] font-bold text-[#363636] font-barlow">
                        {title}
                    </h3>
                    <p className="text-[14px] leading-[20px] tracking-[0.25px] text-[#475057] font-roboto">
                        {subtitle}
                    </p>
                </header>
                <p className="group-hover:bg-gradient-to-r group-hover:from-[#117EE4] group-hover:to-[#ED5D5D] group-hover:bg-clip-text group-hover:text-transparent mb-6 text-[20px] leading-[150%] text-[#475057] font-barlow">
                    {description}
                </p>
                <button className="flex items-center gap-2 px-4 py-2 text-[20px] font-normal bg-white text-neutral-950 border-t-2 border-sky-400 cursor-pointer">
                    <span>More Info</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25" fill="none">
                        <path d="M7.55837 7.58539C6.60091 6.62793 6.60091 5.07558 7.55837 4.11812C8.51583 3.16066 10.0682 3.16066 11.0256 4.11812L17.6003 10.6928C18.5577 11.6502 18.5577 13.2026 17.6003 14.16C16.6428 15.1175 15.0905 15.1175 14.133 14.16L7.55837 7.58539Z" fill="#0C0D0D" />
                        <path d="M7.55837 17.2147C6.60091 18.1721 6.60091 19.7245 7.55837 20.6819C8.51583 21.6394 10.0682 21.6394 11.0256 20.6819L17.6003 14.1073C18.5577 13.1498 18.5577 11.5975 17.6003 10.64C16.6428 9.68256 15.0905 9.68256 14.133 10.64L7.55837 17.2147Z" fill="#0C0D0D" />
                    </svg>
                </button>
            </div>
        </article>
    );
};
