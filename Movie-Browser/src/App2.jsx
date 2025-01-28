// anything that starts with use is a Hook
import { useState, useEffect } from 'react'
import './App.css'


// Inline styles have priority over defined styles
//styling needs to be done in a string within js '10px'
// its also all lower case with dashes compared to camel case in JS
// Styling inline

// PROPS IN {}
const Card = ({title}) => {
  // state to track what movies have been liked
  const [count, setCount] = useState(0)

  // state to track if a movie has been liked
  const [hasLiked, sethasLiked] = useState(false); // destructured array


  // dependancy array (or deps) : react checks if its been changed, if so, it will fire use effect
  //                              use case: we want the console log to only happen when the card is liked
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`); // backtickts for console log strings
  }, [hasLiked]);

  return(
    // a nicer way to do it setCount((prevState) => prevState + 1)
    <div className="card" onClick={() => setCount(count + 1)}>

      {/* conditional rendering of count based on its value*/}
      <h2> {title} <br/> {count != 0 && count}</h2> {/* break tag to go to next line */}
      <button onClick={() => {sethasLiked(!hasLiked)}}> 
      {hasLiked ? '❤️' : '🤍'}
      </button>

    </div>
  )
}


// or use () => {} if you have more than 1 function call

// gotta use state cuz React doesn't know when it getes updated (to rerender)
// state only resets when you refresh the page
const App = () => {


  return(
    <div className="card-container">
      <Card title="Lion King"/>
      <Card title="Fast and Furious"/>
      <Card title="Hunger Games"/>
    </div>
  )
}


export default App