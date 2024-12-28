import React, { useState } from "react";
import Versioning from "../utils/Versioning";
import Search from "../utils/Search";
import logoDark from "../../logos/logo-dark.png";

const Header = ({ availableVersions, currentVersion, setCurrentVersion }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left section: Logo */}
        <div className="flex-shrink-0 relative">
          <a href="/">
            <img src={logoDark} alt="Dark Logo" className="h-8" />
          </a>
        </div>

        {/* Middle section: Search */}
        <div
          className="flex-grow max-w-md mx-4 cursor-pointer"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <button
            className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-400 focus:outline-none focus:ring-2 focus:ring-theme"
            aria-label="Toggle Search"
          >
            <i className="fa-solid fa-search"></i> Search
          </button>
        </div>

        {/* Right section: Versioning Dropdown */}
        <div className="flex-shrink-0">
          <Versioning
            availableVersions={availableVersions}
            currentVersion={currentVersion}
            onChangeVersion={setCurrentVersion}
          />
        </div>
      </div>

      {/* Search Component */}
      {isSearchOpen && (
        <Search 
          currentVersion={currentVersion}
          isSearchOpen={isSearchOpen} 
          setIsSearchOpen={setIsSearchOpen} />
      )}
    </header>
  );
};

export default Header;