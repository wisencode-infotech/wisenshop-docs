import React, { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import { useParams, useNavigate  } from "react-router-dom";
import axios from "axios";

const Home = () => {

  const { topicSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get("/api/topics");
        const topics = response.data;

        if (window.location.pathname === "/") {
          if (topics.length > 0) {
            navigate(`/${topics[0].slug}`);
          }
        } else {
          const isValidTopic = topics.some(topic => topic.slug === topicSlug);

          if (!isValidTopic) {
            navigate("/"); // Redirect to the homepage if invalid
          }
        }
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, [navigate]); 

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row">
        <Sidebar topicSlug={topicSlug} />
        <ContentSection topicSlug={topicSlug} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
