import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetails() {

    const { productId } = useParams();

    let [data, setData] = useState([])

    let getData = () => {

        fetch(`http://localhost:3004/data/${productId}`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getData()
    }, [productId])

    console.log(data)

    return (
        <div>
            {Object.keys(data).length !== 0 ?
                <><h3> Product details</h3><p>{data.name}</p><p>{data.price}</p></> : "Product does not exist"
            }
        </div >
    )
}