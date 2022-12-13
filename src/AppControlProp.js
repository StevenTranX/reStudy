import React, { useState } from 'react'
import Counter from './Components/Advanced-React/control-props/Counter'

const App = () => {
  const [count, setCount] = useState(5) ; 
  const handleCountChange = (newCount) => {
    setCount(newCount)
  }
  return (
    <div>
      <Counter value = {count} onChange = {handleCountChange} />
    </div>
  )
}

export default App