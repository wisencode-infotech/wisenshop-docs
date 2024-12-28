import React from 'react';

const Subtitle = ({ text, classNames = 'text-md font-semibold text-gray-900 dark:text-gray-200 mb-4' }) => {
  
  return (
    <span 
      className={`${classNames}`}
      dangerouslySetInnerHTML={{ __html: text }}>
    </span>
  );
};

export default Subtitle;
