import './App.css';
import { useState } from "react"

let isOperator = false

function App() {
  const [firstVal, setFirstVal] = useState("")
  const [secondVal, setSecondVal] = useState('');
  const [opVal, setOpVal] = useState('');

  const [displayValue, setDisplayValue] = useState('');

  return (
    <body>
      <div className='Calculator'>

        <div className='Display'>
          <label>{displayValue}</label>
        </div>

        <div className='Input'>
          <label>{firstVal}{opVal}{secondVal}</label>
        </div>

        <div className='Buttons'>
          <button value={7} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>7</button>
          <button value={8} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>8</button>
          <button value={9} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>9</button>
          <button value={'*'} onClick={e => {setOpVal(e.target.value); isOperator = true}}>*</button>
          <br></br>
          <button value={4} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>4</button>
          <button value={5} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>5</button>
          <button value={6} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>6</button>
          <button value={'-'} onClick={e => {setOpVal(e.target.value); isOperator = true}}>-</button>
          <br></br>
          <button value={1} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>1</button>
          <button value={2} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>2</button>
          <button value={3} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>3</button>
          <button value={'+'} onClick={e => {setOpVal(e.target.value); isOperator = true}}>+</button>
          <br></br>
          <button onClick={e => {setFirstVal(''); setOpVal(''); setSecondVal(''); setDisplayValue('')}}>C</button>
          <button value={0} onClick={e => {if (isOperator) {setFirstVal(firstVal + e.target.value)} else {setSecondVal(secondVal + e.target.value)}}}>0</button>
          <button value={'='} onClick={e => {setFirstVal(''); setOpVal(''); setSecondVal(''); setDisplayValue(Evaluate(firstVal, secondVal, opVal)); isOperator = false}}>=</button>
          <button value={'/'} onClick={e => {setOpVal(e.target.value); isOperator = true}}>/</button>
        </div>

      </div>
      </body>
  );
}

function Evaluate(firstNum, secondNum, operator) {
  let res = 0
  if (firstNum === '' || secondNum === '' || operator === '') {
    return 0
  }

  switch (operator) {
    case "+":
      res = parseInt(firstNum) + parseInt(secondNum)
      break;
    case '-':
      res = firstNum - secondNum
    break;
    case '/':
      res = firstNum / secondNum
    break;
    case '*':
      res = firstNum * secondNum
    break;
    default:
  }

  return res
}

export default App;
