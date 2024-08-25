import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HallofComponent() {
  return (
    <>
        <div className="grid grid-cols-8 ml-16 ">
          <div className="col-span-2  place-content-center ">
            <h1 className='text-[40px] font-bold '>HALL OF Fame</h1>
            <h1 className='text-[40px] font-bold '></h1>
            <p className='font-bold text-[20px] '>VPL Cricket Tournament</p>
            <p className='font-semibold text-[17px]'>Heros 2023</p>

          </div>
          <div className="col-span-6 grid grid-cols-8">
            <div className="col-span-2 pt-14">
              <div className='h-[218px] ml-2  rounded-l-[17px]  p-2 text-slate-800 '

                style={{
                  backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZINyY_ZxLMw8w7mjSJmPnQN4HMsuw36uo6XMS2iB_A1BGVnl7LiRRG2ovlazkh3ozGG0&usqp=CAU")',
                  backgroundSize: 'cover', // Adjusts the size of the image
                  backgroundPosition: 'center', // Centers the image
                  backgroundRepeat: 'no-repeat' // Prevents the image from repeating
                }}
              >
                {/* <p className='font-bold text-[20px] '>VPL Cricket Tournament</p>
                <p className='font-semibold text-[17px]'>Heros 2023</p> */}
              </div>
            </div>
            <div className="col-span-6  pt-14 bg-slate-300 rounded-tl-[30px]">
              <div className='h-[282px] '>
                <Swiper

                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={100}
                  // navigation
                  speed={1500}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper"
                  breakpoints={{
         
                    640: {
                      slidesPerView: 1,
                      slidesPerGroup: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      slidesPerGroup: 3, // Show 3 slides per group
                      spaceBetween: 20, // Add space between slides
                    },
         
                  }}
                >
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35 shadow-lg ">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcrUF1ECOSc6-xd9PKRVOpl1mk-md15_ajw&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Player of the tournament</p>
                        <div className="grid grid-cols-2">
                          <p className='block'>Bhavesh Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M Dhandar 11</p>
                          <p className='text-right px-2 '>Run : 392</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0TKzq3dSSCEriaxhoDg_rfz2U8bMsFHqVw&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Batsman </p>
                        <div className="grid grid-cols-2">
                          <p className='block'>Madan Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M Dhandar 11</p>
                          <p className='text-right px-2 '>Run : 432</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsi4Pxp0bIIs679AUTHJO6iZ5nRGacmPOjg&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Bowler </p>
                        <div className="grid grid-cols-2">
                          <p className='block'>Arjun Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M Dhandar 11</p>
                          <p className='text-right px-2 '>Wicket : 12</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmBXZ6n6lDE409Hl8kPt6R7zUCijaiLslIw&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Filder</p>
                        <div className="grid grid-cols-2">
                          <p className='block'>Dilip Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M Dhandar 11</p>
                          <p className='text-right px-2 '>Catch : 12</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] sm:35">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsi4Pxp0bIIs679AUTHJO6iZ5nRGacmPOjg&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Filder</p>
                        <div className="grid grid-cols-2">
                          <p className='block'>Dilip Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M Dhandar 11</p>
                          <p className='text-right px-2 '>Catch : 12</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                
                </Swiper>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
