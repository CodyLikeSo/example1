import React, { useEffect } from "react";
import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";

function Sound_design() {
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
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-3/5 h-3/5 flex flex-col items-center justify-center bg-[#242424] rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] p-[5%] text-[#d9d9d9] border-[1px] border-green-600">
          I'm sorry, but I need to find work so I don't have time to tell you about my sound design path. Of course, I will recreate this page.
        </div>
      </div>
    </>
  );
}

export default Transition(Sound_design);
