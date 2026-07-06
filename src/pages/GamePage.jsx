import React, { useEffect } from "react";
import Target from "../components/Target";
import Timer from "../components/Timer";
import BubbleContainer from "../components/BubbleContainer";
import { useNavigate } from "react-router-dom";

function GamePage({ time, setActive, isActive, target, bubbles, score, manageScore }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (time === 0) {
      navigate("/score");
    }
  }, [time]);

  return (
    <>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center bg-dark text-warning py-2 px-3">
        <div>
          <h1 className="mb-0">🫧 Bubble Game</h1>
          <small>Pop the correct bubbles 🎯</small>
        </div>

        <div>
          <h4 className="mb-0 bg-success text-white border border-0 rounded p-2">Score: {score}</h4>
        </div>
      </div>

      {/* Main Area */}
      <div className="container-fluid mt-3">
        <div className="row">

          {/* Left Panel */}
          <div className="col-12 col-md-3 mb-3">
            <div className="card mb-3 p-2 border-warning">
              <Target target={target} isActive={isActive} />
            </div>

            <div className="card p-2 border-warning">
              <Timer
                time={time}
                setActive={setActive}
                isActive={isActive}
              />
            </div>
          </div>

          {/* Bubble Container */}
          <div className="col-12 col-md-9">
            <div className="card p-2 border-warning">
              <BubbleContainer
                bubbles={bubbles}
                manageScore={manageScore}
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );

}

export default GamePage;