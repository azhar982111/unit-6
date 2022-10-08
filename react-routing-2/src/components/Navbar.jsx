import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import {AuthContext} from "./Authcontext"

const links = [
  {
    path: "/",
    title: "HOME"
  },
  {
    path: "/Settings",
    title: "SETTINGS"
  },
  {
    path: "/Dashboard",
    title: "DASHBOARD"
  },
  {
    path: "/login",
    title: "LOGIN"
  },
  {
    path: "/user",
    title: "USERS"
  }

];

function Navbar() {

    const {isAuth, handleLogout} = useContext(AuthContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        margin: "auto",
        background: "#cecece",
        padding: "20px"
      }}
    >
      {links.map((link) => (

        <NavLink
          key={link.path}
          to={link.path}

          onClick={link.title=="LOGIN"?handleLogout:""}
        >
          {link.title=="LOGIN"?(
            isAuth?"LOGOUT":"LOGIN"):link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
