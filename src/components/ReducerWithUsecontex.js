import React, { useContext } from 'react'
import { countContex } from './CounterReducer'

function ReducerWithUsecontex() {
    const countValue = useContext(countContex)
  return (
    <div>
            count - {countValue.countState}
         <button onClick={()=>countValue.countDispatch("Increment")}>Increment</button>
         <button onClick={()=>countValue.countDispatch("Decrement")}>Decrement</button>
         <button onClick={()=>countValue.countDispatch("Reset")}>Reset</button>
    </div>
  )
}

export default ReducerWithUsecontex