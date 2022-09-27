import { useRef } from "react"

export function Input(){

    let inputRef = useRef(null)

    function handleClick(){
        inputRef.current.focus();
    }

return(
    <div>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleClick}>SUBMIT</button>
    </div>
)

}