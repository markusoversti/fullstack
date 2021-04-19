import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  return(
    <div>
  <h1>Statistics</h1>
  Good: {good}<br/>
  Neutral: {neutral}<br/>
  Bad: {bad}<br/>
  All: {good + neutral + bad}<br/>
  Average: { (1*good + 0*neutral + (-1)*bad)/(good+neutral+bad) }<br/>
  Positive: {good / (good+neutral+bad) * 100} %<br/>
</div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleClick = () => console.log('Nappia painettiin!!!')

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={() => setGood(good+1)}>
        good
      </button>

      <button onClick={() => setNeutral(neutral+1)}>
        neutral
      </button>

      <button onClick={() => setBad(bad+1)}>
        bad
      </button>


    <br/>
    <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App