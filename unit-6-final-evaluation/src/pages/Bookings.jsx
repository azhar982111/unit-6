import { useEffect } from "react";
import { getBookings } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import BookingItem from "../components/BookingItem";

export default function Bookings() {
  const dispatch = useDispatch();
  const { loading, error, bookedMovies } = useSelector((state) => state);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(getBookings());
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
        {bookedMovies.map((booking) => (
          <BookingItem
            key={booking.id}
            id={booking.id}
            movie_id={booking.movie_id}
            name={booking.name}
            seat={booking.seat}
          />
        ))}
      </div>
    </div>
  );
}
