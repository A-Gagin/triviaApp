import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'

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
    const [bgColor, setBGColor] = useState("lightgray"); // string -- determines question background color

    // create array of possible answers to the question
    let answers = [];
    answers.push(question.correct_answer);
    answers = [...question.incorrect_answers, answers];

    // shuffle order of answers
    answers = shuffle(answers);


    return (
        <div style = {{backgroundColor: bgColor, borderRadius: "10px", border: "8px solid", borderColor: bgColor, maxWidth: "700px", minWidth: "700px"}}>
            {/* Print out the current question */}
            <h6 style={{
                color: questionColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center" }}>
                    {question.question}
            </h6>

            <ButtonGroup color="primary" aria-label="contained primary button group" fullWidth = "true" size = "large">
                {/* Map through answers, create buttons for each one */}
                {answers.map((answer) => (
                    <Button
                        variant="contained" color="primary"
                        disabled={isQuestionDisabled} // this disables the buttons
                        style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}

                        // Handle correct/incorrect answers and visual feedback
                        onClick={() => {
                            // eslint-disable-next-line
                            if (answer == question.correct_answer) {
                                setDisabled(true);
                                setColor("green");
                                setBGColor("lightgreen");

                            } else {
                                setDisabled(true);
                                setColor("red");
                                setBGColor("pink");
                            }
                        }

                        }>

                        {/* Answer label for each button */}
                        {answer}
                    </Button>

                ))}
            </ButtonGroup>
        </div>
    );
}