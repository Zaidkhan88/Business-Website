'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';

const slides = [
  { src: "/images/image6.jpg", alt: "High-pressure valves" },
  { src: "/images/image7.jpg", alt: "Industrial valve manufacturing" },
  { src: "/images/image8.jpg", alt: "Custom valve solutions" },
  { src: "/images/image9.png", alt: "Valve technical specifications" },
];

export default function ClientCarousel() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.src}>
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}