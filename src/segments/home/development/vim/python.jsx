import React, { useState, useEffect, useRef } from 'react';

// Child component with updated text
const TextContent = () => {
  return (
    <div>
      <p className='text-green-600'># Python</p>
      <br />
      <p className='text-green-600'>## Experience</p>
      <br />
      <p>Python became the first programming language for me, from which I started my journey in IT. Since then, I have come a long way, and Python turned out to be not just a tool, but a true partner in solving complex problems. Thanks to this language, I was able to implement many interesting projects, including:</p>
      <br />
      <ul>
          <li><strong><span className='text-green-600'>API Scripts</span></strong>: Development of RESTful APIs for integration with various services, significantly simplifying interaction between systems.</li>
          <br />
          <li><strong><span className='text-green-600'>Telegram Bots</span></strong>: Creation of bots for automating processes and interacting with users, allowing for real-time information delivery.</li>
          <br />
          <li><strong><span className='text-green-600'>Algorithms in Data Science and Machine Learning</span></strong>: Implementation of machine learning models using libraries such as scikit-learn and TensorFlow, enabling me to analyze data and make predictions based on statistical methods.</li>
          <br />
          <li><strong><span className='text-green-600'>Working with Databases</span></strong>: Experience with SQL and NoSQL databases, including PostgreSQL and MongoDB, allowing for efficient data management and query optimization.</li>
      </ul>
      <br />
      <p>I appreciate the low entry barrier and the immense potential for learning that Python offers. Everyone says the language is easy, but it is just a tool. The truly complex challenges arise during the architecture design phase, performance optimization, and ensuring application security.</p>
      <br />
      <p>Currently, as a project manager, I actively use Python to automate tasks both for myself and for the company as a whole. This includes writing scripts for data processing, report generation, and automating routine processes, allowing the team to focus on more critical aspects of projects.</p>
      <br />
      <p>I absolutely love designing services from the ground up, both as a project manager and a developer. As I delve deeper into my experience with Python, I encounter more complex aspects of backend development that require an understanding of application architecture and technologies. For example:</p>
      <br />
      <ul>
        <li><strong><span className='text-green-600'>Microservices Architecture</span></strong>: Designing and implementing microservices using frameworks such as FastAPI and Flask. This allows for the creation of scalable and flexible systems, where each service is responsible for its own functionality and can be developed independently. Even as a project manager, I sometimes had to manually create APIs with FastAPI followed by deployment.</li>
        <br />
        <li><strong><span className='text-green-600'>Asynchronous Programming</span></strong>: Utilizing asyncio and libraries like aiohttp to create high-performance applications capable of handling multiple requests simultaneously. This is especially useful for applications requiring high throughput and low latency.</li>
        <br />
        <li><strong><span className='text-green-600'>Caching and Performance Optimization</span></strong>: Implementing caching systems such as Redis or Memcached to reduce database load and speed up application responses. Query optimization and the use of indexes also play a key role in enhancing performance.</li>
        <br />
        <li><strong><span className='text-green-600'>Containerization and Orchestration</span></strong>: Using Docker to create containers, which simplifies the deployment and management of applications. Orchestration with Kubernetes allows for automated deployment. While I have only used Docker so far, I am very interested in the DevOps field and hope to get more familiar with Kubernetes soon. Perhaps by the time you read this, I am already working on something similar!</li>
    </ul>
<br />
<p>Python has become for me not just a programming language, but a solid foundation for further development and achieving new heights in my career.</p>
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

export default PythonInfoComponent;
