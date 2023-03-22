import React, { useEffect, useState } from 'react'

function HookMouse() {

  const [x,setX]=useState(0)
  const [y,setY]=useState(0)

  const mousePosition = (e) =>{
    console.log("Mouse event");
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(()=>{
    console.log("Useeffect called")
    window.addEventListener("mousemove" , mousePosition)

    return () =>{
      console.log("Compponent unmounting code");
      window.removeEventListener("mousemove" , mousePosition)
    }
  },[])

  return (
    <div>Hooks X-{x}  Y-{y} </div>
  )
}

export default HookMouse