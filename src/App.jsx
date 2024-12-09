import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Start from './Start/Start';

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
