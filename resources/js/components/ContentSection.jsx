import React from "react";

const ContentSection = () => {
    return (
        <main className="flex-1 p-6">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8">
                <section id="topic1" className="mb-1">
                    <h2 className="text-3xl font-bold text-gray-100 mb-4">Introduction</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Welcome to the WisenShop Documentation! Here, you’ll discover comprehensive technical details
                        and configuration guides to help you seamlessly integrate and optimize our script for your needs.
                        Whether you’re setting up or fine-tuning, this resource is designed to empower you with the knowledge to make the most of WisenShop’s powerful features.
                    </p>

                    <div className="bg-theme-dark text-gray-100 rounded-lg shadow-lg overflow-hidden">
                        <div className="flex justify-between items-center px-4 py-3 bg-white border-b border-theme-dark">
                            <span className="text-sm font-semibold text-gray-900">Clone the repository to your machine using the following command:</span>
                            <button 
                                className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-theme-accent">
                                Copy
                            </button>
                        </div>
                        <div className="p-4 bg-gray-700 text-sm text-white font-mono leading-relaxed text-left whitespace-pre-line">git clone https://github.com/wisencode-infotech/wisenshop.git
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
};

export default ContentSection;
