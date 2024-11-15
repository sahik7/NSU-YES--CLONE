import React, { useState } from 'react';

function CommonEvents({ event }) {
  const { bannerImage, title, description, videoUrl, eventImage } = event;

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % eventImage.length);
  const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + eventImage.length) % eventImage.length);

  return (
    <div>
      {/* Full-width Banner */}
      <div className="relative w-full h-64 lg:h-96 fot">
        <img src={bannerImage} alt="Event Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-8 w-11/12 mx-auto font-poppins">
        {/* Video */}
        {videoUrl && (
          <div className="my-8">
            <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="my-8 p-4 bg-white shadow rounded">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-lg text-gray-800">{description}</p>
        </div>

        {/* Image Gallery */}
        {eventImage && eventImage.length > 0 && (
          <div className={`grid ${eventImage.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
            {eventImage.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Event Image ${index + 1}`}
                className="cursor-pointer object-cover w-full h-48 rounded hover:opacity-80"
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeModal}>&times;</button>
            <div className="relative w-full max-w-3xl">
              <img src={eventImage[currentImageIndex]} alt="Modal Event" className="w-full h-auto object-contain" />
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl" onClick={prevImage}>&larr;</button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl" onClick={nextImage}>&rarr;</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommonEvents;
