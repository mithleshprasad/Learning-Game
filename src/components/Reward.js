// src/components/Reward.js
import React, { useContext } from 'react';
import GameContext from '../context/GameContext';
import './Reward.css';

const Reward = ({ score }) => {
  const { badges } = useContext(GameContext);

  return (
    <div className="reward">
      <h2>Congratulations!</h2>
      <p>Your score: {score}</p>
      {badges.length > 0 && (
        <div className="badges">
          <h3>Unlocked Badges</h3>
          <ul>
            {badges.map((badge, index) => (
              <li key={index}>
                {badge.icon} {badge.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Reward;
