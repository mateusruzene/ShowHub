import React from 'react';  
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home';
import { Eventos } from './pages/Eventos';
import { Shows } from './pages/Shows';


function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/Shows' exact element={<Shows/>}></Route>
            <Route path='/Eventos' exact element={<Eventos/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
