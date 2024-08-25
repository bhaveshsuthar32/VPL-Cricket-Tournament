import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TeamComponent() {
  return (
    <div className='sm:mx-16 mx-8'>
          <div className="md:mb-8 mb-4 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold">TEAMS</h1>
          </div>
          <Swiper

            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            // navigation
            speed={1500}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="mySwiper py-2"
            breakpoints={{
              240: {
                slidesPerView: 1.25,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.25,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.25,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3, // Show 3 slides per group
                spaceBetween: 20, // Add space between slides
              },
              1200: {
                slidesPerView: 3.25, // Show 3 full slides and 4th slide at 25%
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                  <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px]  lg:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                  <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px]  lg:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                  <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px]  lg:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                  <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px]  lg:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                  <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px]  lg:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>





            {/* <SwiperSlide>
              <div className='bg-green-200 p-8 rounded-lg'>
                <h2 className='text-2xl font-bold mb-4'>Slide-7</h2>
                <p>Slide seven content</p>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
  )
}
