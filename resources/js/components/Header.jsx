import React, { useState } from "react";
import Versioning from "../utils/Versioning";
import Search from "../utils/Search";
import logoDark from "../../logos/logo-dark.png";
import ThemeModeSwitcher from "./ThemeMode/Switcher";

const Header = ({ availableVersions, currentVersion, setCurrentVersion }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-theme-lightBackground dark:bg-theme-darkBackground dark:text-theme-darkText text-theme-lightText shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left section: Logo */}
        <div className="flex-shrink-0 relative">
          <a href="/">
            <img
              src={logoDark}
              alt="Dark Logo"
              className="h-8"
            />
          </a>
        </div>

        {/* Middle section: Search */}
        <div
          className="flex-grow max-w-md mx-4 cursor-pointer"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <button
            className="w-full px-4 py-2 bg-theme-light dark:bg-theme-dark rounded-lg text-theme-lightText dark:text-theme-darkText focus:outline-none focus:ring-2 focus:ring-theme"
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

        <ThemeModeSwitcher /> {/* Use the ThemeSwitcher component here */}
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