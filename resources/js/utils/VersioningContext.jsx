import React, { createContext, useState, useEffect, useContext } from "react";

const VersioningContext = createContext();

export const useVersioning = () => useContext(VersioningContext);

export const VersioningProvider = ({ children }) => {
  const [selectedVersion, setSelectedVersion] = useState("");

  useEffect(() => {
    const storedVersion = localStorage.getItem("selectedVersion");
    if (storedVersion) {
      setSelectedVersion(storedVersion);
    } else {
      setSelectedVersion(1);
    }
  }, []);

  useEffect(() => {
    if (selectedVersion) {
      localStorage.setItem("selectedVersion", selectedVersion);
    }
  }, [selectedVersion]);

  return (
    <VersioningContext.Provider value={{ selectedVersion, setSelectedVersion }}>
      {children}
    </VersioningContext.Provider>
  );
};