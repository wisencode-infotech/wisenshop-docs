import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState({ topics: [], block_types: [], topic_blocks: [] });
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null); // Create a ref for the input field

    useEffect(() => {
        if (isSearchOpen) {
            inputRef.current?.focus(); // Focus the input field when the popup is opened
        }
    }, [isSearchOpen]);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchResults({ topics: [], block_types: [], topic_blocks: [] });
            return;
        }

        const timer = setTimeout(async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("/api/search", {
                    params: { query: searchQuery },
                });
                setSearchResults(response.data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setIsLoading(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleResultClick = () => {
        setIsSearchOpen(false);
        setSearchQuery(""); // Reset search query when closing
    };

    const highlightText = (text) => {
        if (!searchQuery.trim()) return text;
        const regex = new RegExp(`(${searchQuery.trim()})`, "gi");
        return text.split(regex).map((part, index) =>
            part.toLowerCase() === searchQuery.trim().toLowerCase() ? (
                <span key={index} className="font-bold text-white">{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-center px-6 py-4">
                <div className="flex items-center space-x-3"></div>
                <div className="flex-grow max-w-md mx-4 cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <button className="w-full px-4 py-2 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-theme">
                        Search
                    </button>
                </div>
            </div>

            {isSearchOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-start z-20" 
                    onClick={() => setIsSearchOpen(false)}
                >
                    <div
                        className="relative w-full max-w-lg top-[20%] p-8 bg-gray-700 rounded-lg max-h-[80vh] overflow-auto" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <input
                            ref={inputRef} // Attach the ref to the input field
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full px-4 py-2 bg-gray-600 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-theme"
                        />
                        
                        {isLoading && <p className="text-gray-300">Loading...</p>}
                        
                        {searchResults.topics.length > 0 && (
                            <div className="mt-2">
                                {searchResults.topics.map((result) => (
                                    <Link key={result.id} to={`/${result.slug}`} className="text-gray-300">
                                        <div className="p-2 hover:bg-gray-600 cursor-pointer border-b border-gray-600 rounded-none" // Thin border and no rounded corners
                                            onClick={handleResultClick}
                                        >
                                            {highlightText(`#${result.name}`)} {/* Display highlighted topic name */}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {searchResults.topic_blocks.length > 0 && (
                            <div className="mt-2">
                                {searchResults.topic_blocks.map((result) => {
                                    const attributes = JSON.parse(result.attributes);
                                    const matchedContent = Object.entries(attributes).filter(([key, value]) => {
                                        return typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase());
                                    });

                                    return matchedContent.length > 0 ? (
                                        <div
                                            key={result.id}
                                            className="p-2 hover:bg-gray-600 cursor-pointer border-b border-gray-600 rounded-none"
                                            onClick={handleResultClick}
                                        >
                                            <Link to={`/${result.topic.slug}/blocks/${result.id}`} className="text-gray-300">
                                               {matchedContent.map(([key, value], index) => {
                                                    // Remove HTML tags using regex
                                                    const plainText = value.replace(/<\/?[^>]+(>|$)/g, "");
                                                    return (
                                                        <div key={index}>
                                                            {highlightText(plainText)} {/* Highlight the matched plain text */}
                                                        </div>
                                                    );
                                                })}
                                            </Link>
                                            <div className="mt-2 text-xs text-theme-light">#{result.topic.name}</div>
                                        </div>
                                    ) : null;
                                })}
                            </div>
                        )}

                        {searchQuery.trim() !== "" && !isLoading && searchResults.topics.length === 0 && searchResults.topic_blocks.length === 0 && (
                            <p className="text-gray-400 mt-2">No results found.</p>
                        )}

                        <div className="text-right text-xs text-gray-400 mt-4">Search in <strong>WisenDocs</strong></div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;