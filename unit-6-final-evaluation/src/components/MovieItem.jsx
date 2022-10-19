import { Link } from "react-router-dom";

export default function MovieItem({ id, title, lang, popularity, poster_path, release_date }) {

    return (
        <div
            style={{
                margin: "10px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid teal"
            }}

        >
            <p>{id}</p>
            <img src={poster_path} style={{height : "200px", marginLeft: "30%"}}/>
            <p>Title: {title}</p>
            <p>Language: {lang}</p>
            <p>Release Date: {release_date}</p>
            <p>Popularity: {popularity}</p>
            <Link to={`/movie/${id}`}>More details....</Link>
        </div>
    );
}