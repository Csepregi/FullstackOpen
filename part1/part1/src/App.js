import React, { useState } from 'react'


// function Header(props){
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// function Part(props){
 
//   return(
//     <div>
//       <p>{props.part}</p>
//     </div>
//   )
// }

// function Content(props){

//   return (
//     <div>
//       <div>{props.name}</div>
//     </div>
//   )
// }

// function Total(props){
//   return(
//     <div>
//       <p>{props.total}</p>
//     </div>
//   )
// }

// function App() {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   return (
//     <div>
//     <Header course={course.name}/>
//     <Content name={course.parts[0].name}/>
//     <Part part={course.parts[0].exercises}/>
//     <Total total={course.parts[0].exercises + course.parts[1].exercises}/>

//   </div>
//   );
// }

const App = (props) => {  
  const [counter, setCounter] = useState(0)
  const setToValue = (value) => () => setCounter(value)
  return(
    <div>
    <p>{counter}</p>
    <div><button onClick={setToValue(counter + 1)}>plus</button></div>
    </div>
  )
}

// const App = (props) => {
//   const [ counter, setCounter ] = useState(0)

//   const setToValue = (value) => setCounter(value)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setToValue(counter + 1)}> 
//         plus
//       </button>
//       <button onClick={() => setToValue(0)}> 
//         zero
//       </button>
//     </div>
//   )
// }
export default App;
