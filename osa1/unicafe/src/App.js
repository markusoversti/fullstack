import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (1*good + 0*neutral + (-1)*bad)/(good+neutral+bad)
  const positive = good / (good+neutral+bad) * 100


  if ((good + neutral + bad) !== 0){
    return(
      <table>
        <tbody>
      <StatisticsLine text="Good:" value={good}/>
      <StatisticsLine text="Neutral:" value={neutral}/>
      <StatisticsLine text="Bad:" value={bad}/>
      <StatisticsLine text="All:" value={all}/>
      <StatisticsLine text="Average:" value={average}/>
      <StatisticsLine text="Positive:" value={positive}/>
        </tbody>
      </table>
      )
    }
    return(
      <div>
        Not given
      </div>
    )
}

const StatisticsLine = ({text, value}) => {
  return(  
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
 
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //const handleClick = () => console.log('Nappia painettiin!!!')

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h1>Give feedback</h1>
    
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
  

    <br/>
    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App