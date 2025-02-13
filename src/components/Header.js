// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-red-100 border-b border-gray-300 p-4 flex justify-between items-center">
      {/* Left - Banner Text */}
      <div>
        <h1 className="text-lg font-semibold text-red-700">
          Vehicle Maintenance Inbox
        </h1>
        <p className="text-sm text-gray-600">
          Review and resolve vehicle mechanical issues with AI assistance
        </p>
      </div>

      {/* Right - Titan Industries Logo */}
      <div className="text-gray-700 font-semibold text-lg">🚛 TITAN INDUSTRIES</div>
    </header>
  );
};

export default Header;