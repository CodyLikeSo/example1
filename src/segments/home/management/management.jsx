import React from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import Transition from "../../../navigation/transition";
import GanttChart from "./gantt_chart";
import lines from '/home/cody/Cody/Programming/React/example1/example1/src/assets/lines.png';

function Management() {
  const navigate = useNavigate(); // Создаем экземпляр navigate



  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <GanttChart />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${lines})`,
          backgroundSize: '200%', // Установить на 200%, чтобы сделать в 2 раза больше
          backgroundPosition: 'center 33%',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px)',
          zIndex: -1 // Убедитесь, что фоновый элемент находится под другими элементами
        }}
      ></div>

      {/* Кнопка для перехода на главную страницу */}
      <button
        className="fixed bottom-5 right-5 px-5 py-2 bg-[#1a1a1a] text-white rounded-[12px] transition-colors duration-700 ease-in-out hover:bg-green-700 "
        onClick={() => navigate('/')} // Навигация на главную страницу
      >
        Main
      </button>
    </div>
  );
}

export default Transition(Management);
