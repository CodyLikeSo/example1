import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box2 from "./boxes/box2";
import Box1 from "./boxes/box1";
import Box from "./boxes/box";

import ParticleEffect from "../hero/particle";

export const Home = () => {
  const [activeBox, setActiveBox] = useState(null);
  const navigate = useNavigate();

  const boxes = [
    { component: <Box />, route: "/manage" },
    { component: <Box1 />, route: "/develop" },
    { component: <Box2 />, route: "/sound" },
  ];

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setActiveBox((prev) => (prev === null ? 0 : (prev + 1) % boxes.length));
    } else if (event.key === "ArrowLeft") {
      setActiveBox((prev) => (prev === null ? boxes.length - 1 : (prev - 1 + boxes.length) % boxes.length));
    } else if (event.key === "Enter" && activeBox !== null) {
      navigate(boxes[activeBox].route);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeBox]);

  return (
    <div className="flex flex-col 2xl:flex-row h-full w-full py-4 px-4">
      <div>
        <ParticleEffect />
      </div>
      {boxes.map((box, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveBox(index)}
          className={`h-full w-full 2xl:w-1/3 mb-4 2xl:mb-0 2xl:mr-4 rounded-[15px] transition-all duration-300 ${
            activeBox === index ? "scale-105 border-opacity-100" : "border-transparent"
          } ${activeBox === index ? "group" : ""}`}
        >
          {React.cloneElement(box.component, { isActive: activeBox === index })}
        </div>
      ))}
    </div>
  );
};

export default Home;
