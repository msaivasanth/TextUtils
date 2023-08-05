import React, { useState } from 'react'

export default function Body(props) {
    let handleToUpperCase = () => {
        // console.log("To upper case");
        setText("You have clicked on uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    let handleToLowerCase = () => {
        // console.log("To upper case");
        setText("You have clicked on uppercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    let handleToOnChange = (event) => {
        setText(event.target.value);
    }
    let handleToClear = () => {
        setText('');
        props.showAlert("Text Cleared", "success");
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Enter the text to analyze</h2>
                <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#353232' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8" onChange={handleToOnChange}></textarea>
                <button className='btn btn-primary my-1' onClick={handleToUpperCase}>Convert to Upper Case</button>
                <button className='btn btn-primary mx-2 my-1' onClick={handleToLowerCase}>Convert to Lower Case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleToClear}>Clear Text</button>

                <div className='my-3'>
                    <h2>Summary</h2>
                    <div>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</div>
                    <br/>
                    <h2>Preview</h2>
                    <p>{text === "" ? "Enter something to show" : text}</p>
                </div>
            </div>
        </>
    )
}
