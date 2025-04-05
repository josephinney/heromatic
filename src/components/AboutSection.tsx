"use client";
import * as React from "react";

export const AboutSection: React.FC = () => {
    return (
        <section className="p-16 bg-slate-100 max-md:p-8">
            <div className="flex gap-20 justify-center mx-auto my-0 max-w-[1200px] max-md:flex-col max-md:items-center">
                <div className="max-w-[500px]">
                    <div className="mb-16">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `<svg id="359:341" width="472" height="128" viewBox="0 0 472 128" fill="none" xmlns="http://www.w3.org/2000/svg" class="about-title-svg" style="width: 100%; height: auto"> <text fill="#363636" xml:space="preserve" style="white-space: pre" font-family="Panchang Variable" font-size="60" letter-spacing="0em"><tspan x="2.67517" y="63.3">ABOUT US</tspan></text> <path d="M2.67517 114C1.5706 114 0.675171 114.895 0.675171 116C0.675171 117.105 1.5706 118 2.67517 118V114ZM309.222 116L297.675 104.453L286.128 116L297.675 127.547L309.222 116ZM2.67517 118H297.675V114H2.67517V118Z" fill="#3BA1E0"></path> </svg>`,
                            }}
                        />
                    </div>
                    <div>
                        <h2 className="mb-8 text-4xl text-neutral-700">
                            <span className="font-boldtext-[34px] leading-[47.6px] font-bold uppercase text-[#363636] font-barlow">Shaping the future </span>
                            <span className="text-[34px] leading-[47.6px] font-normal uppercase text-[#363636] font-barlow">of automation</span>
                        </h2>
                        <p className="mb-[64px] text-[16px] leading-[32px] font-normal text-[#0C0D0D] font-barlow">
                            At Heromatic, our commitment to innovation and precision in
                            automation has rooted us in South Florida since 2023, focusing on
                            empowering the agricultural sector and beyond with
                            state-of-the-art solutions.
                            <br />
                            Our team, seasoned in engineering and
                            cloud-based technologies, thrives on transforming complex
                            challenges into streamlined, sustainable operations.
                        </p>
                    </div>
                    <button className="flex gap-2 items-center px-4 py-2 text-2xl bg-white border-t-2 border-solid cursor-pointer border-[none] border-t-sky-400 text-neutral-950">
                        <span>More Info</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25" fill="none">
                            <path d="M7.55837 7.58539C6.60091 6.62793 6.60091 5.07558 7.55837 4.11812C8.51583 3.16066 10.0682 3.16066 11.0256 4.11812L17.6003 10.6928C18.5577 11.6502 18.5577 13.2026 17.6003 14.16C16.6428 15.1175 15.0905 15.1175 14.133 14.16L7.55837 7.58539Z" fill="#0C0D0D" />
                            <path d="M7.55837 17.2147C6.60091 18.1721 6.60091 19.7245 7.55837 20.6819C8.51583 21.6394 10.0682 21.6394 11.0256 20.6819L17.6003 14.1073C18.5577 13.1498 18.5577 11.5975 17.6003 10.64C16.6428 9.68256 15.0905 9.68256 14.133 10.64L7.55837 17.2147Z" fill="#0C0D0D" />
                        </svg>
                    </button>
                </div>
                {/* <div className="relative max-sm:w-full">
                    <div className="overflow-hidden w-64 bg-white border-solid border-t-[14px] border-t-slate-300">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/51097a258ae7a72e8b2db34a43d1eaa0862c2f8c" alt="About 1" />
                    </div>
                    <div className="overflow-hidden relative bg-white border-solid border-t-[14px] border-t-sky-400 left-[27.33px] top-[-13.369px] w-[206px]">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e701605bb13b2b148aef3595e2a094d0b9aa6703" alt="About 2" />
                    </div>
                </div> */}
                <div className="relative flex w-[390.208px] h-[365.738px] items-start shrink-0 mt-[166px] mb-[155px]">
                    {/* Imagen inferior */}
                    <div className="flex flex-col justify-end items-center w-[256px] h-[322px] absolute right-[1.878px] top-[13.369px] border-t-[14px] border-[#B4D3E9] bg-[#FFFFFF]">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/51097a258ae7a72e8b2db34a43d1eaa0862c2f8c"
                            alt="About 1"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Imagen superior, desplazada */}
                    <div className="flex flex-col justify-center items-center w-[206px] h-[240px] absolute left-[27.33px] bottom-[13.369px] border-t-[14px] border-[#3BA1E0]">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e701605bb13b2b148aef3595e2a094d0b9aa6703"
                            alt="About 2"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
