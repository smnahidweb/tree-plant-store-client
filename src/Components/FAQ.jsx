import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TreePlant and what do you offer?",
      answer:
        "TreePlant is an eco-conscious platform dedicated to promoting greenery and sustainability. We offer a wide range of indoor and outdoor plants, plant care essentials, and educational resources to help you create and maintain a healthy green space.",
    },
    {
      question: "How do I place an order for plants?",
      answer:
        "Simply browse our plant collections, add your desired items to the cart, and proceed to checkout. You can select your preferred delivery date and method during the checkout process.",
    },
    {
      question: "Do you offer nationwide delivery?",
      answer:
        "Yes, we deliver across Bangladesh. Delivery times and charges may vary based on your location and the type of plants ordered. We ensure careful packaging to keep your plants healthy and fresh.",
    },
    {
      question: "How can I take care of the plants I purchase?",
      answer:
        "Each plant includes a care guide tailored to its specific needs. You can also visit our Plant Care section for expert tips on watering, sunlight, soil types, and pest control.",
    },
    {
      question: "Can I return or exchange a plant?",
      answer:
        "Due to the nature of live plants, we currently do not offer returns. However, if your plant arrives damaged or unhealthy, please contact us within 24 hours with a photo, and we’ll do our best to resolve the issue.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 px-6  text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-[var(--HEADING-TITLE-TEXT)]">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-[var(--TEXT-COLOR)]  mb-10">
          Find answers to common questions about TreePlant, our services, and your order.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-xl shadow-sm transition-all"
            >
              <button
                className="w-full text-left px-6 py-4 font-medium flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[var(--HEADING-TITLE-TEXT)]">{faq.question}</span>
                <span className="text-[var(--TEXT-COLOR)] text-xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-[var(--TEXT-COLOR)]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
