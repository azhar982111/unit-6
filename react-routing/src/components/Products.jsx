import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Products() {

    let [data, setData] = useState([])

    let getData = () => {

        fetch(`http://localhost:3004/data`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>More details</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product) => (
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><Link to={`/products/${product.id}`}>More...</Link></td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}