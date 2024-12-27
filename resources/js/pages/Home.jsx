  // Home.jsx
  import { React, useState } from "react";
  import Header from "../components/Header";
  import Sidebar from "../components/Sidebar";
  import ContentSection from "../components/ContentSection";
  import Footer from "../components/Footer";
  import { useParams } from "react-router-dom";

  const Home = () => {
    const { topicSlug } = useParams();
    
    // Manage selected version from Header component
    const [selectedVersion, setSelectedVersion] = useState("1");

    return (
      <div>
        <Header selectedVersion={selectedVersion} setSelectedVersion={setSelectedVersion} />
        <div className="flex flex-col lg:flex-row">
          <Sidebar topicSlug={topicSlug} selectedVersion={selectedVersion} />
          <ContentSection topicSlug={topicSlug} selectedVersion={selectedVersion} />
        </div>
        <Footer />
      </div>
    );
  };

  export default Home;