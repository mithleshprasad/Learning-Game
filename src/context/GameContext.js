// src/context/GameContext.js
import React, { createContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [subject, setSubject] = useState('math');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const [badges, setBadges] = useState([]);

  const nextLevel = (points) => {
    setScore((prevScore) => prevScore + points);
    setCurrentLevel((prevLevel) => prevLevel + 1);

    // Add logic to unlock badges based on performance
    if (points >= 1 && currentLevel === 3) {
      setBadges((prev) => [...prev, { name: 'Perfect Score', icon: '⭐' }]);
    }
    if (points >= 2 && currentLevel === 5) {
      setBadges((prev) => [...prev, { name: 'Fast Answer', icon: '🏆' }]);
    }
  };

  return (
    <GameContext.Provider
      value={{
        subject,
        setSubject,
        currentLevel,
        nextLevel,
        score,
        setAvatar,
        avatar,
        badges,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
