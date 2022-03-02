import React from 'react';  
import { BrowserRouter as Router, Route} from 'react-router-dom'

import { Home } from './pages/Home';
import { Eventos } from './pages/Eventos';
import { Shows } from './pages/Shows';


function App() {
  return (
    <Home/>
  );
}

export default App;
