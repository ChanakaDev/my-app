import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserGraduate, faUsers, faBuilding, faChartBar } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-5">
      <h2 className="text-lg mb-5">Admin Panel</h2>
      <ul>
        <li>
          <Link to="/dashboard" className="flex items-center py-2 px-4 hover:bg-gray-700">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/interns" className="flex items-center py-2 px-4 hover:bg-gray-700">
            <FontAwesomeIcon icon={faUserGraduate} className="mr-3" /> Interns
          </Link>
        </li>
        <li>
          <Link to="/non_interns" className="flex items-center py-2 px-4 hover:bg-gray-700">
            <FontAwesomeIcon icon={faUsers} className="mr-3" /> Non Interns
          </Link>
        </li>
        <li>
          <Link to="/companies" className="flex items-center py-2 px-4 hover:bg-gray-700">
            <FontAwesomeIcon icon={faBuilding} className="mr-3" /> Companies
          </Link>
        </li>
        <li>
          <Link to="/reports" className="flex items-center py-2 px-4 hover:bg-gray-700">
            <FontAwesomeIcon icon={faChartBar} className="mr-3" /> Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
