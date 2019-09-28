import React from 'react';
import './App.css';
import Course from './components/Course'

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    }
  ]
}

function App () {


  return (
    
    <div className="App">
      <Course course={course} />
    </div>
  )
}

export default App;
