import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { category } from '../Data';

// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-[#0f1a20] hover:text-blue-600"
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-[#0f1a20] hover:text-blue-600"
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
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="works" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 tracking-wide">Our Imports</h2>
        <Slider {...settings}>
          {category.map((product, index) => (
            <div key={index} className="px-6 py-6 ">
              <div
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer bg-white p-6 rounded-xl transition duration-300 shadow-lg border border-gray-200 hover:shadow-[0_10px_20px_rgba(15,26,32,0.2)] hover:scale-[1.03] transform"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-64 object-contain mb-4 rounded-2xl"
                />
                <h3 className="text-xl font-semibold text-[#0f1a20]">{product.title}</h3>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white max-w-md mx-4 md:mx-0 rounded-2xl shadow-xl p-6 relative animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
              >
                &times;
              </button>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.title}
                className="w-full h-60 object-contain mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedProduct.title}</h3>
              <p className="text-gray-600">{selectedProduct.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Works;
