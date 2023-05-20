import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: 'What is your age?',
    type: 'number',
    key: 'age'
  },
  {
    question: 'What is your weight?',
    type: 'number',
    key: 'weight'
  },
  {
    question: 'What kind of your illness do you have?',
    type: 'text',
    key: 'illness'
  },
  {
    question:'Do you have any allergies?',
    type: 'text',
    key: 'allergy'
  }

  
  
  
];

const Quiz = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const updatedAnswers = [...answers];
    updatedAnswers[currentCard] = value;
    setAnswers(updatedAnswers);
  };

  const handleNextCard = () => {
    if (currentCard < questions.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const handleSubmit = () => {
    // Handle submission of answers
    const formData = {};
    questions.forEach((e, index) => {
      formData[e.key] = answers[index];
    });
    console.log(formData); 
  };

  return (
    <div className="carousel-container">
      <div className="card">
        <h2>{questions[currentCard].question}</h2>
        <input
          type={questions[currentCard].type}
          value={answers[currentCard] || ''}
          onChange={handleInputChange}
        />
        <div className="nav-buttons">
          {currentCard > 0 && (
            <button onClick={handlePrevCard}>Previous</button>
          )}
          {currentCard < questions.length - 1 ? (
            <button onClick={handleNextCard}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
