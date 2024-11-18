import React, { useState, useEffect, useRef } from 'react';

// Child component with updated text
const TextContent = () => {
  return (
  <div>
    <p className='text-green-600'># React</p>
    <br />
    <p className='text-green-600'>## How could this happen🤔</p>
    <br />
    <p>Initially I wasn't very interested in frontend development, but I realized that I needed to master it to bring my projects to a visible result. I started exploring different frameworks, libraries and tools, and eventually chose React. Along with learning React, I had to familiarize myself with HTML, CSS and JavaScript.</p>
    <br />
    <p> Along with classic CSS, I used Tailwind for my projects. One of my first projects was the creation of this website, although it used to look very different. Now I can confidently say that I know how to work with React and handle frontend development tasks.</p>
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
