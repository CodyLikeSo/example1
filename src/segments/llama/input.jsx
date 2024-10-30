import React, { useState } from 'react';
import { CONTENT } from './text';

const InputComponent = () => {
  const [value, setValue] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValue(''); // Clear input field after submission

    // Construct the URL with encoded parameters
    const url = `https://ask-llama.onrender.com/chat-completion/?content=${encodeURIComponent(CONTENT)}&question=${encodeURIComponent(value)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text(); // Use .text() instead of .json()
      setResponseText(data); // Set the plain string response
    } catch (error) {
      console.error('Fetch error:', error);
      setResponseText('Error fetching response');
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <input
          className="text-[#d9d9d9] text-lg bg-transparent w-full box-border px-4 py-3 border-b-2 border-[#16A34A] focus:outline-none"
          placeholder="Ask llama"
          required
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="absolute mt-2 py-2 text-[#d9d9d9]"
        >
          Sub
        </button>
      </form>
      {responseText && ( // Only display the response
        <div className="relative h-screen text-lg">
          <div className="absolute md:max-w-xl max-w-md  transform  mt-[12%]">
            <div className="break-words overflow-wrap-normal whitespace-normal">
              {responseText} {/* Display only the API response */}
            </div>
          </div>
        </div>
      )}
      <span className="absolute h-[2px] bottom-0 left-0 w-0"></span>
    </div>
  );
};

export default InputComponent;
