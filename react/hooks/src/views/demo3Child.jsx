import React, { useContext } from "react";
import { CountContext } from './demo3.jsx'

function Counter() {
  const count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}

export default Counter