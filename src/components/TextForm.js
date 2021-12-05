import React , {useState} from 'react'       //--> useState is a hook imported from react
//-> hooks helps to use "CLASS" feature without using class
//->we can handle Events with onChange={} and need to use for state variable

export default function TextForm(props) {
    const handleUpClick= ()=>
    {
        console.log("you just clicked me" + text.toUpperCase())
        setText(text.toUpperCase())           
    }
    const handleOnChange = (event) =>
    {
        setText(event.target.value)     //-> going to add value in current state value
    }
    const handletoLower = ()=>
    {
        setText(text.toLowerCase());
    }
    const seprateStringintochars = () =>
    {
        setText(text.split(" "))
    }
    const handleClearText = () =>
    {
        setText(" ")
    }
    const handleCopy = ()=>
    {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const removeExtraSpaces = ()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text , setText] = useState('Enter text here -1')
   
    //text = "aman";             //-> wrong way to change the text
    // setText("AMAN") ;               //-> right way to change the text
    return (
        <>
        <div className="container pb-4" style={{backgroundColor : props.mode==='dark'?'black':'white'}} >
            <h1 style={{ color : props.mode==='dark'?'white' : 'black' }}>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}
           style={{backgroundColor : props.mode==='dark'?'black':'white' , 
             color : props.mode==='dark'?'white' : 'light'}}
           id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-1" onClick={handleUpClick}>
               Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handletoLower}>
               Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={seprateStringintochars}>
               Convert to Chars </button>  
               <button className="btn btn-primary mx-2" onClick={handleClearText}>
               Clear Text</button> 
               <button className="btn btn-primary mx-2" onClick={handleCopy}>
               Copy Text</button>  
               <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>
               Remove Extra spaces</button>  
          
        </div>
        <div className="container my-3" style={{backgroundColor : props.mode==='dark'?'grey':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.length - 1} Characters and {text.split(" ").length} words</p> 
        <p>{ 0.008 * text.split(" ").length} Minutes To READ the paragrph </p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>

        </>
    )
}
//--> text.split("") returns an array lf sTring converted into char
//-->text.split(" ") converted into 
