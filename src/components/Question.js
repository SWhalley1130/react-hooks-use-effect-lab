import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect(()=>
  {
    const intervalId=setTimeout(()=>
    {
      console.log('Running...')
      setTimeRemaining(timeRemaining-1);
      if (timeRemaining===0)
      {
        setTimeRemaining(10);
        onAnswered(false);
      }
    }, 1000);

    return function cleanup()
    {
      clearInterval(intervalId);
    } 
  })

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
