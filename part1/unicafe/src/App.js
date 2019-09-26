import React, {useState} from 'react';


const Header = (props) => {
  return(
    <div>
    <h1>{props.text}</h1>
    </div>
  )
}

const Statistics = (props) => {
  return(
      <tr><td>{props.opinion}</td><td>{props.value}</td></tr>
  )
}

const Button = (props) => {
  return(
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => () => {
    setGood(newValue)
  }
  const setToNeutral = (newValue) => () => {
    setNeutral(newValue)
  }
  const setToBad = (newValue) => () => {
    setBad(newValue)
  }

  return (
    <div className="App">
    <Header text='give feedback'/>
    <div>
      <div>
      <Button handleClick={setToGood(good + 1)} text='Good'/>
      
      <Button handleClick={setToNeutral(neutral + 1)} text='Neutral'/>
     
      <Button handleClick={setToBad(bad + 1)} text='Bad'/>
      </div>
      <table>
       <Statistics opinion='good' value={good}/>
       <Statistics opinion='neutral' value={neutral}/>
       <Statistics opinion='bad' value={bad}/>
      </table>
      </div>
      </div>
     
  );
}

export default App;
