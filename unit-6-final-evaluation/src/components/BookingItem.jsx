import { useDispatch } from "react-redux";
import { getBookings } from "../redux/action";
import { Button } from '@chakra-ui/react'

export default function BookingItem({ id, movie_id,name,seat }) {

    const dispatch = useDispatch();

    function handlecancelBooking(id){
        fetch(`http://localhost:8080/moviesBooked/${id}`, {
            method: 'DELETE'
        });

        dispatch(getBookings())
    }

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
            <p>Movie I.d: {movie_id}</p>
            <p>Name : {name}</p>
            <p>Seat : {seat}</p>
            <Button onClick={() => handlecancelBooking(id)}>CANCEL BOOKING</Button>
        </div>
    );
}