import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarMenu from "./SidebarMenu";
import { useVersioning } from "../utils/VersioningContext";

const Sidebar = ({ topicSlug }) => {
  const { selectedVersion } = useVersioning();
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      if (!selectedVersion) return;

      try {
        const response = await axios.get(`/api/version/${selectedVersion}/topics/all`);
        setMenus(response.data);  // Store the fetched topics
        setIsLoading(false);  // Set loading to false after the data is fetched
      } catch (error) {
        console.error("Error fetching topics:", error);
        setIsLoading(false);  // Set loading to false even in case of error
      }
    };

    fetchTopics();
  }, [selectedVersion]);  // Dependency array to fetch topics when `selectedVersion` changes

  if (isLoading) {
    return (
      <aside className="bg-gray-900 lg:w-1/5 w-full lg:h-screen p-4 shadow-lg border-r border-opacity-10 border-theme-light left-sidebar">
        <div className="flex flex-col space-y-6">
          <div className="text-left space-x-3 px-4">
            <h2 className="text-1xl font-semibold text-gray-200 tracking-wide">Topics</h2>
          </div>
          <div className="loader">Loading...</div>  {/* Placeholder loading UI */}
        </div>
      </aside>
    );
  }

  return (
    <aside className="bg-gray-900 lg:w-1/5 w-full lg:h-screen p-4 shadow-lg border-r border-opacity-10 border-theme-light left-sidebar">
      <div className="flex flex-col space-y-6">
        <div className="text-left space-x-3 px-4">
          <h2 className="text-1xl font-semibold text-gray-200 tracking-wide">Topics</h2>
        </div>
        <SidebarMenu topicSlug={topicSlug} selectedVersion={selectedVersion} menus={menus} />
      </div>
    </aside>
  );
};

export default Sidebar;