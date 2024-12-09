import React, { useState, useEffect } from "react";
import axios from "axios";

const ContentSection = ({ activeHash, topicId }) => {
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topicId) {
      fetchTopicBlocks(topicId);
    }
  }, [activeHash]);

  const fetchTopicBlocks = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/topics/${id}`);
      setTopic(response.data);
    } catch (error) {
      console.error("Error fetching topic blocks:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-gray-400">Loading...</p>;
  }

  if (!topic) {
    return <p className="text-gray-400">Select a topic to see the content.</p>;
  }



  return (
    <main className="flex-1 p-6">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">{topic.name}</h2>
        {topic.blocks.map((block) => {
          let parsedAttributes = {};
          try {
            parsedAttributes = JSON.parse(block.attributes) || {};
          } catch (error) {
            console.error("Failed to parse block.attributes:", error);
          }
  
          return (
            <div key={block.id} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">{block.title}</h3>
              
                {block.block_type.title == 'description' && (
                    <p className="text-gray-400 leading-relaxed mb-4">
                    {parsedAttributes?.content}
                    </p>
                )}

                {block.block_type.title == 'copy_code' && (

                    <div className="bg-theme-dark text-gray-100 rounded-lg shadow-lg overflow-hidden">
                        <div className="flex justify-between items-center px-4 py-3 bg-white border-b border-theme-dark">
                            <span className="text-sm font-semibold text-gray-900"> {parsedAttributes?.title}</span>
                            <button className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-theme-accent">
                                { parsedAttributes?.copy_btn_text }
                            </button>
                        </div>
                        <div className="p-4 bg-gray-700 text-sm text-white font-mono leading-relaxed text-left whitespace-pre-line">
                            {parsedAttributes?.description}
                        </div>
                    </div>
                )}
            </div>
          );
        })}
      </div>
    </main>
  );
  
};

export default ContentSection;
