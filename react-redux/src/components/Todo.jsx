import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodosError,
  getTodosSuccess,
  getTodosLoading
} from "../redux/action";
import TodoInput from "./Todoinputs";
import TodoItems from "./TodoItems";

function Todo() {
  const dispatch = useDispatch();
  const { loading, error, todos } = useSelector((state) => state);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    dispatch(getTodosLoading());
    fetch(`http://localhost:3004/data`)
      .then((res) => res.json())
      .then((res) => dispatch(getTodosSuccess(res)))
      .catch(() => dispatch(getTodosError()));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3004/data/${id}`, {
      method: "DELETE"
    }).then(() => getTodos());
  };

  const handleToggle = (id) => {
    const payload = {
      status: !todos.find((ele) => ele.id === id)?.status
    };
    fetch(`http://localhost:3004/data/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    }).then(() => getTodos());
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong...please refresh</h1>;
  }

  return (
    <div>
      <TodoInput getTodos={getTodos} />
      <div
        style={{
          display: "flex",
          alignItems: "centre",
          justifyContent: "space-around"
        }}
      >
        {todos.map((todo) => (
          <TodoItems
            key={todo.id}
            title={todo.title}
            id={todo.id}
            status={todo.status}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
