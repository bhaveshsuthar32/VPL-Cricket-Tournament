import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundSlider from '../components/backgroundSlider';
import TeamComponent from '../components/TeamComponent';

function Home() {
  return (
    <>
      <BackgroundSlider />
      <Navbar />
      <section className='main page h-[550px]'>
        {/* <div
          className="hero min-h-screen relative"
          style={{
            zIndex: 1,
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="hero-overlay mt-[-15px] bg-opacity-50"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-5 sm:text-5xl text-3xl font-bold">Vishwakarma Premier League</h1>
              <h1 className="mb-5 sm:text-xl text-lg font-bold">Start from 02-11-24 to 06-11-24</h1>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-4xl font-bold">VPL</h2>
          </div>
        </div> */}
      </section>

      {/* About us section  */}
      <section className='lg:h-[420px] h-[650px]'>
        <div className="py-2">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            {/* <h1 className="md:text-[40px] text-xl font-bold sm:leading-9">Welcome to Vishwakarma Premier League</h1> */}
            <div className='grid grid-cols-5 md:mt-10 mt-6'>
              <div className='sm:col-span-3 col-span-3'>
                <div className="sm:w-[600px] w-[230px] mx-auto">
                  <img src="https://as2.ftcdn.net/v2/jpg/03/10/60/17/1000_F_310601729_qiwUg48OztkDTVrTPJBIHVpUlXerujqb.jpg" />
                </div>
              </div>
              <div className='sm:col-span-2 col-span-3 text-center sm:pl-3 lg:pl-0 lg:mt-8'>
                <h1 className="md:text-[60px] text-xl font-bold sm:leading-9">PARTICIPATE</h1>
                <h1 className="md:text-[60px] text-xl mt-10 font-bold sm:leading-9">YOUR TEAM</h1>
                <h1 className="md:text-[60px] text-xl mt-10 mb-16 font-bold sm:leading-9">NOW</h1>
                <Link
                  to={'#'}
                  className="rounded-md bg-slate-800 mt-6 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  Register Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team section  */}
      <section className='md:h-[500px] h-[400px] py-16 z-0'>
        <TeamComponent />
      </section>

      {/* Rules and Regulation  */}
      <section className='bg-black text-white lg:h-[440px] h-[600px]'>
        <div className="sm:py-6 py-14 hidden sm:block">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            <div className='grid grid-cols-4 md:mt-0 mt-6'>
              <div className='sm:col-span-2 col-span-3 sm:pl-3 lg:pl-0 lg:mt-4'>
                <h1 className="md:text-[40px] text-xl font-bold">RULES & REGULATION</h1>
                <div className="px-6 py-5 grid grid-cols-8">
                  <div className='col-span-1 my-2'>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IbgBf-NJ0vZJLiSQmkbxuypYyl-B5K7C3g&s" />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-7 my-2'>
                    <h1 className='md:text-[20px] text-xl font-semibold'>
                      Team
                    </h1>
                    <div className=''>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>

                    </div>
                  </div>


                  <div className='col-span-1 my-2'>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://www.shutterstock.com/image-vector/cricket-stadium-audience-vector-background-600nw-2367285537.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-7 my-2'>
                    <h1 className='md:text-[20px] text-xl font-semibold'>
                      Ground
                    </h1>
                    <div className=''>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>

                    </div>
                  </div>

                  <div className='col-span-1 my-2'>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHmtFv-O4lGVu3GJxK5diDmk3EbP5_If-jg&s" />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-7 mt-2 mb-12'>
                    <h1 className='md:text-[20px] text-xl font-semibold'>
                      Match
                    </h1>
                    <div className=''>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>

                    </div>
                  </div>

                </div>
                <Link
                  to={'#'}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
                >
                  View Rules & Regulation &#11166;
                </Link>
              </div>
              <div className='sm:col-span-2 col-span-3'>
                <div className="sm:w-[530px] w-[230px] mx-auto">
                  <img src="https://media.istockphoto.com/id/1434729638/photo/red-leather-cricket-ball-on-a-cricket-bat-front-view.jpg?s=1024x1024&w=is&k=20&c=lQpRqjn4SUZfgAOL73N6MFnqTgaITkIZVLn7VDGAXCY=" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:py-16 py-14 block sm:hidden">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            <h1 className="md:text-[40px] text-xl font-bold text-center">Rules & Regulation</h1>
            <div className='grid grid-cols-3 border-2 md:mt-10 mt-6'>
              <div className='sm:col-span-1 col-span-3 border-2 '>
                <div className="sm:w-60 w-[230px] mx-auto">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvQG3dC3PhHj_H1ybPG9GYc0GdftNb1qrQQ&s  " />
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


      {/* sponser Section  */}
      <section className='bg-base-500 md:h-[550px] h-[400px] py-16'>
        <div className='mx-16'>
          <div className="mx-auto md:mb-16 mb-4 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold text-center">Participate Teams</h1>
          </div>
          <Swiper

            modules={[Navigation, Pagination, Autoplay]}

            spaceBetween={40}
            // navigation
            speed={1000}
            autoplay={{
              delay: 1000, // Set the delay to 1000ms (1 second)
              disableOnInteraction: false, // Continue autoplay after user interactions
            }}
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

      <section className='bg-sky-300 h-auto border-2'>
        <div className="grid grid-cols-8 ml-16 border-2 border-black">
          <div className="col-span-2 border-2 place-content-center ">
            <h1 className='text-[40px] font-bold '>HALL OF Fame</h1>
            <h1 className='text-[40px] font-bold '></h1>
            <p className='font-bold text-[20px] '>VPL Cricket Tournament</p>
            <p className='font-semibold text-[17px]'>Heros 2023</p>

          </div>
          <div className="col-span-6 grid grid-cols-8 border-2">
            <div className="col-span-2 border-2 border-red-700 pt-14">
              <div className='h-[190px] ml-2 border-2 rounded-l-[17px]  p-2 text-slate-800 '

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
            <div className="col-span-6 border-2 border-purple-600 pt-14">
              <div className='h-[240px] border-2 '></div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='bg-base-200 h-auto py-3'>
        <div className='mx-16'>
          
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
      </section> */}


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