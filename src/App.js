// functionality that I have so far:
// - The app should display a predetermined amount of questions pulled from the Open Trivia API
// - The correct answer should be indistinguishable from incorrect answers
// - Users should be able to select an answer for each question
// - After selecting an answer, there should be some sort of visual feedback to display whether the selected answer was right or wrong
// - The user should not be able to change their answer

// functionality that I need to implement:
// - All required functionality implemented!
// - Perhaps improve how it looks with material-ui?



import React, { useState, useEffect } from "react";
import Questions from "./Questions";

export default function App() {
  const [questions, setQuestions] = useState([]); // array -- holds questions
  

  
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setQuestions(res.results);
      });
  }, []);

  // shuffles an array -- used to randomize order of possible answers
  // function shuffle(array) {
  //   var currentIndex = array.length, temporaryValue, randomIndex;
  
  //   // while there remain elements to shuffle
  //   while (0 !== currentIndex) {
  
  //     // pick a random remaining element
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  
  //     // and swap it with the current element
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  
  //   return array;
  // }

  // prints out a question
  // function createQuestions(question){
  //   const [isQuestionDisabled, setDisabled] = useState(false); // boolean -- determines if a button is disabled
  //   const [questionColor, setColor] = useState("black"); // string -- determines what color a question's text is
  //   // create array of possible answers to the question
  //   let answers = [];
  //   answers.push(question.correct_answer);
  //   answers = [...question.incorrect_answers, answers];

  //   // shuffle order of answers
  //   answers = shuffle(answers);
  //   //setDisabled(false) causes a rendering error if included

  //   return(
  //     <div>
  //       {/* Print out the current question */}
  //       <p style = {{color: questionColor}}>{question.question}</p>
        

  //       {/* Map through answers, create buttons for each one */}
  //       {answers.map((answer) => (
  //         <button
  //         disabled = {isQuestionDisabled} // this disables the buttons

  //         // Handle correct/incorrect answers and visual feedback
  //         onClick = {() =>
  //           // eslint-disable-next-line
  //           {if (answer == question.correct_answer){
  //             alert("Correct!");
  //             setDisabled(true); // need to find a place to reset this to false?
  //             setColor("green"); // need to find a place to reset this to black?

  //             } else {
  //               alert("Incorrect!");
  //               setDisabled(true); // need to find a place to reset this to false?
  //               setColor("red"); // need to find a place to reset this to black?
  //               }
  //             }
            
  //           }> 

  //           {/* Answer label for each button */}
  //           {answer} 
  //         </button>        
  //       ))}
        
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Hey, Launch! 👋 Time for some trivia!</h1>
      {/* Map through the list of questions, render a question on the page for each one */}
      {questions.map((question) => (
        <h1><Questions question = {question} ></Questions></h1> // render each question
      ))}
      
    </div>
  );
}
