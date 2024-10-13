import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NeofetchOutput from './neofetch_text';
import ArchInfoComponent from './vim/arch';
import ReactInfoComponent from './vim/react';

function ConsoleEmulator() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'component', content: <NeofetchOutput className='' /> }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const commands = {
    hello: {
      action: () => setHistory(prev => [...prev, { type: 'text', content: 'hello world', transition: 'fade' }]),
      description: 'Prints "hello world".'
    },
    bye: {
      action: () => setHistory(prev => [...prev, { type: 'text', content: 'bye bye', transition: 'fade' }]),
      description: 'Prints "bye bye".'
    },
    arch: {
      action: () => {
        setHistory([]);
        setHistory(prev => [...prev, { type: 'component', content: <ArchInfoComponent/>, transition: 'fade' }]);
      },
      description: 'Displays information about Arch Linux.'
    },
    react: {
      action: () => {
        setHistory([]);
        setHistory(prev => [...prev, { type: 'component', content: <ReactInfoComponent/>, transition: 'fade' }]);
      },
      description: 'Displays information about React.'
    },
    react1: {
      action: () => {
        const reactInfo = (
          <div className="space-y-2">
            <h2 className="text-lg font-bold">React | CSS | HTML | Tailwind</h2>
            <p>
              I wasn't initially very interested in frontend development, but realized that I needed to master it in order to bring
              my projects to a tangible conclusion. I started exploring different frameworks, libraries, and tools and eventually
              chose React. In parallel with learning React, I learned HTML and CSS. Instead of classic CSS, I used Tailwind for my
              projects. One of my first projects was the creation of this website, even though it looked very different before. Now I
              can confidently say that I know how to work with React and handle frontend development tasks.
            </p>
          </div>
        );
        setHistory([]);
        setHistory(prev => [...prev, { type: 'text', content: reactInfo, transition: 'fade' }]);
      },
      description: 'Displays information about React.'
    },
    clear: {
      action: () => setHistory([]),
      description: 'Clears the console history.'
    },
    refresh: {
      action: () => window.location.reload(),
      description: 'Reloads the page.'
    },
    list: {
      action: () => {
        const commandDescriptions = Object.entries(commands)
          .map(([cmd, { description }]) => `${cmd.padEnd(15)} --${description}`)
          .join('\n');
        setHistory(prev => [...prev, { type: 'text', content: commandDescriptions, transition: 'fade' }]);
      },
      description: 'Lists all available commands with descriptions.'
    },
    main: {
      action: () => navigate('/'),
      description: 'Redirects to the main page.'
    },
    management: {
      action: () => navigate('/manage'),
      description: 'Redirects to the management page.'
    },
    sound: {
      action: () => navigate('/sound'),
      description: 'Redirects to the sound design page.'
    }
  };
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      if (command) {
        setCommandHistory((prev) => [...prev, command]);
        setHistoryIndex(-1);
      }
      setInput('');
      setTimeout(() => {
        if (commands[command]) {
          commands[command].action();
        } else {
          setHistory(prev => [...prev, { type: 'text', content: `zsh: command not found: ${command}`, transition: 'fade' }]);
        }
      }, 200);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowUp') {
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
      } else {
        setHistoryIndex(-1);
      }
    }
  };

  useEffect(() => {
    if (historyIndex >= 0) {
      setInput(commandHistory[commandHistory.length - 1 - historyIndex]);
    } else {
      setInput('');
    }
  }, [historyIndex, commandHistory]);

  const handleConsoleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const highlightCommands = (text) => {
    const commandList = Object.keys(commands);
    const regex = new RegExp(`\\b(${commandList.join('|')})\\b`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      commandList.includes(part.toLowerCase()) ? (
        <span key={index} className="text-green-600">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <>
      <div
        className="bg-inherit text-white font-mono rounded h-full overflow-y-auto scrollbar-hide"
        onClick={handleConsoleClick}
      >
        <div className="flex flex-col space-y-2 text-[70%] 4xl:text-[190%] 3xl:text-[120%] 2xl:text-[90%] lg:text-[85%] md:text-[80%] sm:text-[75%]">
          {history.map((entry, index) => (
            <div
              key={index}
              className={`whitespace-pre-wrap transition-opacity duration-500 ease-in-out ${entry.transition === 'fade' ? 'opacity-0 animate-fadeIn' : ''}`}
            >
              {entry.type === 'image' ? (
                <img src={entry.src} alt="Console Image" className="w-[70%]" />
              ) : entry.type === 'component' ? (
                entry.content
              ) : (
                entry.content
              )}
            </div>
          ))}
          <div className="flex ">
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
                onKeyDown={handleKeyUp}
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsoleEmulator;