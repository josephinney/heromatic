// "use client";
// import * as React from "react";
// import { FeatureItem } from "./FeatureItem";
// import Image from "next/image";
// import image from '../../public/assets/image.png'

// export const WhyChooseSection: React.FC = () => {
//     const features = [
//         "Adapt to your current IoT devices",
//         "Control environments and actuators remotely",
//         "Create precise mixtures automatically.",
//         "Increase productivity with batch cycles.",
//         "Monitor and improve production efficiency.",
//     ];

//     return (
//         <section className="p-16 bg-white max-md:p-8">
//             <div className="flex gap-8 justify-center max-sm:flex-col">
//                 <div className="max-w-[500px]">
//                     <h2 className="mb-8 text-2xl font-bold text-neutral-700 uppercase">
//                         Why Choose Heromatic?
//                     </h2>
//                     <div className="flex flex-col gap-6 mb-12">
//                         {features.map((feature, index) => (
//                             <FeatureItem key={index} text={feature} />
//                         ))}
//                     </div>
//                     <button className="flex gap-2 items-center px-4 py-2 text-2xl bg-white border-t-2 border-solid cursor-pointer border-[none] border-t-sky-400 text-neutral-950">
//                         <span>More Info</span>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 25" fill="none">
//                             <path d="M7.55837 7.58539C6.60091 6.62793 6.60091 5.07558 7.55837 4.11812C8.51583 3.16066 10.0682 3.16066 11.0256 4.11812L17.6003 10.6928C18.5577 11.6502 18.5577 13.2026 17.6003 14.16C16.6428 15.1175 15.0905 15.1175 14.133 14.16L7.55837 7.58539Z" fill="#0C0D0D" />
//                             <path d="M7.55837 17.2147C6.60091 18.1721 6.60091 19.7245 7.55837 20.6819C8.51583 21.6394 10.0682 21.6394 11.0256 20.6819L17.6003 14.1073C18.5577 13.1498 18.5577 11.5975 17.6003 10.64C16.6428 9.68256 15.0905 9.68256 14.133 10.64L7.55837 17.2147Z" fill="#0C0D0D" />
//                         </svg>
//                     </button>
//                 </div>
                
//                 <div className="w-[577.051px] h-[440.396px] flex-shrink-0">
//                     <img src="https://s3-alpha-sig.figma.com/img/8b1d/23e5/ab1743ca9b168eb7b3ac6da52325f2e0?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bwfI52Bt69i4y0CEPGTjWrgToFVrUCn0mTQ0iQ5eTm7INKIan5o4XMuEf2iqggG31NEqeO3B8Rqf08TXUf40NVmjPV5mmoEFuNlp6f3JdeOhu1NxvV80oZ5qqGJBgXeT~mX992fNJ~Di~xRUKuxpajK48j31H4F0B8ZOl5SgjeQZHFB5rdqYmZK8EBggnIuKeihNqkfOXooduR6bzQb0hb43lIGBASkmzqODEyylvqpOrCHUFcJ2W6oXvobZnoKYVv6Duks0~s0ukuMbABA3ssA1Lk0CGN49TL-F0BJ3U7U0FekiAJOV0MXgqipm-X61YNtyTQHpAHaK70S-C4U6nw__" alt="Features" className="max-w-full h-auto" />
//                 </div>
//             </div>
            

//         </section>
//     );
// };

"use client";
import * as React from "react";
import { FeatureItem } from "./FeatureItem";
import { useIsMobile } from "@/hooks/useIsMobile"; // ajusta la ruta si es necesario
import Image from "next/image";
import image from "../../public/assets/image.png";

export const WhyChooseSection: React.FC = () => {
  const isMobile = useIsMobile();

  const features = [
    "Adapt to your current IoT devices",
    "Control environments and actuators remotely",
    "Create precise mixtures automatically.",
    "Increase productivity with batch cycles.",
    "Monitor and improve production efficiency.",
  ];

  return (
    <section className={`${isMobile ? "p-0" : "p-16 max-md:p-8"} bg-white`}>
      <div
        className={`flex gap-8 justify-center ${
          isMobile ? "flex-col items-center text-center" : "flex-row max-sm:flex-col"
        }`}
      >
        {/* Imagen */}
        {isMobile && (
          <div className="w-full">
            <Image
              src={image}
              alt="Features"
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        {/* Texto */}
        <div className={`${isMobile ? "px-4" : "max-w-[500px]"}`}>
          <h2 className="mb-8 text-2xl font-bold text-neutral-700 uppercase">
            Why Choose Heromatic?
          </h2>
          <div className="flex flex-col gap-6 mb-12">
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </div>
          <button className="flex gap-2 items-center px-4 py-2 text-2xl bg-white border-t-2 border-solid cursor-pointer border-[none] border-t-sky-400 text-neutral-950 mx-auto">
            <span>More Info</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M7.55837 7.58539C6.60091 6.62793 6.60091 5.07558 7.55837 4.11812C8.51583 3.16066 10.0682 3.16066 11.0256 4.11812L17.6003 10.6928C18.5577 11.6502 18.5577 13.2026 17.6003 14.16C16.6428 15.1175 15.0905 15.1175 14.133 14.16L7.55837 7.58539Z"
                fill="#0C0D0D"
              />
              <path
                d="M7.55837 17.2147C6.60091 18.1721 6.60091 19.7245 7.55837 20.6819C8.51583 21.6394 10.0682 21.6394 11.0256 20.6819L17.6003 14.1073C18.5577 13.1498 18.5577 11.5975 17.6003 10.64C16.6428 9.68256 15.0905 9.68256 14.133 10.64L7.55837 17.2147Z"
                fill="#0C0D0D"
              />
            </svg>
          </button>
        </div>

        {/* Imagen solo en escritorio */}
        {!isMobile && (
          <div className="w-[577.051px] h-[440.396px] flex-shrink-0">
            <Image
              src={image}
              alt="Features"
              className="max-w-full h-auto"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
};
