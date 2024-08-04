import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState<number>(0)
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setCount(count-1)}}>-</button>
        <br></br>
        <p role='countState'>{count}</p>
    </div>
  )
}

export default Counter