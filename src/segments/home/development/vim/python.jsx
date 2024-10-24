import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure you have Tailwind CSS already set up in your project
import parse from 'html-react-parser';

function PythonInfoComponent() {
  const text = `<div>#Python

<span className="text-green-600">## Starting</span>

<span className="text-[#d9d9d9]">Python was the first programming language I started my journey in IT with. I've come a long way since then, and Python has</span>
<span className="text-[#d9d9d9]">proven to be not just a tool, but a <span className="text-green-600"> true partner</span> in solving complex problems. Thanks to this language, I have been able to</span>
<span className="text-[#d9d9d9]">realize many interesting projects including:</span>

<span className="text-green-600">**API scripts: </span><span className="text-[#d9d9d9]">Developing <span className="text-green-600">RESTful APIs</span> for integration with various services, which greatly simplified interaction between</span>
<span className="text-[#d9d9d9]">systems.</span>

<span className="text-green-600">**Telegram Bots: </span><span className="text-[#d9d9d9]">Creating <span className="text-green-600">bots</span> to automate processes and user interactions to provide real-time information.</span>

<span className="text-green-600">**Algorithms in Data Science and Machine Learning: </span><span className="text-[#d9d9d9]">Implementing <span className="text-green-600">machine learning models</span> using libraries such as scikit-</span>
<span className="text-[#d9d9d9]">learn and TensorFlow, which gave me the ability to analyze data and make predictions based on statistical methods.</span>

<span className="text-green-600">**Database Work: </span><span className="text-[#d9d9d9]">Experience with <span className="text-green-600">SQL and NoSQL databases,</span> including PostgreSQL and MongoDB, which allows for efficient </span>
<span className="text-[#d9d9d9]">data management and query optimization.</span>

<span className="text-[#d9d9d9]">I love the easy entry threshold and the huge learning potential that Python provides. Everyone says the language is easy, but</span>
<span className="text-[#d9d9d9]">it's just a tool. The real challenges come in the architecture design, performance optimization, and application security</span>
<span className="text-[#d9d9d9]">phases.</span>

<span className="text-[#d9d9d9]">Currently, working as a project manager, I actively use Python to automate tasks both my own and the company as a whole.</span>
<span className="text-[#d9d9d9]">This includes writing scripts to process data, generate reports, and automate routine processes, allowing the team to focus on</span>
<span className="text-[#d9d9d9]">the more important aspects of projects.</span>

<span className="text-[#d9d9d9]">I absolutely love designing services from the very basics, both in my role as a project manager and developer. As I get deeper</span>
<span className="text-[#d9d9d9]">into my experience with Python, I'm encountering more complex aspects of backend development that require an</span>
<span className="text-[#d9d9d9]">understanding of application architecture and technologies. For example:</span>

<span className="text-green-600"> **Microservice Architecture: </span><span className="text-[#d9d9d9]">Design and implementation of microservices using frameworks such as FastAPI and Flask. This</span>
<span className="text-[#d9d9d9]">allows for scalable and flexible systems where each service is responsible for its own functionality and can be developed</span>
<span className="text-[#d9d9d9]">independently. Even as a project manager, sometimes I had to manually create APIs on FastAPI with subsequent</span>
<span className="text-[#d9d9d9]">deployment.</span>

<span className="text-green-600"> **Asynchronous Programming: </span><span className="text-[#d9d9d9]">Using asyncio and libraries such as aiohttp to create high performance applications that can</span>
<span className="text-[#d9d9d9]">handle multiple requests simultaneously. This is especially useful for applications that require high throughput and low</span>
<span className="text-[#d9d9d9]">latency.</span>

<span className="text-green-600"> **Caching and Performance Optimization: </span><span className="text-[#d9d9d9]">Implement caching systems such as Redis or Memcached to reduce database load</span>
<span className="text-[#d9d9d9]">and speed up application responses. Query optimization and the use of indexes also play a key role in improving performance.</span>

<span className="text-green-600"> **Containerization and Orchestration: </span><span className="text-[#d9d9d9]">Using Docker to create containers, making it easier to deploy and manage applications.</span>
<span className="text-[#d9d9d9]">Orchestration using Kubernetes to automate deployment. So far I've only used Docker, but I'm very interested in the dev-ops</span>
<span className="text-[#d9d9d9]">realm and hope to get more familiar with Kubernetes soon. Perhaps as you're reading this, I'm already doing something</span>
<span className="text-[#d9d9d9]">similar)))</span>

<span className="text-[#d9d9d9]">Python has become not just a programming language for me, but a solid foundation for further development and reaching</span>
<span className="text-[#d9d9d9]">new heights in my career. Thanks, for reading so far</span>

</div>`;

  // Split the text into lines
  const lines = text.split('\n');

  return (
    <div className="bg-inherit text-gray-700">
        {/* <div className='border-t border-gray-500 pt-2'>

        </div> */}
      <div className="grid grid-cols-12">
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            <div className="text-right pr-16 col-span-1">
              {index + 1}
            </div>
            <div className="col-span-11 text-green-600">
              {parse(line)}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="text-gray-400 mt-6"> {/* Added margin-top for spacing */}
        {/* <div className='text-right py-2'>
            <span>markdown </span>
            <span className='text-green-600'>utf-8[unix] </span>
            <span>Characters count: </span>
            <span className='text-green-600'>
            {`${text.length}`}
            </span>
        </div> */}
      {/* <div className='border-t border-gray-500 pt-2'>

        </div> */}
      </div>
    </div>
  );
}

export default PythonInfoComponent;