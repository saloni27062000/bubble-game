import React from "react";

function Timer({ time, setActive, isActive }) {
  return (
    <div>
      {!isActive ? (
        <button
          onClick={() => setActive(true)}
          className="btn btn-lg btn-warning w-100 text-white"
        >
          Play Now
        </button>
      ) : (
        <button className="btn btn-lg btn-warning w-100">Time: {time}</button>
      )}
    </div>
  );
}

export default Timer;
