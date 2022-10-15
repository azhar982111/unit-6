import { Link } from "react-router-dom";

function TodoItems({ title, status, id, handleDelete, handleToggle }) {



    return (
      <div
        style={{
          margin: "10px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid teal"
        }}

      >
        <div>{title}</div>
        <div>{status ? "COMPLETED" : "NOT COMPLETED"}</div>
        <button onClick={() => handleDelete(id)}>DELETE</button>
        <button onClick={() => handleToggle(id)}>TOGGLE</button>
        <br/>
        <Link to={`/todo/${id}`}>more details....</Link>
      </div>
    );
  }
  
  export default TodoItems;
  