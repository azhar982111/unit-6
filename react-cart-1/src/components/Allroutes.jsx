import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Faq from "../Pages/Faq";
import Products from "../Pages/Products";


function AllRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={

                    <Home />

                }
            ></Route>
            {/* 
    path - on which path you want to show
    element - what do you want to show
  */}
            <Route
                path="/about"
                element={

                    <About />

                }
            ></Route>
            <Route
                path="/contact"
                element={

                    <Contact />

                }
            ></Route>

            <Route
                path="/products"
                element={

                    <Products />

                }
            ></Route>


            <Route
                path="/faq"
                element={

                    <Faq />

                }
            ></Route>
        </Routes>
    );
}

export default AllRoutes;
