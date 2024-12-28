import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = ({ topicSlug, menus, selectedVersion }) => {
  // Handle click events for tracking or additional logic
  const handleMenuClick = (slug) => {
    // Add any additional logic needed when a menu is clicked
  };

  return (
    <nav className="space-y-1">
      {menus.map((topic) => {
        const isActive = topic.slug === topicSlug;
        return (
          <Link
            key={topic.id}
            to={`/${topic.slug}`}
            onClick={() => handleMenuClick(topic.slug)} // Handle click event
            className={`flex items-center space-x-3 py-3 px-4 rounded-lg relative 
              ${
                isActive
                  ? "bg-theme-dark text-lightText dark:bg-theme-light dark:text-gray-500"
                  : "text-gray-400 dark:text-gray-300"
              } 
              group sidebar-menu-item`}
          >
            {true && (
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