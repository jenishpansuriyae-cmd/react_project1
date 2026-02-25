// import React, {useState} from 'react';
import { use, useState } from 'react';
import '../App.css';
export default function Textform(props){
   const handleUpClick =()=>{
      console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase!", "success");
   }
   const handleLoClick =()=>{
      console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
   }
   const handleClearClick =()=>{
      console.log("Uppercase was clicked" + text);
      let newText = '';
      setText(newText);
      props.showAlert("Text clear!", "success");
   }

   // const handleCopy = () =>{
   //    var text = document.getElementById("floatingTextarea2");
   //    text.select();  
   //    text.setSelectionRange(0,9999);
   //    navigator.clipboard.writeText(text.value);
   //    props.showAlert("text copy!", "success");
   // }
   const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed extra space!", "success");
   }

   const handleOnchange = (event) =>{  
      console.log("on change");
      setText(event.target.value);

   }
   
   const [text,setText] = useState('Enter text here');
   // text = "new text";
   // setText("new text");
  return (
   <>
   <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h3>{props.heading}</h3>
      {/* <label   htmlFor="floatingTextarea2" className='form-label'>{props.heading}</label> */}
      <textarea className="form-control" value={text} placeholder="Leave a comment here" onChange={handleOnchange}   style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="floatingTextarea2" rows={8} defaultValue={props.heading}></textarea>      
      <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowecase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      {/* <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button> */}
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove space</button>
   </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>You text summary</h1>
      <p>{text.split(" ").length}words, {text.length} character</p>
      <p>{0.008 * text.split(" ").length}Minute read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the  textbox abrove  to preview it here"}</p>
    </div>
    </>
  )
}