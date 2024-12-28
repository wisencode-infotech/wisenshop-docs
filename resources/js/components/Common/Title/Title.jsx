import React from 'react';

const Title = ({ text, level = 'h5', classNames = 'text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4' }) => {
  const TitleTag = level; // Dynamically change the tag (h1, h2, h3, etc.)

  return (
    <TitleTag className={`${classNames}`}>
      {text}
    </TitleTag>
  );
};

export default Title;