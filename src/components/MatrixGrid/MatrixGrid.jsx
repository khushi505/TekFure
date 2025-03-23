// MatrixGrid.jsx
import React from "react";
import "./MatrixGrid.css";

const MatrixGrid = ({ children }) => {
  return (
    <div className="grid-wrapper">
      <div className="grid-container">
        {/* Back plane */}
        <div className="plane back">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>

        {/* Front plane */}
        <div className="plane front">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
      </div>

      {/* Overlay Content */}
      <div className="content-overlay">{children}</div>
    </div>
  );
};

export default MatrixGrid;
