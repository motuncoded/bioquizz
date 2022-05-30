import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import questions from "./components/questions.json"



function App() {

  
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const handleAnswer = (isCorrect)=>{
  if(isCorrect){
    setScore(score + 1)
  }
  const nextQuestion = currentQuestion +1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  }
  else{
    setShowScore(true)
  }
}

  return (
    <div className="app">
      <Header/>
      <div className='quiz-section'>
       
        <>
        <div className='question-section'>
         
    
          <div className='question-text'>{currentQuestion +1}.
          
          <span>{questions[currentQuestion].questionTitle}</span></div>
          <div className='question-count'>
            <span> Question {currentQuestion +1}</span>/{questions.length}
          </div>
          <ol className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption)=>(
            <li><button onClick={()=>handleAnswer(answerOption.isCorrect)}>{answerOption.answerText}</button></li>
          ))}
            </ol>
            {showScore ? (
            <div className='score-section'>Your score is {score} out of {questions.length}</div>) : (<></>)}
          </div></>
        </div>
      
    </div>
  );
}

export default App;
