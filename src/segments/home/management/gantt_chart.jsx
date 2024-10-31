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
            За последние три с небольшим года я успел попробовать себя в роли проектного менеджера и Python-программиста. Я очень доволен проектами, в которых участвовал, и тем опытом, который получил. Эти годы помогли мне не только развить навыки в управлении проектами, но и стать лучше как программист, аналитик и DevOps-специалист.
          </p>

          {/* Section 1 */}
          <div className="mb-8 py-20" ref={projectRefs.current[0]}>
            <button onClick={scrollToTop} className="text-green-400 text-2xl mb-2 font-rubik font-extrabold">• MoneyFactory: <span className="text-green-700 ">Python Dev | React dev</span>
            </button>
            <h1 className='text-green-300 font-extrabold text-xl text-right'>01.08.21 - 01.10.22</h1>
            <div className="py-5 md:flex md:justify-between">
              <div className="md:w-1/2 p-1">
                <p>
                  MoneyFactory - быстрорастущий финтех-стартап, который буквально начал свое существование вместе со мной. Когда я начал искать свою первую работу я наткнулся на их вакансию python-разработчика. Однако я занимался не только python-разработкой.
                </p>
              </div>
              <div className="md:w-1/2 p-1">
                <p>
                  В начале мне давали мелкие задания по типу генерации картинок для наших продуктов, работы над специальными текстовыми документами, с упором в анализ и ресерч, а также работу с базами данных PostgreSQL. Потом мне начали наконец-таки давать задания связанные с python - разработка аггрегаторов, парсеров и скраперов, телеграм-ботом, выстраивание и ведение API сервисов. В последующем, узнав что я также работал c react меня стали потихоньку внедрять в Web разработку. Я участвовал в создании их основного сайта. Это работа дала мне немало опыта как backend и frontend программисту.
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
                  IVCapital — небольшой финтех-стартап, куда я пришёл по приглашению одногруппника. В нашей небольшой команде мне пришлось взять на себя несколько ролей: я работал как аналитик данных и проектный менеджер.
                </p>
              </div>
              <div className="md:w-1/2 p-1">
                <p>
                  В роли DS-аналитика я занимался базами данных, собирая статистику по эффективности наших продуктов, включая HFT-бота для торговли на бирже. Также выполнял небольшие задания, такие как создание телеграм-ботов и их интеграция с каналами. Как проектный менеджер, я вел документацию, распределял и структурировал задачи, а также общался с заказчиками. Главное, что я вынес из работы в IVCapital — это способность адаптироваться к новым условиям и технологиям, как с точки зрения программиста, так и проектного менеджера.
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
                  JetSite — B2B команда по созданию веб-приложений на любой вкус и цвет. В этой компании я работал полноценным проектным менеджером и руководил командой из 4-8 человек в зависимости от проекта. У нас было около шести проектов: два сайта с акцентом на фронтенд, три — на бэкенд с использованием OpenAI API, и одно мобильное приложение, в разработке которого я также принимал участие.
                </p>
              </div>
              <div className="md:w-1/2 p-1">
                <p>
                  Моя работа заключалась в ведении технической и проектной документации, взаимодействии с командой и, что самое важное, общении с заказчиками. В этом аспекте я значительно прокачал свои навыки, так как мне приходилось вести переговоры с техническими и бизнес-специалистами заказчиков для всех шести проектов. Это было довольно стрессово, особенно учитывая, что я попал в ситуацию, когда заказчики уже были недовольны, так как мой босс не справлялся с нагрузкой. Эта работа научила меня настоящему искусству управления проектами в условиях высокой нагрузки и стресса.
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
                  Svetoch Press — популярный издатель книг из Петербурга. В отличие от предыдущих мест работы, здесь были выстроены бизнес-процессы. Если моя предыдущая работа научила меня действовать в условиях стресса и постоянных конфликтов, то здесь все было совершенно иначе. Я работал размеренно, занимаясь проектной документацией и единолично руководил созданием основного продукта-сервиса. Я устанавливал сроки и взаимодействовал с заказчиками.
                </p>
              </div>
              <div className="md:w-1/2 p-1">
                <p>
                  На этой работе я почувствовал, что мне доверяют и уважают. Я координировал все отделы, участвующие в создании сервиса — бэкенд, фронтенд и дизайн. Кроме того, я также выступал в роли разработчика, дорабатывая необходимые для нашего сервиса API и самостоятельно деплоил их с помощью Docker. Эта работа показала мне, каково это — быть частью спокойной команды, профессионально знающей свое дело, без конфликтов и недопонимания.
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
