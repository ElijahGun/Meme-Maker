import React from "react";
import "./meme-picker.styles.css";

export const MemePicker = ({ memes, handleClick }) => (
  <div className="meme-img-picker">
    {memes.map((meme) => (
      <img onClick={(e) => handleClick(e)} src={`${meme.url}`} />
    ))}
  </div>
);
