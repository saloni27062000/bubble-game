import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import ScorePage from "./pages/ScorePage";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { useNavigate } from "react-router-dom";


function App() {
  const [time, setTime] = useState(10);
  const [score, setScore] = useState(0);
  const [isActive, setActive] = useState(false);
  const [target, setTarget] = useState(Math.floor(Math.random() * 10));
  const [bubbles, setBubbles] = useState([]);


  const createBubbles = () => {
    let numList = [];
    for (let i = 0; i < 90; i++) {
      numList.push(Math.floor(Math.random() * 10));
    }
    setBubbles(numList);
  };
  useEffect(() => {
    let id;
    createBubbles();
    if (isActive) {
      id = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [isActive]);

  useEffect(() => {
    if (time == 0) {
      setActive(false);
      setTime(10);

    }
  }, [time]);

  const manageScore = (e) => {
    if (e.target.classList.contains("bubble")) {
      if (e.target.innerText == target) {
        setScore((s) => s + 10);
      } else {
        setScore((s) => s - 5);
      }
    } else {
      setScore((s) => s - 5);
    }
    createBubbles();
    setTarget(Math.floor(Math.random() * 10));
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <GamePage
                time={time}
                setActive={setActive}
                isActive={isActive}
                target={target}
                bubbles={bubbles}
                score={score}
                manageScore={manageScore}

              />
            }
          />
          <Route
            path="/score"
            element={<ScorePage score={score} setScore={setScore} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
