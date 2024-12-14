import React, { useState } from "react";

const ImageModal = ({
  isOpen,
  imageUrl,
  title,
  description,
  closeModal,
  zoomIn,
  zoomOut,
  resetZoom,
  moveImage,
  showNextImage,
  showPreviousImage,
  zoomLevel,
  offset,
  isSingleImage
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={closeModal}
    >
      <div
        className="relative w-[70vw] p-0 max-h-[80vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
      >
        {/* Header with Title and Description */}
        <div className="mb-0 bg-theme-dark bg-opacity-75 p-2 rounded-t-lg">
          <h3 className="text-xl text-white font-bold">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>

        {/* Image */}
        <div
          className="relative w-full h-full overflow-hidden"
          onMouseMove={moveImage}
          style={{
            cursor: zoomLevel > 1 ? "move" : "default",
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="rounded-b-lg"
            style={{
              transform: `scale(${zoomLevel}) translate(${offset.x}px, ${offset.y}px)`,
              transition: "transform 0.3s ease",
            }}
          />
        </div>

        {/* Navigation Controls */}
        {!isSingleImage && (
          <>
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2"
              onClick={showPreviousImage}
            >
              <i className="fas fa-chevron-left text-2xl"></i>
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2"
              onClick={showNextImage}
            >
              <i className="fas fa-chevron-right text-2xl"></i>
            </button>
          </>
        )}

        {/* Close Button */}
        <button
          className="absolute top-1 right-2 text-white text-white hover:text-gray-300 p-1 px-3"
          onClick={closeModal}
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Zoom Controls */}
        <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-gray-800 bg-opacity-80 p-2 rounded-lg"
        >
            <button
                onClick={zoomIn}
                className="text-white hover:text-green-400 transition"
                title="Zoom In"
            >
                <i className="fas fa-search-plus text-lg"></i>
            </button>
            <button
                onClick={zoomOut}
                className="text-white hover:text-red-400 transition"
                title="Zoom Out"
            >
                <i className="fas fa-search-minus text-lg"></i>
            </button>
            <button
                onClick={resetZoom}
                className="text-white hover:text-blue-400 transition"
                title="Reset Zoom"
            >
                <i className="fas fa-sync text-lg"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;