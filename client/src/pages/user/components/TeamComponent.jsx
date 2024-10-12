// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TeamComponent() {
  return (
    <section className='lg:h-[500px] h-[400px] py-16 z-0 mt-12 '>
      <div className='sm:mx-16 mx-8'>
        <div className="md:mb-8 mb-4 max-w-4xl">
          <h1 className="md:text-[40px] text-xl font-bold">TEAMS</h1>
        </div>
        <Swiper

          modules={[Navigation, Pagination]}
          spaceBetween={40}
          // navigation
          speed={1500}
          // pagination={{ clickable: true }}
          className="mySwiper py-2"
          breakpoints={{
            240: {
              slidesPerView: 1.25,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.25,
              slidesPerGroup: 1,
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70GjUXYF6x2SqqYix7Vo55cIahtINhrZWZg&s"
                  alt="Img"
                  className="w-[280px] h-[140px] sm:h-[170px]"
                />
              </figure>
              <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">M Dhandhar 11</h2>
                <p className='text-[14px]  lg:text-[17px]'>Bagra</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkVu5yEkHS1vzcumLcdiUQrzaVQ7jFxfjEg&s"
                  alt="Img"
                  className="w-[280px] h-[140px] sm:h-[170px]"
                />
              </figure>
              <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">ABS Chandna</h2>
                <p className='text-[14px]  lg:text-[17px]'>Chandna</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MZUXIKvSC2-tWQtfoslJQElx8d85oBn1EQ&s"
                  alt="Img"
                  className="w-[280px] h-[140px] sm:h-[170px]"
                />
              </figure>
              <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">Apeswar Adwara</h2>
                <p className='text-[14px]  lg:text-[17px]'>Adwara</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-glU_v4h1PR9jzM449zBPIc46CXTsqQA8g&s"
                  alt="Img"
                  className="w-[280px] h-[140px] sm:h-[170px]"
                />
              </figure>
              <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">Suthar Challenger Akoli</h2>
                <p className='text-[14px]  lg:text-[17px]'>Akoli</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70GjUXYF6x2SqqYix7Vo55cIahtINhrZWZg&s"
                  alt="Img"
                  className="w-[280px] h-[140px] sm:h-[170px]"
                />
              </figure>
              <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">M Dhandhar 11</h2>
                <p className='text-[14px]  lg:text-[17px]'>Bagra</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkVu5yEkHS1vzcumLcdiUQrzaVQ7jFxfjEg&s"
                  alt="Img"
                  className="w-[280px] h-[140px] sm:h-[170px]"
                />
              </figure>
              <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">ABS Chandna</h2>
                <p className='text-[14px]  lg:text-[17px]'>Chandna</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MZUXIKvSC2-tWQtfoslJQElx8d85oBn1EQ&s"
                  alt="Img"
                  className="w-[280px] h-[140px] sm:h-[170px]"
                />
              </figure>
              <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">Apeswar Adwara</h2>
                <p className='text-[14px]  lg:text-[17px]'>Adwara</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className="card card-compact bg-base-100 lg:w-[300px] w-60 sm:35 shadow-lg rounded-lg">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-glU_v4h1PR9jzM449zBPIc46CXTsqQA8g&s"
                  alt="Img"
                  className="w-[280px] h-[140px] sm:h-[170px]"
                />
              </figure>
              <div className="p-2  md:p-6 leading-4 h-[70px] lg:h-[90px] my-0">
                <h2 className="lg:card-title font-semibold text-[14px] lg:text-[18px] mt-0">Suthar Challenger Akoli</h2>
                <p className='text-[14px]  lg:text-[17px]'>Akoli</p>
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
    </section>
  )
}
