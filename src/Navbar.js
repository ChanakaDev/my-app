import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex items-center justify-between p-4">
      <div className="text-lg font-bold">Admin Dashboard</div>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-700 px-3 py-2 rounded">Notifications</button>
        <button className="bg-gray-700 px-3 py-2 rounded">Profile</button>
        <button className="bg-red-500 px-3 py-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
