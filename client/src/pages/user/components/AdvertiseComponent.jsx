import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default function AdvertiseComponent() {
  const images = [
    
    "https://png.pngtree.com/png-clipart/20210717/ourmid/pngtree-icc-cricket-world-cup-motion-png-image_3606302.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQQNYD0y1RGIeDromFg0KbjpLmAC2OLg1CA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQva1HfjXhcvvHtXe6tgf_mIXj5mJLypf63Kw&s",
    "https://cdn.vectorstock.com/i/500p/14/18/hot-cricket-ball-fire-logo-silhouette-vector-44821418.jpg",
    "https://png.pngtree.com/png-clipart/20221229/original/pngtree-cricket-logo-png-image_8823326.png",
    "https://i.pinimg.com/originals/9d/e3/f9/9de3f928d76f012aebbc4faa0b19f92d.png"
  ];

  return (
    <section className='h-auto py-8 mt-14 sm:mt-0'>
      <div className="pb-16 max-w-4xl">
        <h1 className="md:text-[40px] mx-8 text-xl font-bold">ADVERTISERS</h1>
      </div>
      <div className='sm:mx-8 mx-4'>
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            speed={1500}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="card card-compact bg-transparent w-[150px] md:w-40 border-2">
                  <img
                    src={image}
                    alt={`Img ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}