import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [votes, setVotes] = useState([])

  if (votes.length === 0){
    setVotes(votes => [].concat([0,0,0,0,0,0]))
  }

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  
  const Display = ({text}) => <div>{text}</div>
  
  const handleClick = () => {
    setSelected (Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    console.log('Äänestettiin ',selected)
    votes[selected] += 1
    setVotes (votes => [].concat(votes))
    console.log(votes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display text = {anecdotes[selected]} />
      <div>Has {votes[selected]} votes</div>
      <br/>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick} >Next anecdote</button>

      <h1>Anecdote with most votes</h1>
      
      <Display text = {anecdotes[votes.indexOf(Math.max(...votes))]} />

    </div>
  )
}

export default App