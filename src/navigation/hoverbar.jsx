import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

export default function HoverButton() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        data-tooltip-id="my-tooltip"
        className="px-32 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:px-48 hover:bg-green-500 focus:outline-none transition-all duration-100 ease-in-out"
      >
        {/* EMPTY */}
      </button>
      <Tooltip id="my-tooltip" place="right" effect="solid" className='bg-[#242424]'>
        <span>Home</span>
      </Tooltip>
    </div>
  );
}
