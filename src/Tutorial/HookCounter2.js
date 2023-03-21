import React, { useState } from 'react'

let render = 0

function HookCounter2() {
  render++

  const iniValue = 0
  const [count, setCount] = useState(iniValue)
  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount(preCount => preCount + 1)
    }
  }
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(iniValue)}>Reset</button>
      <button onClick={increment5}>Increment 5</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default HookCounter2