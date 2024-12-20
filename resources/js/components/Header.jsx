// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../utils/Search"; // Import the Search component from utils folder

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-center px-6 py-4">
                <div className="flex items-center space-x-3"></div>
                <div className="flex-grow max-w-md mx-4 cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <button className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-400 focus:outline-none focus:ring-1 focus:ring-theme">
                        <i className="fa-solid fa-search"></i> Search
                    </button>
                </div>
            </div>

            {/* Conditionally render the Search component */}
            {isSearchOpen && <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}
        </header>
    );
};

export default Header;