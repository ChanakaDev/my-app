import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser, faSignOutAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="text-white flex items-center justify-between p-3 border-b border-gray-200">
      <div className="text-slate-500 text-sm">
        <FontAwesomeIcon icon={faSearch} /> Type to Search...
      </div>
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
