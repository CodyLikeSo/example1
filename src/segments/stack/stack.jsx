import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

const sectionsData = [
  { 
    title: 'Management', 
    words: [
      { name: 'Scrum', description: <div className=''><span className='text-green-600'>Scrum</span> is an agile project management framework that helps teams structure and manage their work through a set of values, principles, and practices. It is used by project managers most often when handling <span className='text-green-600'>IT projects</span>. I was no exception)</div>, rating: 3 },
      { name: 'Kanban', description: <div className=''><span className='text-green-600'>Kanban</span> is an agile project management method that enables teams to visualize their workflow and optimize efficiency through a continuous delivery approach. It is commonly utilized by project managers, especially in <span className='text-green-600'>software development</span> and other industries. I found it to be equally effective!)</div>, rating: 2 },
      { name: 'Gantt Chart', description: <div className=''><span className='text-green-600'>Gantt Chart</span> is a project management tool that provides a visual timeline for planning and scheduling tasks. It helps teams track progress and manage dependencies effectively, making it particularly useful for <span className='text-green-600'>construction projects</span> and large-scale initiatives. I discovered it to be a valuable resource as well!)</div>, rating: 1 }
    ] 
  },
  { 
    title: 'Development', 
    words: [
      { name: 'Python', description: <div>Description for word4</div>, rating: 2 },
      { name: 'React', description: <div>Description for word5</div>, rating: 3 },
      { name: 'Rust', description: <div>Description for word6</div>, rating: 1 }
    ] 
  },
  { 
    title: 'Soft-Skills', 
    words: [
      { name: 'Communication', description: <div>Description for word7</div>, rating: 3 },
      { name: 'English', description: <div>Description for word8</div>, rating: 2 },
      { name: 'Problem Solving', description: <div>Description for word9</div>, rating: 1 }
    ] 
  },
];


const Stack = () => {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(<div>Little map of my skills-set. To see more go to <a className='text-green-600' href='/manage'>MANAGEMENT</a> or <a className='text-green-600' href='/develop'>DEVELOPMENT</a></div>);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [rotatedSections, setRotatedSections] = useState(new Array(sectionsData.length).fill(false));

  const toggleSection = (index) => {
    const newRotatedSections = rotatedSections.map((_, i) => (i === index ? !rotatedSections[i] : false));
    setOpenSectionIndex(openSectionIndex === index ? null : index);
    setSelectedWordIndex(null); // Reset word index when toggling sections
    setRotatedSections(newRotatedSections);
  };

  const handleWordClick = (description, index) => {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedDescription(description);
      setIsDescriptionVisible(true);
      setSelectedWordIndex(index);
      setFadeOut(false);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      if (openSectionIndex === null) {
        // Open the first section
        toggleSection(0);
      } else if (selectedWordIndex === null) {
        // Select the first word in the opened section
        setSelectedWordIndex(0);
        handleWordClick(sectionsData[openSectionIndex].words[0].description, 0);
      } else if (selectedWordIndex < sectionsData[openSectionIndex].words.length - 1) {
        // Select the next word
        const nextWordIndex = selectedWordIndex + 1;
        handleWordClick(sectionsData[openSectionIndex].words[nextWordIndex].description, nextWordIndex);
      } else if (openSectionIndex < sectionsData.length - 1) {
        // Move to the next section
        toggleSection(openSectionIndex + 1);
      }
    } else if (e.key === 'ArrowLeft') {
      if (selectedWordIndex !== null && selectedWordIndex > 0) {
        // Go back to the previous word
        const prevWordIndex = selectedWordIndex - 1;
        handleWordClick(sectionsData[openSectionIndex].words[prevWordIndex].description, prevWordIndex);
      } else if (selectedWordIndex === 0) {
        // Close the current section
        setSelectedWordIndex(null);
        setIsDescriptionVisible(false);
      } else if (openSectionIndex > 0) {
        // Move to the previous section
        toggleSection(openSectionIndex - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openSectionIndex, selectedWordIndex]);

  return (
    <div className="w-full h-full">
      <div className="absolute inset-0 rounded-[30px] opacity-95 hidden md:block"
           style={{
             backgroundImage: `url('src/assets/stars2.png')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             zIndex: '-999'
           }}
      ></div>
      <div className="p-1 flex flex-col md:flex-row overflow-hidden h-full">
        <div className="md:w-1/3 w-full md:grid md:grid-cols-1 grid-cols-2 grid-rows-1 gap-4 border bg-[#1a1a1a] bg-opacity-55 border-green-600 p-4 rounded-[15px]">
          <div>
            <div className='text-center text-2xl font-extrabold text-green-300'>Skills</div>
            {sectionsData.map((section, index) => (
              <div key={index} className="rounded-[15px]">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-2 text-left text-md md:text-lg lg:text-lg bg-opacity-5 text-white rounded-[15px] transition-colors duration-300 ease-in-out hover:bg-opacity-20 hover:text-green-600"
                >
                  <div className='md:px-10 flex items-center object-center'>
                    <IoIosArrowForward 
                      className={`md:absolute left-14 mr-2 transition-transform duration-700 ${rotatedSections[index] ? 'rotate-90' : ''}`} 
                    />
                    <h1 className=''>{section.title}</h1>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${openSectionIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                >
                  <div className="p-1 rounded-[15px]">
                  <ul>
                    {section.words.map((word, wordIndex) => (
                      <li 
                        key={wordIndex} 
                        className={`p-1 bg-[#242424] rounded-full mt-2 cursor-pointer transition-colors duration-300 ease-in-out ${selectedWordIndex === wordIndex ? 'bg-opacity-60' : 'bg-opacity-100'}`} 
                        onClick={() => handleWordClick(word.description, wordIndex)}
                      >
                        <div className='flex items-center justify-between px-2 transition-colors duration-300 ease-in-out hover:bg-opacity-20 hover:text-green-400'>
                          <span>{word.name}</span>
                          <div className="flex space-x-1">
                            {[...Array(word.rating)].map((_, circleIndex) => (
                              <FaCircle key={circleIndex} color='#999999' />
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {/* Дополнительный контент можно добавить здесь, если необходимо */}
          </div>
        </div>
        <div className="md:ml-4 mt-4 md:mt-0 md:w-2/3 w-full bg-[#1a1a1a] bg-opacity-55 border border-green-600 rounded-[15px] p-4 h-full">
          <h3 className="text-xl font-semibold mb-2 text-center text-green-300 ">Description</h3>
          <div 
            className={`transition-opacity duration-700 h-full text-xl ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
            style={{ maxHeight: isDescriptionVisible ? '1000px' : '0', overflow: 'hidden' }}
          >
            {selectedDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
