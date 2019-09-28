import React from 'react';
import Part from './Part'

const Content = ({ parts }) => { 

    const rows = () => parts.map(part =>
        <Part 
            name={part.name}
            exercises={part.exercises}
            key={part.id}
        />
        )
    
    const sumExc = () => parts.reduce((sum,order) => sum + order.exercises,0)
 
    return (
      <div>
      <li>{rows()}</li>
      <p>{sumExc()}</p>
      </div>
    )
  }

export default Content;