import React, { useState, useEffect } from 'react';

const ScrambleText = ({ targetText }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let iteration = 0;

    const scramble = () => {
      setDisplayText((prev) => {
        return targetText.split('').map((char, index) => {
          if (index < iteration || char === ' ') {
            return char;
          }
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('');
      });

      if (iteration >= targetText.length) {
        clearInterval(id);
      }

      iteration += 3 / 3; // Speed of reveal
    };

    const id = setInterval(scramble, 30); // Adjust timing as needed

    return () => clearInterval(id);
  }, [targetText]);

  return <span>{displayText}</span>;
};

export default ScrambleText;
