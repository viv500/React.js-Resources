import React from 'react'
import WeatherFetching from './assets/components/weatherFetching'

const App = () => {
  return (
    <>
    <div className="pattern"/>
    <div className="wrapper">
      <header>
        <h1>
        {/* CSS Trick to get a gradient by using a liner background from and to 
            We used span on it purely to apply the styling
            div wouldve taken it to the next line*/}
          Find <span className="text-gradient"> movies </span> you'll enjoy without the Hastle

        <WeatherFetching></WeatherFetching>
      
      </h1>
      </header>

      <p> Search </p>
    </div>
    
    </>
  )
}

export default App