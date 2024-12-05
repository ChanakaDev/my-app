import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<h1 className="text-xl font-bold">Dashboard</h1>} />
              <Route path="/students" element={<h1 className="text-xl font-bold">Students Page</h1>} />
              <Route path="/internships" element={<h1 className="text-xl font-bold">Internships Page</h1>} />
              <Route path="/companies" element={<h1 className="text-xl font-bold">Companies Page</h1>} />
              <Route path="/reports" element={<h1 className="text-xl font-bold">Reports Page</h1>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
