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

    <p
      style={{
        color: "blue",
        position: "relative",
        top: `${props.state.offsetTop}px`,
        bottom: `${props.state.offsetBottom}px`,
        left: `${props.state.offsetLeft}px`,
        transform: `rotate(${props.state.rotation}deg)`
      }}
    >
      {props.text}
    </p>
  </div>
);
