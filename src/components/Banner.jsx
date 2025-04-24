import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { banners } from '../Data';

// Custom Arrows
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-4xl text-blue-800 hover:text-blue-600"
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-4xl text-blue-800 hover:text-blue-600"
      onClick={onClick}
    >
      ❮
    </div>
  );
}

function Imports() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <section id="banners" className="scroll-smooth bg-gradient-to-b from-[#FDFBEE] to-white">
      <div className="relative">
        <Slider {...settings}>
          {banners.map((product, index) => (
            <div key={index} className="w-full h-[80vh] sm:h-[70vh] overflow-hidden">
              <img
                src={product}
                alt={`banner-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Imports;
