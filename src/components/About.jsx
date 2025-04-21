import React from 'react';
import image from '../assets/categories/Electronics_photo.jpg'
import chemicalImage from '../assets/categories/chemical.jpg'

function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"> {/* Grid layout for images */}
          <img src={image} alt="Electronics" className="rounded-lg shadow-md" />
          <img src={chemicalImage} alt="Chemicals" className="rounded-lg shadow-md" />
          <img src={image} alt="Garments" className="rounded-lg shadow-md" />
          <img src={image} alt="LED Screens" className="rounded-lg shadow-md" />
        </div>
        <p className="text-lg text-gray-700">
          Momen Traders is a dynamic import and distribution business committed to bringing quality products to the market.
          We specialize in sourcing and delivering a diverse range of goods, including computer electronics, chemical products,
          garments accessories, and cutting-edge digital LED screens. Our focus is on reliability, efficiency, and building
          strong partnerships.
        </p>
      </div>
    </section>
  );
}

export default About;