
import { Route, Routes } from 'react-router-dom';

import Tododetails from './Pages/Tododetails';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/todo/:id' element={<Tododetails/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
