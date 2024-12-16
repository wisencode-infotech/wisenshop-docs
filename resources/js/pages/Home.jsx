import React, { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import { useParams  } from "react-router-dom";

const Home = () => {

  const { topicSlug } = useParams();

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
