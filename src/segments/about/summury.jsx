import { useState, useEffect } from 'react';
import monkey from '/home/cody/Cody/Programming/React/example1/example1/src/assets/monkey.jpg';
import { Text_about } from './text_about';

// List of possible texts
const textOptions = [
  "Press space (─‿─)",
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
  "Welcome to the celebration, baby. The judges are jailed and the future is ours",
  "Avicii, i love you",
  "Get your ass back here!",
  "(･`_´･ )"
];

const Summury = () => {
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to handle the random text change
  const changeRandomText = () => {
    setIsAnimating(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setCurrentText(textOptions[randomIndex]);

      // Trigger the fade-in effect
      setTimeout(() => {
        setIsAnimating(false);
      }, 30);

    }, 200); // Wait for fade-out before changing text
  };

  // Effect to listen for "Space" key presses
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === ' ') {
        changeRandomText();
        event.preventDefault(); // Prevent scrolling with space bar
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="flex h-screen space-x-[4%] p-[0.3%]">

      <div className="w-[24%] flex flex-col gap-y-[4%]">
        <div className="w-full h-[26%] rounded-[15px] border-[1px] border-green-600 flex items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-[102%]">
          <img src={monkey} className="w-full h-full object-cover rounded-[15px]" alt="Monkey" />
        </div>
        <div
          className="bg-[#242424] w-full h-[26%] rounded-[15px] border-[1px] border-green-600 flex items-center justify-center transform transition-transform duration-300 hover:scale-[102%] p-[4%] text-center cursor-pointer"
          onClick={changeRandomText}
        >
          <span
            className={`transition-all duration-300 ${
              isAnimating ? 'opacity-0 text-green-600' : 'opacity-100 text-white'
            }`}
          >
            {currentText}
          </span>
        </div>
      </div>

      <div className="bg-[#242424] w-[76%] h-[56%] rounded-[15px] border-[1px] border-green-600 transform transition-transform duration-300 hover:scale-[102%]">
        <Text_about/>
      </div>
    </div>
  );
};

export default Summury;