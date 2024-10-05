// src/components/AvatarSelection.js
import React, { useContext } from 'react';
import GameContext from '../context/GameContext';
import './AvatarSelection.css';

const avatars = ['👩', '👨', '🧑', '👩‍🎓', '👨‍🎓'];

const AvatarSelection = () => {
  const { setAvatar } = useContext(GameContext);

  const selectAvatar = (avatar) => {
    setAvatar(avatar);
  };

  return (
    <div className="avatar-selection">
      <h3>Select Your Avatar</h3>
      <div className="avatars">
        {avatars.map((avatar, index) => (
          <button key={index} onClick={() => selectAvatar(avatar)}>
            {avatar}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelection;
