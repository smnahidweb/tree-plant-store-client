import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';

const Banner = () => {
  const slides = [
    {
      title: 'Plant Care Tips',
      desc: 'Nurture your green companions with proper watering, light, and organic nourishment for vibrant growth.',
      image: 'https://i.ibb.co/Q7Hk5VX6/plant5.jpg',
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
          <SwiperSlide key={index} className="px-4 py-10 md:py-16 bg-base-100">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
              
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 px-2 sm:px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--HEADING-TITLE-TEXT)]">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg text-[var(--TEXT-COLOR)]">
                  {slide.desc}
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link to="/allPlants">
                    <button className="cursor-pointer mt-4 px-6 py-3 bg-green-500 hover:bg-green-800 text-white text-base rounded-lg transition duration-300">
                      Explore All Plants Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 px-2 sm:px-6">
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
