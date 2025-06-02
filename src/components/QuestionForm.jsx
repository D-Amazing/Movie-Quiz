import React from 'react';

function QuestionForm({ questionData, selectedAnswer, setSelectedAnswer, onSubmit, error, current, total }) {
  const allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-lg mb-2">{`Question ${current} of ${total}`}</h2>
      <h2 className="text-2xl font-semibold mb-4" dangerouslySetInnerHTML={{ __html: questionData.question }} />

      {shuffledAnswers.map((answer, idx) => (
        <div key={idx} className="flex items-center">
          <input
            type="radio"
            id={`answer-${idx}`}
            name="answer"
            value={answer}
            checked={selectedAnswer === answer}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor={`answer-${idx}`} dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      ))}

      {error && <p className="text-red-500">{error}</p>}

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800">
        Submit Answer
      </button>
    </form>
  );
}

export default QuestionForm;
// import React from 'react';
// import PropTypes from 'prop-types';
//  
// function QuestionForm({ questionData, selectedAnswer, setSelectedAnswer, onSubmit, error, current, total }) {
//   const allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
//   const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
//
//   const handleChange = (e) => {
//     setSelectedAnswer(e.target.value);
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit();
//   };
//
