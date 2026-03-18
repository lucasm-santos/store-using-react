import Main from 'Pages/Main/index.jsx';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginRegister from './Pages/LoginRegister/LoginRegister.jsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/register' element={<LoginRegister/>}/>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
