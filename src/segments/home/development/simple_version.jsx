import React, { useState, useEffect } from 'react';
import ArchInfoComponent from './vim/arch';
import ReactInfoComponent from './vim/react';

function TabOne() {
  return <div className="max-w-full">Content for Tab One</div>;
}

function TabTwo() {
  return <div className="max-w-full">Content for Tab Two</div>;
}

function TabThree() {
  return <div className="max-w-full">Content for Tab Three</div>;
}

function TabFour() {
  return <div className="max-w-full">Content for Tab Four</div>;
}

function SlidesDevelopment() {
  const tabs = [
    { id: 'TabOne', title: 'Arch', component: <ArchInfoComponent /> },
    { id: 'TabTwo', title: 'React', component: <ReactInfoComponent /> },
    { id: 'TabThree', title: 'Python', component: <TabThree /> },
    { id: 'TabFour', title: 'Rust', component: <TabFour /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isVisible, setIsVisible] = useState(true);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
      const nextIndex = event.key === 'ArrowRight' 
        ? (currentIndex + 1) % tabs.length 
        : (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[nextIndex].id);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab]);

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Match this duration with your CSS transition duration

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const renderActiveTab = () => {
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    return activeTabData ? activeTabData.component : null;
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Tab Buttons */}
      <div className="absolute left-[23%] top-[14.3%] space-x-4 p-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`relative text-[60%] xl:text-[90%] lg:text-[80%] md:text-[75%] sm:text-[50%] w-4 xl:w-32 lg:w-28 md:w-20 sm:w-16 h-16 rounded-[15px] border-[1px] border-green-600 font-semibold transition-all duration-150 ease-in-out 
              ${activeTab === tab.id ? 'bg-inherit text-green-600 shadow-lg' : 'bg-inherit text-[#D9D9D9] hover:bg-inh'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="absolute inset-0 h-full w-full bg-inherit rounded-[15px]"></div>
            <span className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex justify-center items-center flex-grow">
        <div
          className="w-3/5 h-3/5 rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] border border-green-600 relative flex justify-center items-center"
          style={{
            background: 'linear-gradient(to bottom, #2a2a2a 30%, #242424 70%)',
          }}
        >
          <div
            className={`p-[3%] bg-inherit rounded-[30px] shadow-inner xl:text-[115%] lg:text-[100%] md:text-[95%] sm:text-[90%] text-[80%] max-h-full overflow-y-auto transition-opacity duration-300 flex justify-center items-center ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {isVisible && renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlidesDevelopment;
