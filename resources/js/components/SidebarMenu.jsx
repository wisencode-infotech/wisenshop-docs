import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = ({ topicSlug, menus, selectedVersion, toggleSidebar }) => {
  // Handle click events for tracking or additional logic
  const handleMenuClick = (slug) => {
    // Close the sidebar on mobile/ipad
    toggleSidebar(); // Call the toggleSidebar function to hide the sidebar
  };

  return (
    <nav className="space-y-1">
      {menus.map((topic) => {
        const isActive = topic.slug === topicSlug;
        return (
          <Link
            key={topic.id}
            to={`/${topic.slug}`}
            onClick={() => handleMenuClick(topic.slug)} // Close the sidebar when clicked
            className={`flex items-center space-x-3 py-3 px-4 rounded-lg relative 
              ${
                isActive
                  ? "bg-theme-dark text-lightText dark:bg-theme-light dark:text-gray-500"
                  : "text-gray-400 dark:text-gray-300"
              } 
              group sidebar-menu-item`}
          >
            {topic.isNew && (
              <span className="absolute top-50 right-2 bg-blue-500 text-white dark:text-darkText text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                New
              </span>
            )}
            <i className="fa-solid fa-arrow-right"></i>
            <span>{topic.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default SidebarMenu;