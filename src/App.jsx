import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Start from './Start/Start';
import Home from './Home/Home';
import Lock from  './Lock/Lock';
import Home1 from './Home1/Home1';

function App() {
    
  return (
    <div style={{ touchAction: 'none', userSelect: 'none', overflow: 'hidden' }}>
      <Routes >
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/lock' element={<Lock/>}/>
        <Route path='/home1' element={<Home1/>}/>
      </Routes>
      </div>
  );
}

export default App;
