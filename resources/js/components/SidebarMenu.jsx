import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SidebarMenu = ({topicSlug}) => {
    const [topics, setTopics] = useState([]);
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false); // Track if topics are already fetched

    useEffect(() => {
      const fetchTopics = async () => {
        try {
          const response = await axios.get("/api/topics");
          const topicsData = response.data;

          if (window.location.pathname === "/") {
            if (topicsData.length > 0) {
              navigate(`/${topicsData[0].slug}`);
            }
          } else {
            const isValidTopic = topicsData.some(
              (topic) => topic.slug === topicSlug
            );

            if (!isValidTopic) {
              window.location.href = "/";
            }
          }

          setTopics(topicsData);
          setIsLoaded(true);
        } catch (error) {
          console.error("Error fetching topics", error);
        }
      };

      if (!isLoaded) {
        fetchTopics();
      }
    }, [navigate, topicSlug, isLoaded]);

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
