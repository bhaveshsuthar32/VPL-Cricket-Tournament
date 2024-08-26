import React, { useState, useEffect } from 'react';

const backgroundImages = [
  "https://wallpapers.com/images/hd/cricket-ground-background-g14rvtnuqhdd23pl.jpg",
  "https://assets.bcci.tv/bcci/articles/1723560308_ALPHA7RV21270.jpg",
  "https://assets.bcci.tv/bcci/articles/1719691993_Trophy%20presentation%202.jpg",
  // Add more image URLs as needed
];

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out sm:h-[600px] h-[470px]"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    />
    </>
  );
};

export default BackgroundSlider;