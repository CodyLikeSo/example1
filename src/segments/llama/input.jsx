import React, { useState } from 'react';
import { CONTENT } from './text';
import { BsArrowRight } from "react-icons/bs";
import Loader from '../../navigation/loader';

const InputComponent = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]); // State to maintain chat history

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = value;
    setValue(''); // Clear input field after submission
    setLoading(true); // Set loading to true

    // Update chat history with user message
    setMessages((prevMessages) => [...prevMessages, { text: userMessage, sender: 'user' }]);

    // Construct the URL with encoded parameters
    const url = `https://ask-llama.onrender.com/chat-completion/?content=${encodeURIComponent(CONTENT)}&question=${encodeURIComponent(userMessage)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text(); // Use .text() instead of .json()
      
      // Update chat history with AI response
      setMessages((prevMessages) => [...prevMessages, { text: data, sender: 'ai' }]);
    } catch (error) {
      console.error('Fetch error:', error);
      setMessages((prevMessages) => [...prevMessages, { text: 'Error fetching response', sender: 'ai' }]);
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <div className="relative w-full max-w-md">


      <form onSubmit={handleSubmit} className="flex">
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
          className="md:ml-2 right-2 md:absolute mt-2 md:py-2 text-[#d9d9d9] md:left-[400px] absolute  rounded"
        >
          <BsArrowRight size={24} color='#16A34A' />
        </button>
      </form>

      {loading && ( // Show loader while loading
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}
      <div className="h-80 p-3 rounded-lg overflow-y-auto">
        <div className="flex flex-col-reverse">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-[15px] text-[90%] ${msg.sender === 'user' ? 'bg-green-600 text-white' : 'bg-green-400 text-[#1a1a1a]'} fade-in`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default InputComponent;
