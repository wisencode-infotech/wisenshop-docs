import React, { useState } from "react";
import { useVersioning } from "../utils/VersioningContext"; // Import the hook
import Versioning from "../utils/Versioning";

const Header = () => {
  const { selectedVersion, setSelectedVersion } = useVersioning();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left section: Image/Logo */}
        <div className="flex-shrink-0">
          <a href="/">Logo</a>
        </div>

        {/* Middle section: Search */}
        <div
          className="flex-grow max-w-md mx-4 cursor-pointer"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <button className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-400 focus:outline-none focus:ring-1 focus:ring-theme">
            <i className="fa-solid fa-search"></i> Search
          </button>
        </div>

        {/* Right section: Versioning Dropdown */}
        <div className="flex-shrink-0">
          {/* Versioning dropdown component */}
          <Versioning />
        </div>
      </div>

      {isSearchOpen && <Search />}
    </header>
  );
};

export default Header;