import React, { useState } from "react";
import ImageModal from "./ImageModal"; // Import ImageModal

const ScreenshotImage = ({ title, description, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => {
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
  };

  const moveImage = (e) => {
    if (zoomLevel <= 1) return;
    const container = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - container.left;
    const mouseY = e.clientY - container.top;
    const newOffsetX = (mouseX - container.width / 2) / 5;
    const newOffsetY = (mouseY - container.height / 2) / 5;
    setOffset({ x: newOffsetX, y: newOffsetY });
  };

  return (
    <div className="mb-6">
      {imageUrl && (
        <div className="relative w-full max-w-md mx-auto">
          <img
            src={imageUrl}
            alt={title || "Screenshot"}
            className="rounded-lg shadow-md"
          />
          <button
            onClick={openModal}
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-lg p-4"
          >
            {title && (
              <span className="absolute top-2 left-2 text-sm font-semibold text-white bg-gray-900 bg-opacity-70 px-2 py-1 rounded">
                {title}
              </span>
            )}
            <i className="fas fa-eye text-2xl mb-2"></i>
            {description && (
              <span className="text-sm text-gray-200 text-center px-2">
                {description.length > 70 ? `${description.slice(0, 30)}...` : description}
              </span>
            )}
          </button>
        </div>
      )}

      {/* Use ImageModal Component */}
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={imageUrl}
        title={title}
        description={description}
        closeModal={closeModal}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        resetZoom={resetZoom}
        moveImage={moveImage}
        zoomLevel={zoomLevel}
        offset={offset}
        isSingleImage={true}
      />
    </div>
  );
};

export default ScreenshotImage;