import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Userdetails(){

    let [data, setData] = useState([])
    const { user_id } = useParams();


    
    let getData = async () => {
        let res = await fetch(`https://reqres.in/api/users/${user_id}`)
        let data = await res.json()
    
        setData(data.data)
        
    }
    
    useEffect(()=>{
        getData()
    },[])

    console.log(data)
    
    return(
        <div>
            <img src={data.avatar} />
            <p>{data.email}</p>
            <p>{data.first_name} {data.last_name}</p>
        </div>

    )
}