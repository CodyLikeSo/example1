import { useState, useEffect } from 'react';
// import monkey from '/home/cody/Cody/Programming/React/example1/example1/src/assets/monkey.jpg';
import monkey from '/home/cody/Cody/Programming/React/my_site/example1/src/assets/monkey.jpg'
import { Text_about } from './text_about';
// import stars from '/home/cody/Cody/Programming/React/example1/example1/src/assets/stars2.png';
import stars from '/home/cody/Cody/Programming/React/my_site/example1/src/assets/stars2.png';

// List of possible texts
const textOptions = [
  "Press Alt (─‿─)",
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
  "Avicii, I love you",
  "Get your ass back here!",
  "(･`_´･ )",
  "There is no sound design. Sad"
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
      if (event.key === 'Alt') {
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
    <div>
            <div
              className="absolute inset-0 z-0 rounded-[30px] opacity-95 hidden md:block"
              style={{
                backgroundImage: `url(${stars})`,
                backgroundSize: 'cover', // or 'contain' depending on your needs
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
      <div className="flex flex-col md:flex-row h-screen md:space-x-[4%] sm:space-x-0 space-x-0 p-[0.3%]">

        {/* Left Column: Photo and Random Text */}
        <div className="w-full sm:w-full md:w-[50%] lg:w-[45%] xl:w-[30%] 2xl:w-[24%] 3xl:w-[24%] 4xl:w-[24%] flex flex-col gap-y-[4%]">
          
          {/* Photo */}
          <div className="w-full hidden sm:hidden md:block  h-[300px] sm:h-[300px] md:h-[46.3%]  lg:h-[26%] md:shadow-[0_0px_10px_4px_rgba(0,0,0,0.1)] xl:h-[26%] 2xl:h-[26%] 3xl:h-[26%] 4xl:h-[26%] rounded-[15px] border-[1px] border-green-600  items-center justify-center overflow-hidden transform transition-transform duration-300 hover:scale-[102%]">
            <img src={monkey} className="w-full h-full object-cover rounded-[15px]" alt="Monkey" />
          </div>

          {/* Random Text */}
          <div
            className="bg-[#242424] text-sm 4xl:text-4xl sm:text-sm xl:text-xl text-[#d9d9d9] md:shadow-[0_0px_10px_4px_rgba(0,0,0,0.1)] hidden opacity-85 sm:hidden md:block w-full h-[300px] sm:h-[300px] md:h-[26%] lg:h-[26%] xl:h-[26%] 2xl:h-[26%] 3xl:h-[26%] 4xl:h-[26%] rounded-[15px] border-[1px] border-green-600 flex items-center justify-center transform transition-transform duration-300 hover:scale-[102%] p-[4%] text-center cursor-pointer py-[18%]"
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

        {/* Right Column: Text_about */}
        <div className="md:bg-[#242424] bg-transparent w-full md:shadow-[0_0px_10px_4px_rgba(0,0,0,0.1)] opacity-85 sm:w-full md:w-[76%] lg:w-[76%] xl:w-[76%] 2xl:w-[76%] 3xl:w-[76%] 4xl:w-[76%] md:h-[76.3%] lg:h-[56%] sm:h-[95%] h-[95%] rounded-[15px] border-[1px] border-green-600 transform transition-transform duration-300 hover:scale-[102%] overflow-hidden">
          <div className="h-full overflow-y-auto p-[4%] ">
            <Text_about className="text-[#d9d9d9] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summury;
