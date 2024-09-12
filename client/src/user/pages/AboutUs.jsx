import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <section className=''>
                <div className="py-16">
                    <div className="mx-auto max-w-6xl">
                        <h1 className="md:text-[40px] text-xl font-bold text-center">About Us</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
                            <div className="flex items-center justify-center">
                                <img
                                    className="object-cover w-full h-full rounded-lg shadow-lg"
                                    src="https://i.pinimg.com/736x/fa/fd/45/fafd454fd34b9eceed1feace0f86f752.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-6">
                                <h2 className="text-2xl font-bold mb-2">Vishwakarma Premier League</h2>
                                <p className="text-gray-600 mb-4">
                                    The Vishwakarma Premier League (VPL) is a professional T10 cricket tournament held in Saint Vincent and the Grenadines. Launched in 2020, the league has quickly gained popularity due to its fast-paced format and competitive spirit. The tournament features a limited number of teams, each representing different communities within the country, and is played in a round-robin format followed by playoffs.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    The VPL is known for showcasing local talent, providing a platform for cricketers from the region to display their skills. Matches are typically held at the Arnos Vale Sporting Complex, a venue that can accommodate a vibrant crowd, enhancing the overall atmosphere of the games. The league has attracted attention not only from local fans but also from cricket enthusiasts worldwide, thanks to its engaging matches and the involvement of international players.
                                </p>
                                <p>
                                    Each season of the VPL consists of several matches, where teams compete for the championship title. The format allows for exciting gameplay, with each match lasting about two hours, making it accessible for fans of all ages. The tournament also emphasizes community engagement, with various initiatives aimed at promoting cricket among the youth.
                                </p>
                                <p>
                                    Broadcasting of the VPL matches has expanded its reach, allowing fans to follow the action live through various media platforms. This exposure has contributed to the growth of cricket in the Caribbean and has helped in nurturing future talents. Overall, the Vincy Premier League stands out as a significant event in the cricket calendar, combining entertainment with local culture and sportsmanship.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
