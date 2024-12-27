import React from 'react';

const Description = ({ content, classNames = 'text-gray-400 leading-relaxed mb-4' }) => {
  // Process the content to convert newlines to <br />
  const formattedContent = content.replace(/\n/g, '<br />');

  return (
    <p
      className={`${classNames}`}
      dangerouslySetInnerHTML={{ __html: formattedContent }}
    ></p>
  );
};

export default Description;