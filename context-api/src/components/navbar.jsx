import { useContext } from "react";
import { AuthContext } from "../context/context";


export default function Navbar(){

    const { isAuth, toggleAuth, token } = useContext(AuthContext);

    return(
        <div style={{"border" : "1px solid black"}}>
            <button onClick={toggleAuth}>{isAuth?"logout":"Login"}</button>
            <p>{isAuth?`Token: ${token}`:""}</p>
        </div>
    )
}