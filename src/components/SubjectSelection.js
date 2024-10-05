// src/components/SubjectSelection.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../context/GameContext';  // Correctly import GameContext
import './SubjectSelection.css';

const SubjectSelection = () => {
  const { selectSubject } = useContext(GameContext);  // Destructure selectSubject
  const navigate = useNavigate();

  const handleSelect = (subjectName) => {
    selectSubject(subjectName);  // Update the selected subject in context
    navigate('/subject');  // Navigate to the level page
  };

  return (
    <div className="subject-selection">
      <h2>Select a Subject</h2>
      <div className="buttons">
        <button onClick={() => handleSelect('math')}>Math</button>
        <button onClick={() => handleSelect('reading')}>Reading</button>
        <button onClick={() => handleSelect('science')}>Science</button>
      </div>
    </div>
  );
};

export default SubjectSelection;
