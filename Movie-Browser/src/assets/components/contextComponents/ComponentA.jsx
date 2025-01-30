import React from 'react'
import ComponentB from './ComponentB'
import {useState} from 'react';
import { createContext } from 'react';

// we wanna pass user to component D
// with props wed have to pass props to each component
// PROP DRILLLING = not good
// useContext fixes this

// Provider: where the context originates
// Consumer: the components that use the context (can be more than 1)
// consumers have to import useContext, providers import createContext

// also need to import usercontext in the consumer file from ComponentA
// userContext needs to be defined outside the component and exported
export const userContext = createContext();

const ComponentA = () => {

    const [user, setUser] = useState("vivek")
  return (
    <div className="box">
        <h1>Component A</h1>
        {/** NEED TO DO THIS TO PASS FROM PROVIDER (COMPONENT A) 
         * i.e. the component we want to have the context, must be wrapped in
         * useContext.Provider value={user}
        */}
        <userContext.Provider value={user}>
            <ComponentB/>
        </userContext.Provider>
        <h2> Hello {user}</h2>
      
    </div>
  )
}

export default ComponentA
