import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const Banner = () => {
    const slides = [
    {
      title: 'Plant Care Tips',
      desc: 'Nurture your green companions with proper watering, light, and organic nourishment for vibrant growth.',
      image: 'https://i.ibb.co/gLbP0Z31/plants12.jpg',
    },
    {
      title: 'Indoor Plant Varieties',
      desc: 'Explore modern indoor plants like snake plants, ZZ plants, and more that fit perfectly into your lifestyle.',
      image: 'https://i.ibb.co/LzBmCSYj/plant1.jpg',
    },
    {
      title: 'Seasonal Planting Guide',
      desc: 'Plan your gardening around the seasons to ensure optimal growth and blooming all year round.',
      image: 'https://i.ibb.co/FL8QGb8n/plant2.jpg',
    },
  ];

  return (
    <div className="w-full">
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000 }}
    loop={true}
    className="w-full"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index} className="px-4 py-8 sm:py-10 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          
    
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 px-2 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--HEADING-TITLE-TEXT)]">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[var(--TEXT-COLOR)]">
              {slide.desc}
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="mt-2 sm:mt-4 px-5 py-2 sm:px-6 sm:py-3 bg-green-700 hover:bg-green-800 text-white text-sm sm:text-base rounded-lg transition">
                Explore Now
              </button>
            </div>
          </div>

       
          <div className="w-full lg:w-1/2 px-2 sm:px-6">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  );
};

export default Banner;