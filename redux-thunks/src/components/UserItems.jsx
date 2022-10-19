import { Link } from "react-router-dom";

export default function UserItem({id, firstname, lastname, email, avatar}) {

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
        <p>First name: {firstname}</p>
        <p>Last name: {lastname}</p>
        <p>Email: {email}</p>
        <img src={avatar}/>
        {/* <Link to={`/todo/${id}`}>more details....</Link> */}
      </div>
    );
  }
  
  
  