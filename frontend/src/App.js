import './css/home.css';
import Showdata from './Showtask';
import './css/table.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './create';
import './css/createtask.css';
import Update from './Update'

function App() { 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Showdata/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
