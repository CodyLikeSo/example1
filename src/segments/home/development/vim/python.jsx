import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure you have Tailwind CSS already set up in your project
import parse from 'html-react-parser';

function PythonInfoComponent() {
  const text = `<div>#Python

<span className="text-green-600">## My Journey with Python</span>

<span className="text-[#d9d9d9]">Python is the first programming language for me, from which I thoroughly started my career in IT.</span>
<span className="text-[#d9d9d9]">Thanks to it I wrote simple scripts, telegram bots, DS ML algorithms and interacted with databases.</span>
<span className="text-[#d9d9d9]">I like the easy entry threshold and the learning potential.</span>

<span className="text-[#d9d9d9]">Everyone says the language is easy - but it's just a language.</span>
<span className="text-[#d9d9d9]">Problems and difficulties start when a programmer realizes that the programming language is just a tool in his hands and the</span>
<span className="text-[#d9d9d9]">really hard things come later.</span></div>`;

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