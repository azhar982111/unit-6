import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Settings from "./Settings";
import Users from "./Users";
import Userdetails from "./Userdetails";

import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={

                    <Home />

                }
            ></Route>

            <Route
                path="/Settings"
                element={
                    <PrivateRoute>
                        <Settings />
                    </PrivateRoute>
                }
            ></Route>
            <Route
                path="/Dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            ></Route>

            <Route
                path="/user"
                element={
                    <PrivateRoute>
                        <Users />
                    </PrivateRoute>
                }
            ></Route>
            <Route path="/login" element={<Login />}></Route>

            <Route
                path="/user/:user_id"
                element={
                    <PrivateRoute>
                        <Userdetails />
                    </PrivateRoute>
                }
            ></Route>


        </Routes>
    );
}

export default AllRoutes;
