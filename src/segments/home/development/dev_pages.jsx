import React, { useState } from 'react';
import Transition from "../../../navigation/transition";
import { useNavigate } from "react-router-dom";

// Example components for different tabs
const TabOne = () => <div>Content for Tab One</div>;
const TabTwo = () => <div>Content for Tab Two</div>;
const TabThree = () => <div>Content for Tab Three</div>;
const TabFour = () => <div>Content for Tab Four</div>; // New component example

// Array of tab data
const tabs = [
  { id: 'Arch', label: 'Arch', component: TabOne },
  { id: 'React', label: 'React', component: TabTwo },
  { id: 'Rust', label: 'Rust', component: TabThree },
  { id: 'Python', label: 'Python', component: TabFour }, // New tab entry
];

function Dev_pages() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tabId) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 300); // Match this duration with your CSS transition duration
  };

  const renderTabContent = () => {
    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
    return ActiveComponent ? <ActiveComponent /> : null;
  };

  const tabContentStyle = {
    transition: 'opacity 0.3s ease-in-out',
    opacity: isTransitioning ? 0 : 1,
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-3/5 h-3/5 flex flex-col items-center justify-center bg-[#1a1a1a] rounded-[30px] shadow-[0_0px_40px_10px_rgba(0,0,0,0.5)] text-[#d9d9d9] border-[1px] border-green-600">
        {/* Tabs positioned above center */}
        <div className="flex space-x-12 mb-4 text-green-600 -mt-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button relative px-4 py-[7px] rounded-tl-[12px] rounded-tr-[12px] transition-all duration-300 
                ${activeTab === tab.id ? 'bg-[#1a1a1a] text-[#d9d9d9] border-[1px] border-green-600' : 'bg-transparent text-green-600 border-[1px] border-transparent'}`}
              onClick={() => handleTabChange(tab.id)}
              style={{
                borderColor: activeTab === tab.id ? '#16A34A' : 'transparent',
                transition: 'border-color 0.3s ease-in-out',
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute inset-x-0 bottom-0 h- bg-green-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
        <div className="tab-content flex-grow flex items-center justify-center p-4" style={tabContentStyle}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default Transition(Dev_pages);
