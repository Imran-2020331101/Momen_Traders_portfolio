import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { banners } from '../Data';

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
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };

  return (
    <section id="banners" className="scroll-smooth ">
      <div className="container mx-auto relative snap-start">
        <Slider {...settings}>
          {banners.map((product, index) => (
            <div key={index} >
              <div className="overflow-hidden">
                <img
                    src={product}
                    alt='banners'
                    className="object-fill h-full w-full"
                  />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Imports;
