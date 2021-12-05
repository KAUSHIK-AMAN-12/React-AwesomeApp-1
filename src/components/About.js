import React , {useState} from "react";

export default function About() {
    const [myStyle , setmyStyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    })
    //-> myStyle = { color : 'white' , backgroundColor : 'black'}

    const [btntext , setbtntext]  = useState("Enable Dark Mode")
    //-> btntext =- "Enable Dark Mode"
    const changeMode = ()=>
    {
        if(myStyle.color === 'white')
        {
            setmyStyle({ color : 'black',backgroundColor : 'white'})
            setbtntext("Enable Dark Mode")   //sath me btn 
        }
        else{
            setmyStyle({ color : 'white',
            backgroundColor : 'black',
            border : '1px solid white'})
            setbtntext("Enable Light Mode")
        }
    }
   
     
  return (
    <div className="container" >
      <div className="accordion" id="accordionExample" style={myStyle}> 
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      
      </div>
      <div className="container my-3">
      <button type="button" className="btn btn-primary mx-3 my-3"
      onClick={changeMode}>{btntext}</button>
      </div>
    </div>
  );
}

//we want to change the text of the button to "disable dark mode and want to chgange the background color"
