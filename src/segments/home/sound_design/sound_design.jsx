import React, { useEffect } from "react";
import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";

function SoundDesign() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        navigate("/"); // Replace with your desired route
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="md:w-3/5 md:h-3/5 flex flex-col items-center justify-center bg-[#242424] rounded-[30px] md:shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] p-[5%] text-[#d9d9d9] md:border-[1px] md:border-green-600">
          I'm sorry, but I need to find work so I don't have time to tell you about my sound design path. Of course, I will recreate this page
          <h1 className="py-20">But you can watch my music path here</h1> 
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-green-600 font-extrabold py-10">My music path here</a>
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

export default Transition(SoundDesign);
