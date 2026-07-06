import React from "react";

function BubbleContainer({ bubbles, manageScore }) {
  return (
    <div className="bubble-container" onClick={manageScore}>
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="bubble d-flex justify-content-center align-items-center fw-bold"
        >
          {bubble}
        </div>
      ))}
    </div>
  );
}

export default BubbleContainer;