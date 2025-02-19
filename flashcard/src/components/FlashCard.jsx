import { useState } from "react"
import "../css/FlashCard.css"

export function FlashCard() {
    const flashcards = [
      {
        id: 1,
        question: "What is the capital of France?",
        answer: "Paris",
      },
      {
        id: 2,
        question: "What is 5 + 7?",
        answer: "12",
      },
      {
        id: 3,
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: "Harper Lee",
      },
      {
        id: 4,
        question: "What is the chemical symbol for water?",
        answer: "H2O",
      },
      {
        id: 5,
        question: "What is the speed of light in a vacuum?",
        answer: "299,792,458 meters per second",
      },
    ];


    return (
      <>
        <h1>
          FlashCard{" "}
          <span style={{ color: "rgb(235, 18, 18)" }}>Learning</span> App
            </h1>
            <hr />
            <br />
        <div className="parent">
          {flashcards.map((ele) => {
            return (
              <div className="child">
                <div className="child-question">
                  <h2>{ele.question}</h2>
                </div>
                <div className="child-ans">
                  <p>Answer: {ele.answer}</p>
                </div>
              </div>
            );
          })}
            </div>
            <br />
            <hr/>
      </>
    );
}