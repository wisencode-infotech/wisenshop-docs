import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useVersioningHook from "../hooks/useVersioningHook";

const fetchVersions = async () => {
  try {
    const response = await axios.get("/api/versions");
    return response.data; // Returning the versions data
  } catch (error) {
    console.error("Error fetching versions:", error);
    return []; // Return an empty array in case of error
  }
};

const Home = () => {
  const { topicSlug } = useParams();
  const { availableVersions, currentVersion, setCurrentVersion } = useVersioningHook(null, fetchVersions); // Passing fetchVersions

  return (
    <div>
      <Header
        availableVersions={availableVersions}
        currentVersion={currentVersion}
        setCurrentVersion={setCurrentVersion}
      />
      <div className="flex flex-col lg:flex-row">
        <Sidebar topicSlug={topicSlug} currentVersion={currentVersion} />
        <ContentSection topicSlug={topicSlug} currentVersion={currentVersion} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;