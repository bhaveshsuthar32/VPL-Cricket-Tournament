import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getFoodSP } from '../../../api'

export default function SponserComponent() {

    const [user, setUser] = useState([]);

    const getFoodData = async () => {
        try {
            const response = await getFoodSP(user);
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFoodData()
    }, [])


    return (
        <section className=' h-auto py-6 mb-12'>
            <div className='sm:mx-8 mx-2 '>
                <div className="pb-4 max-w-4xl">
                    <h1 className="md:text-[40px] text-xl font-bold">SPONSERS</h1>
                </div>
                <div className='bg-slate-700 py-4 rounded-xl text-gray-200 px-[40px]'>
                    {/* <h1 className="md:text-[30px] text-xl font-bold py-8">FOOD SPONERS</h1> */}
                    <Swiper


                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        speed={2000}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                        breakpoints={{
                            340: {
                                slidesPerView: 2,
                                slidesPerGroup: 3,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                slidesPerGroup: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                slidesPerGroup: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                slidesPerGroup: 6,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <div className="mx-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                            {user.map((userinfo) => (
                                <SwiperSlide className='' key={userinfo._id}>
                                    <div className="card card-compact bg-transparent w-[150px] w-[150px]">
                                        <figure>
                                            <img
                                                src={userinfo.spImage}
                                                alt="Img"
                                                className="rounded-full w-[120px] h-[120px] md:w-[150px] md:h-[150px]"
                                            />
                                        </figure>
                                        <div className="card-body text-center">
                                            <h3 className="font-bold">{userinfo.fullName}</h3>
                                            <p className="text-gray-200">{userinfo.village}</p>
                                        </div>
                                    </div>  
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}


