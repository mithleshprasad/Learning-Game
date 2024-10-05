// src/App.js
import React from 'react';
import { GameProvider } from './context/GameContext'; // Import GameProvider
import Level from './components/Level';
import AvatarSelection from './components/AvatarSelection';
import Statistics from './components/Statistics';
import LevelProgression from './components/LevelProgression';
import './App.css';

const App = () => {
  return (
    <GameProvider> {/* Wrap with GameProvider */}
      <div className="App">
        <h1>Learning Game</h1>
        {/* <div className="subject-selector">
          <label htmlFor="subject">Choose a subject: </label>
          <select id="subject">
            <option value="math">Math</option>
            <option value="science">Science</option>
          </select>
        </div> */}
        <AvatarSelection />
        <LevelProgression />
        <Statistics />
        <Level />
      </div>
    </GameProvider>
  );
};

export default App;
