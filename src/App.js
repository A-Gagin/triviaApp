import React, { useState, useEffect } from "react";

export default function App() {
  const [questions, setQuestions] = useState([]);
  //const [allAnswers, setAnswers] = useState([]);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setQuestions(res.results);
      });
  }, []);

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function printQuestions(question){
    let answers = [];
    answers.push(question.correct_answer);
    answers = [...question.incorrect_answers, answers];
    answers = shuffle(answers);

    
    
    return(
      <div>
        {question.question}
        <br/>
        {answers.map((answer) => (
          <button>{answer}</button>        
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1>Hey, Launch! 👋</h1>
      {questions.map((question) => (
        <h1>{printQuestions(question)}</h1>
      ))}
      
    </div>
  );
}
