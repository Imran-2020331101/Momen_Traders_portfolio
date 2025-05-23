import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { category,productData } from '../Data';
import ProductList from './ProductList';

// Custom Arrows
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-4xl text-blue-800 hover:text-blue-600"
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-4xl text-blue-800 hover:text-blue-600"
      onClick={onClick}
    >
      ❮
    </div>
  );
}

function Imports() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="works" className="p-20 bg-gradient-to-b from-[#f8f6e1] to-white scroll-smooth snap-y">
      <div className="container mx-auto px-4 text-center relative snap-start">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 tracking-tight">
          Our Imports
        </h2>
        <p className="text-gray-600 mb-15 text-lg max-w-2xl mx-auto">
          Explore our diverse portfolio of imported products, curated to meet the highest standards across industries.
        </p>

        <ProductList products={category} />
      </div>
    </section>
  );
}

export default Imports;
