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

   const handleCopy = () =>{
      // var text = document.getElementById("floatingTextarea2");
      // text.select();  
      navigator.clipboard.writeText(text);
      document.getSelection.removeAllRenges();
      props.showAlert("text copy!", "success");
   }
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
      <h3 className=''>{props.heading}</h3>
      {/* <label   htmlFor="floatingTextarea2" className='form-label'>{props.heading}</label> */}
      <textarea className="form-control" value={text} placeholder="Leave a comment here" onChange={handleOnchange}   style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} id="floatingTextarea2" rows={8} ></textarea>
      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleLoClick}>Convert to Lowecase</button>
      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-2" disabled={text.length === 0} onClick={handleExtraSpaces}>Remove space</button>
   </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>You text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words, {text.length} character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minute read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}