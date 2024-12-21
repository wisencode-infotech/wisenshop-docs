import React from "react";
import { useVersioning } from "../utils/VersioningContext"; // Import the context

const Versioning = () => {
  const { selectedVersion, setSelectedVersion, versions, loading, error } = useVersioning(); // Get version and versions from context

  const handleVersionChange = (e) => {
    const newVersion = e.target.value;
    setSelectedVersion(newVersion); // Update version in context
  };

  if (loading) {
    return <div className="text-gray-400">Loading versions...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="relative">
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
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <i className="fa-solid fa-chevron-down text-gray-400"></i>
      </span>
    </div>
  );
};

export default Versioning;