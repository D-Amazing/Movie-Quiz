import React from 'react';

function ResultPage({ name, score, total, onRestart }) {
  return (
    <div className="text-center max-w-xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <p className="text-xl mb-4">Well done, {name}!</p>
      <p className="text-xl mb-6">You scored {score} out of {total} 🎉</p>

      <button
        onClick={onRestart}
        className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
      >
        Play Again
      </button>
    </div>
  );
}

export default ResultPage;
// //   };
// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
// //       <h2 className="text-lg mb-2">{`Question ${current} of ${total}`}</h2>
// //       <h2 className="text-2xl font-semibold mb-4" dangerouslySetInnerHTML={{ __html: questionData.question }} />
// //
// //       {shuffledAnswers.map((answer, idx) => (
// //         <div key={idx} className="flex items-center">
// //           <input
// //             type="radio"
// //             id={`answer-${idx}`}
// //             name="answer"
// //             value={answer}
// //             checked={selectedAnswer === answer}
// //             onChange={handleChange}
// //             className="mr-2"
// //           />
// //           <label htmlFor={`answer-${idx}`} dangerouslySetInnerHTML={{ __html: answer }} />
// //         </div>
// //       ))}
// //
// //       {error && <p className="text-red-500">{error}</p>}
// //
// //       <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800">
// //         Submit Answer
