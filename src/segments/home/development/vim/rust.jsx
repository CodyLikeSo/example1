import React, { useState, useEffect, useRef } from 'react';

// Child component with updated text
const TextContent = () => {
  return (
  <div>
    <p className='text-green-600'># Rust</p>
    <br />
    <p>While I don't consider myself an expert in Rust, I can't help but share my experience with the language. I use Rust for tasks where speed is critical. In some cases it is easier to solve a problem using Python, but for example, if you need to implement an algorithm for processing large data sets, it is much more efficient to write a script in Rust. This language allows you to “delegate” tasks when you need high performance and stability. However, for me there are more priority applications😉</p>
    <br />
    <p className='text-green-600'>## Bevy</p>
    <br />
    <p>My introduction to Rust began with a desire to create games. At the moment, the Rust community, especially in the context of Bevy, lacks scale, which affects the available documentation. Nevertheless, I am very interested in exploring this field. You can learn more about my project in this area here.</p>
    <br />
    <p className='text-green-600'>## Rocket | Tokio</p>
    <br />
    <p>To develop the APIs needed in my work, I used Rocket and Tokio to implement asynchrony. While I have not yet achieved significant mastery of these tools, using them does not require a deep understanding of all the nuances.</p>
  </div>
  );
};

// Main component that calculates and displays line numbers
const RustInfoComponent = () => {
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

export default RustInfoComponent;
