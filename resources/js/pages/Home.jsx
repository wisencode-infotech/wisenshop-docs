import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  const [activeHash, setActiveHash] = useState("");
  const [topicId, setTopicId] = useState(null);
  const [hashToIdMap, setHashToIdMap] = useState({});

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get("/api/topics");
        const topics = response.data;

        // Create a hash-to-ID map dynamically
        const map = topics.reduce((acc, topic) => {
          acc[topic.link] = topic.id;
          return acc;
        }, {});

        setHashToIdMap(map);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash; // Get the current hash from URL
      const id = hashToIdMap[hash]; // Look up the ID based on the hash

      if (id) {
        setActiveHash(hash);
        setTopicId(id);
      } else if (Object.keys(hashToIdMap).length > 0) {
        const defaultHash = Object.keys(hashToIdMap)[0]; // Use the first topic as default
        window.location.hash = defaultHash; // Update the URL hash
        setActiveHash(defaultHash);
        setTopicId(hashToIdMap[defaultHash]);
      }
    };

    // Set the initial hash when data is ready
    if (Object.keys(hashToIdMap).length > 0) {
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [hashToIdMap]);

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row h-screen">
        <Sidebar activeHash={activeHash} />
        <ContentSection activeHash={activeHash} topicId={topicId} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
