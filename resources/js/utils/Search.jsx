import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useVersioning } from "../utils/VersioningContext";

const Search = ({ isSearchOpen, setIsSearchOpen }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState({ topics: [], block_types: [], topic_blocks: [] });
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);
    const { selectedVersion } = useVersioning();

    useEffect(() => {
        if (!selectedVersion) return;

        if (isSearchOpen) {
            inputRef.current?.focus();
        }
    }, [isSearchOpen, selectedVersion]);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchResults({ topics: [], block_types: [], topic_blocks: [] });
            return;
        }

        const timer = setTimeout(async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/api/version/${selectedVersion}/search`, {
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
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-start z-20"
            onClick={() => setIsSearchOpen(false)}
        >
            <div
                className="relative w-full max-w-lg top-[20%] p-8 bg-gray-700 rounded-lg max-h-[80vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <input
                    ref={inputRef}
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
                                <div
                                    className="p-2 hover:bg-gray-600 cursor-pointer border-b border-gray-600 rounded-none"
                                    onClick={handleResultClick}
                                >
                                    {highlightText(`#${result.name}`)}
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
                                return typeof value === "string" && value.toLowerCase().includes(searchQuery.toLowerCase());
                            });

                            return matchedContent.length > 0 ? (
                                <Link key={result.id} to={`/${result.topic.slug}/blocks/${result.id}`} className="text-gray-300">
                                    <div
                                        className="p-2 hover:bg-gray-600 cursor-pointer border-b border-gray-600 rounded-none"
                                        onClick={handleResultClick}
                                    >
                                        {matchedContent.map(([key, value], index) => {
                                            const plainText = value.replace(/<\/?[^>]+(>|$)/g, "");
                                            return (
                                                <div key={index}>
                                                    {highlightText(plainText)}
                                                </div>
                                            );
                                        })}
                                        <div className="mt-2 text-xs flex justify-between">
                                            <span className="text-theme-light">#{result.topic.name}</span>
                                            {result.topic.versioning && result.topic.versioning.identifier && (
                                                <span className="text-gray-400">V {result.topic.versioning.identifier}</span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
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
    );
};

export default Search;