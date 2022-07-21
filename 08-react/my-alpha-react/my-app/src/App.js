import './App.css';
import React, { useState } from 'react';

function sum(numberOnee, numberTwoo) {
  const result = Number(numberOnee) + Number(numberTwoo);
  alert("Resultado da operção: " + result);
}

function sub(numberOnee, numberTwoo) {
  const result = Number(numberOnee) - Number(numberTwoo);
  alert("Resultado da operção: " + result);
}

function mult(numberOnee, numberTwoo) {
  const result = Number(numberOnee) * Number(numberTwoo);
  alert("Resultado da operção: " + result);
}

function div(numberOnee, numberTwoo) {
  const result = Number(numberOnee) / Number(numberTwoo);
  alert("Resultado da operção: " + result);
}

function App() {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <section className="container">
          <h1>Calculadora Básica</h1>
          <div id="inputs">
            <input id="number1" type="number" onChange={(e) => setNumberOne(e.target.value)}></input>
            <span id="operator"></span>
            <input id="number2" type="number" onChange={(e) => setNumberTwo(e.target.value)}></input>
          </div>
          <div id="keyboard">
            <button onClick={() => sum(numberOne, numberTwo)}>Somar</button>
            <button onClick={() => sub(numberOne, numberTwo)}>Subtrair</button>
            <button onClick={() => mult(numberOne, numberTwo)}>Multiplicar</button>
            <button onClick={() => div(numberOne, numberTwo)}>Dividir</button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
