import React, { useState, useEffect } from 'react';
import ImageSlider from './image_slider';
import chel from '/src/assets/chel.jpg';
import gymbro from '/src/assets/gymbro.jpg';
import Transition from '../../navigation/transition';
import { useNavigate } from "react-router-dom";

import lines from '../../assets/lines.png';

function ProjectDreamGame() {
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
                    MY JOURNEY WITH LINUX: A PATH TO EFFICIENT WORK
                </h1>
                <p className="mb-8 text-xl">
                    Эта страничка посвящену моему проекту - игре, которую мы делаем с моей командой. Одним из этапов создания игры является реализация MVP проекта на движке Godot, на языках GDScript и C#. В проекте я выступаю как Team-Lead и Project-manager.
                </p>
                <div className='py-10 block md:hidden'>
                    <ImageSlider images={images} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2 text-green-300">• TEAM MEETING</h2>
                        <p>
                            I started to put together a team to create a game countless times. Sometimes it was my and my friend's attempts to create something, where I acted as an animator and composer and he was a programmer, and sometimes I tried to gather people from different directions. In the end, I decided to have a “floating” team, where people come and go, and I take the main responsibility for the game creation. Now the team consists of 3 programmers, an animation designer, a composer, and me.
                        </p>
                        <div className='py-10 md:block hidden'>
                            <ImageSlider images={images} />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2 text-green-300">• START OF DEVELOPMENT AND RESULTS</h2>
                        <p>
                            Full-fledged development began in March 2024 and proceeded with alternating success. We gained experience with the creation and implementation of sprites, complex structures, maps, and other things. In a word - the MVP of the project was ready. The main idea of the game is under NDA, so I won't tell you about it, but I can assure you that this game is bound to shoot. And if it doesn't - experience hasn't stopped anyone yet.
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

export default Transition(ProjectDreamGame);
