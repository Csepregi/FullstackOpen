import React, { useState } from 'react'

// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({onClick, text}) => {
//   return(
//     <div>
//       <button onClick={onClick}>
//       {text}
//       </button>
//     </div>
//   )
// } 

// const App = (props) => {  
//   const [counter, setCounter] = useState(0)
//   const setToValue = (value) => () => setCounter(value)
//   return(
//     <div>
//     <Display counter={counter}/>
//     <div><Button onClick={setToValue(counter + 1)} text='plus'/></div>
//     <div><Button onClick={setToValue(0)} text='set to 0'/></div>
//     </div>
//   )
// }

// const App = (props) => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       <div>
//         {left}
//         <button onClick={handleLeftClick}>left</button>
//         <button onClick={handleRightClick}>right</button>
//         {right}
//         <p>{allClicks.join(' ')}</p>
//       </div>
//     </div>
//   )
// }

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const App = (props) => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       <div>
//         {left}
//         <Button onClick={handleLeftClick} text='left' />
//         <Button onClick={handleRightClick} text='right' />
//         {right}
//         <History allClicks={allClicks} />
//       </div>
//     </div>
//   )
// }

const Display = (props) => <div>{props.value}</div>

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const App = (props) => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }
  
  return (
    <div>
      <Display value={value}/>
      <Button handleClick={setToValue(1000)} text='thousand'/>
      <Button handleClick={setToValue(0)} text='0'/>
      <Button handleClick={setToValue(value+1)} text='plus'/>

    </div>
  )
}

export default App;
