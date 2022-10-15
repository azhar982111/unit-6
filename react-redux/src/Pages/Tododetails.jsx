import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"



export default function Tododetails() {
    let [data, setdata] = useState({})

    let param = useParams()
    // console.log(id)

    function getTododetails() {
        fetch(`http://localhost:3004/data/${param.id}`)
            .then((res) => res.json())
            .then((res) => setdata(res))
    }

    useEffect(() => {
        getTododetails()

    }, [])

    console.log(data)
    return (
        <div>
            <h2>Title : {data.title}</h2>
            <h2>Status : {data.status? "COMPLETED" : "NOT COMPLETED"}</h2>
            
        </div>
    )
}