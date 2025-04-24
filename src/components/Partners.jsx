import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { partner_logos } from '../Data';

function Partners() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <section id="works" className="py-10 bg-[#FDFBEE] px-6 sm:px-20 lg:px-40">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-10">Our Partners</h2>
      <div className="container mx-auto text-center">
        <Slider {...settings}>
          {partner_logos.map((product, index) => (
            <div key={index} className="p-4">
              <img
                src={product}
                alt={`partner-${index}`}
                className="h-32 w-full object-contain rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Partners;
