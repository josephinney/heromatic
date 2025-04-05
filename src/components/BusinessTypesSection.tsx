"use client";
import * as React from "react";
import { BusinessTypeCard } from "./BusinessTypeCard";

export const BusinessTypesSection: React.FC = () => {
    const businessTypes = [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="73" height="72" viewBox="0 0 73 72" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2964 15.8256L37.6607 23.1188L31.9628 31.158C31.5514 31.7384 31.9664 32.5412 32.6778 32.5412C33.4532 32.5412 33.8466 33.474 33.3055 34.0293L26.4409 41.0731C25.2602 42.2847 26.1186 44.32 27.8105 44.32C29.6145 44.32 30.4151 46.5888 29.0107 47.7211L21.9885 53.3825C20.4932 54.5881 21.3457 57.0035 23.2664 57.0035H34.4814L34.4139 57.004H11.8778C9.37378 57.004 7.34389 54.9741 7.34389 52.4701V31.1214C7.34389 30.1187 6.5311 29.306 5.52847 29.306C3.68839 29.306 3.01584 26.8836 4.59255 25.935L21.5102 15.7564C22.9888 14.8668 24.8442 14.8936 26.2964 15.8256ZM14.6158 31.8787C13.4913 31.8787 12.5798 32.7902 12.5798 33.9147V38.1989C12.5798 39.3234 13.4913 40.2349 14.6158 40.2349H18.2014C19.3259 40.2349 20.2374 39.3234 20.2374 38.1989V33.9147C20.2374 32.7902 19.3259 31.8787 18.2014 31.8787H14.6158Z" fill="#0073FA"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5224 15.9174C47.3261 14.6888 49.1264 14.6888 49.9301 15.9174L59.8652 31.1056C60.2369 31.6739 59.8292 32.4278 59.1501 32.4278C58.4104 32.4278 58.0201 33.3038 58.5148 33.8538L65.0536 41.1236C66.1418 42.3336 65.2831 44.2607 63.6558 44.2607C61.9192 44.2607 61.1112 46.414 62.419 47.5565L69.1481 53.4347C70.5645 54.672 69.6894 57.004 67.8086 57.004H28.6438C26.7631 57.004 25.888 54.672 27.3044 53.4347L34.0334 47.5565C35.3413 46.414 34.5333 44.2607 32.7966 44.2607C31.1693 44.2607 30.3107 42.3335 31.3989 41.1236L37.9377 33.8538C38.4324 33.3038 38.0421 32.4278 37.3024 32.4278C36.6233 32.4278 36.2155 31.6739 36.5873 31.1056L46.5224 15.9174Z" fill="#0073FA"/>
          </svg>`,
            title: "Greenhouses",
            description:
                "Improve greenhouses with environmental control. Enhance growth with Sentinel and Alchemy.",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="63" height="62" viewBox="0 0 63 62" fill="none">
            <path d="M58.9043 1.9375C58.9043 1.26601 58.5566 0.642392 57.9854 0.289366C57.4142 -0.0636592 56.7009 -0.095752 56.1003 0.204549L25.1003 15.7045C24.4439 16.0327 24.0293 16.7036 24.0293 17.4375V29.6035L2.10411 36.9119C1.31294 37.1757 0.779297 37.916 0.779297 38.75V60.0625C0.779297 61.1326 1.64675 62 2.7168 62H37.5918C38.6618 62 39.5293 61.1326 39.5293 60.0625V54.25H43.4043V60.0625C43.4043 61.1326 44.2717 62 45.3418 62H56.9668C58.0369 62 58.9043 61.1326 58.9043 60.0625V1.9375ZM8.5293 42.625H12.4043V46.5H8.5293V42.625ZM16.2793 42.625H20.1543V46.5H16.2793V42.625ZM12.4043 50.375V54.25H8.5293V50.375H12.4043ZM16.2793 50.375H20.1543V54.25H16.2793V50.375ZM51.1543 11.625V15.5H47.2793V11.625H51.1543ZM31.7793 19.375H35.6543V23.25H31.7793V19.375ZM35.6543 27.125V31H31.7793V27.125H35.6543ZM31.7793 34.875H35.6543V38.75H31.7793V34.875ZM39.5293 34.875H43.4043V38.75H39.5293V34.875ZM35.6543 42.625V46.5H31.7793V42.625H35.6543ZM39.5293 42.625H43.4043V46.5H39.5293V42.625ZM51.1543 34.875V38.75H47.2793V34.875H51.1543ZM47.2793 42.625H51.1543V46.5H47.2793V42.625ZM39.5293 27.125H43.4043V31H39.5293V27.125ZM51.1543 27.125V31H47.2793V27.125H51.1543ZM43.4043 19.375V23.25H39.5293V19.375H43.4043ZM47.2793 19.375H51.1543V23.25H47.2793V19.375Z" fill="#0073FA"/>
          </svg>`,
            title: "Hotel Industry",
            description:
                "Enhance hotels with energy management. Reduce costs with Sentinel.",
        },

        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="63" height="62" viewBox="0 0 63 62" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.9524 11.5201C62.0558 11.9614 62.7793 13.0301 62.7793 14.2185V47.7817C62.7793 48.9701 62.0558 50.0387 60.9524 50.4801L32.8587 61.7176C32.1658 61.9947 31.3928 61.9947 30.6999 61.7176L2.60619 50.4801C1.50281 50.0387 0.779297 48.9701 0.779297 47.7817V14.2185C0.779297 13.0301 1.50281 11.9614 2.60619 11.5201L29.6206 0.714288L29.6361 0.708124L30.6999 0.282572C31.3928 0.00541936 32.1658 0.00541832 32.8587 0.282571L33.9228 0.708219L33.938 0.714288L60.9524 11.5201ZM55.6249 13.5626L31.7793 23.1008L7.93368 13.5626L4.6543 14.8743V16.4243L29.8418 26.4993V57.2008L31.7793 57.9758L33.7168 57.2008V26.4993L58.9043 16.4243V14.8743L55.6249 13.5626Z" fill="#0073FA"/>
          </svg>`,
            title: "Mass Production",
            description:
                "Optimize production with real-time monitoring. Reduce downtime with Pulse.",
        },

        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.725 9.19995C13.0858 9.19995 9.32501 12.9608 9.32501 17.5999V55.4C9.32501 60.0391 13.0858 63.8 17.725 63.8H55.525C60.1642 63.8 63.925 60.0392 63.925 55.4V17.6C63.925 12.9608 60.1642 9.19995 55.525 9.19995H17.725ZM57.1576 22.8969C58.6203 24.3596 58.6203 26.7312 57.1576 28.1939L35.9694 49.382C35.2187 50.1327 34.2287 50.4981 33.245 50.4783C32.2578 50.501 31.2634 50.1356 30.51 49.3823L19.7783 38.6506C18.3156 37.1879 18.3156 34.8163 19.7783 33.3535C21.2411 31.8908 23.6126 31.8908 25.0754 33.3535L33.2396 41.5178L51.8605 22.8969C53.3233 21.4341 55.6948 21.4341 57.1576 22.8969Z" fill="#0073FA"/>
          </svg>`,
            title: "And Much More",
            description:
                "Explore our comprehensive services tailored to meet various business needs.",
        },
        // Add other business types here...
    ];

    return (

        <section className="relative w-full max-w-[1916px] h-auto p-16 px-32 items-center gap-8 gradient-background max-md:p-8 max-sm:p-8">
            <h2 className="text-center mb-16">
                <span className="text-[#1C1C1C] font-barlow text-2xl font-bold leading-[33.6px]">
                    Our services adapt to various and diverse businesses,
                    <br />
                    such as{" "}
                </span>
                <span className="text-[#0073FA] font-barlow text-2xl font-bold leading-[33.6px] uppercase">
                    greenhouses
                </span>
            </h2>
            <div className="carousel-container flex gap-8 overflow-hidden">
            <div className="carousel-content flex gap-8 animate-marquee">
                    {/* Duplicamos las cartas 100 veces para mantener efecto visual del carrusel*/}
                    {businessTypes
                        .concat(
                            ...Array(100).fill(businessTypes)
                        )
                        .map((type, index) => (
                            <BusinessTypeCard
                                key={index}
                                icon={type.icon}
                                title={type.title}
                                description={type.description}
                            />
                        ))}
                </div>
            </div>
        </section>



    );
};
