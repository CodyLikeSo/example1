// Loader.js
import React from 'react';

const Loader = () => {
    const loaderStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '3px solid rgba(255, 255, 255, 0.2)',
        borderTopColor: 'transparent',
        animation: 'rot1 1.2s linear infinite',
    };

    const keyframesStyle = `
        @keyframes rot1 {
            to {
                transform: rotate(360deg);
            }
        }
    `;

    return (
        <div className="flex items-center justify-center h-screen">
            <style>{keyframesStyle}</style>
            <div style={loaderStyle}></div>
        </div>
    );
};

export default Loader;
