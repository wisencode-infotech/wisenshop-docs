// src/components/CodeBlock/CodeBlock.jsx
import React from 'react';

const CodeBlock = ({ title, description, buttonText, copyContent }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(copyContent)
      .then(() => alert('Copied to clipboard!'))
      .catch((error) => console.error('Failed to copy text:', error));
  };

  return (
    <div className="bg-theme-dark text-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-between items-center px-4 py-3 bg-white border-b border-theme-dark">
        <span className="text-sm font-semibold text-gray-900">{title}</span>
        <button
          onClick={handleCopy}
          className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-theme-accent"
        >
          {buttonText}
        </button>
      </div>
      <div className="p-4 bg-gray-700 text-sm text-white font-mono leading-relaxed text-left whitespace-pre-line">
        {description}
      </div>
    </div>
  );
};

export default CodeBlock;
