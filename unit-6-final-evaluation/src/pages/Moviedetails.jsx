import { useEffect } from "react";
import { getMoviesbyID } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Moviedetails() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, movies } = useSelector((state) => state);
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        dispatch(getMoviesbyID(id));
    };

    const handleClick = () => {
        navigate('/')
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Something went wrong.. please refresh</h1>;
    }

    return (
        <div>
            <div
                style={{
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid teal"
                }}
            >
                <p>{movies.id}</p>
                <img src={movies.poster_path} style={{ height: "200px" }} />
                <p>Title: {movies.title}</p>
                <p>Language: {movies.lang}</p>
                <p>Release Date: {movies.release_date}</p>
                <p>Popularity: {movies.popularity}</p>
                <p>Overview:</p>
                <p>{movies.overview}</p>
                <Button onClick={handleClick}>Go to Home Page</Button>
            </div>
        </div>
    );
}