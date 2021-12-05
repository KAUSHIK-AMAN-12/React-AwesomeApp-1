// App.js is rendering into index.js

import './App.css';                //we are using CSS from APP.CSS
import React , { useState } from 'react';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';

//--> we are going to make give Dark mode button feature in the navbar
function App() {
  const [mode,setMode]= useState('light')                     //-> by default mode = "light"
  //-> we are sending this function to navbar compnent through props
  const toggleMode = ()=>
  { 
    console.log("mode : " , mode);
  if(mode === 'light')                                   //by defuault light hai
  {
    setMode('dark')                                      //-> mode ko dark kardo 
    document.body.style.backgroundColor = 'grey'        
  }
  else{
    setMode('light')                                     //-> mode ko light kardo
    document.body.style.backgroundColor = 'white'
  }
  }
  return (

    //--> we can pass --> toggleMode() into props 
   <>
<Navbar title="TextUtils" aboutText="about TextUtils" mode={mode} toggleMode={toggleMode}  /> 
<div className="container my-3" >
  <TextForm heading="Enter the text to analayze Below : " mode={mode}/> 
  {/* <About/> */}
    </div>
   </>
  );
  
}

export default App;
