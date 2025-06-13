import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import AboutPreview from '../components/Aboutpreview'
import WhyChooseUs from '../components/WhyChooseUs'
import ProductRange from '../components/ProductRange'
import VisionMissionSection from '../components/VisionMissionSection'

function Home() {
  return (
    <>
     <HeroCarousel/>
     <AboutPreview/>
     <WhyChooseUs/>
     <ProductRange/>
     <VisionMissionSection/>
     </>
  )
}

export default Home
