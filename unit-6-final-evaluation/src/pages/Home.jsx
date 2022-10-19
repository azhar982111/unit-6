import { useEffect } from "react";
import { getMovies } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../components/MovieItem";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, error, movies } = useSelector((state) => state);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(getMovies());
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
          display: "grid",
          gridTemplateColumns : "repeat(4,1fr)",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            lang={movie.original_language}
            popularity={movie.popularity}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}
