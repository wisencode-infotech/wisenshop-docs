import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarMenu from "./SidebarMenu";
import { ScaleLoader } from "react-spinners"; 

const Sidebar = ({ topicSlug, currentVersion }) => {
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      if (!currentVersion) return; // If no version selected, don't fetch topics

      setIsLoading(true); // Reset loading state
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get(`/api/version/${currentVersion}/topics/all`);
        setMenus(response.data); // Store fetched menus
      } catch (error) {
        setError("Failed to load topics."); // Set error state
        console.error("Error fetching topics:", error);
      } finally {
        setIsLoading(false); // Reset loading state
      }
    };

    fetchTopics();
  }, [currentVersion]); // Re-fetch when the selected version changes

  if (isLoading) {
    return (
      <aside className="bg-gray-900 lg:w-1/5 w-full lg:h-screen p-4 shadow-lg border-r border-opacity-10 border-theme-light left-sidebar flex flex-col">
        <div className="flex flex-col space-y-6">
          <div className="text-left space-x-3 px-4">
            <h2 className="text-1xl font-semibold text-gray-200 tracking-wide">Topics</h2>
          </div>
          <div className="loader text-gray-400 text-center">
            <ScaleLoader
              color='#3d5f8a'
              loading
              height={20}
              margin={2}
              radius={13}
              speedMultiplier={2}
            />
          </div>
        </div>
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="bg-gray-900 lg:w-1/5 w-full lg:h-screen p-4 shadow-lg border-r border-opacity-10 border-theme-light left-sidebar flex flex-col">
        <div className="flex flex-col space-y-6">
          <div className="text-left space-x-3 px-4">
            <h2 className="text-1xl font-semibold text-gray-200 tracking-wide">Topics</h2>
          </div>
          <div className="text-red-500">{error}</div> {/* Display error message */}
        </div>
      </aside>
    );
  }

  return (
    <aside className="bg-gray-900 lg:w-1/5 w-full lg:h-screen p-4 shadow-lg border-r border-opacity-10 border-theme-light left-sidebar flex flex-col">
      <div className="flex flex-col space-y-6 flex-grow">
        <div className="text-left space-x-3 px-4">
          <h2 className="text-1xl font-semibold text-gray-200 tracking-wide">Topics</h2>
        </div>
        <SidebarMenu topicSlug={topicSlug} menus={menus} selectedVersion={currentVersion} />
      </div>

      {/* Contact Information Section */}
      <div className="pt-2 border-t border-gray-800 text-sm text-gray-400">
        <h1 className="text-gray-400 text-center mb-4">
          <span>Need Help?</span>
        </h1>
        <div className="flex justify-center items-center mt-4 text-gray-400">
          <span className="flex-1 text-center"><i className="fa fa-envelope"></i></span>
          <span className="flex-1 text-center"><i className="fa fa-phone"></i></span>
        </div>
        <div className="flex justify-center items-center text-gray-400">
          <span className="flex-1 text-center">info.wisencode@gmail.com</span>
          <span className="flex-1 text-center">+91 8238136154</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;