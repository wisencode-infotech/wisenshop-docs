import React from "react";

const Versioning = ({ availableVersions, currentVersion, onChangeVersion }) => {
  return (
    <select
      className="bg-gray-700 text-gray-100 p-2 rounded"
      value={currentVersion || ""}
      onChange={(e) => onChangeVersion(e.target.value)}
    >
      {availableVersions.map((version) => (
        <option key={version.id} value={version.id}>
          Version {version.identifier}
        </option>
      ))}
    </select>
  );
};

export default Versioning;