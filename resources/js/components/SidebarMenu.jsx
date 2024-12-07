import React, { useState, useEffect } from "react";
import axios from "axios";

const SidebarMenu = () => {
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
            {topics.map((topic) => (
                <a
                    key={topic.id}
                    href={topic.link}
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg bg-theme-dark text-white group"
                >
                    <i className="fa-solid fa-arrow-right"></i>
                    <span>{topic.name}</span>
                </a>
            ))}
        </nav>
    );
};

export default SidebarMenu;
