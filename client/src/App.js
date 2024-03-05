import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginComponents from './Componets/AuhtComponets/LoginComponets';
import LayoutComponets from './Componets/Layout/LayoutComponets';
import MyProfileComponets from './Componets/AboutInfo/MyProfileComponets';
import CreatepostComponets from './Componets/Creaetepost/CreatepostComponets';
import EmployeeSearchcomponets from './Componets/EmployeeSearch/EmployeeSearchcomponets';
import CompanyProjectscomponets from './Componets/CompanyProjectsComponets/CompanyProjectscomponets';
import OrganizationComponets from './Componets/OrganizationsInfo/OrganizationComponets';
import MyCompanyprojects from './Componets/MyprojectsComponets/MyCompanyprojects';
import UpcommigprojectComponets from './Componets/Upcommingprojects/UpcommigprojectComponets';
import CompanyManagementComponents from './Componets/Companymanagement/CompanymanagementComponets';
import HelpComponents from './Componets/Help/HelpComponets';
import AddEmployeedataComponets from './AdminComponets/AddEmployeedataComponets';
import FooterComponents from './Componets/Footer/Footercoponets';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/my-account" element={<LayoutComponets />} />
          <Route path="/login" element={<LoginComponents />} />
          <Route path="/my-profile" element={<MyProfileComponets/>} />
          <Route path="/my-projects" element={<MyCompanyprojects/>} />
          <Route path="/create-post" element={<CreatepostComponets/>} />
          <Route path="/employee-search" element={<EmployeeSearchcomponets/>} />
          <Route path="/company-project" element={<CompanyProjectscomponets/>} />
          <Route path="/company-project-upcommming" element={<UpcommigprojectComponets/>} />
          <Route path="/company-management" element={<CompanyManagementComponents/>} />
          <Route path="/orgaziation" element={<OrganizationComponets/>} />
          <Route path="/admin-addemployee" element={<AddEmployeedataComponets/>} />
          <Route path="/help" element={<HelpComponents/>} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<div>page not found 404</div>} />
        </Routes>
      </BrowserRouter>
      <FooterComponents/>
    </div>
  );
}

export default App;
