import React from 'react'
import ComponentC from './ComponentC'
import {useContext} from 'react'
// also need to import the create context
import { userContext } from './ComponentA'

const ComponentB = () => {

  const user = userContext(userContext);

  // now we can use user without prop drilling
  //

  return (
    <div className="box">
        <h1>Component B</h1>
        <CopmonentC/>
      
    </div>
  )
}

export default ComponentB
