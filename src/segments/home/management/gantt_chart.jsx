import React, { useRef } from 'react';

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
    // Функция для плавной прокрутки к началу страницы
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
      });
    };
  const totalMonths = (endYear - startYear + 1) * 12;

  // Создаем рефы для заголовков проектов
  const projectRefs = useRef(projects.map(() => React.createRef()));

  const scrollToProject = (index) => {
    projectRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto">
      <div className='text-[#d9d9d9] text-4xl font-extrabold text-center py-20 lg:block hidden'>MY WORK EXPERIENCE</div>
      <div className="flex">
        <div className="w-48"></div> {/* Пустое место для колонки с проектами */}
        {years.map((year) => (
          <div key={year} className="flex-1 text-center text-[#d9d9d9] rounded-[8px] bg-[#1a1a1a] lg:block hidden">
            {year}
          </div>
        ))}
      </div>

      {/* Рендеринг проектов */}
      {projects.map((project, index) => {
        const startPos = getYearPosition(project.startDate);
        const endPos = getYearPosition(project.endDate);
        const duration = endPos - startPos;

        return (
          <div key={project.name} className="flex items-center text-green-600 font-extrabold py-[2%]">
            <div
              className="w-48 text-right pr-4 cursor-pointer lg:block hidden text-2xl transition-colors duration-300 ease-in-out hover:text-green-300"
              onClick={() => scrollToProject(index)} // Обработчик клика
            >
              {project.name}
            </div>
            <div key={project.name} className="flex-1 relative" onClick={() => scrollToProject(index)}>
              <div
                className="absolute bg-green-600 text-white text-[100%] font-normal rounded-[15px] p-2 -mt-5 lg:block hidden transition-colors duration-300 ease-in-out hover:bg-green-300"
                style={{
                  left: `${(startPos / totalMonths) * 100}%`, // Позиция начала проекта
                  width: `${(duration / totalMonths) * 100}%`, // Ширина проекта
                  height: `35px`
                }}
                
              >
              </div>
            </div>
          </div>
        );
      })}

      <div className="bg-inherit text-gray-200 min-h-screen p-[8%] overflow-x-hidden ">
        <div className='absolute bg-[#1a1a1a] w-full h-1 left-0 -mt-12 lg:block hidden'></div>
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-green-400 text-4xl mb-4 font-rubik font-extrabold tracking-[4px]">
          • MY WORK EXPERIENCE
          </h1>
          
          {/* Introduction paragraph */}
          <p className="mb-6">
          Over the past three and a bit years, I have had the opportunity to try my hand at being a project manager and Python programmer. I'm very satisfied with the projects I've been involved in and the experience I've gained. These years have helped me not only to develop skills in project management, but also to become better as a programmer, analyst and DevOps specialist.
          </p>

          {/* Section 1 */}
          <div className="mb-8 py-20" ref={projectRefs.current[0]}>
            <button onClick={scrollToTop} className="text-green-400 text-2xl mb-2 font-rubik font-extrabold">• MoneyFactory: <span className="text-green-700 ">Python Dev | React dev</span>
            </button>
            <h1 className='text-green-300 font-extrabold text-xl text-right'>01.08.21 - 01.10.22</h1>
            <div className="py-5 md:flex md:justify-between">
              <div className="md:w-1/2 p-1">
                <p>
                MoneyFactory is a fast-growing fintech startup that literally started with me. When I started looking for my first job I came across their job posting for a python developer. However, I was doing more than just python development.
                </p>
              </div>
              <div className="md:w-1/2 p-1">
                <p>
                In the beginning, I was given small tasks like generating images for our products, working on special text documents, with a focus on analysis and reserch, as well as working with PostgreSQL databases. Then I was finally given tasks related to python - development of aggregators, parsers and scrapers, telegram bot, building and maintaining API services. Later, having learned that I also worked with react I was slowly introduced into Web development. I participated in the creation of their main site. This work gave me a lot of experience as a backend and frontend programmer.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-green-300 ">Stack as Developer</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-green-600 font-extrabold">Python</span>: work with Fastapi, OpenAI API, Pytest, Telegram-API
                </li>
                <li>
                  <span className="text-green-600 font-extrabold">Node JS</span>: work with React, Tailwind CSS, HTML
                </li>
                <li>
                  <span className="text-green-600 font-extrabold">PostgreSQL:</span> create and control
                </li>
                <li>
                  <span className="text-green-600 font-extrabold">Docker-compose:</span> usage for build
                </li>
              </ul>
            </div>
          </div>

          {/* '2022-10-01', endDate: '2023-08-01' */}
          <div className="mb-8 py-20" ref={projectRefs.current[1]}>
            <button onClick={scrollToTop} className="text-green-400 text-2xl font-rubik font-extrabold mb-2 ">• IVCapital: <span className="text-green-700"> Project Manager | DS&ML</span></button>
            <h1 className='text-green-300 font-extrabold text-xl text-right'>01.10.2022 - 01.08.23</h1>
            <div className="py-5 md:flex md:justify-between">
              <div className="md:w-1/2 p-1">
                <p>
                IVCapital is a small fintech startup where I came at the invitation of a classmate. In our small team, I had to take on several roles: I worked as a data analyst and project manager.
                </p>
              </div>
              <div className="md:w-1/2 p-1">
                <p>
                In the role of DS-analyst, I worked on databases, gathering statistics on the effectiveness of our products, including an HFT-bot for trading on the stock exchange. I also performed small tasks, such as creating Telegram bots and integrating them with channels. As a project manager, I maintained documentation, distributed and structured tasks, and communicated with customers. The main thing I learned from working at IVCapital is the ability to adapt to new conditions and technologies, both from the point of view of a programmer and a project manager.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-green-300">Stack as Project-Manager</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold text-green-600">Documentation: </span>Jira Kanban, Google docs and sheets, Risks management</li>
                <li><span className="font-bold text-green-600">Sprints: </span>Scrum rituals(Sprints, Planning, Daily Scrum, Review and Retrospective)</li>
                <li><span className="font-bold text-green-600">Communication: </span>Negotiating with customers and managing a team</li>
                <li><span className="font-bold text-green-600">Fintech technologies</span></li>
              </ul>
              <h2 className="text-2xl font-bold mb-2 text-green-300">Stack as DS&ML analyst</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-green-600 font-extrabold">DS&ML algorithms: </span>numpy, pandas, scikit-learn, tensorflow
                </li>
                <li>
                  <span className="text-green-600 font-extrabold">Python</span>: Telegram-API, OpenAI API, Huggin face, LLM model, VectorDB
                </li>
                <li>
                  <span className="text-green-600 font-extrabold">Huggin face and Langchain tools</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-8 py-20" ref={projectRefs.current[2]}>
            <button onClick={scrollToTop} className="text-green-400 text-2xl font-rubik font-extrabold mb-2">• JetSite.ru: <span className="text-green-700"> Project Manager</span></button>
            <h1 className='text-green-300 font-extrabold text-xl text-right'>01.08.21 - 01.10.22</h1>
            <div className="py-5 md:flex md:justify-between">
              <div className="md:w-1/2 p-1">
                <p>
                JetSite is a B2B team building web applications for all tastes and colors. At this company, I worked as a full-fledged project manager and managed a team of 4-8 people depending on the project. We had about six projects: two websites with a focus on the frontend, three on the backend using OpenAI APIs, and one mobile app, which I was also involved in developing.
                </p>
              </div>
              <div className="md:w-1/2 p-1">
                <p>
                My job was to maintain technical and project documentation, interact with the team and, most importantly, communicate with the customers. In this aspect, I pumped up my skills considerably, as I had to negotiate with the customers' technical and business specialists for all six projects. This was quite stressful, especially since I was put in a situation where the customers were already unhappy as my boss was not handling the workload. This job taught me the true art of project management in a high-stress, high-stress environment.
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-green-300">Stack as Project-Manager</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold text-green-600">Documentation: </span>Asana Kanban, Google docs and sheets, Risks management</li>
                <li><span className="font-bold text-green-600">Sprints: </span>Scrum rituals(Sprints, Planning, Daily Scrum, Review and Retrospective)</li>
                <li><span className="font-bold text-green-600">Communication: </span>Stressful work with customers and managing a team</li>
                <li><span className="font-bold text-green-300">Implementation of own regulations and business processes</span></li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-8" ref={projectRefs.current[3]}>
            <button onClick={scrollToTop} className="text-green-400 text-2xl font-rubik font-extrabold mb-2">• Svetoch Press: <span className="text-green-700"> Project Manager</span></button>
            <h1 className='text-green-300 font-extrabold text-xl text-right'>01.08.21 - 01.10.22</h1>
            <div className="py-5 md:flex md:justify-between">
              <div className="md:w-1/2 p-1">
                <p>
                Svetoch Press is a popular book publisher from St. Petersburg. Unlike my previous jobs, business processes were built here. If my previous job had taught me how to operate under stress and constant conflict, things were completely different here. I worked in a measured manner, dealing with project documentation and single-handedly managing the creation of the main product-service. I set deadlines and interacted with customers.
                </p>
              </div>
              <div className="md:w-1/2 p-1">
                <p>
                On this job I felt that I was trusted and respected. I coordinated all the departments involved in creating the service - backend, frontend and design. In addition, I also acted as a developer, finalizing the APIs needed for our service and deploying them myself using Docker. This work showed me what it's like to be part of a calm team that knows its business professionally, without conflicts and misunderstandings.
                </p>
              </div>
            </div>
          </div>

          {/* Stack Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-green-300 py-6">Stack as Project-Manager</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-bold text-green-600">Documentation: </span>Asana Kanban, Google docs and sheets, Risks management</li>
              <li><span className="font-bold text-green-600">Sprints: </span>Scrum rituals(Sprints, Planning, Daily Scrum, Review and Retrospective)</li>
              <li><span className="font-bold text-green-600 ">Communication: </span>Managing a team and product at all, project flow decisions</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2 text-green-300 py-6">Stack as Developer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-green-600 font-extrabold">Python</span>: Fastapi, vkpymusic, selenium, asyncio, aiohttp
              </li>
              <li>
                <span className="text-green-600 font-extrabold">Dev-ops:</span> Docker, Render and Vercel as services, kubernetes, load handling 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttChart;
