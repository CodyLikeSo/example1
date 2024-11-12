import React, { useState, useEffect, useRef } from 'react';

// Child component with updated text
const TextContent = () => {
  return (
  <div>
    <p className='text-green-600'># Arch | Bash</p>
    <br />
    <p className='text-green-600'>## First Steps</p>
    <p>Words cannot describe how much I fell in love with this system when a friend first recommended it to me. I started using Linux systems with the Manjaro distribution. At that moment, I tried out the console for the first time and realized that this is what I wanted.</p>
    <br />
    <p>I've always lacked the quick startup and tracking of processes, like launching applications by typing a single command or working with Git repositories without touching the code editor. Also, I can't help but notice the fast performance of the system, even on an HDD, and the ability to customize it to fit my needs.</p>
    <br />
    <p className='text-green-600'>## My Setup</p>
    <p>Several times I installed Arch manually or with a script, but I settled on [Hyprodots](<a href='https://github.com/prasanthrangan/hyprodots'>https://github.com/prasanthrangan/hyprodots</a>) by **prasanthrangan** and still use it.</p>
  </div>
  );
};

// Main component that calculates and displays line numbers
const ArchInfoComponent = () => {
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

export default ArchInfoComponent;
