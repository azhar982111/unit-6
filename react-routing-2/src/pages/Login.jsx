import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/Authcontext";

function Login() {
  const { isAuth, handleLogin } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <>
      <input type="email" placeholder="email" />
      <input type="email" placeholder="password" />
      <button onClick={handleLogin}>LOGIN</button>
    </>
  );
}

export default Login;
