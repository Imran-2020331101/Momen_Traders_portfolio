import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gallary_images } from '../Data';

function Gallery() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
    <section id="works" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Photo Gallery</h2>
        <Slider {...settings}>
          {gallary_images.map((product, index) => (
            <div key={index} className="p-4">
                <div className="bg-white rounded-md shadow-md">
                  <img 
                    src={product}
                    alt="image of electronics"
                    className="w-full h-64 object-contain "
                    />
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Gallery;