// src/components/Description/Description.jsx
import React from 'react';

const Description = ({ content }) => {
  return (
    <p
      className="text-gray-400 leading-relaxed mb-4"
      dangerouslySetInnerHTML={{ __html: content }}
    ></p>
  );
};

export default Description;
