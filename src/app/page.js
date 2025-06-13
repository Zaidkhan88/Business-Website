// app/page.js
import HeroCarousel from './components/HeroCarousel';

import VisionMissionSection from './components/VisionMissionSection';
import ProductRange from './components/ProductRange';
import WhyChooseUs from './components/WhyChooseUs';
import AboutPreview from './components/Aboutpreview';

export default function Home() {
  return (
    <main>
      <HeroCarousel/>
     <AboutPreview/>
     <WhyChooseUs/>
     <ProductRange/>
     <VisionMissionSection/>
      {/* Add other sections */}
    </main>
  );
}