import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";

const Home = () => {
  const [activeHash, setActiveHash] = useState("");
  const [topicId, setTopicId] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash; // Get the current hash from URL
      if (hash && hash.startsWith("#topic")) {
        const id = parseInt(hash.replace("#topic", ""), 10);
        setActiveHash(hash);
        setTopicId(isNaN(id) ? null : id);
      } else {
        const defaultHash = "#topic1";
        window.location.hash = defaultHash; // Update the URL hash
        setActiveHash(defaultHash);
        setTopicId(1);
      }
    };

    // Set the initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

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
