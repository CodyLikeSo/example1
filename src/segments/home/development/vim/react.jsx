import React, { useState, useEffect, useRef } from 'react';

// Child component with updated text
const TextContent = () => {
  return (
  <div>
    <p className='text-green-600'># React</p>
    <br />
    <p className='text-green-600'>## Как это могло произойти 🤔</p>
    <br />
    <p>React — изначально я не был очень заинтересован в фронтенд-разработке, но понял, что мне нужно овладеть этим, чтобы довести свои проекты до осязаемого результата. Я начал изучать различные фреймворки, библиотеки и инструменты, в конечном итоге выбрав React. Вместе с изучением React я освоил HTML, CSS и JavaScript. Вместо классического CSS я использовал Tailwind для своих проектов.</p>
    <br />
    <p>Одним из моих первых проектов было создание этого веб-сайта, хотя раньше он выглядел совсем иначе. Теперь я могу уверенно сказать, что знаю, как работать с React и выполнять задачи фронтенд-разработки.</p>
    <br />
    <p className='text-green-600'>## Моя настройка</p>
    <br />
    <p>Несколько раз я устанавливал Arch вручную или с помощью скрипта, но остановился на <a href="https://github.com/prasanthrangan/hyprodots">Hyprodots</a> от <strong>prasanthrangan</strong> и до сих пор его использую.</p>
  </div>
  );
};

// Main component that calculates and displays line numbers
const ReactInfoComponent = () => {
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
        <div className="text-right pr-4 text-gray-700">
          {lineNumbers.map((lineNumber) => (
            <div key={lineNumber} className="leading-[28px]">
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

export default ReactInfoComponent;
