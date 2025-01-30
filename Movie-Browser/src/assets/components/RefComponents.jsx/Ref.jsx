import React from 'react'
import {useState, userRef} from 'react'

// how would you track number of renders?
// userstate to track and useffect to fire a +1
// const useEffect(() => {setRenderCount(prev) => (prev + 1)})
// BUT
// but this useffect fires whenever theres a rerender, and it causes a rerender
// by incrememting RenderCount. infinite loop


// ANOTHER USE CASE: get the PREVIOUS value of state
// create a Ref that stores names. useEffect to do prevName.current = name
// with dependancy array [name]



// renderCount is an object that has a renderCount.current attribute

const Ref = () => {

    const [name, setName] = user("");

    // useRef and useState both store values, but useRef does NOT trigger rerenders
    // useRef doesn't have a setter
    const renderCount = userRef(0);

    useEffect(() => {renderCount.current = renderCount.current + 1 })

  return (
    <div>
      {renderCount.current};
    </div>
  )
}

export default Ref
