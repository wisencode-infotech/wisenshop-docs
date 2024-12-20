// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../utils/Search";
import Versioning from "../utils/Versioning";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedVersion, setSelectedVersion] = useState("");

    return (
        <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Image on the left */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        
                    </Link>
                </div>

                {/* Search button in the middle */}
                <div className="flex-grow max-w-md mx-4 cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <button className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-400 focus:outline-none focus:ring-1 focus:ring-theme">
                        <i className="fa-solid fa-search"></i> Search
                    </button>
                </div>

                {/* Versioning Dropdown on the right */}
                <div className="flex-shrink-0">
                    <Versioning selectedVersion={selectedVersion} setSelectedVersion={setSelectedVersion} />
                </div>
            </div>

            {/* Conditionally render the Search component */}
            {isSearchOpen && <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}
        </header>
    );
};

export default Header;