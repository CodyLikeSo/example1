import React, { useState } from 'react';
import { CONTENT } from './text';
import { BsArrowRight } from "react-icons/bs";
import Loader from '../../navigation/loader';

const InputComponent = () => {
  const [value, setValue] = useState('');
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValue(''); // Clear input field after submission
    setResponseText(''); // Clear previous response
    setLoading(true); // Set loading to true

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
    } finally {
      setLoading(false); // Set loading to false after the request is complete
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
          className="md:absolute mt-2 md:py-2 text-[#d9d9d9] md:left-[400px] absolute" // Adjust the left value as needed
        >
          <BsArrowRight size={24} color='16A34A' />
        </button>
      </form>

      {loading && ( // Show loader while loading
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

      {responseText && !loading && ( // Only display the response if not loading
        <div className="relative h-screen text-lg">
          <div className="absolute md:max-w-xl max-w-md transform mt-[12%]">
            <div className="break-words overflow-wrap-normal whitespace-normal text-green-300 font-extrabold">
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
