import { useEffect } from "react"
import { useState } from "react"

export function Todo() {

    let [post, setpost] = useState([])
    let [page, setpage] = useState(1)

    let getData = (page) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
            .then(
                (res) => {
                    return res.json()
                })
    }

    let fetchandupdateData = async () => {
        try {
            let data = await getData(page)
            setpost(data)   
        } catch (error) {

        }
    }

    useEffect(() =>{
        fetchandupdateData(page)
    },[page])


    let handlePagechange =  (changeby) => {
        setpage(page+changeby)
    }
    

    return (
        <div>
            <h3>Post</h3>
            {post.map((ele)=>(
                <p key={ele.id}>{ele.id} - {ele.title}</p>
            ))}
            <button disabled={page===1} onClick={()=>handlePagechange(-1)}>Previous</button>
            <button disabled={page===20} onClick={()=>handlePagechange(1)}>Next</button>   
        </div>

    )
}