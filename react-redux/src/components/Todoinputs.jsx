import { useState } from "react";

function TodoInput({ getTodos }) {
  const [title, setTitle] = useState("");
  const [isloading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const handleAdd = () => {
    const payload = {
      title: title,
      status: false
    };

    setisLoading(true);
    fetch(`http://localhost:3004/data`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => getTodos())
      .catch(() => setisError(true))
      .finally(() => setisLoading(false));
  };

  if (isError) {
    return <h1>something went wrong....please refresh</h1>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button disabled={isloading} onClick={handleAdd}>
        ADD
      </button>
    </div>
  );
}

export default TodoInput;
