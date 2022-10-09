import { useParams} from "react-router-dom"
import { useState, useEffect } from "react";

export default function Productdetails(){

    let [data, setData] = useState([]);
    const { id } = useParams();
    
    console.log({id})

    let getData = async () => {

        let res = await fetch(`https://fakestoreapi.com/products/${id}`)
        // let res = await fetch(`https://fakestoreapi.com/products/3`)
        let data = await res.json()
        setData(data)
        console.log(data)

    }

    useEffect(() => {
        getData()
    }, []);


    return(
        <div>
            <img src={data.image} />
            <p>{data.title}</p>
        </div>
    )
}