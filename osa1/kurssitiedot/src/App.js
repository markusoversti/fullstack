import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />

      <Content sisalto={course.parts}/>

      <Total lkm={course.parts}/>
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
       {props.sisalto[0].name}
       {props.sisalto[0].exercises}
      </p>

    <p>
      {props.sisalto[1].name}
      {props.sisalto[1].exercises}
    </p>
    
    <p>
      {props.sisalto[2].name}
      {props.sisalto[2].exercises}
    </p>

    </div>

  )
}
const Total = (props) =>{
  return(
    <div>
      {props.lkm[0].exercises + props.lkm[1].exercises + props.lkm[2].exercises}
    </div>
  )
}


export default App