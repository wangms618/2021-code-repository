import React, { useState, createContext } from 'react'
import Counter from './demo3Child'
export const CountContext = createContext()
function Demo() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>点击次数{count}</p>
      <button onClick={() => { setCount(count + 1) }}>click</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  )
}
export default Demo