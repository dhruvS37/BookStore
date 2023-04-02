import React, { useEffect, useReducer ,useState} from 'react'
import ReducerWithUsecontex from './ReducerWithUsecontex'

export const countContex = React.createContext()
// const iniState = 0
// const reducer = (currState,action) =>{
//     switch (action) {
//         case "Increment":
//             return currState + 1
            
//         case "Decrement" :
//             return currState - 1
            
//         case "Reset":
//             return iniState
            
//         default:
//             return currState;
//     }
// }
// function CounterReducer() {
//     const [count , dispatch]=useReducer(reducer,iniState)
//   return (

//     <div>
//         <h2>Count - {count}</h2>
//         <button onClick={()=>dispatch("Increment")}>Increment</button>
//         <button onClick={()=>dispatch("Decrement")}>Decrement</button>
//         <button onClick={()=>dispatch("Reset")}>Reset</button>
//     </div>

//     // <div>
//     //     <countContex.Provider value={{countState:count , countDispatch:dispatch}}>
//     //         <h2>Count - {count}</h2>
//     //         <ReducerWithUsecontex/>
//     //     </countContex.Provider>
//     // </div>
//   )
// }

// export default CounterReducer

// Day 21


function CounterReducer() {

    const iniState = 0
    const reduce =(state,action)=>{
        switch(action){
            case 'add':
                return state+5;
            case 'sub':
                return state-5;
            case 'mul':
                return state*5;
        }
    }
    const [op,dispatch] = useReducer(reduce,iniState)
    
    useEffect(()=>{
        console.log("useReducer render");
    },[])
  return (
    <div>
        <h2>{op}</h2>
        <button onClick={()=> dispatch('add')}>ADD 5</button>
        <button onClick={()=> dispatch('sub')}>SUBSTRACT 5</button>
        <button onClick={()=> dispatch('mul')}>MULTIPLY 5</button>
    </div>
  )
}

export default CounterReducer