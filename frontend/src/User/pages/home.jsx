import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import {Img1} from "../../assets/img/img1.jpg"
// import {abc} from "../../assets/img/img11.jpg"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />

      <section className='main page'>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://wallpapers.com/images/hd/cricket-ground-background-g14rvtnuqhdd23pl.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1, // Set z-index to 1 to ensure it stays above the background
            position: "relative", // Change to relative
            width: "100%",
            height: "100%",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 sm:text-5xl text-3xl font-bold">Vishwakarma Premier League</h1>
              <h1 className="mb-5 sm:text-xl text-lg font-bold">Start from 02-11-24 to 06-11-24</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Register Your Team</button>
            </div>
          </div>
        </div>
      </section>

      {/* About us section  */}
      <section className='bg-base-200 lg:h-[480px] h-[600px]'>
        <div className="py-16   ">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            <h1 className="md:text-[40px] text-xl font-bold text-center sm:leading-9">Welcome to Vishwakarma Premier League</h1>
            <div className='grid grid-cols-3 border-2 md:mt-10 mt-6'>
              <div className='sm:col-span-1 col-span-3 border-2 '>
                <div className="w-60 mx-auto">
                  <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201909/vishwakarma-x378.png?w3m5BcVLlkMOITAiy9dlWoXI4UIXpOpO" />
                </div>
              </div>
              <div className='sm:col-span-2 col-span-3 border-2 sm:pl-3 lg:pl-0 lg:mt-4'>
                <p className="">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maiores, suscipit quasi optio delectus cupiditate eius nesciunt fugit assumenda! Cum vero tenetur non!
                </p>
                <p className="md:my-3 my-2">
                  The tournament not only aims to crown a champion but also to provide a platform for players to gain invaluable experience and exposure. With rigorous training and preparation, teams are set to compete fiercely, promising an entertaining and memorable event for players and spectators alike. Join us in celebrating the spirit of cricket and witness the emergence of future stars!
                </p>
               
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sponser section  */}
      <section className='bg-base-500 md:h-[550px] h-[400px] py-16'>
        <div className='mx-16'>
          <div className="mx-auto md:mb-16 mb-4 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold text-center">Tournament Sponsers</h1>
          </div>
          <Swiper

            modules={[Navigation, Pagination]}
            spaceBetween={40}
            // navigation
            speed={1500}
            // pagination={{ clickable: true }}
            className="mySwiper py-2"
            breakpoints={{
              640: { // For mobile devices (less than 640px)
                slidesPerView: 1, // Show 1 slide
              },
              768: { // For tablets (between 640px and 768px)
                slidesPerView: 2, // Show 2 slides
              },
              1024: { // For desktops (768px and larger)
                slidesPerView: 3, // Show 3 slides
              },
            }}
          >
            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-35  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30 sm:w-15  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
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

      {/* Rules and Regulation  */}
      <section className='bg-base-200 lg:h-[480px] h-[600px]'>
        <div className="py-16   ">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            <h1 className="md:text-[40px] text-xl font-bold text-center">Rules & Regulation</h1>
            <div className='grid grid-cols-3 border-2 md:mt-10 mt-6'>
              <div className='sm:col-span-2 col-span-3 border-2 sm:pl-3 lg:pl-0 lg:mt-4'>
                <p className="">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maiores, suscipit quasi optio delectus cupiditate eius nesciunt fugit assumenda! Cum vero tenetur non!
                </p>
                <p className="md:my-3 my-2">
                  The tournament not only aims to crown a champion but also to provide a platform for players to gain invaluable experience and exposure. With rigorous training and preparation, teams are set to compete fiercely, promising an entertaining and memorable event for players and spectators alike. Join us in celebrating the spirit of cricket and witness the emergence of future stars!
                </p>
               
              </div>
              <div className='sm:col-span-1 col-span-3 border-2 '>
                <div className="w-60 mx-auto">
                  <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201909/vishwakarma-x378.png?w3m5BcVLlkMOITAiy9dlWoXI4UIXpOpO" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Teams Section  */}
      <section className='bg-base-500 md:h-[550px] h-[400px] py-16'>
        <div className='mx-16'>
          <div className="mx-auto md:mb-16 mb-4 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold text-center">Participate Teams</h1>
          </div>
          <Swiper

            modules={[Navigation, Pagination]}
            spaceBetween={40}
            // navigation
            speed={1500}
            // pagination={{ clickable: true }}
            className="mySwiper py-2"
            breakpoints={{
              640: { // For mobile devices (less than 640px)
                slidesPerView: 1, // Show 1 slide
              },
              768: { // For tablets (between 640px and 768px)
                slidesPerView: 2, // Show 2 slides
              },
              1024: { // For desktops (768px and larger)
                slidesPerView: 3, // Show 3 slides
              },
            }}
          >
            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide className=''>
              <div className="card card-compact bg-base-100 lg:w-96 w-30  shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Img" />
                </figure>
                <div className="p-4 md:p-6 leading-3">
                  <h2 className="card-title text-[14px] md:text-[18px] mt-0">Mandan Suthar</h2>
                  <p className='text-[14px] md:text-[17px]'>Bagra</p>
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

      {/* Hall of fame */}
      <section className='bg-base-200 h-auto py-16'>
        <div className='mx-16'>
          <div className="mx-auto pb-16 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold text-center">Hall of Fame</h1>
          </div>
          <div>
            <h1 className="md:text-[40px] text-xl font-bold py-8">Heroes of 2023</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="card card-compact bg-transparent md:w-40">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="rounded-full w-full h-auto"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="font-bold">Dinesh Suthar</h3>
                  <p className="text-gray-500">Man of The Series</p>
                </div>
              </div>
              <div className="card card-compact bg-transparent md:w-40">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="rounded-full w-full h-auto"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="font-bold">Dinesh Suthar P</h3>
                  <p className="text-gray-500">Best Batsman</p>
                </div>
              </div>
              <div className="card card-compact bg-transparent md:w-40">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="rounded-full w-full h-auto"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="font-bold">Arjun Suthar</h3>
                  <p className="text-gray-500">Best Bowler</p>
                </div>
              </div>
              <div className="card card-compact bg-transparent md:w-40">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="rounded-full w-full h-auto"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="font-bold">Dilip Suthar</h3>
                  <p className="text-gray-500">Best Fielder</p>
                </div>
              </div>
              <div className="card card-compact bg-transparent md:w-40">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="rounded-full w-full h-auto"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="font-bold">Dilip Suthar</h3>
                  <p className="text-gray-500">Best Fielder</p>
                </div>
              </div>
              <div className="card card-compact bg-transparent md:w-40">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Img"
                    className="rounded-full w-full h-auto"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="font-bold">Dilip Suthar</h3>
                  <p className="text-gray-500">Best Fielder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Advertise Section  */}
      <section className='bg-base-500 py-16'>
        <div className='mx-16'>
          <div className="mx-auto pb-16 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold text-center">Advertisement</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 3"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 4"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 5"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 6"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 6"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 6"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 6"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 6"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 6"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="advertisement">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Ad 6"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;