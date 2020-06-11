import React from "react";
import "./meme-container.styles.css";

export const MemeContainer = (props) => (
  <div
    className="container"
    style={{
      backgroundImage: `url(${props.meme})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <p style={{ color: "blue", position: 'relative', top: `${props.offSetTop}px` }}>{props.text}</p>
  </div>
);
