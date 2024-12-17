import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const CodeBlock = ({ title, description, buttonText, copyContent }) => {

  const toast = useRef(null);

  const showSuccess = (message) => {
    toast.current.show({ label: 'Success', severity: 'success', summary: 'Success', detail: message, life: 3000 });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(copyContent);
    showSuccess('Copied to clipboard!');
  };

  return (
    <div className="bg-theme-dark text-gray-100 rounded-lg shadow-lg overflow-hidden">
      <Toast ref={toast} />
      <div className="flex justify-between items-center px-4 py-3 bg-white border-b border-theme-dark">
        <span className="text-sm font-semibold text-gray-900">{title}</span>
        
        <button onClick={handleCopy}
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
