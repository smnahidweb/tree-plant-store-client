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
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className=" py-10 px-4 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
             
              <div className="md:w-1/2 text-left space-y-4">
                <h2 className="text-3xl md:text-5xl  font-bold text-[var(--HEADING-TITLE-TEXT)]">{slide.title}</h2>
                <p className=" text-[var(--TEXT-COLOR)]  md:text-lg">{slide.desc}</p>
                <button className="mt-4 px-6 py-2  bg-green-700 hover:bg-green-800 text-white rounded-lg transition">
                  Explore Now
                </button>
              </div>

             
              <div className="md:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[250px] md:h-[400px] object-cover rounded-xl shadow-md"
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