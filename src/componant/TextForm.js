import React, { useState } from "react";
export default function TextForm(props) {
  const handleupClick = () => {
    console.log("upperCase was clicked!" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");

  return (
    <div>
      <h1> {props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="myBox"
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupClick}>
        Convert To Uppercase
      </button>
    </div>
  );
}