import { useEffect } from "react"
import { useState } from "react"

export function Counter(){

    let [count, setCount] = useState(0)

    useEffect(() =>{
        document.title = `You clicked me ${count} times`
    },[count])

    return(
        <>
        <h3>Clicked {count} times</h3>
        <button onClick={() =>{
            setCount(count+1)
        }}>Click me</button>
        </>
    )
}