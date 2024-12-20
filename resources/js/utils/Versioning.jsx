// Versioning.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Versioning = ({ selectedVersion, setSelectedVersion }) => {
    const [versions, setVersions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch versions from API when the component is mounted
    useEffect(() => {
        const fetchVersions = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/api/versions"); // Replace with your API endpoint
                setVersions(response.data);
            } catch (err) {
                setError("Failed to fetch versions");
                console.error("Error fetching versions:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchVersions();
    }, []);

    const handleVersionChange = (e) => {
        setSelectedVersion(e.target.value);
    };

    return (
        <div className="relative">
            {loading ? (
                <div className="text-gray-400">Loading versions...</div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <select
                    value={selectedVersion}
                    onChange={handleVersionChange}
                    className="bg-gray-700 text-gray-400 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-theme appearance-none"
                >
                    <option value="">Select Version</option>
                    {versions.map((version) => (
                        <option key={version.id} value={version.id}>
                            {version.identifier}
                        </option>
                    ))}
                </select>
            )}
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i className="fa-solid fa-chevron-down text-gray-400"></i>
            </span>
        </div>
    );
};

export default Versioning;