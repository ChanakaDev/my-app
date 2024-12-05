import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faSignOutAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login"); // Redirect to login page
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Implement your search logic here (e.g., API call or filtering results)
  };

  return (
    <div className="text-white flex items-center justify-between p-3 border-b border-gray-200">
      <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-100 px-3 py-2 rounded">
        <FontAwesomeIcon icon={faSearch} className="text-slate-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Type to search..."
          className="ml-2 bg-transparent border-none outline-none text-slate-500 placeholder-slate-500"
        />
      </form>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 px-3 py-2 rounded flex items-center">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className="bg-gray-700 px-3 py-2 rounded flex items-center">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button
          onClick={handleLogoutClick}
          className="bg-red-500 px-3 py-2 rounded flex items-center"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
