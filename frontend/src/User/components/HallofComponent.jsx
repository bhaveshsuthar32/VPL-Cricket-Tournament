import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HallOfComponent() {
  return (
    <section className='h-auto py-14 '>
        <div className="grid sm:grid-cols-8 grid-cols-2 sm:ml-16 ml-0 ">
          <div className="sm:col-span-2 col-span-2 place-content-center ml-2 sm:ml-0">
            <h1 className='text-[33px] font-bold '>HALL OF FAME</h1>
            <h1 className='text-[40px] font-bold '></h1>
            <p className='font-bold text-slate-700 text-[20px] '>Heroes Of 2023</p>
            {/* <p className='font-semibold text-[17px]'>Heros 2023</p> */}

          </div>
          <div className="sm:col-span-6 col-span-2 grid grid-cols-8">
            <div className="sm:col-span-2 col-span-3 pt-14">
              <div className='h-[218px] ml-2  rounded-l-[17px]  p-2 text-slate-400 border-2'

                style={{
                  backgroundImage: 'url("https://www.shutterstock.com/image-vector/sport-cricket-indian-premier-league-600nw-2051585033.jpg")',
                  backgroundSize: 'cover', // Adjusts the size of the image
                  backgroundPosition: 'center', // Centers the image
                  backgroundRepeat: 'no-repeat' // Prevents the image from repeating
                }}
              >
                {/* <p className='font-bold text-[20px] '>VPL Cricket Tournament</p>
                <p className='font-semibold text-[17px]'>Heros 2023</p> */}
              </div>
            </div>
            <div className="sm:col-span-6 col-span-5 pt-14 bg-slate-300 rounded-tl-[30px]">
              <div className='sm:h-[282px] h-[200px] '>
                <Swiper

                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={100}
                  // navigation
                  speed={2000}
                  autoplay={{
                    delay: 2000,
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
                    <div className=" bg-base-100 w-[230px]  shadow-lg ">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcrUF1ECOSc6-xd9PKRVOpl1mk-md15_ajw&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Player of the tournament</p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Bhavesh Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M Dhandar 11</p>
                          <p className='text-right px-2 '>Run : 392</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] ">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0TKzq3dSSCEriaxhoDg_rfz2U8bMsFHqVw&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Batsman </p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Madan Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M Dhandar 11</p>
                          <p className='text-right px-2 '>Run : 432</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] ">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsi4Pxp0bIIs679AUTHJO6iZ5nRGacmPOjg&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Bowler </p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Arjun Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M Dhandar 11</p>
                          <p className='text-right px-2 '>Wicket : 12</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] ">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmBXZ6n6lDE409Hl8kPt6R7zUCijaiLslIw&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Filder</p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>Dilip Suthar</p>
                          <p className='text-right px-2 '>Bagra</p>
                          <p className='block'>M Dhandar 11</p>
                          <p className='text-right px-2 '>Catch : 12</p>

                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <div className=" bg-base-100 w-[230px] ">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsi4Pxp0bIIs679AUTHJO6iZ5nRGacmPOjg&usqp=CAU"
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>Best Filder</p>
                        <div className="grid grid-cols-2 mt-2">
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
    </section>
  )
}
