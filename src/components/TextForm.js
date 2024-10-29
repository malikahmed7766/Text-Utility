import React, { useState } from 'react'
export default function TextForm(props) {

  let [text, setText] = useState("");

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase Has Been Successfully!", "success");
  }

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase Has Been Successfully!", "success");
  }

  const handleClipboard = () => {
    let text = document.getElementById("desc");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copy To Clipboard Has Been Successfully!", "success");
  }

  const handleClearText = () => {
    let text = document.getElementById("desc");
    setText("");
    props.showAlert("Text Clear Has Been Successfully!", "success");
  }


  const handleonChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container my-3">
        <div className="row">

          <div className="col-md-10 mx-md-auto my-2">
            <div className="form gap-2">
              <h4 className={`text-${props.text}`}>{props.heading}</h4>
              <textarea name="desc" id="desc" className={`form-control bg-${props.mode} text-${props.text}`} onChange={handleonChange} rows="5" placeholder="" value={text}></textarea>
              <div className="d-grid d-md-flex justify-content-md-start flex-wrap gap-1 mt-3">
                <button className={`btn btn-success btn-sm ${text.length <= 0 ? "disabled" : ""}`} onClick={handleUppercase}>Convert To Uppercase</button>
                <button className={`btn btn-success btn-sm ${text.length <= 0 ? "disabled" : ""}`} onClick={handleLowercase}>Convert To Lowercase</button>
                <button className={`btn btn-success btn-sm ${text.length <= 0 ? "disabled" : ""}`} onClick={handleClipboard}>Copy To Clipboard</button>
                <button className={`btn btn-success btn-sm ${text.length <= 0 ? "disabled" : ""}`} onClick={handleClearText}>Clear Textarea</button>
              </div>
            </div>
          </div>

          <div className="col-md-10 mx-md-auto my-3">
            <div className={`mb-3 text-${props.text}`}>
              <h3>Your Text Summary</h3>
              <p>{text.split(" ").filter((elem)=>{return elem.length !=0}).length} words , {text.length} Characters</p>
            </div>
            <div className={`mb-3 text-${props.text}`}>
              <h3>Preview</h3>
              <p>{text.length > 0 ? text : "Enter a Text Above To Preview"}</p>
            </div>

          </div>

        </div>
      </div>



    </>
  )
}