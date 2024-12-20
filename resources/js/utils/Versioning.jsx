import React, { useEffect, useState } from "react";
import { useVersioning } from "../utils/VersioningContext"; // Import the context

const Versioning = () => {
  const { selectedVersion, setSelectedVersion } = useVersioning(); // Get version and setter from context
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch available versions when the component mounts
    const fetchVersions = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/versions"); // Replace with your API endpoint
        const data = await response.json();
        setVersions(data);
      } catch (err) {
        setError("Failed to load versions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVersions();
  }, []);

  const handleVersionChange = (e) => {
    const newVersion = e.target.value;
    setSelectedVersion(newVersion); // Update version in context
  };

  return (
    <div className="relative">
      {loading ? (
        <div className="text-gray-400">Loading versions...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <select 
            className="bg-gray-700 text-gray-400 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-theme appearance-none"
            value={selectedVersion} 
            onChange={handleVersionChange}>
            {versions.map((version) => (
                <option key={version.id} value={version.id}>
                    Version {version.identifier}
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