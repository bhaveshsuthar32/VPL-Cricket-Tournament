import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getHallOfFame } from '../../../api';

export default function HallOfComponent() {

  const [user, setUser] = useState([]); // Initialize as an empty array

  const getHallOfFameData = async () => {
    try {
      const response = await getHallOfFame();
      setUser(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHallOfFameData();
  }, [])

  return (
    <section className='h-auto py-14 '>
      <div className="grid sm:grid-cols-8 grid-cols-2 sm:ml-16 ml-0 ">
        <div className="sm:col-span-2 col-span-2 place-content-center ml-2 sm:ml-0">
          <h1 className='text-[33px] font-bold '>HALL OF FAME</h1>
          <p className='font-bold text-slate-700 text-[20px] '>Heroes Of 2023</p>
        </div>
        <div className="sm:col-span-6 col-span-2 grid grid-cols-8">
          <div className="sm:col-span-2 col-span-3 pt-14">
            <div className='h-[218px] ml-2 rounded-l-[17px] p-2 text-slate-400 border-2'
              style={{
                backgroundImage: 'url("https://www.shutterstock.com/image-vector/sport-cricket-indian-premier-league-600nw-2051585033.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
            </div>
          </div>
          <div className="sm:col-span-6 col-span-5 pt-14 bg-slate-300 rounded-tl-[30px]">
            <div className='sm:h-[282px] h-[200px] '>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={-24}
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
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {user.map((userinfo) => (
                  <SwiperSlide className='' key={userinfo._id}>
                    <div className="bg-base-100 w-[230px] shadow-lg">
                      <div>
                        <img
                          src={userinfo.hofImage}
                          alt="Img"
                          className='w-[230px] h-[210px]'
                        />
                      </div>
                      <div className='h-[70px] bg-slate-700 leading-4 p-2 text-slate-200 text-[12px]'>
                        <p className='font-semibold'>{userinfo.role}</p>
                        <div className="grid grid-cols-2 mt-2">
                          <p className='block'>{userinfo.name}</p>
                          <p className='text-right px-2 '>{userinfo.village}</p>
                          <p className='block'>{userinfo.team}</p>
                          <p className='text-right px-2 '>Score: {userinfo.score}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
