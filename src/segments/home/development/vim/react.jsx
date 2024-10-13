import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure you have Tailwind CSS already set up in your project
import parse from 'html-react-parser';

function ReactInfoComponent() {
    const text = `<div>#React | Tailwind
  
  <span classname="text-green-600 ">## Accidantly Meeting</span>
  
  <span classname="text-[#d9d9d9]">React - Initially I wasn't very interested in frontend development, but I realized that I needed to master it in</span>
  <span classname="text-[#d9d9d9]">order to bring my projects to a tangible result. I started exploring different frameworks, libraries and tools,</span>
  <span classname="text-[#d9d9d9]">and eventually chose React. Along with learning React, I learned HTML, CSS, and JavaScript. Instead of </span>
  <span classname="text-[#d9d9d9]">classic CSS, I used Tailwind for my projects. One of my first projects was the creation of this website, even </span>
  <span classname="text-[#d9d9d9]">though it looked very different before. Now I can confidently say that I know how to work with React and </span>
  <span classname="text-[#d9d9d9]">handle frontend development tasks.</span>
  
  ## My Setup
  
  <span classname="text-[#d9d9d9]">Several times I installed Arch manually or with a script, but I settled on  <span classname="text-green-600">[Hyprdots]</span>  <span classname="text-green-300">(https://</span>
  <span className="text-green-300">github.com/prasanthrangan/hyprdots)</span> <span className="text-[#d9d9d9]">by <span className="text-[#d9d9d9] text-extrabold">**prasanthrangan**</span> and still use it.</span></div>`;
  
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

export default ReactInfoComponent;