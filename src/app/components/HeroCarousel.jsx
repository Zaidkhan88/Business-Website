'use client'; // if using this in an app directory

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
// import image from '..'

import 'swiper/css';
import 'swiper/css/autoplay';

const slides = [
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.png",
  // Add more images here
];

const HeroCarousel = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src={src}
                alt={`Hero banner image ${index + 1}`}
                fill
                priority={index === 0} // load first image eagerly
                className="object-cover"
                
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
