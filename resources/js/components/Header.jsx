import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-3"></div>
            <div className="hidden md:flex flex-grow max-w-md mx-4">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-theme"
                />
            </div>

            <div>
                <select className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-theme">
                    <option>v1.0</option>
                </select>
            </div>
        </div>
    </header>
    );
};

export default Header;
