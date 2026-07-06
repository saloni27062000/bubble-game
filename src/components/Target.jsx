import React from "react";

function Target({ target, isActive }) {
  return (
    <div className="card p-2 pt-4 text-center">
      Target🎯
      <div
        className="text-center"
        style={{
          fontSize: "80px",
        }}
      >
        {
          isActive ? <div>{target}</div> : <div></div>
        }
      </div>
    </div>
  );
}

export default Target;
