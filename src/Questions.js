import React, { useState } from "react";

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // while there remain elements to shuffle
    while (0 !== currentIndex) {

        // pick a random remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // and swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export default function Questions({ question }) {
    const [isQuestionDisabled, setDisabled] = useState(false); // boolean -- determines if a button is disabled
    const [questionColor, setColor] = useState("black"); // string -- determines what color a question's text is
    // create array of possible answers to the question
    let answers = [];
    answers.push(question.correct_answer);
    answers = [...question.incorrect_answers, answers];

    // shuffle order of answers
    answers = shuffle(answers);


    return (
        <div>
            {/* Print out the current question */}
            <p style={{ color: questionColor }}>{question.question}</p>


            {/* Map through answers, create buttons for each one */}
            {answers.map((answer) => (
                <button
                    disabled={isQuestionDisabled} // this disables the buttons

                    // Handle correct/incorrect answers and visual feedback
                    onClick={() => {
                        // eslint-disable-next-line
                        if (answer == question.correct_answer) {
                            alert("Correct!");
                            setDisabled(true); // need to find a place to reset this to false?
                            setColor("green"); // need to find a place to reset this to black?

                        } else {
                            alert("Incorrect!");
                            setDisabled(true); // need to find a place to reset this to false?
                            setColor("red"); // need to find a place to reset this to black?
                        }
                    }

                    }>

                    {/* Answer label for each button */}
                    {answer}
                </button>
            ))}

        </div>
    );
}