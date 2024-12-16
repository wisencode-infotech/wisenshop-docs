import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../components/Title/Title';
import Subtitle from '../components/Subtitle/Subtitle';
import Description from '../components/Description/Description';
import CodeBlock from '../components/CodeBlock/CodeBlock';
import List from '../components/List/List';
import Note from '../components/Note/Note';
import ScreenshotImage from './Screenshot/ScreenshotImage';
import ScreenshotGallery from '../components/Screenshot/ScreenshotGallery';
import { useNavigate } from 'react-router-dom';

const ContentSection = ({ topicSlug }) => {
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (topicSlug) {
      fetchTopicBlocks(topicSlug);
    }
  }, [topicSlug]);

  useEffect(() => {
    const handleScrollToBlock = () => {
      const pathname = window.location.pathname;
      const blockId = pathname.split("/").pop();
  
      if (blockId) {
        const element = document.getElementById(blockId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate(`/${topicSlug}`);
        }
      }
    };
  
    if (topic) {
      const timeoutId = setTimeout(() => {
        handleScrollToBlock();
      }, 500);
  
      return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
    }
  }, [topic]);

  const fetchTopicBlocks = async (slug) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/topics/${slug}`);
      setTopic(response.data);
    } catch (error) {
      console.error('Error fetching topic blocks:', error);
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
    <main className="flex-1 p-6 main-content">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 right-side-content">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">{topic.name}</h2>
        {topic.blocks.map((block) => {
          let parsedAttributes = {};
          try {
            parsedAttributes = JSON.parse(block.attributes) || {};
          } catch (error) {
            console.error('Failed to parse block.attributes:', error);
          }

        const paddingLeft = block.start_content_level === 1 
        ? '0%' 
        : block.start_content_level === 2 
        ? '2%' 
        : '5%';


          return (
            <div key={block.id} id={`${block.id}`} style={{ paddingLeft }} className="mb-6">
              {block.block_type.type === 'title' && (
                <Title text={parsedAttributes?.text} level="h2" />
              )}
              
              {block.block_type.type === 'subtitle' && (
                <Subtitle text={parsedAttributes?.text} />
              )}
              
              {block.block_type.type === 'description' && (
                <Description content={parsedAttributes?.text} />
              )}

              {block.block_type.type === 'code_block' && (
                <CodeBlock
                  title={parsedAttributes?.title}
                  description={parsedAttributes?.description}
                  buttonText={parsedAttributes?.copy_btn_text}
                  copyContent={parsedAttributes?.copy_content}
                />
              )}

              {block.block_type.type === 'note' && (
                  <Note
                    type={parsedAttributes?.type}
                    title={parsedAttributes?.title}
                    icon={parsedAttributes?.icon}
                    text={parsedAttributes?.text}
                  />
              )}
              
              {block.block_type.type === 'list' && (
                <List items={parsedAttributes?.list || []} />
              )}

              {block.block_type.type === 'screenshot' && (
                <ScreenshotImage
                title={parsedAttributes?.title}
                description={parsedAttributes?.description}
                imageUrl={parsedAttributes?.imageUrl} // Pass the image URL
              />
              )}

              {block.block_type.type === 'screenshot-gallery' && (
                <ScreenshotGallery images={parsedAttributes?.images || []} />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ContentSection;
