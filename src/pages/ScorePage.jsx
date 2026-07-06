import React from "react";
import { useNavigate } from "react-router-dom";

function ScorePage({ score, setScore }) {

  const navigator = useNavigate();

  const handlePlayAgain = () => {
    setScore(0);   // reset score
    navigator("/"); // go back to game
  };

  const getMessage = () => {
    if (score >= 60) {
      return "Excellent! 🏆";
    } else if (score >= 40) {
      return "Good job! 👍";
    } else {
      return "Better luck next time 🙂";
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg border-1 text-center p-4" style={{ maxWidth: "450px", width: "100%" }}>

        <div className="card-body">
          <i className="bi bi-trophy-fill text-warning display-1"></i>

          <h1 className="display-5 fw-bold text-primary mt-3">
            Your Score
          </h1>

          <div className="bg-light rounded py-3 my-4">
            <h2 className="display-3 fw-bold text-success mb-0">
              {score}
            </h2>
          </div>
          <p className="text-warning fs-3">
            {getMessage()}
          </p>
          <button onClick={handlePlayAgain} className="btn btn-success w-100 fs-6 fw-bold">
            Play Again
          </button>

        </div>
      </div>
    </div>
  );
}

export default ScorePage;