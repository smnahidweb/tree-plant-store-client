import React from 'react';
import { motion } from "framer-motion";
const HeroImage = "https://i.ibb.co/LzBmCSYj/plant1.jpg"
const Hero = () => {
    const text = "Top-Rated Greener Home...";

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};
    return  (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12  gap-8">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-green-600 flex flex-wrap">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-[var(--TEXT-COLOR)] text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Welcome to <span className="text-green-600 font-semibold">Tree Plant Store</span> — 

Bring elegance and fresh air indoors with our top-rated, low-maintenance trees—loved by plant enthusiasts and perfect for any space.

        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
            Explore Trending Tips
          </button>
          <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition">
            Join Community
          </button>
        </motion.div>
      </div>

      {/* Right Side */}
      <motion.div
        className="md:w-1/2 relative"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <img
          src={HeroImage}
          alt="Green Arch Garden"
          className="rounded-3xl shadow-lg w-full h-auto object-cover"
        />

        {/* Top Tag */}
        <div className="absolute top-4 left-4 bg-white shadow px-4 py-2 rounded-full font-semibold text-green-700 flex items-center gap-2">
           <span>Indoor Tree</span>
        </div>

        {/* Bottom Tag */}
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow font-semibold flex items-center gap-2">
           <span>Top Rated Plant</span>
        </div>
      </motion.div>
    </section>
    );
};

export default Hero;