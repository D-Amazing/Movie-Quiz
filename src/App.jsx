import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuestionForm from './components/QuestionForm';
import ResultPage from './components/ResultPage';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    difficulty: '',
  });

  const [questions, setQuestions] = useState([]); // ⬅️ Multiple questions now
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // ⬅️ Track which question we're on
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0); // ⬅️ Track number of correct answers
  const [error, setError] = useState('');
  const [stage, setStage] = useState('home'); // stages: home, question, result

  const handleFormSubmit = async () => {
    try {
      const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`);
      const data = await res.json();
      if (data.results.length > 0) {
        setQuestions(data.results);
        setCurrentQuestionIndex(0);
        setScore(0);
        setStage('question');
        setError('');
      } else {
        setError('No questions found for your selections. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch questions. Try again later.');
    }
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) {
      setError('Please select an answer before submitting!');
      return;
    }
    
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer('');
    } else {
      setStage('result');
    }
    setError('');
  };

  const handleRestart = () => {
    setFormData({ name: '', category: '', difficulty: '' });
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setError('');
    setStage('home');
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-purple-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">🎬  Movie Quiz 🎬</h1>
      {stage === 'home' && (
        <HomePage
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
          error={error}
        />
      )}
      {stage === 'question' && questions.length > 0 && (
        <QuestionForm
          questionData={questions[currentQuestionIndex]}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          onSubmit={handleAnswerSubmit}
          error={error}
          current={currentQuestionIndex + 1}
          total={questions.length}
        />
      )}
      {stage === 'result' && (
        <ResultPage
          name={formData.name}
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import HomePage from './components/HomePage';
// import QuestionForm from './components/QuestionForm';
// import ResultPage from './components/ResultPage';
//
// function App() {
//   const [formData, setFormData] = useState({
//     name: '', 
//     category: '',
//     difficulty: '',
//   });
//
//   const [questionData, setQuestionData] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState('');
//   const [isCorrect, setIsCorrect] = useState(null);
//   const [error, setError] = useState('');
//   const [stage, setStage] = useState('home'); // stages: home, question, result
//
//   const handleFormSubmit = async () => {
//     try {
//       const res = await fetch(`https://opentdb.com/api.php?amount=1&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`);
//       const data = await res.json();
//       if (data.results.length > 0) {
//         setQuestionData(data.results[0]);
//         setStage('question');
//         setError('');
//       } else {
//         setError('No questions found for your selections. Please try again.');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch question. Try again later.');
//     }
//   };
//
  

//   const handleAnswerSubmit = () => {
//     if (!selectedAnswer) {
//       setError('Please select an answer before submitting!');
//       return;
//     }
//     const correct = selectedAnswer === questionData.correct_answer;
//     setIsCorrect(correct);
//     setStage('result');
//   };
//   const handleRestart = () => {
//     setFormData({ name: '', category: '', difficulty: '' });
//     setQuestionData(null);
//     setSelectedAnswer('');
//     setIsCorrect(null);      
//     setError('');
//     setStage('home');
//   };
//   return ( 
//     <div className="min-h-screen p-8 bg-gradient-to-r from-purple-400 to-blue-500 text-white">
//       <h1 className="text-4xl font-bold text-center mb-6">🎬 Marvel Movie Quiz 🎬</h
//  
//1>
//       {stage === 'home' && (
//         <HomePage
//           formData={formData}
//           setFormData={setFormData}
//           onSubmit={handleFormSubmit}
//           error={error}
//         />
//       )}
//       {stage === 'question' && questionData && (
//         <QuestionForm
//           questionData={questionData}
//           selectedAnswer={selectedAnswer}
//           setSelectedAnswer={setSelectedAnswer}
//           onSubmit={handleAnswerSubmit}
//           error={error}
//         />
//       )}
//       {stage === 'result' && (
//         <ResultPage
//           name={formData.name}
