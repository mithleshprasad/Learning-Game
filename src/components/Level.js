// // src/components/Level.js
// import React, { useContext, useState, useEffect } from 'react';
// import Reward from './Reward';
// import GameContext from '../context/GameContext';
// import { Howl } from 'howler';
// import correctSound from '../assets/sounds/correct.mp3';
// import wrongSound from '../assets/sounds/wrong.mp3';
// import './Level.css';

// const Level = () => {
//   const { subject, currentLevel, nextLevel, score } = useContext(GameContext);
//   const [message, setMessage] = useState('');
//   const [completed, setCompleted] = useState(false);
//   const [question, setQuestion] = useState({});
//   const [userAnswer, setUserAnswer] = useState('');
//   const [hintsUsed, setHintsUsed] = useState(0);
//   const [lifelines, setLifelines] = useState(3);  // Number of skips available

//   const correctAudio = new Howl({ src: [correctSound] });
//   const wrongAudio = new Howl({ src: [wrongSound] });

//   useEffect(() => {
//     generateQuestion();
//   }, [currentLevel]);

//   const generateQuestion = () => {
//     const operations = ['+', '-', '*', '/'];
//     const randomOperation = operations[Math.floor(Math.random() * operations.length)];

//     let number1 = Math.floor(Math.random() * (currentLevel * 10)) + 1;
//     let number2 = Math.floor(Math.random() * (currentLevel * 10)) + 1;

//     // Prevent division by zero and make division questions whole numbers only
//     if (randomOperation === '/' && number2 === 0) number2 = 1;
//     if (randomOperation === '/') number1 = number1 * number2; // Ensure clean division

//     let correctAnswer;
//     switch (randomOperation) {
//       case '+':
//         correctAnswer = number1 + number2;
//         break;
//       case '-':
//         correctAnswer = number1 - number2;
//         break;
//       case '*':
//         correctAnswer = number1 * number2;
//         break;
//       case '/':
//         correctAnswer = number1 / number2;
//         break;
//       default:
//         correctAnswer = 0;
//     }

//     setQuestion({ number1, number2, operation: randomOperation, correctAnswer });
//   };

//   const handleAnswerSubmit = () => {
//     const userAnswerAsNumber = parseFloat(userAnswer);
//     if (userAnswerAsNumber === question.correctAnswer) {
//       correctAudio.play();
//       setMessage('Correct!');
//       nextLevel(1);  // Move to next level and add score
//     } else {
//       wrongAudio.play();
//       setMessage(`Wrong! The correct answer was ${question.correctAnswer}`);
//     }

//     // Check if the game is completed
//     if (currentLevel >= 10) {
//       setCompleted(true);
//     }

//     setUserAnswer('');  // Reset the input field
//   };

//   const skipQuestion = () => {
//     if (lifelines > 0) {
//       setLifelines(lifelines - 1);
//       generateQuestion();  // Generate a new question
//       setMessage("Question skipped! New question generated.");
//     } else {
//       setMessage("No lifelines left!");
//     }
//   };

//   const renderChallenge = () => {
//     if (subject === 'math') {
//       return (
//         <div className="challenge">
//           <p>
//             What is {question.number1} {question.operation} {question.number2}?
//           </p>
//           <input
//             type="number"
//             value={userAnswer}
//             onChange={(e) => setUserAnswer(e.target.value)}
//             placeholder="Enter your answer"
//             className="answer-input"
//           />
//           <button onClick={handleAnswerSubmit}>Submit Answer</button>
//           <button onClick={skipQuestion}>Skip Question (Lifelines: {lifelines})</button>
//         </div>
//       );
//     }
//     return <p>No challenges for this subject yet.</p>;
//   };

//   return (
//     <div className="level">
//       <h3>{subject.toUpperCase()} - Level {currentLevel}</h3>
//       {message && <p>{message}</p>}
//       {!completed && renderChallenge()}
//       {completed && <Reward score={score} />}
//     </div>
//   );
// };

// export default Level;
// src/components/Level.js
// src/components/Level.js
import React, { useContext, useState, useEffect } from 'react';
import Reward from './Reward';
import GameContext from '../context/GameContext';
import { Howl } from 'howler';
import correctSound from '../assets/sounds/correct.mp3';
import wrongSound from '../assets/sounds/wrong.mp3';
import './Level.css';

const Level = () => {
  const { subject, currentLevel, nextLevel, score } = useContext(GameContext);
  const [message, setMessage] = useState('');
  const [completed, setCompleted] = useState(false);
  const [question, setQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState('');
  const [hintsUsed, setHintsUsed] = useState(0);
  const [lifelines, setLifelines] = useState(3);  // Number of skips available
  const [hint, setHint] = useState(''); // State for hints

  const correctAudio = new Howl({ src: [correctSound] });
  const wrongAudio = new Howl({ src: [wrongSound] });

  useEffect(() => {
    generateQuestion();
  }, [currentLevel]);

  const generateQuestion = () => {
    const operations = ['+', '-', '*', '/'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];

    let number1 = Math.floor(Math.random() * (currentLevel * 10)) + 1;
    let number2 = Math.floor(Math.random() * (currentLevel * 10)) + 1;

    // Prevent division by zero and ensure clean division for division questions
    if (randomOperation === '/' && number2 === 0) number2 = 1;
    if (randomOperation === '/') number1 = number1 * number2;

    let correctAnswer;
    switch (randomOperation) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
      case '/':
        correctAnswer = number1 / number2;
        break;
      default:
        correctAnswer = 0;
    }

    setQuestion({ number1, number2, operation: randomOperation, correctAnswer });
    setHint(''); // Reset hint on new question
  };

  const handleAnswerSubmit = () => {
    const userAnswerAsNumber = parseFloat(userAnswer);
    if (userAnswerAsNumber === question.correctAnswer) {
      correctAudio.play();
      setMessage('Correct!');
      nextLevel(1);  // Move to next level and add score
    } else {
      wrongAudio.play();
      setMessage(`Wrong! The correct answer was ${question.correctAnswer}`);
    }

    // Check if the game is completed
    if (currentLevel >= 10) {
      setCompleted(true);
    }

    setUserAnswer('');  // Reset the input field
  };

  const skipQuestion = () => {
    if (lifelines > 0) {
      setLifelines(lifelines - 1);
      generateQuestion();  // Generate a new question
      setMessage("Question skipped! New question generated.");
    } else {
      setMessage("No lifelines left!");
    }
  };

  const generateHint = () => {
    if (hintsUsed < 1) {
      setHintsUsed(hintsUsed + 1);
      if (question.operation === '+') {
        setHint(`Hint: The answer is more than ${question.number1} and less than ${question.number1 + question.number2 + 1}`);
      } else if (question.operation === '-') {
        setHint(`Hint: The answer is less than ${question.number1} and more than ${question.number1 - question.number2}`);
      } else if (question.operation === '*') {
        setHint(`Hint: The answer is between ${question.number1} and ${question.number1 * question.number2 + 1}`);
      } else if (question.operation === '/') {
        setHint(`Hint: The answer is less than ${question.number1} and greater than ${1}`);
      }
    } else {
      setMessage("You've already used your hint for this question!");
    }
  };

  const renderChallenge = () => {
    if (subject === 'math') {
      return (
        <div className="challenge">
          <p>
            What is {question.number1} {question.operation} {question.number2}?
          </p>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter your answer"
            className="answer-input"
          />
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
          <button onClick={skipQuestion}>Skip Question (Lifelines: {lifelines})</button>
          <button onClick={generateHint}>Get Hint</button>
          {hint && <p className="hint">{hint}</p>}
        </div>
      );
    }
    return <p>No challenges for this subject yet.</p>;
  };

  return (
    <div className="level">
      <h3>{subject.toUpperCase()} - Level {currentLevel}</h3>
      {message && <p>{message}</p>}
      {!completed && renderChallenge()}
      {completed && <Reward score={score} />}
    </div>
  );
};

export default Level;


