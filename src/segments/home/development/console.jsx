import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import consoleImage from '/home/cody/Cody/Programming/React/example1/example1/src/assets/arch.png';
import NeofetchOutput from './neofetch_text';
import development from './development';
import management from '../management/management';
import sound_design from '../sound_design/sound_design';
import ParticleEffect from '../../hero/particle';

const json = {
  arch: `Arch | Bash \n\n Words cannot describe how much I fell in love with this system when a friend first recommended it to me. I started using Linux systems with the Manjaro distribution. At that moment I tried out the console for the first time and realized that this is what I wanted. I've always lacked the quick startup and tracking of processes like launching applications by typing a single command or working with Git repositories without touching the code editor. Also, I can't help but notice the fast performance of the system, even on an HDD, and the ability to customize it to fit my needs. \n\n Several times I installed Arch manually or with a script, but I settled on hyprdots by prasanthrangan and still use it.\n`,
  react: `React | CSS | HTML | Tailwind \n\n I wasn't initially very interested in frontend development, but realized that I needed to master it in order to bring my projects to a tangible conclusion. I started exploring different frameworks, libraries, and tools and eventually chose React. In parallel with learning React, I learned HTML and CSS. Instead of classic CSS, I used Tailwind for my projects. One of my first projects was the creation of this website, even though it looked very different before. Now I can confidently say that I know how to work with React and handle frontend development tasks.\n`
};

function ConsoleEmulator() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'component', content: <NeofetchOutput className=''/> }
  ]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const commands = {
    hello: {
      action: () => setHistory(prev => [...prev, { type: 'text', content: 'hello world' }]),
      description: 'Prints "hello world".'
    },
    bye: {
      action: () => setHistory(prev => [...prev, { type: 'text', content: 'bye bye' }]),
      description: 'Prints "bye bye".'
    },
    arch: {
      action: () => {
        setHistory([]);
        setHistory(prev => [...prev, { type: 'text', content: json.arch }]);
      },
      description: 'Displays information about Arch Linux.'
    },
    react: {
      action: () => {
        setHistory([]);
        setHistory(prev => [...prev, { type: 'text', content: json.react }]);
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
        setHistory(prev => [...prev, { type: 'text', content: commandDescriptions }]);
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
      setInput('');
      setTimeout(() => {
        if (commands[command]) {
          commands[command].action();
        } else {
          setHistory(prev => [...prev, { type: 'text', content: `zsh: command not found: ${command}` }]);
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
        <div className="flex flex-col space-y-2 text-[70%] 2xl:text-[100%] lg:text-[85%] md:text-[80%] sm:text-[75%]">
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
