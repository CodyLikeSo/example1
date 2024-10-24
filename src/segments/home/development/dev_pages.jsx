import React, { useState, useEffect } from 'react';
import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";
import ArchInfoComponent from './vim/arch';
import ReactInfoComponent from './vim/react';
import PythonInfoComponent from './vim/python';
import RustInfoComponent from './vim/rust';

const tabs = [
  { id: 'Arch', label: 'Arch', component: ArchInfoComponent },
  { id: 'Rust', label: 'Rust', component: RustInfoComponent },
  { id: 'React', label: 'React', component: ReactInfoComponent },
  { id: 'Python', label: 'Python', component: PythonInfoComponent },
];

function Dev_pages() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextTab, setNextTab] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [contentOpacity, setContentOpacity] = useState(1);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const mainSpeedFactor = 0.5;
  const offsetX = Math.max(-100, Math.min(50, (mousePosition.x - window.innerWidth / 2) * mainSpeedFactor / 45));
  const offsetY = Math.max(-100, Math.min(50, (mousePosition.y - window.innerHeight / 2) * mainSpeedFactor / 35));

  const buttonSpeedFactor = 0.1;
  const buttonOffsetX = Math.max(-100, Math.min(50, (mousePosition.x - window.innerWidth / 2) * buttonSpeedFactor / 45));
  const buttonOffsetY = Math.max(-100, Math.min(50, (mousePosition.y - window.innerHeight / 2) * buttonSpeedFactor / 35));

  const handleTabChange = (tabId) => {
    if (tabId === activeTab || isTransitioning) return;

    setIsTransitioning(true);
    setNextTab(tabId);
    setContentOpacity(0);

    setTimeout(() => {
      setActiveTab(tabId);
      setContentOpacity(1);
      setIsTransitioning(false);
    }, 300);
  };

  const renderTabContent = () => {
    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
    return ActiveComponent ? <ActiveComponent /> : null;
  };

  const tabContentStyle = {
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    opacity: contentOpacity,
    transform: contentOpacity === 1 ? 'translateY(0)' : 'translateY(20px)',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    height: '100%',
  };

  const handleButtonClick = () => {
    navigate('/develop'); 
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
      if (event.key === 'Escape') {
        navigate('/develop'); // Navigate to /develop on Escape key
      } else if (event.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % tabs.length; 
        handleTabChange(tabs[nextIndex].id);
      } else if (event.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length; 
        handleTabChange(tabs[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab]);

  return (
    <div className="flex items-center justify-center h-screen" style={{
      transform: `translate(${offsetX}px, ${offsetY}px)`,
      transition: 'transform 0.4s ease-out',
    }}>
      <div className="w-3/5 h-3/5 flex flex-col items-center justify-center bg-[#242424] rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] text-[#d9d9d9] border-[1px] border-green-600">
        <div className="flex xl:space-x-20 lg:space-x-12 md:space-x-8 sm:space-x-6 mb-4 text-green-600 xl:-mt-10 md:-mt-10 lg:-mt-10 sm:-mt-8 -mt-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button relative xl:px-12 lg:px-8 md:px-4 sm:px-8 py-[7px] rounded-tl-[12px] text-[70%] xl:text-[100%] md:text-[100%] lg:text-[100%] sm:text-[70%] rounded-tr-[12px] transition-all duration-300 
                ${activeTab === tab.id ? 'bg-[#242424] text-[#d9d9d9] border-[1px] border-green-600' : 'bg-transparent text-green-600 border-[1px] border-transparent'}`}
              onClick={() => handleTabChange(tab.id)}
              style={{
                borderColor: activeTab === tab.id ? '#16A34A' : 'transparent',
                transition: 'border-color 0.2s ease-in-out',
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute inset-x-0 bottom-0 h-[0.2px] bg-green-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
        <div className="tab-content flex-grow px-[2%] text-[100%] 3xl:text-[150%] 4xl:text-4xl overflow-hidden" style={{ height: 'calc(100% - 50px)' }}>
          <div style={tabContentStyle}>
            {renderTabContent()}
          </div>
        </div>
      </div>
      <button
        onClick={handleButtonClick}
        style={{
          transform: `translate(${buttonOffsetX}px, ${buttonOffsetY}px)`,
          transition: 'transform 0.4s ease-out',
        }}
        className="p-[0.2%] shadow-[0_0px_20px_4px_rgba(0,0,0,0.3)] bg-inherit rounded-[30px] text-green-600 border-[1px] border-green-600 transition duration-300 absolute bottom-[3%] transform inset-x-1/3"
      >
        Change Version
      </button>
    </div>
  );
}

export default Transition(Dev_pages);
