import React, { useState } from 'react'
import './UsestateHook.css'

const UsestateHook = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="counter-container">
      <div className="counter-buttons">
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <button onClick={resetCount}>0</button>
      </div>
      <p className="counter-display">Count is: {count}</p>
    </div>
  )
}

export default UsestateHook
