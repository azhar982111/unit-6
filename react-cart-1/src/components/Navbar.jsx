import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const links = [
  {
    path: "/",
    title: "HOME"
  },
  {
    path: "/about",
    title: "ABOUT"
  },
  {
    path: "/contact",
    title: "CONTACT"
  },
  {
    path: "/products",
    title: "PRODUCTS"
  },
  {
    path: "/faq",
    title: "FAQ"
  }
];

function Navbar() {

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
        // <Link key={link.path} to={link.path}>
        //   {link.title}
        // </Link>
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
