import React from 'react'
import { render } from 'react-dom'
import Playground from './components/Playground' // importing playground.js as import react-dom happens only once per app.

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

//We can have many functions (components) // with React components (function) name should start with capital letter.
/*function App(props) { // one object called 'props' // /* props can make components versitle
  return (
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1> 
      <div>{props.instructor} welcomes you!</div>
    </div>
  )
}*/

//Another way to write
function App(props) { // one object called 'props' // /* props can make components versitle // happy takes boolean value
  const { cohort, instructor, happy, week} = props
  return (
    <div className='container'>
      <h1>Welcome to React, Web {cohort}</h1> 
      <div>{instructor} welcomes you!</div>

      {happy ? <div>Vary happy</div> : <div>It is Monday</div>}

      <div> It is a week {week}</div>

      <Playground cohort = {cohort} />
    </div>
  )
}


//it can be used only once per app usally
render(
  //<App cohort='39' instructor = 'Rhiannon' />, // element(s)
  <App cohort='39' instructor = 'Rhiannon' happy={false} week = {2} />, //code with boolean value
  document.querySelector('#root')
)
