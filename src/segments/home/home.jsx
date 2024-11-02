import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box2 from "./boxes/box2";
import Box1 from "./boxes/box1";
import Box from "./boxes/box";

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
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      // Сбрасываем активный бокс
      setActiveBox(null);
    } else if (event.key === "Enter" && activeBox !== null) {
      navigate(boxes[activeBox].route);
    }
  };

  const handleWheel = (event) => {
    // Сбрасываем активный бокс при прокрутке колесика мыши
    setActiveBox(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeBox]);

  return (
    <div className="flex flex-col 2xl:flex-row h-full w-full py-4 px-4 gap-4">
                  <div
                    className="absolute inset-0 z-0 rounded-[30px] opacity-95 hidden md:block"
                    style={{
                      backgroundImage: `url('src/assets/stars2.png')`,
                      backgroundSize: 'cover', // or 'contain' depending on your needs
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
      {boxes.map((box, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveBox(index)}
          className={`h-full w-full 2xl:w-1/3 mb-4 2xl:mb-0 rounded-[15px] transition-all duration-300 ${
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
