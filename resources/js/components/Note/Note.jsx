import React from "react";

const Note = ({ type, title, icon, text }) => {
  // Define type-based classes for alert styles
  const typeClasses = {
    info: "bg-blue-100 border-blue-400 text-blue-700",
    success: "bg-green-100 border-green-400 text-green-700",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
    danger: "bg-red-100 border-red-400 text-red-700",
  };

  const alertStyle = typeClasses[type] || "bg-gray-100 border-gray-400 text-gray-700";

  return (
    <div className={`border-l-4 p-4 rounded-md flex items-start space-x-3 ${alertStyle}`}>
      {icon && <i className={`${icon} text-lg mt-1`} />}
      <div>
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <div
          className="mt-1 text-sm"
          dangerouslySetInnerHTML={{ __html: text }} // Safely render HTML content
        />
      </div>
    </div>
  );
};

export default Note;