import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gallary_images } from '../Data';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Custom Arrows (unchanged)
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/20 hover:bg-white/40 rounded-full p-2 transition"
      onClick={onClick}
    >
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-white/20 hover:bg-white/40 rounded-full p-2 transition"
      onClick={onClick}
    >
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div className="pt-8  px-4 relative -mt-2">
        <ul className="flex flex-wrap justify-center gap-1">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`
          rounded-full
          transition-all duration-200
          ${activeIndex === i ? 'w-3 h-3 bg-blue-500' : 'w-2 h-2 bg-white'}
          hover:scale-110
        `}
      />
    ),
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section id="works" className="py-16 bg-gradient-to-b from-[#FDFBEE] to-[#0f1a20]">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Photo Gallery</h2>

        <div className="relative ">
          <Slider {...settings}>
            {gallary_images.map((src, idx) => (
              <div key={idx} className="p-4">
                <div
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`gallery-${idx}`}
                    className="w-full h-60  sm:h-72 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white hover:text-red-500 transition"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Zoom"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
