import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [state, setstate] = useState("");
  const [state2, set2] = useState("");
  const [state3, set3] = useState("");
  
  function luckypicker(event){
    // console.log(event.target.value);
    setstate(event.target.value);
  }

  function datepicker(event){
    // console.log(event.target.value);
    set2(event.target.value);
  }
  
  function clickhandler(){
    var str=state2;
    var ar=str.split("");
    // console.log(ar);
    var s=0;
    for(var i=0;i<ar.length;i++){
      if(ar[i]!=='-'){
        s=s+parseInt(ar[i]);
      }
    }
    console.log(s,state);
    if(state===""|| state2===""){
      set3(" Please Enter Values")

    }
    else if(isNaN(state)){
      set3(" Please Enter Numerical Values")
    }
    else if(state<0){
      set3(" Please Enter Positive Values")
    }
    
    else if(s%parseInt(state)===0){
      set3(" Congratulations! You're Lucky Ducky. You're In!")

    }
    else{
      set3("Sorry You can't join. You're not Lucky.")
    }


  }
  
  return (


    <div className="App">
      <h1 id="line-1">Are You Lucky Ducky as Donald Duck</h1>
      <h2 id="line-2">Come join ! May the force be with You</h2>
    <div>
      <img src="https://www.fantasiescometrue.com/images/medium/fct_ff3d924055361c6.jpg" alt="Donald Duck Wants You" />
    </div>
    <h3>Enter Your Birthdate</h3>
    <input onChange={datepicker} id="box-1" type="date" />
    <div id="box2-wrapper">   
       <input onChange={luckypicker} id="box-2" placeholder="Enter your lucky no here" type="text" />
</div>
<div id="btn-wrapper">
  <button onClick={()=>clickhandler()} id="btn-1">Click Here Now !</button>
</div>

    <h1 id="line-3">{state3}</h1>

    <footer>
      <p> © | 2021 | aashirwad01</p>
      <ul className="footer-list">
        <li>
          <a className="links" href="https://github.com/aashirwad01" >
          <img className="img-2" src="https://img.icons8.com/material-two-tone/24/000000/github.png" alt="github"/>
          </a>
        </li>
        
        <li>
          <a className="links" href="https://twitter.com/aashirwad_01" >
          <img className="img-2" src="https://img.icons8.com/material-sharp/24/000000/twitter.png" alt="twitter"/>
          </a>
        </li>
        <li>
          <a
            className="links"
            href="https://www.linkedin.com/in/aashirwadkumar159/"
            
          >
            <img className="img-2" src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"/>
          </a>
        </li>
      </ul>
    </footer>
    </div>
    
  );
}

export default App;
