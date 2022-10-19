import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import Login from './pages/Login';
import Moviedetails from './pages/Moviedetails';
import PrivateRoute from './components/Privateroutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
        ></Route>

        <Route path="/bookings" element={
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        }
        ></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/movie/:id" element={
          <PrivateRoute>
            <Moviedetails />
          </PrivateRoute>
        }
        ></Route>

      </Routes>
    </div>
  );
}

export default App;
