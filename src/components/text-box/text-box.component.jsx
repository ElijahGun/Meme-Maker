import React from "react";
import "./text-box.styles.css";

export const TextBox = (props) => (
  <div className="text-maker">
    <input type="text" onChange={(e) => props.handleChange(e)}></input>

    <div className='btn-box'>
    <div></div>
    <button onClick={(e)=> props.handleUp(e) }>⬆</button>
    <div></div>
    <button onClick={(e)=> props.handleLeft(e) }>⬅</button>
    <div></div>
    <button onClick={(e)=> props.handleRight(e) }>➡</button>
    <div></div>
    <button onClick={(e)=> props.handleDown(e) }>⬇</button>
    </div>

  </div>
);
