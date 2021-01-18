/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, { useState} from 'react';
//useState allows to set internal state
//it is a function that takes that desired initial state
//returns an array with 2 things: the state itself and a state changer
//NODECLARING VARIABLES TO HOLD STATE (with let)

export default function Playground (props){
  //return 'playground for ' + props.cohort;

  // const theArray = useState(0);
  // const count = theArray[0];
  // const setCount = theArray[1];
  const [count, setCount]= useState(0) //all above 3 lines code in one line
  const [spinnerOn, setSpinnerON] = useState(true)
  const [weapon, setWeapon] = useState('')
  //let count = 0 NOOOOOOOOOO

  if(spinnerOn){
    return(
      <div className="container" >
        Loading...
          <button onClick={event => {setSpinnerON(false)}}>turn spinner off</button>
      </div>
    )
  }

  return (
    <div className="container" id={'cohort' + props.cohort}>
      <h3>Playground for {props.cohort}</h3>
      <div>the count is {count}</div>
        <button onClick = {event => { setCount(count + 1) }}>increase</button>

      <div>the spinner is  {spinnerOn ? 'ON' : 'OFF'}</div>
        <button onClick = {event => setSpinnerON(!spinnerOn)}>toggle spinner</button>

      <div>the current weapon is {weapon}</div>
        <button onClick = {event => {setWeapon ('scissor')}}>pick scissor</button>
        <button onClick = {event => {setWeapon ('rock')}}>pick rock</button>
        <button onClick = {event => {setWeapon ('paper')}}>pick paper</button>
      
    </div>
  )
}