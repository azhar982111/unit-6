import { useEffect } from "react";
import { getUsers } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import UserItem from "../components/UserItems";
import { useState } from "react";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector((state) => state);
  const [searchinput, setSearchInput]= useState("")


  useEffect(() => {
    fetchLatestData();
  }, []);

  const fetchLatestData = (id="") => {
    dispatch(getUsers(id));
  };

  function handleSubmit(){
    let searcheduser = users.filter((user)=>(user.first_name.toLowerCase()===searchinput.toLowerCase()))
    fetchLatestData(searcheduser[0].id)
    console.log(searcheduser[0].id, searcheduser, typeof(users))
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <div>
      <input type="text" placeholder="Search" value={searchinput} onChange={(e)=>setSearchInput(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        { Array.isArray(users)?
        users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            firstname={user.first_name}
            lastname={user.last_name}
            email={user.email}
            avatar={user.avatar}
          />
        ))
        :
        <UserItem
            key={users.id}
            id={users.id}
            firstname={users.first_name}
            lastname={users.last_name}
            email={users.email}
            avatar={users.avatar}
          />
        }
      </div>
    </div>
  );
}
