import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getFoodSP, getOtherSP } from '../../service/api'


export default function Sponser() {
    const [foodSp, setFoodSp] = useState([]);
    const [otherSp, setOtherSp] = useState([]);

    const getFoodData = async () =>{
        try {
            const response = await getFoodSP();
            setFoodSp(response.data);
        } catch (error) {
            console.log("Error :- ", error);
        }
    }

    const getOtherData = async () =>{
        try {
            const response = await getOtherSP();
            setOtherSp(response.data)
        } catch (error) {
            console.log("Error :- ", error);
        }
    }

    useEffect(()=>{
        getFoodData();
        getOtherData();
    })


    return (
        <>
            <Navbar />
            <section className='bg-base-100 h-auto py-16'>
                <div className='mx-16'>
                    <div className="mx-auto pb-16 max-w-4xl">
                        <h1 className="md:text-[40px] text-xl font-bold text-center">Sponsers</h1>
                    </div>
                    <div>
                        <h1 className="md:text-[40px] text-xl font-bold py-8">Food Sponsers</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {foodSp.length > 0 ? (
                            foodSp.map((foodData, index) => (
                                <div key={foodData._id} className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px]  md:text-[15px]">
                                {/* <p>{index + 1}</p> */}
                                <figure className='px-2'>
                                    <img
                                        src={foodData.spImage}
                                        alt={foodData.fullName}
                                        className=' lg:w-[120px] lg:h-[150px] sm:w-[100px] h-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] lg:py-[14px]">
                                    <h2 className="font-bold text-center border-1">{foodData.sponDay}</h2>
                                    <h2 className="font-bold">{foodData.fullName}</h2>
                                    <p>{foodData.village}</p>
                                </div>
                            </div>
                            ))
                        ): (
                            <h1>No Food Sponsors Available</h1>
                        )}
                            
                       
                        </div>
                    </div>
                    <div>
                        <h1 className="md:text-[40px] text-xl font-bold py-8">Other Sponsers</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherSp.length > 0 ? (
                            otherSp.map((otherData, index) => (
                                <div key={otherData._id} className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px]  sm:text-[14px] lg:text-[17px] leading-4">
                                {/* <p>{index + 1}</p> */}
                                <figure className='px-2'>
                                    <img
                                        src={otherData.spOtherImage}
                                        alt={otherData.fullName}
                                        className=' lg:w-[120px] lg:h-[150px] sm:w-[100px] h-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] lg:py-[14px]">
                                    <h2 className="font-bold text-center border-1">{otherData.sponType}</h2>
                                    <h2 className="font-bold text-center border-1">{otherData.sponDay}</h2>
                                    <h2 className="font-bold">{otherData.fullName}</h2>
                                    <p>{otherData.village}</p>
                                </div>
                            </div>
                            ))
                        ): (
                            <h1>No Food Sponsors Available</h1>
                        )}
                            
                            
{/*                          
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
