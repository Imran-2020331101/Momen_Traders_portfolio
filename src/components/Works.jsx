import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { category } from '../Data';

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

function Works() {
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
    <section id="works" className="py-20 scroll-smooth snap-y">
      <div className="container mx-auto px-4 text-center relative snap-start">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Our Imports
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Explore our diverse portfolio of imported products, curated to meet the highest standards across industries.
        </p>

        <Slider {...settings}>
          {category.map((product, index) => (
            <div key={index} className="px-4 py-6 snap-center">
              <div
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                <div className="h-64 w-full bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="text-lg font-semibold text-gray-800 group-hover:text-blue-400 transition-colors duration-200 active:scale-95 transform"
                  >
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-6 relative animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-5 text-gray-400 hover:text-red-500 text-2xl"
              >
                &times;
              </button>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.title}
                className="w-full h-64 object-contain mb-6 rounded-xl"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedProduct.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="mt-6">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Works;
