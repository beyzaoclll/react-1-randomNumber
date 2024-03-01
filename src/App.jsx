import React, { useState } from "react";

import "./style.css"

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNumber1, setRandomNumber1] = useState(null);
  const [randomNumber2, setRandomNumber2] = useState(null);
  const [result, setResult] = useState(null);



  const getRandomNumbers = () =>{
    const randomNumber1 = Math.floor(Math.random()*(maxVal - minVal +1)+minVal);
    const randomNumber2 = Math.floor(Math.random()*(maxVal - minVal +1)+minVal);

    setRandomNumber1(randomNumber1);
    setRandomNumber2(randomNumber2);
    setResult(null);
  }

  const multiplyNumbers = () => {
    const multiplicationResult = randomNumber1 * randomNumber2;
    setResult(multiplicationResult);
  };

  return (
    <>
    <header>
    <h1>GET <span> RANDOM</span> <span className="end"> NUMBER.</span></h1>
    </header>
    <div className="hero">
      
      <div className="container">
        <div className="randomNum1">
          <p>Random Number 1 : <span>{randomNumber1}</span></p>
        </div>
        <div className="randomNum2">
          <p>Random Number 2 : <span>{randomNumber2}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min :</p>
            <input type="number" 
            value={minVal}addition
            onChange={e => setMinVal(e.target.value)}/>
          </div>
          <div>
            <p>Max:</p>
            <input type="number"
            value={maxVal} 
            onChange={e => setMaxVal(e.target.value)}/>
          </div>
        </div>
        <button onClick={getRandomNumbers}>Get Random Numbers</button>
  
      </div>

      <div className="multiply">
    <div className="num1">
      <p>Random Number 1 : {randomNumber1}</p>
    </div>
    <div className="num2">
      <p>Random Number 2 : {randomNumber2}</p>
    </div>


    <div className="multi">
      <p>Multiplication : {(randomNumber1)*(randomNumber2)}</p>
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
