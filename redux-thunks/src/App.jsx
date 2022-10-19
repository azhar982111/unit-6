
import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/register' element={<Register/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
