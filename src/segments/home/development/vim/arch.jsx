import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure you have Tailwind CSS already set up in your project
import parse from 'html-react-parser';

function ArchInfoComponent() {
  const text = `<div>#Arch | Bash

<span classname="text-green-600 ">## First Steps</span>

<span classname="text-[#d9d9d9]">    Words cannot describe how much I fell in love with this system when a friend first recommended it to me.</span>
<span classname="text-[#d9d9d9]">I started using Linux systems with the Manjaro distribution. At that moment I tried out the console for the </span>
<span classname="text-[#d9d9d9]">first time and realized that this is what I wanted.</span>

<span classname="text-[#d9d9d9]">    I've always lacked the quick startup and tracking of processes like launching applications by typing a</span>
<span classname="text-[#d9d9d9]">single command or working with Git repositories without touching the code editor. Also, I can't help but</span>
<span classname="text-[#d9d9d9]">notice the fast performance of the system, even on an HDD, and the ability to customize it to fit my needs.</span>

## My Setup

<span classname="text-[#d9d9d9]">    Several times I installed Arch manually or with a script, but I settled on  <span classname="text-green-600">[Hyprdots]</span>  <span classname="text-green-300">(https://</span>
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
        <div className='text-right py-2'>
            <span>markdown </span>
            <span className='text-green-600'>utf-8[unix] </span>
            <span>Characters count: </span>
            <span className='text-green-600'>
            {`${text.length}`}
            </span>
        </div>
      {/* <div className='border-t border-gray-500 pt-2'>

        </div> */}
      </div>
    </div>
  );
}

export default ArchInfoComponent;