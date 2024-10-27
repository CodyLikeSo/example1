import React from 'react';

const projects = [
  {
    name: 'IVCaptial',
    start: new Date('2021-09-01'),
    end: new Date('2022-08-01'),
    color: 'bg-green-400', // Добавляем цвет для проекта
  },
  {
    name: 'Moneyfactory',
    start: new Date('2022-08-01'),
    end: new Date('2023-06-01'),
    color: 'bg-green-300', // Добавляем цвет для проекта
  },
  {
    name: 'Jetsite',
    start: new Date('2023-06-01'),
    end: new Date('2024-05-01'),
    color: 'bg-green-700',
  },
  {
    name: 'Svetoch press',
    start: new Date('2024-05-01'),
    end: new Date('2024-12-01'),
    color: 'bg-green-900',
  },
];

const years = [2020, 2021, 2022, 2023, 2024];

const getMonthDifference = (start, end) => {
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
};

const GanttChart = () => {
  const startYear = Math.min(...projects.map(p => p.start.getFullYear()));
  const totalMonths = getMonthDifference(new Date(`${startYear}-01-01`), new Date(`${Math.max(...years)}-12-31`));

  // Рассчитываем количество колонок для каждого года
  const yearColumnSpan = Math.floor(10 / years.length); // 10 колонок для временной шкалы

  return (
    <div className="container mx-auto p-4">
      {/* Временная шкала */}
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2"></div>
        {years.map((year, index) => (
          <div
            key={index}
            className={`col-span-${yearColumnSpan} text-center font-bold bg-[#1a1a1a] text-[#d9d9d9] rounded-[10px] py-2`}
          >
            {year}
          </div>
        ))}
      </div>

      {projects.map((project, index) => {
        const startOffset = getMonthDifference(new Date(`${startYear}-01-01`), project.start);
        const projectDuration = getMonthDifference(project.start, project.end);
        const projectColor = project.color || 'bg-green-500'; // Используем цвет проекта или цвет по умолчанию

        return (
          <div key={index} className="grid grid-cols-12 gap-2 items-start mt-8">
            {/* Название проекта */}
            <div className="col-span-2 text-green-500 font-bold mt-4">
              {project.name}
            </div>

            {/* Визуализация проекта */}
            <div className="col-span-10 relative">
              <div
                className={`absolute ${projectColor} rounded-[10px] p-1 h-8`} // Используем переменную для цвета
                style={{
                  left: `${(startOffset / totalMonths) * 100}%`,
                  width: `${(projectDuration / totalMonths) * 100}%`,
                }}
              >
                <span className="text-[#1a1a1a] p-2">{project.name}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="md:shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] rounded-[30px] border-[1px] border-green-600 bg-inherit max-w-6xl mx-auto p-4">
      <GanttChart />
    </div>
  );
}

export default App;
