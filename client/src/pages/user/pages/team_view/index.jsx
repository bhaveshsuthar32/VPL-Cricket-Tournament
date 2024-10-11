import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
 import Navbar from "../../components/Navbar";
 import Footer from "../../components/Footer";
import { getTeam, getTeamById } from "../../../../api";

export default function TeamView() {

  const [team, setTeam] = useState(null);
  const [teams, setTeams] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getTeam();
        setTeams(response.data);
      } catch (err) {
        console.error("Error fetching teams:", err);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await getTeamById(id);
        setTeam(response.data);
      } catch (err) {
        console.error("Error fetching team:", err);
      }
    };

    fetchTeam();
  }, [id]);

  if (!team) return <div>Loading...</div>;

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Function to hide the sidebar
  const hideSidebar = () => {
    setIsVisible(false);
  };
  
  return (
    <>
                <Navbar />
      <div className="flex relative bg-white">
        {/* Sidebar for Mobile */}
        {isVisible && (
          <aside className="w-2/3 bg-white border-[1px] border-slate-300 text-black p-4 absolute top-0 left-0 z-10 m-2 rounded-md ">
            <p className="text-[23px] font-bold mb-4">
              VPL-3 Teams
              <button
                onClick={hideSidebar}
                className="ml-[40px] border-[1px] text-dark text-[14px] py-[2px] px-[8px] rounded"
              >
                X
              </button>
            </p>

            <ul>
              {teams.map((team) => (
                <Link to={`/teamview/${team._id}`} key={team._id}>
                  <li className="mb-2 border-[1px] rounded-2xl px-[2px] align-middle text-[15px] font-semibold flex py-[2px] hover:bg-sky-400">
                    <img
                      src={
                        team.logo ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                      alt="team"
                      className="w-[28px] mr-[10px] rounded-full h-[28px] object-cover"
                    />
                    {team.team_name}
                  </li>
                </Link>
              ))}
            </ul>
          </aside>
        )}

        {/* Sidebar for Desktop */}
<aside
  className="w-1/4 bg-slate-100 p-4 hidden md:block border-[1px] border-slate-400 m-4 rounded-md text-base-200 sticky h-screen"
  style={{
    background: 'radial-gradient(circle, #4d79d1 0%, rgb(47 56 71) 64%)',
    top: '82px', // Adjust the top value as needed
  }}
>
  <h2 className="text-4xl font-bold mb-4">VPL-3 Teams</h2>
  <ul>
    {teams.map((team) => (
      <Link to={`/teamview/${team._id}`} key={team._id}>
        <li className="mb-2 border-[1px] rounded-2xl px-[2px] align-middle text-[15px] font-semibold flex py-[2px] hover:bg-slate-800">
                    <img
                      src={
                        team.logo ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                      alt="team"
                      className="w-[28px] mr-[10px] rounded-full h-[28px] object-cover"
                    />
                  <span className="mt-[2px]">  {team.team_name}</span>
                  </li>
      </Link>
    ))}
  </ul>
</aside>


        <div className="flex-grow">
          <button
            onClick={toggleVisibility}
            className="mb-4 block md:hidden border-[1px] rounded-md m-2 p-[2px] bg-white"
          >
            {isVisible ? "" : "Teams"}
          </button>

          {/* Main content bg-blue-950*/}
          <main className="w-full p-4 ">
            <section className="bg-slate-100 border-[1px] border-slate-400
             text-gray-100 h-auto py-8 md:py-16 rounded-md" style={{ background: 'radial-gradient(circle, #4d79d1 0%, rgb(47 56 71) 64%)' }}>
              <div className="mx-8">
                <div className="mx-auto pb-12 max-w-4xl">
                  <h1 className="md:text-[40px] text-xl font-bold text-center">
                    {team.team_name} - {team.village}
                  </h1>
                </div>
                <div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
                    {team.players.map((player) => (
                      <div
                        key={player._id}
                        className="card card-compact bg-transparent w-full"
                      >
                        <div className="md:w-40 md:h-40 w-28 h-28 mx-auto overflow-hidden rounded-full border-4 border-gray-200">
                          <img
                            src={
                              player.image ||
                              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            }
                            alt={player.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="card-body text-center">
                          <p className="font-bold md:text-[14px] text-[9px] leading-3">
                            {player.name}
                          </p>
                          <p className="text-gray-300 md:text-[14px] text-[9px] mt-[-5px] md:mt-0 leading-3">
                            {player.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>

        
  );
}
