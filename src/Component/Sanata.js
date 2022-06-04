// import useState  from "react"
import React, { useState } from 'react'

export default function Sanata(props) {
  const handleUpClick = () => {
    // setText("This Text Come From onclickfunction")
    console.log(" This Text is coming from amit Btn")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Convert to uppercase", "success")

  }

  const handleOnChange = (event) => {
    console.log(" this is coming from handleOnChange ");
    setText(event.target.value);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to Lowercase", "success")
  }
  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces remove", "success")
  }
  const handleCopy = () => {
     
    navigator.clipboard.writeText(text)
    props.showAlert("Copy to clipbord", "success")
  }
  const handleClearText = () => {
    setText(" ");
    props.showAlert("Clear Text ", "success")
  }

  const [text, setText] = useState("");
 



  return (
    <div  >

      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' ,   }}>
        <div className="container my-3">
          <h1>{props.heding}</h1>
          <textarea className="form-control" value={text} placeholder="Enter your texte hear" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="box" rows="8"></textarea>
        </div>
        <div className='container'>
          <button disabled={text.length===0} className='btn btn-primary my-2' onClick={handleUpClick}> Convert to uppercase</button>
          <button disabled={text.length===0} className='btn btn-primary mx-2 ' onClick={handleLoClick}> Convert to lovercase</button>
          <button disabled={text.length===0} className='btn btn-primary mx-2 ' onClick={handleCopy}> Copy Text</button>
          <button disabled={text.length===0} className='btn btn-primary mx-2 ' onClick={handleRemoveExtraSpaces}> removeExtraSpeces</button>
          <button disabled={text.length===0} className='btn btn-primary mx-2 ' onClick={handleClearText}>Clear Text</button>
        </div>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2> <b>Your Text Summary </b>  </h2>
        <p> number of Word in textarea is {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
        <p> number of Carector in textarea is {text.length} Carector</p>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2> <b> Preveiw</b> </h2>
        <p>{text.length> 0 ? text : "Enter something in the textbox above to preveiw it hear"}</p>
      </div>
    </div>
  )
}