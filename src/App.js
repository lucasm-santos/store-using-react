import Main from 'Pages/Main/index.jsx';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginRegister from './Pages/LoginRegister/LoginRegister.jsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginRegister/>}/>
          <Route path='/home' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
