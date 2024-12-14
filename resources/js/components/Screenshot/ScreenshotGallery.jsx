import React, { useState } from "react";
import ImageModal from "./ImageModal"; // Import the ImageModal component

const ScreenshotGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true); // Open the modal when clicking on a thumbnail
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="screenshot-gallery">
      {/* Gallery Thumbnails */}
      <div className="flex gap-4 flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-40 h-40 cursor-pointer"
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

      {/* Image Modal Component */}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          imageUrl={images[currentIndex].imageUrl}
          title={images[currentIndex].title}
          description={images[currentIndex].description}
          closeModal={closeModal}
          showNextImage={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          showPreviousImage={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
          isSingleImage={images.length === 1}
        />
      )}
    </div>
  );
};

export default ScreenshotGallery;