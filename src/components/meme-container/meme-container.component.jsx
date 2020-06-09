import React from "react";
import "./meme-container.styles.css";

export const MemeContainer = ({ meme }) => (
  <div
    className="container"
    style={{
      backgroundImage: `url(${meme})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  ></div>
);
