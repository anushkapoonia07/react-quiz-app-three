import React from 'react';
import "./ResultComponent.css";
import { NavLink, useLocation } from "react-router-dom";

function ResultComponent() {
  const { state } = useLocation();
  const score = state.score;
  const attemptedCount = state.attempted.length;
  const percentage = Math.round((score / 15) * 100);

  const getMessage = () => {
    if (score < 6) return "You need more practice!";
    if (score < 11) return "Good job! You can do better!";
    return "Great job! Keep it up!";
  };

  return (
    <>
      <h1 style={{fontSize: "70px",color:"white",marginTop:"-5%"}}>Result</h1>
      <div className="result">
        <h3>{getMessage()}</h3>
        <h1>Your score is {percentage}%</h1>
        <div style={{display: "flex",justifyContent: "space-between"}}>
          <div style={{ textAlign: "left" }}>
            {["Totol number of quesions", "Number of attempted questions", "Number of correct answers", "Number of wrong answers"].map((label, index) => (
              <h5 key={index}>{label}</h5>
            ))}
          </div>
          <div>
            {[15, attemptedCount, score, attemptedCount - score].map((value, index) => (
              <h5 key={index}>{value}</h5>
            ))}
          </div>
        </div>
      </div>
      <br/>
      <div className='btn'>
        <NavLink to="/Quiz"><button>Play Again</button></NavLink>
        <NavLink to="/"><button>Back to home</button></NavLink>
      </div>
    </>
  );
}

export default ResultComponent;
