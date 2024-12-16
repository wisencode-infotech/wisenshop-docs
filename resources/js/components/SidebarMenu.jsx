import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SidebarMenu = ({topicSlug}) => {
    const [topics, setMenuItems] = useState([]);

    useEffect(() => {
      const fetchTopics = async () => {
        try {
          const response = await axios.get("/api/topics"); // API endpoint
          setMenuItems(response.data);
        } catch (error) {
          console.error("Error fetching topics", error);
        }
      };
  
      fetchTopics();

    }, []);

    return (
        <nav className="space-y-1">
            {topics.map((topic) => {
            const isActive = `${topic.slug}` === topicSlug; // Check if the current hash matches the topic
            return (
              <Link
                key={topic.id}
                to={`/${topic.slug}`} // Use Link instead of href
                className={`flex items-center space-x-3 py-3 px-4 rounded-lg ${
                    isActive ? "bg-theme-dark text-white" : "text-gray-400"
                } group`}
            >
                <i className="fa-solid fa-arrow-right"></i>
                <span>{topic.name}</span>
            </Link>
            );
          })}
        </nav>
    );
};

export default SidebarMenu;
