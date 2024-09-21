import React, { useState, useRef } from 'react';
import consoleImage from '/home/cody/Cody/Programming/React/example1/example1/src/assets/arch.png';
import NeofetchOutput from './neofetch_text';

const json = {
  "arch": "Arch | Bash \n \n Words cannot describe how much I fell in love with this system when a friend first recommended it to me. I started using Linux systems with the Manjaro distribution. At that moment I tried out the console for the first time and realized that this is what I wanted. I've always lacked the quick startup and tracking of processes like launching applications by typing a single command or working with Git repositories without touching the code editor. Also, I can't help but notice the fast performance of the system, even on an hdd disk, and the ability to customize it to fit my needs. \n \n Several times I installed Arch manually or with a script, but I settled on hyprdots by prasanthrangan and still use it."
};

function ConsoleEmulator() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'component', content: <NeofetchOutput /> }
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
        } else if (command === 'bye') {
          setHistory((prevHistory) => [...prevHistory, { type: 'text', content: 'bye bye' }]);
        } else if (command === 'arch') {
          setHistory((prevHistory) => [...prevHistory, { type: 'text', content: json.arch }]);
        } else if (command === 'clear') {
          setHistory([]);
        } else {
          setHistory((prevHistory) => [...prevHistory, { type: 'text', content: `zsh: command not found: ${command}` }]);
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
    const commands = ['hello', 'clear', 'bye', 'arch'];
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
            ) : entry.type === 'component' ? (
              entry.content
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
