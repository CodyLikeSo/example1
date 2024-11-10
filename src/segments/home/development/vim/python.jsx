import React, { useState, useEffect, useRef } from 'react';

// Child component with updated text
const TextContent = () => {
  return (
    <div>
      <p className='text-green-600'># Python</p>
      <br />
      <p className='text-green-600'>## Опыт</p>
      <br />
      <p>Python стал для меня первым языком программирования, с которого я начал свой путь в IT. С тех пор я прошел долгий путь, и Python оказался не просто инструментом, а настоящим партнером в решении сложных задач. Благодаря этому языку я смог реализовать множество интересных проектов, включая:</p>
      <ul>
        <li><strong>API-скрипты</strong>: Разработка RESTful API для интеграции с различными сервисами, что значительно упростило взаимодействие между системами.</li>
        <li><strong>Телеграм-боты</strong>: Создание ботов для автоматизации процессов и взаимодействия с пользователями, что позволяет предоставлять информацию в реальном времени.</li>
        <li><strong>Алгоритмы в области Data Science и Machine Learning</strong>: Реализация моделей машинного обучения с использованием библиотек, таких как scikit-learn и TensorFlow, что дало мне возможность анализировать данные и делать предсказания на основе статистических методов.</li>
        <li><strong>Работа с базами данных</strong>: Опыт работы с SQL и NoSQL базами данных, включая PostgreSQL и MongoDB, что позволяет эффективно управлять данными и оптимизировать запросы.</li>
      </ul>
      <p>Мне нравится легкий порог вхождения и огромный потенциал для обучения, который предоставляет Python. Все говорят, что язык легкий, но это всего лишь инструмент. По-настоящему сложные задачи возникают на этапе проектирования архитектуры, оптимизации производительности и обеспечения безопасности приложений.</p>
      <p>В настоящее время, работая проектным менеджером, я активно использую Python для автоматизации задач как своих, так и компании в целом. Это включает написание скриптов для обработки данных, генерации отчетов и автоматизации рутинных процессов, что позволяет команде сосредоточиться на более важных аспектах проектов.</p>
      <p>Мне безумно нравится проектирование сервисов с самых основ как в роли проектного менеджера, так и разработчика. Углубляясь в свой опыт с Python, я сталкиваюсь с более сложными аспектами бэкенд-разработки, которые требуют понимания архитектуры приложений и технологий. Например:</p>
      <ul>
        <li><strong>Микросервисная архитектура</strong>: Проектирование и реализация микросервисов с использованием фреймворков, таких как FastAPI и Flask. Это позволяет создавать масштабируемые и гибкие системы, где каждый сервис отвечает за свою функциональность и может разрабатываться независимо. Даже будучи проектным менеджером, иногда приходилось вручную создавать API на FastAPI с последующим деплоем.</li>
        <li><strong>Асинхронное программирование</strong>: Использование asyncio и библиотек, таких как aiohttp, для создания высокопроизводительных приложений, способных обрабатывать множество запросов одновременно. Это особенно полезно для приложений, требующих высокой пропускной способности и низкой задержки.</li>
        <li><strong>Кэширование и оптимизация производительности</strong>: Внедрение систем кэширования, таких как Redis или Memcached, для уменьшения нагрузки на базу данных и ускорения ответов приложений. Оптимизация запросов и использование индексов также играют ключевую роль в повышении производительности.</li>
        <li><strong>Контейнеризация и оркестрация</strong>: Использование Docker для создания контейнеров, что упрощает развертывание и управление приложениями. Оркестрация с помощью Kubernetes позволяет автоматизировать развертывание. Пока я использовал только Docker, но мне очень интересна dev-ops сфера, и я надеюсь в скором времени ближе познакомиться с Kubernetes. Возможно, пока вы это читаете, я уже занимаюсь чем-то подобным!</li>
      </ul>
      <p>Python стал для меня не просто языком программирования, а прочной основой для дальнейшего развития и достижения новых высот в карьере.</p>
    </div>
  );
};

// Main component that calculates and displays line numbers
const PythonInfoComponent = () => {
  const textRef = useRef(null);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    const calculateLines = () => {
      if (textRef.current) {
        const element = textRef.current;
        const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
        const height = element.offsetHeight;
        const newLineCount = Math.round(height / lineHeight);

        // Ensure that the line count is always updated
        if (newLineCount !== lineCount) {
          setLineCount(newLineCount);
        }
      }
    };

    // Use ResizeObserver to observe changes in the text container's size
    const observer = new ResizeObserver(() => {
      calculateLines();
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [lineCount]); // Add lineCount as a dependency to ensure recalculation

  // Create an array of line numbers from 1 to lineCount
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="p-4 w-full">
      <div className="flex">
        {/* Line numbers column */}
        <div className="text-right pr-4 text-gray-500">
          {lineNumbers.map((lineNumber) => (
            <div key={lineNumber} className="leading-[175%]">
              {lineNumber}
            </div>
          ))}
        </div>

        {/* Text column */}
        <div ref={textRef} className="text-lg font-mono">
          <TextContent />
        </div>
      </div>

      <div className="mt-2 text-sm text-green-600">
        Estimated number of lines: {lineCount}
      </div>
    </div>
  );
};

export default PythonInfoComponent;
