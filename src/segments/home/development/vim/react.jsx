import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure you have Tailwind CSS already set up in your project
import parse from 'html-react-parser';

function ReactInfoComponent() {
  const text = `<div>#React

<span classname="text-green-600 ">## How could this even happen 🤨</span>

<span classname="text-[#d9d9d9]">React - Initially I wasn't very interested in frontend development, but I realized that I needed to master it in order to bring my </span>
<span classname="text-[#d9d9d9]">projects to a tangible result. I started exploring different frameworks, libraries and tools, and eventually chose React. I started</span>
<span classname="text-[#d9d9d9]">exploring different frameworks, libraries and tools, and eventually chose React. Along with learning React, I learned HTML,</span>
<span classname="text-[#d9d9d9]">CSS, and JavaScript. Instead of classic CSS, I used Tailwind for my projects.</span>

<span classname="text-[#d9d9d9]">One of my first projects was the creation of this</span>
<span classname="text-[#d9d9d9]">website, even though it looked very different before. Now I can confidently say that I know how to work with React and handle</span>
<span classname="text-[#d9d9d9]">frontend development tasks.</span>

## My Setup

<span classname="text-[#d9d9d9]">Several times I installed Arch manually or with a script, but I settled on  <span classname="text-green-600">[Hyprdots]</span>  <span classname="text-green-300">(https://</span>
<span className="text-green-300">github.com/prasanthrangan/hyprdots)</span> <span className="text-[#d9d9d9]">by <span className="text-[#d9d9d9] text-extrabold">**prasanthrangan**</span> and still use it.</span></div>`;

// Now I can confidently say that I know how to work with React and handle frontend development tasks.




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