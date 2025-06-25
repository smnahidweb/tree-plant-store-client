import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiShield, FiUsers } from 'react-icons/fi';
import { FaSeedling, FaLeaf, FaClock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const aboutImg = 'https://i.ibb.co/Kjjkwwjx/plant6.jpg';

  return (
    <section className="py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={aboutImg}
            alt="TreePlant Mission"
            className="rounded-2xl shadow-xl w-full"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-[var(--HEADING-TITLE-TEXT)]">
            Greening the Earth with <span className="text-green-600">TreePlant</span>
          </h2>
          <p className="text-[var(--TEXT-COLOR)] text-lg leading-relaxed">
            TreePlant is an eco-conscious initiative dedicated to making our world greener. We empower users to
            plant, share, and manage trees through a modern digital platform. With community at our core, we simplify
            the way you contribute to sustainability.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <div className="flex items-start gap-3">
              <FaSeedling className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-[var(--HEADING-TITLE-TEXT)]">Digital Tree Tracker</h4>
                <p className="text-[var(--TEXT-COLOR)] text-sm">Track your planted trees and growth records.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiUsers className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-[var(--HEADING-TITLE-TEXT)]">Community Driven</h4>
                <p className="text-[var(--TEXT-COLOR)] text-sm">Join thousands of tree lovers across the globe.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiShield className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-[var(--HEADING-TITLE-TEXT)]">Secure Contributions</h4>
                <p className="text-[var(--TEXT-COLOR)] text-sm">Your data and green efforts are protected.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaLeaf className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-[var(--HEADING-TITLE-TEXT)]">Eco Impact Stats</h4>
                <p className="text-[var(--TEXT-COLOR)] text-sm">See your contribution to a greener planet.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 border-t pt-12 text-center space-y-6"
      >
        <h3 className="text-3xl font-bold text-[var(--HEADING-TITLE-TEXT)]">Connect with Us</h3>
        <p className="text-[var(--TEXT-COLOR)] max-w-2xl mx-auto">
          Have a question or want to get involved in our green mission? Reach out to us anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 text-left max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <FiMapPin className="text-green-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-[var(--HEADING-TITLE-TEXT)]">Office Location</h4>
              <p className="text-[var(--TEXT-COLOR)] text-sm">Green Street, <br /> Dhaka 1207, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-[var(--HEADING-TITLE-TEXT)]">Contact Us</h4>
              <p className="text-[var(--TEXT-COLOR)] text-sm">+880 1731-640634</p>
              <p className="text-[var(--TEXT-COLOR)] text-sm">support@treeplant.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaClock className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-[var(--HEADING-TITLE-TEXT)]">Office Hours</h4>
              <p className="text-[var(--TEXT-COLOR)] text-sm">Saturday – Thursday: 9:00 AM – 6:00 PM</p>
              <p className="text-[var(--TEXT-COLOR)] text-sm">Friday: Closed</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
