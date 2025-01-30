import React from 'react'
import Student from './Student'

const MiniApp = () => {
  return (
    <div>
        {/** NON-STRING literals must be in curly braces */}
        <Student name="Spongebob" age={18}/>
      
    </div>
  )
}

export default MiniApp
