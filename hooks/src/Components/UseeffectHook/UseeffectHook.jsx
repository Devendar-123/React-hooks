import React, { useEffect, useState } from 'react'
import './UseeffectHook.css'

const UseeffectHook = () => {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount(prev => prev + 1)
        setTotal(prev => prev + 2)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  const handleStart = () => setIsRunning(true)
  const handleStop = () => setIsRunning(false)
  const handleReset = () => {
    setIsRunning(false)
    setCount(0)
    setTotal(1)
  }

  return (
    <div className="effect-container">
      <h2>Auto Counter</h2>
      <div className="effect-display">
        <p>Count: <span>{count}</span></p>
        <p>Total: <span>{total}</span></p>
      </div>

      <div className="effect-buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default UseeffectHook
