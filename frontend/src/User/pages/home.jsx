import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundSlider from '../components/backgroundSlider';
import TeamComponent from '../components/TeamComponent';
import SponserComponent from '../components/SponsorComponent';
import HallofComponent from '../components/HallofComponent';

function Home() {
  return (
    <>
      <BackgroundSlider />
      <Navbar />

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
        <SponserComponent />
      </section>

      {/* Hall of fame */}

      <section className='h-auto '>
        <HallofComponent />
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