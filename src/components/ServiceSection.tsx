"use client";
import * as React from "react";
import { ServiceCard } from "./ServiceCard";

export const ServicesSection: React.FC = () => {
    return (
        <section className="p-16 bg-white max-md:p-8">
            <header className="max-w-[446.36px] mx-auto text-center mb-16">
                <h2 className="text-[34px] leading-[140%] font-bold font-barlow gradient-title">
                    Tailored <span className="text-inherit">Automation</span><br />
                    <span className="text-inherit">Solutions in South Florida</span>
                </h2>
                <p className="mt-2 text-[14px] leading-[28px] text-[#04162B] font-barlow font-normal">
                    We specialize in environmental control, productivity tracking, and
                    precise dosification, tailored to meet your unique needs.
                </p>
            </header>


            <div className="flex gap-4 justify-center mx-auto my-0 max-w-[1200px] max-md:flex-col max-md:items-center">
                <ServiceCard
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/21807ab8f7392c0dfcca63462720b1cd4d0e33ca"
                    altText="Sentinel"
                    title="Sentinel"
                    subtitle="Monitoring and Control"
                    description="Monitor and control your systems in real-time, optimizing performance and preventing issues."
                />
                <ServiceCard
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/460df8445b04e6ced3568c2765e68bf104f91614"
                    altText="Alchemy"
                    title="Alchemy"
                    subtitle="Dosage"
                    description="Automate the creation of precise and consistent mixtures to improve quality and reduce costs."
                />
                <ServiceCard
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/05036d923e8abba26cb754fc59aa119f5da350ee"
                    altText="Pulse"
                    title="Pulse"
                    subtitle="Productivity and Efficiency"
                    description="Analyze and enhance the efficiency of your production processes to increase output and minimize losses."
                />
            </div>
        </section>
    );
};
