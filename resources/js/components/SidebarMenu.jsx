import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ScaleLoader } from "react-spinners"; 

const SidebarMenu = ({ topicSlug, selectedVersion }) => {
  const [topics, setTopics] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch topics whenever selectedVersion or topicSlug changes
  useEffect(() => {
    const fetchTopics = async () => {
      if (!selectedVersion) return;

      try {
        const response = await axios.get(`/api/version/${selectedVersion}/topics`);
        const topicsData = response.data;

        // Redirect logic to ensure valid topicSlug
        if (window.location.pathname === "/") {
          if (topicsData.length > 0) {
            window.location.href = topicsData[0].slug; // Redirect to first topic if on the homepage
          }
        } else {
          const isValidTopic = topicsData.some(
            (topic) => topic.slug === topicSlug
          );

          if (!isValidTopic) {
            window.location.href = "/"; // Redirect to homepage if invalid topicSlug
          }
        }

        setTopics(topicsData);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching topics", error);
      }
    };

    if (selectedVersion) {
      fetchTopics();
    }
  }, [selectedVersion, topicSlug]); // Add selectedVersion and topicSlug to the dependency array

  if (!isLoaded) {
    return (
      <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <ScaleLoader
            color="#3d5f8a"
            loading
            margin={4}
            radius={26}
            speedMultiplier={2}
          />
        </div>
      </div>
    );
  }

  return (
    <nav className="space-y-1">
      {topics.map((topic) => {
        const isActive = topic.slug === topicSlug;
        return (
          <Link
            key={topic.id}
            to={`/${topic.slug}`}
            className={`flex items-center space-x-3 py-3 px-4 rounded-lg relative ${
              isActive ? "bg-theme-dark text-white" : "text-gray-400"
            } group`}
          >
            {topic.isNew && (
              <span className="absolute top-50 right-2 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
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