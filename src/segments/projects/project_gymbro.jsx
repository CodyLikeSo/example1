import React, { useState, useEffect } from 'react';
import ImageSlider from './image_slider';
import chel from '/src/assets/chel.jpg';
import gymbro from '/src/assets/gymbro.jpg';
import Transition from '../../navigation/transition';
import { useNavigate } from "react-router-dom";

import lines from '../../assets/lines.png';

function ProjectGymBro() {
    const images = [
        chel,
        gymbro,
        chel, // Add more images as needed
    ];

    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const xOffset = (clientX / window.innerWidth - 0.5) * 20; // Adjust sensitivity here
        const yOffset = (clientY / window.innerHeight - 0.5) * 20; // Adjust sensitivity here
        setOffset({ x: xOffset, y: yOffset });
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                navigate("/"); // Navigate to the main page
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate]);

    return (
        <div className='md:px-[12%] px-[1%]' onMouseMove={handleMouseMove}>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${lines})`,
                    backgroundSize: '150%',
                    backgroundPosition: 'center 33%',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(3px)',
                }}
            ></div>
            <div
                className="min-h-screen text-white p-8"
                style={{
                    transform: `translate(${offset.x}px, ${offset.y}px)`,
                    transition: 'transform 0.5s ease-out', // Smooth transition
                }}
            >
                <h1 className="md:text-4xl text-2xl font-bold mb-4 text-center text-green-600">
                    Gym-Bro
                </h1>
                <p className="mb-8 text-xl">
                    This project was conceived by me a long time ago - when I was just starting to learn programming. The essence is simple - a Telegram bot that tracks progress at the gym. It was written in python using PostgreSQL.
                </p>
                <div className='py-10 block md:hidden'>
                    <ImageSlider images={images} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 text-green-300">• TEAM MEETING</h2>
                        <p>
                        You can't say much about this project. It used python libraries - aiogram, psycopg2, etc. The list of project features: creating an exercise, recording the result on the exercise, sending progress in the form of a graph, registration, deleting and editing the recorded result and something else, if I haven't forgotten).
                        </p>
                        <div className='py-10 md:block hidden'>
                            <ImageSlider images={images} />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2 text-green-300">• START OF DEVELOPMENT AND RESULTS</h2>
                        <p>
                        At the beginning of my journey, it was important for me to get a grip on something - I was making Telegram bots. It became a good starting point for me. I understood how the interaction between the database and the script is set up, debugged a lot of errors and just the most important thing - got used to the syntax. All in all - a nice project for any beginner
                        </p>
                        <div>
                            <h1 className='py-10 text-2xl text-green-600 text-center'>Related info</h1>
                            <ul className='text-xl'>
                                <li>1. Govno</li>
                                <br />
                                <li>2. Govno</li>
                                <br />
                                <li>3. Govno</li>
                                <br />
                                <li>4. Govno</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="fixed bottom-5 right-5 px-5 py-2 bg-[#1a1a1a] text-white rounded-[12px] transition-colors duration-700 ease-in-out hover:bg-green-700"
                onClick={() => navigate('/')} // Navigate to the main page
                aria-label="Go to main page"
            >
                Main
            </button>
        </div>
    );
}

export default Transition(ProjectGymBro);
