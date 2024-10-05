// src/components/Statistics.js
import React, { useContext } from 'react';
import GameContext from '../context/GameContext';
// import './Statistics.css';

const Statistics = () => {
  const { currentLevel, score, avatar } = useContext(GameContext);

  return (
    <div className="statistics">
      <h3>Player Profile</h3>
      <p>Avatar: {avatar ? avatar : 'No avatar selected'}</p>
      <p>Current Level: {currentLevel}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default Statistics;
