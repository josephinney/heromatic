import React from 'react'
import HeroSection from './HeroSection'
import Divider from '@/components/Divider'
import UniqueApproach from './UniqueApproach'
import PhotoBanner from './PhotoBanner'
import OurGoal from './OurGoal'
import FooterSection from '@/components/FooterSection'

function page() {
  return (
    <>
      <HeroSection/>
      <Divider />
      <UniqueApproach/>
      <PhotoBanner/>
      <OurGoal/>
      <FooterSection/>
    </>
    
  )
}

export default page