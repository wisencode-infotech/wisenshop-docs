import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col lg:flex-row h-screen">
                <Sidebar />
                <ContentSection />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
