import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      
<section className="">
        <div className="py-16">
          <div className="mx-auto md:max-w-6xl md:px-0 px-4">
            <h1 className="md:text-[40px] text-[30px] font-bold text-center">
              About Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 border-t-[2px] mt-8">
              <div className="flex items-center justify-center">
                <img
                  className="object-cover w-[280px] h-[320px] rounded-lg shadow-lg"
                  src="https://i.pinimg.com/736x/fa/fd/45/fafd454fd34b9eceed1feace0f86f752.jpg"
                  alt="Image"
                />
              </div>
              <div className="flex flex-col md:p-6 ">
                <h2 className="text-3xl font-bold mb-2">
                  Vishwakarma Premier League
                </h2>
                <p className="mb-3 mt-4 text-[16px]">
                Vishwakarma Premier League (VPL) 🏏 is a premier cricket tournament registration platform that leverages modern web technologies to offer an unparalleled experience for cricket enthusiasts and organizers.
                </p>
               
                <p>
                With VPL, we aim to bring cricket tournaments to the next level, providing a dynamic platform that keeps everyone engaged and informed throughout the event.
                </p>
                <ul className="mt-2 space-y-2">
              <li className="flex items-center"><img src={"https://image.shutterstock.com/image-vector/calander-vector-icon-white-islolated-260nw-1525448534.jpg"} alt="" className="w-[20px] mr-2" />  4 Days of Intense Cricket</li>
              <li className="flex items-center"> <img src={"https://img.icons8.com/?size=50&id=7880&format=png"} alt="" className="w-[20px] mr-2" /> Local Village Grounds</li>
              <li className="flex items-center"><img src={"https://img.icons8.com/?size=50&id=11168&format=png"} alt="" className="w-[20px] mr-2" />  Organized by Suthar Samaj</li>
             
            </ul>
              </div>
             
            </div>
          </div>
          <div className=" bg-slate-200 py-10 px-4 md:px-16 mt-10">
          <h1 className="md:text-[40px] text-xl font-bold text-center mb-6 text-slate-700 border-b-[1px] border-slate-500 py-4">
          Tournament Highlights
            </h1>
            <div className="grid grid-cols-3 gap-14 py-6 sm:px-0 px-4">
              <div className="sm:col-span-1 col-span-3 bg-white border-2 rounded-md shadow-md">
                <div className="text-center py-4 border-b-[1px] h-[140px]">
                  <img src={"https://img.icons8.com/?size=48&id=kuU7I7uPlHfo&format=png"} alt="" className="mx-auto mt-4" />
                <h1 className="text-[25px] font-semibold">Grand Prizes</h1>
                </div>
                <div className="py-3 px-2">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              
              <div className="sm:col-span-1 col-span-3 bg-white border-2 rounded-md shadow-md">
                <div className="text-center py-4 border-b-[1px] h-[140px]">
                  <img src={"https://img.icons8.com/?size=48&id=kuU7I7uPlHfo&format=png"} alt="" className="mx-auto mt-4" />
                <h1 className="text-[25px] font-semibold">Grand Prizes</h1>
                </div>
                <div className="py-3 px-2">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              
              <div className="sm:col-span-1 col-span-3 bg-white border-2 rounded-md shadow-md">
                <div className="text-center py-4 border-b-[1px] h-[140px]">
                  <img src={"https://img.icons8.com/?size=48&id=kuU7I7uPlHfo&format=png"} alt="" className="mx-auto mt-4" />
                <h1 className="text-[25px] font-semibold">Grand Prizes</h1>
                </div>
                <div className="py-3 px-2">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              
              
            </div>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
