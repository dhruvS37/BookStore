import React ,{useReducer} from 'react'

const iniState = {
    firstConter : 0 
}

const reducer =(currState , action)=>{
    switch (action.type) {
        case "Increment":
            return { firstConter : currState.firstConter + 1}
            
        case "Decrement" :
            return {firstConter : currState.firstConter - 1}
            
        case "Reset":
            return iniState
            
        default:
            return currState;
    }
}
function CountyerReducerObject() {
    const [count , dispatch] = useReducer(reducer,iniState)
  return (
    <>
    <h2>Count - {count.firstConter}</h2>
    <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
    <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </>
  )
}

export default CountyerReducerObject