import React from 'react';
import image from '../assets/categories/Electronics_photo.jpg';
import chemicalImage from '../assets/categories/chemical.jpg';
import { mission } from '../Data';

function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-[#FDFBEE]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-20 tracking-tight">
          About Us
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[image, chemicalImage, image, image].map((imgSrc, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 overflow-hidden shadow-md transition duration-300"
            >
              <img
                src={imgSrc}
                alt={`Category ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto px-2 mb-25">
          <strong className="text-blue-600">Momen Traders</strong> is a dynamic import and distribution business committed to bringing
          quality products to the market. We specialize in sourcing and delivering a diverse range of goods including computer electronics,
          chemical products, garment accessories, and cutting-edge digital LED screens. Our focus is on reliability, efficiency, and
          building strong partnerships.
        </p>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {mission.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <img src={item.logo} alt={item.title} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
