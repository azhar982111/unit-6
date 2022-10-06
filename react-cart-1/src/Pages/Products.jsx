import { useEffect, useState } from "react"
import styles from "./products.module.css";


export default function Products() {


    let [data, setdata] = useState([])

    async function getData() {
        let res = await fetch(`https://fakestoreapi.com/products`)
        let data = await res.json()

        setdata(data)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)


    return (
        <div className={styles.container}>
            {data.map((ele) => (
                <div className={styles.card}>

                    <img src={ele.image} />
                    <p>{ele.title}</p>
                    <p>{ele.description}</p>

                </div>

            ))}
        </div>



    )
}