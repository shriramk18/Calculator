import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(`Result: ${sum}`);
  };

  const handleSub = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(`Result: ${difference}`);
  };

  const handleMul = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(`Result: ${product}`);
  };

  const handleDiv = () => {
    if (parseFloat(num2) !== 0) {
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(`Result: ${quotient}`);
    } else {
      setResult('Cannot divide by 0');
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="input-fields">
        <input
          type="number"
          placeholder="Enter number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={handleAdd}>Addition</button>
        <button onClick={handleSub}>Subtraction</button>
        <button onClick={handleMul}>Multiplication</button>
        <button onClick={handleDiv}>Division</button>
      </div>
      <h2>{result}</h2>
    </div>
  );
};

export default Calculator;
