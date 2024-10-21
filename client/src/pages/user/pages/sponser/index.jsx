import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getFoodSP, getOtherSP } from "../../../../api"; 

export default function Sponser() {
  const [foodSponsors, setFoodSponsors] = useState([]);
  const [otherSponsors, setOtherSponsors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const [foodResponse, otherResponse] = await Promise.all([
          getFoodSP(),
          getOtherSP(),
        ]);
        setFoodSponsors(foodResponse.data);
        setOtherSponsors(otherResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sponsors:", error);
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);
  return (
    <>
      <Navbar />
      <section className="bg-base-100 h-auto py-16">
        <div className="mx-16">
          <div className="mx-auto pb-16 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold text-center">
              Sponsers
            </h1>
          </div>
          <div>
            <h1 className="md:text-[40px] text-xl font-bold py-8">
              Food Sponsers
            </h1>
            {loading ? (
      <div className="flex justify-center items-center h-64">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
    
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px]  md:text-[15px]">
                <figure className="px-2">
                  <img
                    src={
                          sponsor.spImage ||
                          "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    }
                    alt="Sponser"
                    className=" lg:w-[130px] lg:h-[160px] sm:w-[100px] w-[80px] h-[120px]  rounded-md "
                  />
                </figure>
                <div className="card-body px-4 py-[2px] lg:py-[14px]">
                  <h2 className="font-bold text-center border-1">{sponsor.sponDay || "Sponsor Day"}</h2>
                  <h2 className="font-bold">
                    {sponsor.fullName || "Sponsor Name"}
                  </h2>
                  <p> {sponsor.description || "Sponsor description"}</p>
                </div>
              </div>
             ))}          
            </div>
            )}
          </div>
          <div>
            <h1 className="md:text-[40px] text-xl font-bold py-8">
              Other Sponsers
            </h1>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherSponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                <figure className="px-2">
                  <img
                    src={
                          sponsor.spOtherImage ||
                          "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    }
                    alt="Sponser"
                    className=" md:w-[130px] lg:h-[160px] w-[80px] h-[120px] rounded-md "
                  />
                </figure>
                <div className="card-body px-4 py-[2px] md:py-[14px]">
                  <h2 className="font-bold text-center border-1">{sponsor.sponType || "Sponsor type"}</h2>
                  <h2 className="font-bold">
                    {sponsor.fullName || "Sponsor Name"}
                  </h2>
              <p>{sponsor.description || "Sponsor description"}</p>
                </div>
              </div>
              ))}
              
            </div>
           )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
