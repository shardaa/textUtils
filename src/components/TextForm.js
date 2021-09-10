import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.viewAlert("Converted to UPPER CASE", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.viewAlert("Converted to LOWER CASE", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.viewAlert("Cleared", "success");
  };

  const handleCopyTextClick = () => {
    let newText = text;
    if (newText.length > 0) {
      navigator.clipboard.writeText(newText);

      props.viewAlert("Text copied" + newText, "success");
    } else {
      props.viewAlert("Nothing to copy", "warning");
    }
  };

  const handleRemoveSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.viewAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter Text"
            id="myBox"
            rows="10"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#1e2023" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyTextClick}>
          Copy text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleRemoveSpaceClick}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Some text to preview"}</p>
      </div>
    </>
  );
}
