import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginComponents from './Componets/AuhtComponets/LoginComponets';
import LayoutComponets from './Componets/Layout/LayoutComponets';
import MyProfileComponets from './Componets/AboutInfo/MyProfileComponets';
import CreatepostComponets from './Componets/Creaetepost/CreatepostComponets';
import EmployeeSearchcomponets from './Componets/EmployeeSearch/EmployeeSearchcomponets';
import CompanyProjectscomponets from './Componets/CompanyProjectsComponets/CompanyProjectscomponets';
import OrganizationComponets from './Componets/OrganizationsInfo/OrganizationComponets';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/my-account" element={<LayoutComponets />} />
          <Route path="/login" element={<LoginComponents />} />
          <Route path="/my-profile" element={<MyProfileComponets/>} />
          <Route path="/create-post" element={<CreatepostComponets/>} />
          <Route path="/employee-search" element={<EmployeeSearchcomponets/>} />
          <Route path="/company-project" element={<CompanyProjectscomponets/>} />
          <Route path="/orgaziation" element={<OrganizationComponets/>} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<div>page not found 404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
