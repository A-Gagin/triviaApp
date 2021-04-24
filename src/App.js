// functionality that I have so far:
// - The app should display a predetermined amount of questions pulled from the Open Trivia API
// - The correct answer should be indistinguishable from incorrect answers
// - Users should be able to select an answer for each question
// - After selecting an answer, there should be some sort of visual feedback to display whether the selected answer was right or wrong
// - The user should not be able to change their answer
// - Made pretty with material ui!

// functionality that I need to implement:
// - All required functionality implemented!




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

  return (
    <div style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "darkgray"}}>
      <div style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", borderRadius:"10px", border: "8px solid", borderColor: "lightgray"}}>
        <h1>Hey, Launch! 👋 Time for some trivia!</h1>
        <h4>Coded by Angela Gagin (afg4pr)</h4>
      </div>
      <br></br>
      {/* Map through the list of questions, render a question on the page for each one */}
      {questions.map((question) => (
        <h1><Questions question={question} ></Questions></h1> // render each question
      ))}

    </div>
  );
}
