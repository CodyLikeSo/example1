import { useState } from 'react';
import monkey from '/home/cody/Cody/Programming/React/example1/example1/src/assets/monkey.jpg';
import { Text_about } from './text_about';

// List of possible texts
const textOptions = [
  "You may not believe me, but this picture was taken with my pants ripped down my ass.",
  "And this man calls himself a programmer and a musician and a project manager at the same time.",
  "Hope you like the site. I did my best.",
  "You can ask llama",
  "Have you checked out the console yet?",
  "Don't you get fucking tired of clicking?",
  "This site has a problem with adaptability. NO, DON'T CHECK IT!",
  "You no take candle",
  "Tape exit in console",
  "My prince... The lady of the woods needs a favor...",
  "Welcome to the celebration, baby the judges are jailed and the future is ours",
  "Avicii, i love you"
];

const Summury = () => {
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [animate, setAnimate] = useState(true);

  const handleTextClick = () => {
    setAnimate(false);  // Start fade-out

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setCurrentText(textOptions[randomIndex]);
      setAnimate(true); // Start fade-in
    }, 300); // Wait for fade-out transition to complete before changing text
  };

  return (
    <div className="flex h-screen space-x-[4%] p-[0.3%]">

      <div className="w-[24%] flex flex-col gap-y-[4%]">
        <div className="w-full h-[26%] rounded-[15px] border-[1px] border-green-600 flex items-center justify-center overflow-hidden transform transition-transform duration-700 hover:scale-[102%]">
          <img src={monkey} className="w-full h-full object-cover rounded-[15px]" alt="Monkey" />
        </div>
        <div
          className="bg-[#242424] w-full h-[26%] rounded-[15px] border-[1px] border-green-600 flex items-center justify-center transform transition-transform duration-700 hover:scale-[102%] p-[4%] text-center cursor-pointer"
          onClick={handleTextClick}
        >
          <span
            className={`transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}
          >
            {currentText}
          </span>
        </div>
      </div>
      
      <div className="bg-[#242424] w-[76%] h-[56%] rounded-[15px] border-[1px] border-green-600 transform transition-transform duration-700 hover:scale-[102%]">
        <Text_about/>
      </div>
    </div>
  );
};

export default Summury;