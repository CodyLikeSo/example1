import React, { useState, useRef } from 'react';
import consoleImage from '/home/cody/Cody/Programming/React/example1/example1/src/assets/arch.png';

function ConsoleEmulator() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'image', src: consoleImage }
  ]);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      setInput('');
      setTimeout(() => {
        if (command === 'hello') {
          setHistory((prevHistory) => [...prevHistory, { type: 'text', content: 'hello world' }]);
        } else if (command === 'clear') {
          setHistory([]);
        } else {
          setHistory((prevHistory) => [...prevHistory, { type: 'text', content: `Unknown command: ${command}` }]);
        }
      }, 200);
    }
  };

  const handleConsoleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const highlightCommands = (text) => {
    const commands = ['hello', 'clear'];
    const regex = new RegExp(`\\b(${commands.join('|')})\\b`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      commands.includes(part.toLowerCase()) ? (
        <span key={index} className="text-green-600">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div
      className="bg-inherit text-white font-mono rounded h-full overflow-y-auto scrollbar-hide"
      onClick={handleConsoleClick}
    >
      <div className="flex flex-col space-y-2">
        {history.map((entry, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {entry.type === 'image' ? (
              <img src={entry.src} alt="Console Image" className="w-[70%]" />
            ) : (
              entry.content
            )}
          </div>
        ))}
        <div className="flex">
          <span className="mr-2">
            <span className='text-green-600'>[</span>
            <span className='text-white'>cody</span>
            <span className='text-green-600'>@</span>
            <span className='text-white'>arch</span>
            <span className='text-green-600'>:</span>
            <span>~/dev</span>
            <span className='text-green-600'>]</span>
            <span className='text-white'>% </span>
            <span className='text-green-600'>&gt;&gt;</span>
          </span>
          <div className="flex-1 bg-transparent outline-none relative">
            <div className="absolute inset-0 pointer-events-none">
              {highlightCommands(input)}
            </div>
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-transparent outline-none text-transparent caret-white"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsoleEmulator;
