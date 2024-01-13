import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Template from './component/template/Template';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Template/>}></Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
