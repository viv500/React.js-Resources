import React from 'react'

const App = () => {
  return (
    <>
    <div className="pattern"/>
    <div className="wrapper">
      <h1>
        {/* CSS Trick to get a gradient by using a liner background from and to 
            We used span on it purely to apply the styling
            div wouldve taken it to the next line*/}
        Find <span className="text-gradient"> movies </span> you'll enjoy without the Hastle
      </h1>
    </div>
    </>
  )
}

export default App