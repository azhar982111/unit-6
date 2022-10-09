import { useState, useEffect } from "react"
import styles from "./Products.module.css"
import { useNavigate, useSearchParams, Link } from "react-router-dom"


export default function Products() {

    function getCurrentPage(val) {
        let value = Number(val);

        if (typeof value !== "number" || value <= 0) {
            value = 1;
        }
        if (!value) {
            value = 1;
        }
        return value;
    }

    let [searchParams, setSearchParams] = useSearchParams();
    const initPage = getCurrentPage(searchParams.get("page"));
    const [page, setPage] = useState(initPage);


    useEffect(() => {
        setSearchParams({ page });
    }, [page]);

    let [data, setdata] = useState([])
    // const navigate = useNavigate();

    let getData = async () => {

        let res = await fetch(`https://fakestoreapi.com/products`)
        let data = await res.json()
        setdata(data)
        console.log(data)

    }

    useEffect(() => {
        getData()

    }, [page])

    // onClick={() => navigate(`/products/${ele.id}`)}

    return (
        <div className={styles.parent}>
            {
                data.map((ele) => (

                    <div className={styles.card} key={ele.id}>
                        <img src={ele.image} />
                        <p>{ele.category}</p>
                        <p>${ele.price}</p>
                        <Link to={`/products/${ele.id}`}>more details....</Link>
                    </div>


                ))

            }

            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                PREV
            </button>
            <button>{page}</button>
            <button disabled={page === 3} onClick={() => setPage(page + 1)}>
                NEXT
            </button>
        </div>
    )
}

