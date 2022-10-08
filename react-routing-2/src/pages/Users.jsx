import { useEffect, useState } from "react"
import { Link, useSearchParams   } from "react-router-dom"


export default function Users() {

    let [data, setData] = useState([])

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

    let getData = async () => {
        let res = await fetch(`https://reqres.in/api/users?page=${page}`)
        let data = await res.json()

        setData(data.data)
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [page])

    return (
        <div>
            {data.map((ele) => (
                <div>
                    <img src={ele.avatar} />
                    <Link to={`/user/${ele.id}`}>more details....</Link>
                </div>
            ))}
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                PREV
            </button>
            <button>{page}</button>
            <button disabled={page === 2} onClick={() => setPage(page + 1)}>
                NEXT
            </button>
        </div>
    )
}