import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure you have Tailwind CSS already set up in your project
import parse from 'html-react-parser';

function RustInfoComponent() {
  const text = `<div>#Rust

<span className="text-green-600">## My Experience with Rust</span>

<span className="text-[#d9d9d9]">I have very little experience with Rust, but I truly admire this language. I love its rigor and adaptability. I am very happy to</span>
<span className="text-[#d9d9d9]"> devote some of my time. I am very happy to devote some of my time to learning it.</span>

<span className="text-green-600">## Usage</span>

<span className="text-[#d9d9d9]">In particular, an actual application for me right now is the Bevy framework. My plans include creating my own games, so I </span>
<span className="text-[#d9d9d9]">started learning Rust.</span></div>`;

  // Split the text into lines
  const lines = text.split('\n');

  return (
    <div className="bg-inherit text-gray-700">
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
      <div className="text-gray-400 mt-6">
      </div>
    </div>
  );
}

export default RustInfoComponent;
