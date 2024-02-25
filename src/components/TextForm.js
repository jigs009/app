import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase.", "success");
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase.", "success");
  }

  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared.", "success");
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value);

  }

  const [text, setText] = useState('');
  
  return (
    <>
    <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          
          <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#202120', color: props.mode === 'light'?'black':'white'}} id="myBox" rows="8">
          </textarea>
        </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>    
    </div>
    <div class = "container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
      <h2>
          Your text summery
      </h2>
      <p>{text.split(" ").length
      } words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length * 60} Seconds to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text:"Enter something in the Text-box above to preview it here"}</p>
    </div>
    </>
  )
}