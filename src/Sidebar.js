import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-5">Admin Dashboard</h2>
      <ul>
        <li>
          <Link to="/students" className="block py-2 px-4 hover:bg-gray-700">Students</Link>
        </li>
        <li>
          <Link to="/internships" className="block py-2 px-4 hover:bg-gray-700">Internships</Link>
        </li>
        <li>
          <Link to="/companies" className="block py-2 px-4 hover:bg-gray-700">Companies</Link>
        </li>
        <li>
          <Link to="/reports" className="block py-2 px-4 hover:bg-gray-700">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
