import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading";

function App() {
  const [firstval, nextval] = useState(0)
  const addtodisplay = (value) => {
    nextval(firstval + value); 
  }
  const cleardisplay=()=>{
    nextval(''); 
  }
  const calculateresult=()=>{
  try {
      nextval(eval(firstval));
  } catch (error) {
    nextval("ERROR SORRY");
  }
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="input">
          <input id="inputtxt" type="text" value={firstval} />
        </div>
        <div className="row1">
        <button onClick={() => addtodisplay("7")}  className="btn btn8">
            7
          </button>
          <button onClick={() => addtodisplay("8")} className="btn btn8">
            8
          </button>
          <button onClick={() => addtodisplay("9")}  className="btn btn9">
            9
          </button>
          <button onClick={() => cleardisplay()} className="btn btnC">
            C
          </button>
        </div>
        <div className="row2">
          <buttonon Click={() => addtodisplay("4")}  className="btn btn4">
            4
          </buttonon>
          <button onClick={() => addtodisplay("5")} className="btn btn5">
            5
          </button>
          <button onClick={() => addtodisplay("6")}  className="btn btn6">
            6
          </button>
          <button onClick={() => addtodisplay("-")}  className="btn btn-">
            -
          </button>
        </div>
        <div className="row3">
          <button onClick={() => addtodisplay("1")}  className="btn btn1">
            1
          </button>
          <button onClick={() => addtodisplay("2")}  className="btn btn2">
            2
          </button>
          <button onClick={() => addtodisplay("3")}  className="btn btn3">
            3
          </button>
          <button onClick={() => addtodisplay("+")}  className="btn btnadd">
            +
          </button>
        </div>
        <div className="row4">
          <button onClick={() => addtodisplay("/")}  className="btn btn.">
            /
          </button>
          <button onClick={() => addtodisplay("0")}  className="btn btn0">
            0
          </button>
          <button onClick={() => addtodisplay("*")}   className="btn btnper">
            *
          </button>
          <button onClick={() =>calculateresult() } className="btn btn*">
            =
          </button>
        </div>
      </div>
      <Heading/>
    </>
  );
}

export default App;
