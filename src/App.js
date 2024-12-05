import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import DashboardPage from './components/DashboardPage';
import CompaniesPage from './components/CompaniesPage';
import ReportsPage from './components/ReportsPage';
import InternsPage from './components/InternsPage';
import NonInternsPage from './components/NonInternsPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Navbar handleLogout={handleLogout} />
                  <main className="flex-1 overflow-y-auto">
                    <Routes>
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/interns" element={<InternsPage />} />
                      <Route path="/non_interns" element={<NonInternsPage />} />
                      <Route path="/companies" element={<CompaniesPage />} />
                      <Route path="/reports" element={<ReportsPage />} />
                    </Routes>
                  </main>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
