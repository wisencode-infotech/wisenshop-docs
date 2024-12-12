// src/components/Title/Title.jsx
import React from 'react';

const Title = ({ text, level = 'h5' }) => {
  const TitleTag = level; // This will dynamically change the tag (h1, h2, h3, etc.)
  
  return (
    <TitleTag className="text-xl font-semibold text-gray-200 mb-4">
      {text}
    </TitleTag>
  );
};

export default Title;
