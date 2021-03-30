import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content sisalto={part1} maara={exercises1}/>
      <Content sisalto={part2} maara={exercises2}/>
      <Content sisalto={part3} maara={exercises3}/>

      <Total lkm={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <p>
        {props.sisalto} {props.maara}
      </p>
    </div>

  )
}
const Total = (props) =>{
  return(
    <div>
      <p>
        Number of exercises {props.lkm}
      </p>
    </div>
  )
}


export default App