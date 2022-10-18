import React,{useState} from 'react'

export default function Textforms(props) {
    const [text, setText] = useState("Enter text here");
    const UpperConv=()=>{
        // console.log("The UpeprCase button is clicked"+ text);
        let newText= text.toUpperCase()
        setText(newText);
    }
    const handleOnchange=(event)=>{
        console.log("Onchange method is clicked");
        setText(event.target.value)
    }
  return (
    <>
    <h1>{props.heading}</h1>
<div className="mb-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
<textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn-button" onClick={UpperConv}>Convert to Uppercase</button>
    </>
  )
}
