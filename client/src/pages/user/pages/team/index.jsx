import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getTeam } from "../../../../api";

export default function Team() {
  const [teams, setTeams] = useState([]);

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
  return (
    <>
      <Navbar />
<section className="bg-base-100 h-auto py-16">
        <div className="mx-16">
          <div className="mx-auto pb-16 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold text-center">
              VPL - {teams.length} Teams
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team) => (
                <Link to={`/teamview/${team._id}`} key={team._id}>
                  <div className="card card-compact bg-base-100 md:w-80 md:h-80 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <figure>
                      <img
                        src={
                          team.logo ||
                          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        }
                        alt={team.team_name}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{team.team_name}</h2>
                      <p>{team.village}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
