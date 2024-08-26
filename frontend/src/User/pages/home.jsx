import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundSlider from '../components/backgroundSlider';
import TeamComponent from '../components/TeamComponent';
import SponserComponent from '../components/SponserComponent';
import AdvertiseComponent from '../components/AdvertiseComponent';
import HallOfComponent from '../components/HallofComponent';

function Home() {
  return (
    <>
      <BackgroundSlider />
      <Navbar />
      <section className='main page h-[360px] sm:h-[550px]'>
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
        <div className="absolute lg:bottom-8 sm:bottom-[500px] bottom-80 lg:left-8 text-slate-200 sm:text-white">
          <p className="sm:text-[80px] text-[40px] font-bold p-0">VPL SEASON-3</p>
          <div className='sm:ms-[20px] ms-[8px]'>
            <h3 className='text-[20px] sm:[30px] font-bold'>VENUE - BAGRA</h3>
            <h3 className='text-[18px] lg:[50px] font-bold'>FROM 02-11-2024 TO 06-11-2024</h3>
          </div>
        </div>
      </section>

      {/* Register section  */}
      <section className='lg:h-[420px] h-[190px] sm:mt-0 mt-[70px]  '>
        <div className="py-2 border-2 border-black">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            {/* <h1 className="md:text-[40px] text-xl font-bold sm:leading-9">Welcome to Vishwakarma Premier League</h1> */}
            <div className='grid grid-cols-5 md:mt-10 mt-6'>
              <div className='sm:col-span-3 col-span-2'>
                <div className="sm:w-[600px] w-[180px] mx-auto">
                  <img src="https://as2.ftcdn.net/v2/jpg/03/10/60/17/1000_F_310601729_qiwUg48OztkDTVrTPJBIHVpUlXerujqb.jpg" />
                </div>
              </div>
              <div className='sm:col-span-2 col-span-3 text-center sm:pl-3 lg:pl-0 lg:mt-8 text-[16px] leading-[25px] sm:leading-[70px] ml-6 sm:ml-0'>
                <h1 className="md:text-[60px]  font-bold ">PARTICIPATE</h1>
                <h1 className="md:text-[60px]  font-bold ">YOUR TEAM</h1>
                <h1 className="md:text-[60px]  font-bold mb-2 sm:mb-6 ">NOW</h1>
                <Link
                  to={'#'}
                  className="rounded-md bg-slate-800 mt-6 sm:px-6 px-3 sm:py-3 py-[5px] lg:text-lg text-[12px] font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  Register Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team section  */}
      <TeamComponent />

      {/* Rules and Regulation  */}
      <section className='bg-black text-white lg:h-[460px] h-[600px]'>

        {/* for desktop */}
        <div className="sm:py-6 py-18 hidden sm:block">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            <div className='grid grid-cols-4 md:mt-0 mt-6'>
              <div className='sm:col-span-2 col-span-3 sm:pl-3 lg:pl-0 lg:mt-4'>
                <h1 className="lg:text-[40px] text-3xl font-bold">RULES & REGULATION</h1>
                <div className="lg:px-6 px-0 py-5 grid grid-cols-9 lg:grid-cols-8">
                  <div className='col-span-2 lg:col-span-1 my-2'>
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IbgBf-NJ0vZJLiSQmkbxuypYyl-B5K7C3g&s" />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-7 my-2'>
                    <h1 className='lg:text-[20px] text-[16px] font-semibold'>
                      Team
                    </h1>
                    <div className=''>
                      <p className='lg:text-[16px] text-[14px] '>Lorem ipsum, dolor sit amet consectetur adipisicing </p>

                    </div>
                  </div>


                  <div className='col-span-2 lg:col-span-1 my-2'>
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src="https://www.shutterstock.com/image-vector/cricket-stadium-audience-vector-background-600nw-2367285537.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-7 my-2'>
                    <h1 className='lg:text-[20px] text-[16px] font-semibold'>
                      Ground
                    </h1>
                    <div className=''>
                      <p className='lg:text-[16px] text-[14px] '>Lorem ipsum, dolor sit amet consectetur adipisicing </p>

                    </div>
                  </div>

                  <div className='col-span-2 lg:col-span-1 my-2'>
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHmtFv-O4lGVu3GJxK5diDmk3EbP5_If-jg&s" />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-7 mt-2 mb-12'>
                    <h1 className='lg:text-[20px] text-[16px] font-semibold'>
                      Match
                    </h1>
                    <div className=''>
                      <p className='lg:text-[16px] text-[14px] '>Lorem ipsum, dolor sit amet consectetur adipisicing </p>

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
                <div className="lg:w-[530px] w-[340px] mx-auto  mt-[60px] lg:mt-0">
                  <img src="https://media.istockphoto.com/id/1434729638/photo/red-leather-cricket-ball-on-a-cricket-bat-front-view.jpg?s=1024x1024&w=is&k=20&c=lQpRqjn4SUZfgAOL73N6MFnqTgaITkIZVLn7VDGAXCY=" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* for mobile */}
        <div className="sm:py-16 py-14 block sm:hidden">
          <div className="mx-auto max-w-6xl px-6 md:leading-5 leading-4 md:text-[16px] text-[11px] text-pretty">
            <h1 className="md:text-[40px] text-xl font-bold">RULES & REGULATION</h1>
            <div className='grid grid-cols-4 md:mt-0 mt-6'>
              <div className='sm:col-span-2 col-span-3 sm:pl-3 lg:pl-0 lg:mt-4'>
                <div className="sm:w-[530px] w-[230px] ml-12 ">
                  <img src="https://media.istockphoto.com/id/1434729638/photo/red-leather-cricket-ball-on-a-cricket-bat-front-view.jpg?s=1024x1024&w=is&k=20&c=lQpRqjn4SUZfgAOL73N6MFnqTgaITkIZVLn7VDGAXCY=" className="" />
                </div>

              </div>
              <div className='sm:col-span-2 col-span-3'>



                <div className="px-2 py-5 grid grid-cols-9">
                  <div className='col-span-2 my-2'>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IbgBf-NJ0vZJLiSQmkbxuypYyl-B5K7C3g&s" />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-7 my-2  leading-1 ml-2 w-[270px]'>
                    <h1 className='md:text-[20px] text-[12px] font-semibold'>
                      Team
                    </h1>
                    <p className='text-[10px] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore </p>
                  </div>


                  <div className='col-span-2 my-2'>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://www.shutterstock.com/image-vector/cricket-stadium-audience-vector-background-600nw-2367285537.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-7 my-2  leading-1 ml-2 w-[270px]'>
                    <h1 className='md:text-[20px] text-[12px] font-semibold'>
                      Ground
                    </h1>

                    <p className='text-[10px] '>Lorem ipsum, dolor sit amet consectetur adipisicing </p>

                  </div>

                  <div className='col-span-2 my-2 mb-6'>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHmtFv-O4lGVu3GJxK5diDmk3EbP5_If-jg&s" />
                      </div>
                    </div>
                  </div>
                  <div className='col-span-7 my-2  leading-1 ml-2 w-[270px]'>
                    <h1 className='md:text-[20px] text-[12px] font-semibold'>
                      Match
                    </h1>
                    <p className='text-[10px] '>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                  </div>

                </div>
                <Link
                  to={'#'}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
                >
                  View Rules & Regulation &#11166;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Hall Of Fame  */}
      <HallOfComponent />

      {/* Advertiser  */}
      <AdvertiseComponent />

      {/*  Sponser */}
      <SponserComponent />

      {/* Footer  */}
      <Footer />
    </>
  );
}

export default Home;