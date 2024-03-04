import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const ImageSlider = () => {
  const images = [
    'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?size=626&ext=jpg',
    'https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?size=626&ext=jpg',
  ];

  return (
    <Carousel
      showThumbs={false} // Disable thumbnail navigation
      showArrows={true} // Show navigation arrows
      showStatus={false} // Hide the status indicator
      infiniteLoop={true} // Enable infinite loop
      autoPlay={true} // Enable auto-play
      interval={3000} // Set auto-play interval in milliseconds
      transitionTime={500} // Set transition time in milliseconds
      dynamicHeight={true} // Enable dynamic height for images
      emulateTouch={true} // Enable touch gestures on desktop
    >
      {images.map((image, index) => (
        <div key={index} className="custom-carousel-slide">
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
