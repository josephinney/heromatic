"use client";
import * as React from "react";

export const FooterSection: React.FC = () => {
    const socialPlatforms = ["LinkedIn", "Twitter", "Instagram", "Facebook"];

    return (
        <footer className="flex flex-col justify-center items-center px-0 py-16 w-full bg-[#3BA1E0]">
            <div className="flex flex-col gap-12 items-center">
                {/* Sección de correo electrónico */}
                <section className="flex flex-col gap-6 items-center">
                    <div className="flex gap-72 items-center py-1.5 pr-1.5 pl-3 bg-white rounded-lg max-md:gap-5 max-md:w-[90%] max-sm:flex-col max-sm:gap-2.5 max-sm:p-2.5">
                        <div className="flex gap-2 items-center max-sm:w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                                <path d="M14.3955 2.5C15.513 2.5 16.588 2.94167 17.3788 3.73417C18.1705 4.525 18.613 5.59167 18.613 6.70833V13.2917C18.613 15.6167 16.7213 17.5 14.3955 17.5H6.16296C3.83712 17.5 1.94629 15.6167 1.94629 13.2917V6.70833C1.94629 4.38333 3.82879 2.5 6.16296 2.5H14.3955ZM15.338 6.83333C15.163 6.82417 14.9963 6.88333 14.8705 7L11.113 10C10.6296 10.4008 9.93712 10.4008 9.44629 10L5.69629 7C5.43712 6.80833 5.07879 6.83333 4.86296 7.05833C4.63796 7.28333 4.61296 7.64167 4.80379 7.89167L4.91296 8L8.70462 10.9583C9.17129 11.325 9.73712 11.525 10.3296 11.525C10.9205 11.525 11.4963 11.325 11.9621 10.9583L15.7213 7.95L15.788 7.88333C15.9871 7.64167 15.9871 7.29167 15.7788 7.05C15.663 6.92583 15.5038 6.85 15.338 6.83333Z" fill="#3BA1E0" />
                            </svg>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 text-xs tracking-wide leading-5 text-[#3BA1E0] placeholder-[#3BA1E0] outline-none border-none bg-transparent"
                            />
                        </div>
                        <button className="flex gap-2 items-center px-4 py-2 text-xs leading-4 text-white capitalize bg-[#3BA1E0] max-sm:justify-center max-sm:w-full">
                            <span>More Info</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                <path d="M3.76884 3.59268C3.29011 3.11395 3.29011 2.33778 3.76884 1.85905C4.24757 1.38032 5.02374 1.38032 5.50247 1.85905L8.7898 5.14637C9.26853 5.62509 9.26853 6.40127 8.7898 6.88C8.31107 7.35873 7.53489 7.35873 7.05616 6.88L3.76884 3.59268Z" fill="white" />
                                <path d="M3.76884 8.40732C3.29011 8.88605 3.29011 9.66222 3.76884 10.141C4.24757 10.6197 5.02374 10.6197 5.50247 10.141L8.7898 6.85363C9.26853 6.3749 9.26853 5.59873 8.7898 5.12C8.31107 4.64127 7.53489 4.64127 7.05616 5.12L3.76884 8.40732Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </section>

                {/* Sección de enlaces de redes sociales */}
                <div className="flex flex-col gap-8 items-center">
                    <nav className="flex gap-3 items-start max-md:flex-wrap max-md:justify-center max-sm:flex-col max-sm:w-full">
                        {socialPlatforms.map((platform) => (
                            <button
                                key={platform}
                                className="flex gap-1 items-center px-3 py-1.5 border border-solid border-slate-100 rounded-[100px] max-sm:justify-center max-sm:w-full"
                            >
                                <div className="flex justify-center items-center w-6 h-6">
                                    <div className="flex justify-center items-center rounded bg-slate-100 h-[18px] w-[18px]" />
                                </div>
                                <span className="text-sm font-semibold text-slate-100">
                                    {platform}
                                </span>
                            </button>
                        ))}
                    </nav>

                    <hr className="h-px bg-slate-100 w-[1200px] max-md:w-[90%] max-sm:w-4/5" />

                    <p className="text-xs tracking-wide text-white uppercase">
                        ©copyright Heromatic 2023
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
