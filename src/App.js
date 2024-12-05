import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import DashboardPage from './components/DashboardPage';
import CompaniesPage from './components/CompaniesPage';
import ReportsPage from './components/ReportsPage';
import InternsPage from './components/InternsPage';
import NonInternsPage from './components/NonInternsPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/interns" element={<InternsPage />} />
              <Route path="/non_interns" element={<NonInternsPage/>} />
              <Route path="/companies" element={<CompaniesPage />} />
              <Route path="/reports" element={<ReportsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
