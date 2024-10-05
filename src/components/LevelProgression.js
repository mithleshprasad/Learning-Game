// src/components/LevelProgression.js
import React from 'react';
// import './LevelProgression.css';

const LevelProgression = ({ currentLevel, totalLevels }) => {
  const progress = (currentLevel / totalLevels) * 100;

  return (
    <div className="level-progression">
      <h3>Level Progress</h3>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%`, backgroundColor: progress === 100 ? 'green' : 'blue' }}
        />
      </div>
      <p>
        Level {currentLevel} / {totalLevels}
      </p>
    </div>
  );
};

export default LevelProgression;
