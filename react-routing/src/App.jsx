import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductDetails from "./components/productDetails"
import NotFound from "./components/notfound"
import Home from "./components/home"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
