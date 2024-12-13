import React, { useState } from 'react';

const ScreenshotImage = ({ title, description, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 }); // Reset offset
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3)); // Max 3x zoom
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5)); // Min 0.5x zoom
  const resetZoom = () => {
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 }); // Reset position
  };

  const moveImage = (e) => {
    if (zoomLevel <= 1) return; // Disable movement if zoom level is 1 or less
    const container = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - container.left;
    const mouseY = e.clientY - container.top;

    // Calculate offset based on mouse position relative to center
    const newOffsetX = (mouseX - container.width / 2) / 5;
    const newOffsetY = (mouseY - container.height / 2) / 5;

    setOffset({ x: newOffsetX, y: newOffsetY });
  };

  return (
    <div className="mb-6">
      {title && <h3 className="text-2xl font-bold text-gray-100 mb-2">{title}</h3>}
      {description && <p className="text-gray-400 mb-4">{description}</p>}

      {imageUrl && (
        <div className="relative w-full max-w-md mx-auto">
          {/* Image */}
          <img
            src={imageUrl}
            alt={title || 'Screenshot'}
            className="rounded-lg shadow-md"
          />

          {/* Button Overlay */}
          <button
            onClick={openModal}
            className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-lg"
          >
            <i className="fas fa-eye text-2xl"></i>
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-[90vw] p-4"
            onClick={(e) => e.stopPropagation()} // Prevent background click
          >
            <div
              className="relative bg-gray-900 rounded-lg p-4 overflow-hidden"
              onMouseMove={moveImage}
            >
              {/* Zoomed Image */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  cursor: zoomLevel > 1 ? 'move' : 'default',
                }}
              >
                <img
                  src={imageUrl}
                  alt={title || 'Screenshot'}
                  className="rounded-lg"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${offset.x}px, ${offset.y}px)`,
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-1 px-3"
                onClick={closeModal}
              >
                <i className="fas fa-times"></i>
              </button>

              {/* Compact Zoom Controls at Bottom-Center */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-gray-800 bg-opacity-80 p-2 rounded-lg mb-2">
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
        </div>
      )}
    </div>
  );
};

export default ScreenshotImage;