import React from 'react'
import Navbar from "@/components/NavBar";
import HeroSection from './HeroSection';
import Divider from '@/components/Divider';
import Apps from './Apps';
import InputDesign from './InputDesign';
import AutomationShowcase from './AutomationShowcase';
import ExpertiseSection from './ExpertiseSection';
import FooterSection from '@/components/FooterSection';

function page() {
  return (
    <>
      <HeroSection/>
      <Divider />
      <Apps/>
      <InputDesign/>
      <AutomationShowcase/>
      <ExpertiseSection/>
      <FooterSection/>
    </>
  )
}

export default page