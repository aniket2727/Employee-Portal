import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginComponents from './Componets/AuhtComponets/LoginComponets';
import LayoutComponets from './Componets/Layout/LayoutComponets';
import MyProfileComponets from './Componets/AboutInfo/MyProfileComponets';
import CreatepostComponets from './Componets/Creaetepost/CreatepostComponets';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/my-account" element={<LayoutComponets />} />
          <Route path="/login" element={<LoginComponents />} />
          <Route path="/my-profile" element={<MyProfileComponets/>} />
          <Route path="/create-post" element={<CreatepostComponets/>} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<div>page not found 404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
