import React, { useState } from "react";
import ImageModal from "./ImageModal"; // Import the ImageModal component

const ScreenshotGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="screenshot-gallery">
      {/* Gallery Thumbnails */}
      <div className="flex gap-4 flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-32 h-40 cursor-pointer"
            onClick={() => openModal(index)}
          >
            {/* Thumbnail Image */}
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            {/* Centered Eye Icon and Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 rounded-lg">
              <i className="fas fa-eye text-white text-2xl mb-2"></i>
              <p className="text-white text-sm text-center">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for the image */}
      {isModalOpen && (
        <ImageModal
          image={images[currentIndex]}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ScreenshotGallery;