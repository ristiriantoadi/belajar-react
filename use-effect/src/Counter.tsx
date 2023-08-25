import { useEffect, useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(0)
    const [isClicked,setIsClicked] = useState(false)

    useEffect(()=>{
        console.log("called on initial render")
    },[])
    useEffect(()=>{
        console.log("called on every render")
    })
    useEffect(()=>{
        console.log("called on every counter change",counter)
    },[counter])
    useEffect(()=>{
        console.log("called on every isClicked change",isClicked)
    },[isClicked])

    return (
    <div>
        <h3>{counter}</h3>
        <button onClick={()=>{
            setCounter(counter=>counter+1)
            // setCounter(counter+1)
        }}>Increment</button>
        <button onClick = {()=>{setIsClicked(true)}}>Click</button>
    </div>
  )
}

export default Counter