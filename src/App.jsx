import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Start from './Start/Start';
import Home from './Home/Home';

function App() {
    
  return (
    <div style={{ touchAction: 'none', userSelect: 'none', overflow: 'hidden' }}>
      <Routes >
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </div>
  );
}

export default App;
