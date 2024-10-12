import React, { useState, useEffect } from 'react';
import ArchInfoComponent from './vim/arch';

// Example tab components
function TabOne() {
  return <div>Content for Tab One</div>;
}

function TabTwo() {
  return <div>Content for Tab Two</div>;
}

function TabThree() {
  return <div>Content for Tab Three</div>;
}

function TabFour() {
  return <div>Content for Tab Four</div>;
}

function SlidesDevelopment() {
  const tabs = [
    { id: 'TabOne', title: 'Arch', component: <ArchInfoComponent /> },
    { id: 'TabTwo', title: 'React', component: <TabTwo /> },
    { id: 'TabThree', title: 'Python', component: <TabThree /> },
    { id: 'TabFour', title: 'Rust', component: <TabFour /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [fade, setFade] = useState(true);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();  // Prevent default scrolling behavior

      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);

      if (event.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex].id);
      } else if (event.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[prevIndex].id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab]);

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 150);
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
            className={`relative w-36 h-16 rounded-[15px] border-[1px] border-green-600 font-semibold transition-all duration-[150ms] ease-in-out 
              ${activeTab === tab.id ? 'bg-green-600 text-white shadow-lg' : 'bg-inherit text-[#D9D9D9] hover:bg-inh'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {/* Background */}
            <div className="absolute inset-0 h-full w-full bg-inherit rounded-[15px]"></div>

            {/* Text stays on top */}
            <span className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex justify-center items-center flex-grow">
        <div
          className="w-3/5 h-3/5 rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] border border-green-600 relative"
          style={{
            background: 'linear-gradient(to bottom, #2a2a2a 30%, #242424 70%)',
          }}
        >
          <div
            className={`p-4 bg-inherit rounded-[30px] shadow-inner h-full transition-opacity duration-300 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlidesDevelopment;
