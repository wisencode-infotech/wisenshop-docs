import React from 'react';

const ScreenshotImage = ({ title, description, imageUrl }) => {
  return (
    <div className="mb-6">
      {title && <h3 className="text-2xl font-bold text-gray-100 mb-2">{title}</h3>}
      {description && <p className="text-gray-400 mb-4">{description}</p>}
      
      {imageUrl && (
        <div className="w-full max-w-md mx-auto">
          <img
            src={imageUrl}
            alt={title || 'Screenshot'}
            className="rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ScreenshotImage;
