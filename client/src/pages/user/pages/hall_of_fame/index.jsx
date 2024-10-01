import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getHallOfFame } from "../../../../api";

export default function HallOfFame() {

  const [user, setUser] = useState([]);

  const getHallData = async() =>{
    try {
      const response = await getHallOfFame();
      setUser(response.data);
    } catch (error) {
      console.log("Error :- ",error);
    }
  }

  useEffect(()=>{
    getHallData();
  },[])


  return (
    <>
      <Navbar />
      <section className="bg-base-100 h-auto py-16">
        <div className="mx-16">
          <div className="mx-auto md:mb-12 max-w-4xl">
            <h1 className="md:text-[40px] text-[26px] font-bold text-center">
              Hall of Fame
            </h1>
          </div>
          <div>
            <h1 className="md:text-[36px] text-xl font-bold py-8">
              Heroes of 2023
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

              {user.map((userinfo)=>( 
                <div className="card card-compact bg-transparent md:w-[200px] w-[150px]" key={userinfo._id}>
                <figure>
                  <img
                    src={userinfo.hofImage}
                    alt="Img"
                    className="rounded-full md:w-[200px] md:h-[190px] w-[150px] h-[150px]"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="font-bold">{userinfo.name}</h3>
                  <p className="text-gray-500">{userinfo.role}</p>
                  <p className="text-gray-500">Score : {userinfo.score}</p>
                </div>
              </div>
              ))}


          
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
