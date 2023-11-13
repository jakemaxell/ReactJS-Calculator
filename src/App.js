import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import * as math from 'mathjs';

function App() {
  const [value, setValue] = useState("");

  function Button({ buttonSymbol }) {

    function handleClick(){
      switch(buttonSymbol) {
        case "AC":
          setValue("");
          break;
        case "+/-":
          if(value.charAt(0) !== "-"){setValue("-" + value)};
          break;
        case "%":
          if(!value.includes(buttonSymbol)){setValue(value + buttonSymbol)};
          break;
        case 0:
          if(value !== ""){setValue(value + buttonSymbol.toString())};
          break;
        case ".":
          if(!value.includes(buttonSymbol)){setValue(value + buttonSymbol)};
          break;  
        case "=":
          try{
            const evaluateResults = math.evaluate(value.toString());
            setValue(evaluateResults);  
          } catch (error){
            setValue("Invalid Input.");
          }
          break;
        default:
          setValue(value + buttonSymbol.toString());
      }
    }

    const buttonClassName = buttonSymbol === 0 ? "button special-button" : "button";
    let shownButtonSymbol = buttonSymbol;
    if(shownButtonSymbol === "*"){
      shownButtonSymbol = "X";
    }
    else if(shownButtonSymbol === "/"){
      shownButtonSymbol = "\u00F7";
    }
  
    return <button className={buttonClassName} onClick={handleClick}>{shownButtonSymbol}</button>
  }

  return (
    <div className="App">

      <textarea readOnly={true} className='screen' value={value}/>

      <div className='buttons'>
        
        <div className='buttonRow'>
          <Button buttonSymbol={"AC"}/>
          <Button buttonSymbol={"+/-"}/>
          <Button buttonSymbol={"%"}/>
          <Button buttonSymbol={"/"}/>
        </div>

        <div className='buttonRow'>
          <Button buttonSymbol={7}/>
          <Button buttonSymbol={8}/>
          <Button buttonSymbol={9}/>
          <Button buttonSymbol={"*"}/>
        </div>

        <div className='buttonRow'>
        <Button buttonSymbol={4}/>
        <Button buttonSymbol={5}/>
        <Button buttonSymbol={6}/>
        <Button buttonSymbol={"-"}/>
        </div>

        <div className='buttonRow'>
        <Button buttonSymbol={1}/>
        <Button buttonSymbol={2}/>
        <Button buttonSymbol={3}/>
        <Button buttonSymbol={"+"}/>
        </div>

        <div className='buttonRow'>
          <Button buttonSymbol={0}/>
          <Button buttonSymbol={"."}/>
          <Button buttonSymbol={"="}/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
