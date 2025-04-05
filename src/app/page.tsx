import Image from "next/image";
import Navbar from "@/components/NavBar";
import right from '../../public/assets/right.svg'
import Circle from "../../public/assets/Circle 2 - Over black [PNG].svg"
import Divider from "../../src/components/Divider"
import * as React from "react";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServiceSection";
import { BusinessTypesSection } from "../components/BusinessTypesSection";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { AboutSection } from "../components/AboutSection";
import { FooterSection } from "../components/FooterSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Divider />
      <ServicesSection />
      <BusinessTypesSection />
      <WhyChooseSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
