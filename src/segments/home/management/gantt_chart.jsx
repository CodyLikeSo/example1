import React from 'react';

// Динамическое создание массива лет
const startYear = 2020;
const endYear = 2028;
const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

const projects = [
  { name: 'MoneyFactory', startDate: '2021-08-01', endDate: '2022-10-01' },
  { name: 'IVCapital', startDate: '2022-10-01', endDate: '2023-08-01' },
  { name: 'Jetsite.ru', startDate: '2023-08-01', endDate: '2024-06-01' },
  { name: 'Svetoch press', startDate: '2024-06-01', endDate: '2025-03-01' },
];

// Функция для получения позиции года/месяца относительно начала (2020)
const getYearPosition = (date) => {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  return (year - startYear) * 12 + month;
};

const GanttChart = () => {
  const totalMonths = (endYear - startYear + 1) * 12;
  return (
    <div className="container mx-auto mt-10">
      <div className="flex">
        <div className="w-48"></div> {/* Пустое место для колонки с проектами */}
        {years.map((year) => (
          <div key={year} className="flex-1 text-center text-[#d9d9d9] bg-[#1a1a1a] rounded-[15px]">
            {year}
          </div>
        ))}
      </div>

      {/* Рендеринг проектов */}
      {projects.map((project) => {
        const startPos = getYearPosition(project.startDate);
        const endPos = getYearPosition(project.endDate);
        const duration = endPos - startPos;

        return (
          <div key={project.name} className="flex items-center text-green-600 font-extrabold py-[2%]">
            <div className="w-48 text-right pr-4">{project.name}</div>
            <div className="flex-1 relative">
              <div
                className="absolute bg-green-600 text-white text-[80%] font-normal rounded-[15px] p-2 -mt-5"
                style={{
                  left: `${(startPos / totalMonths) * 100}%`, // Позиция начала проекта
                  width: `${(duration / totalMonths) * 100}%`, // Ширина проекта
                }}
              >
                {project.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GanttChart;
