import React, { createContext, useState, useEffect, useContext } from "react";

const VersioningContext = createContext();

export const useVersioning = () => useContext(VersioningContext);

export const VersioningProvider = ({ children }) => {
  const [selectedVersion, setSelectedVersion] = useState("");
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch versions once when the context is initialized
  useEffect(() => {
    const fetchVersions = async () => {
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

  // Check if there's a stored version in localStorage
  useEffect(() => {
    const storedVersion = localStorage.getItem("selectedVersion");
    if (storedVersion) {
      setSelectedVersion(storedVersion);
    } else {
      setSelectedVersion(1);
    }
  }, []);

  // Store selected version in localStorage
  useEffect(() => {
    if (selectedVersion) {
      localStorage.setItem("selectedVersion", selectedVersion);
    }
  }, [selectedVersion]);

  return (
    <VersioningContext.Provider value={{ selectedVersion, setSelectedVersion, versions, loading, error }}>
      {children}
    </VersioningContext.Provider>
  );
};