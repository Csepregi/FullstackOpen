import React from 'react';
import Part from './Part'

const Content = ({ parts }) => { 

    const rows = () => parts.map(part =>
        <Part 
            name={part.name}
            excercises={part.excercises}
            key={part.id}
        />
        )
 
    return (
      <div>
      <li>{rows()}</li>
      </div>
    )
  }

export default Content;