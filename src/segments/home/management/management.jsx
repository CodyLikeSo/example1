import React, { useEffect, useState } from "react";
import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";
import Text_block from "./text_block";
import GanttChart from "./gantt_chart";

function Management() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [mousePosition, setMousePosition] = useState({ x: -30, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        navigate('/'); // Navigate to the root path on Escape key press
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown); // Add keydown listener

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown); // Clean up listener
    };
  }, [navigate]); // Add navigate to dependencies

  // Calculate offsets for GanttChart
  const offsetX = mousePosition.x * 0.025; 
  const offsetY = mousePosition.y * 0.025; 

  // Function to handle button click
  const handleButtonClick = () => {
    navigate('/'); // Navigate to the root path
  };

  return (
    <div>
      <div className="block md:hidden">
        <button 
          onClick={handleButtonClick} 
          className="absolute top-0 w-full bg-green-800 text-white py-2 px-4"
        >
          Main page
        </button>
      </div>
      <div className="md:block hidden py-6">
        <h1 className="text-center text-white font-extrabold text-2xl py-[3%]">GANTT CHART OF MY WORK EXPERIENCE</h1>
        <div
          className="md:shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] md:block hidden rounded-[30px] border-[1px] border-green-600 bg-inherit max-w-[80%] mx-auto p-4"
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
            transition: "transform 0.4s ease-out"
          }}
        >
          <GanttChart />
        </div>
      </div>

      <div className="py-[5%]"
           style={{
             transform: `translate(${offsetX}px, ${offsetY}px)`,
             transition: "transform 0.9s ease-out"
           }}
      >
        <Text_block />
      </div>
    </div>
  );
}

export default Transition(Management);
