import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { products } from '../Data';

export default function Category() {

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
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <section id="works" className="py-6 bg-gray-100 px-40">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Product Category</h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-4">
                <div className="">
                    <img 
                    src={product.picture}
                    alt={product.name}
                    className="w-full h-64 object-contain "
                    />
                    <p>{product.name}</p>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
